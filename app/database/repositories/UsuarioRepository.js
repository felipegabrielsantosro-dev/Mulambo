import { drizzle } from 'drizzle-orm/node-postgres';
import Connection from '../Connection.js';
import { usuario } from '../schema.js';

export default class UsuarioRepository {
    static async insert(data) {
        const client = await Connection.connect();
        const db = drizzle(client);
        try {
            const result = await db.insert(usuario).values({
                name: data.name,
                sobrename: data.sobrename
            }).returning();
            return result[0];
        } finally {
            client.release();
        }
    }
}