import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { chatsTable } from "./chats";
import { relations, sql } from "drizzle-orm";

export const messagesTable = sqliteTable("messages", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID().toString()),
  chatId: text("chat_id")
    .notNull()
    .references(() => chatsTable.id),
  role: text("role", { enum: ["assistant", "user"] }).notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
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
