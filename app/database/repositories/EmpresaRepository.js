import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { empresa } from '../schema.js';
import { ilike, or, sql, asc } from 'drizzle-orm';

export default class EmpresaRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);
        try {
            const result = await db.insert(empresa).values({
                razao_social: data.razao_social,
                cnpj: data.cnpj,
                telefone: data.telefone
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
                        sql`${empresa.id}::text ILIKE ${terms}`,
                        ilike(empresa.razao_social, terms),
                        ilike(empresa.cnpj, terms),
                        ilike(empresa.telefone, terms),
                        
                    )
                    : undefined;

            const result = await db
                .select()
                .from(empresa)
                .where(whereClause)
                .orderBy(asc(empresa.razao_social))
                .offset(data?.offset)
                .limit(data?.limit);
cd
            return {
                data: result
            };
        } catch (error) {
            console.error('[EmpresaRepository] Erro na busca:', error.message);
            return {
                recordsTotal: 0,
                recordsFiltered: 0,
                data: [],
            };
        }
    }

}