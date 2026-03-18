import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { empresa } from '../schema.js';

export default class EmpresaRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);

        try {
            const result = await db.insert(empresa).values({
                razaoSocial: data.razaoSocial,
                nomeFantasia: data.nomeFantasia,
                cnpj: data.cnpj,
                telefone: data.telefone
            }).returning();

            return result[0];
        } finally {
            client.release();
        }
    }
}