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
}