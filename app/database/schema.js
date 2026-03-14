import { pgTable, varchar, numeric, serial } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    price: numeric("price", { precision: 18, scale: 4 }).notNull(),
});
export const usuario = pgTable("usuario", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    sobrename: varchar("sobrename", { length: 255 }).notNull(),
});
export const cliente = pgTable("cliente", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    datanascimento: varchar("datanascimento", { length: 255 }).notNull(),
});
export const fornecedor = pgTable("fornecedor", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    cnpj: varchar("cnpj", { length: 18 }).notNull(),
    email: varchar("email", { length: 255 }),
    telefone: varchar("telefone", { length: 20 }),
});