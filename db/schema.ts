import { pgTable, text } from "drizzle-orm/pg-core";

export const account = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});



