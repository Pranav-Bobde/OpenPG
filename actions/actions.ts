"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { chatsTable } from "@/db/schema/chats";
import { RedirectType, redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { messagesTable } from "@/db/schema/messages";

export async function getChats(userId: string) {
  console.log("get chats for user: ", userId);

  const chats = await db
    .select()
    .from(chatsTable)
    .where(eq(chatsTable.userId, userId));

  return chats;
}

export async function createChat(content: string) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  console.log("CREATE CHAT");
  console.log("CONTENT: ", content);

  if (!user) {
    throw new Error("user not found");
  }

  const [chat] = await db
    .insert(chatsTable)
    .values({
      userId: user.id,
      name: content.substring(0, 20),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .returning({ id: chatsTable.id });

  return chat.id;
}

export async function getMessages(chatId: string) {
  console.log("Get messages for chat: ", chatId);

  const messages = await db
    .select({
      id: messagesTable.id,
      role: messagesTable.role,
      content: messagesTable.content,
    })
    .from(messagesTable)
    .where(eq(messagesTable.chatId, chatId));

  console.log("GET MESSAGES: ", messages);

  return messages;
}

export async function createMessage(
  chatId: string,
  content: string,
  role: "user" | "assistant",
  newChat: boolean = false
) {
  console.log("CREATE MESSAGE");
  console.log("CHATID: ", chatId);
  console.log("CONTENT: ", content);

  const [msg] = await db
    .insert(messagesTable)
    .values({
      chatId: chatId,
      content: content,
      role,
      updatedAt: new Date().toISOString(),
    })
    .returning();

  console.log("MESSAGE CREATED: ", msg);

  if (newChat) {
    redirect(`/chat/${chatId}`, RedirectType.replace);
  }

  return msg;
}
