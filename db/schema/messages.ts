import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { chatsTable } from "./chats";
import { relations } from "drizzle-orm";

export const messagesTable = sqliteTable("messages", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  chatId: text("chat_id")
    .notNull()
    .references(() => chatsTable.id),
  role: text("role", { enum: ["ai", "user"] }).notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").notNull(),
});

export const messagesRelation = relations(messagesTable, ({ one }) => ({
  chat: one(chatsTable, {
    fields: [messagesTable.chatId],
    references: [chatsTable.id],
  }),
}));

type MessageSelect = typeof messagesTable.$inferSelect;
type MessageInsert = typeof messagesTable.$inferInsert;

export type { MessageSelect, MessageInsert };
