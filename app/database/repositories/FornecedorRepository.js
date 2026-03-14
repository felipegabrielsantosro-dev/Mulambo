import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { fornecedor } from '../schema.js';

export default class FornecedorRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);

        try {
            const result = await db.insert(fornecedor).values({
                     name: data.name,
                     cnpj: data.cnpj,
                     email: data.email,
                    telefone: data.telefone
            }).returning();

            return result[0];
        } finally {
            client.release();
        }
    }
}