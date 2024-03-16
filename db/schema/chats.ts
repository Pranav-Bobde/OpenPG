import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { messagesTable } from "./messages";

export const chatsTable = sqliteTable("chats", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID().toString()),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const chatsRelations = relations(chatsTable, ({ many }) => ({
  messages: many(messagesTable),
}));

type ChatSelect = typeof chatsTable.$inferSelect;
type ChatInsert = typeof chatsTable.$inferInsert;

export type { ChatSelect, ChatInsert };
