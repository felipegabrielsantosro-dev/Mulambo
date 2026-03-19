import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { cliente } from '../schema.js';

export default class ClienteRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);
        try {
            const result = await db.insert(cliente).values({
                name: data.name,
                datanascimento: data.datanascimento
            }).returning();
            return result[0];
        } finally {
            client.release();
        }
    }

     static async search(data) {
            //Captura o termo de pesquisa sem o %%
            const rawSearch = String(data?.term ?? '').trim();
            //Captura o termo da pesquisa já aplicando o %%
            const terms = `%${data?.term}%`;
            try {
                //Abre a conexão com banco de dados
                const client = await Connection.connect();
                const db = drizzle(client);
                const whereClause =
                    rawSearch !== ''
                        ? or(
                            sql`${cliente.id}::text ILIKE ${terms}`,
                            ilike(cliente.name, terms),
                            sql`${cliente.datanascimento}::text ILIKE ${terms}`
                        )
                        : undefined;
    
                const result = await db
                    .select()
                    .from(cliente)
                    .where(whereClause)
                    .orderBy(asc(cliente.name))
                    .offset(data?.offset)
                    .limit(data?.limit);
    
                return {
                    data: result
                };
            } catch (error) {
                console.error('[ClienteRepository] Erro na busca:', error.message);
                return {
                    recordsTotal: 0,
                    recordsFiltered: 0,
                    data: [],
                };
            }
        }
    }