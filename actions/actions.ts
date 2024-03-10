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

export async function createChat(message: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("creating chat for user w msg: ", user?.id, message);

  if (!user) {
    throw new Error("user not found");
  }

  const [chat] = await db
    .insert(chatsTable)
    .values({
      userId: user.id,
      name: message.substring(0, 20),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .returning({ id: chatsTable.id });

  const [msg] = await db
    .insert(messagesTable)
    .values({
      chatId: chat.id,
      content: message,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      role: "user",
    })
    .returning();

  console.log("MESSAGE CREATED: ", msg);

  redirect(`/chat/${chat.id}`, RedirectType.replace);
}

export async function getMessages(chatId: string) {
  console.log("Get messages for chat: ", chatId);

  const messages = await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.chatId, chatId));

  console.log("GET MESSAGES: ", messages);

  return messages;
}

export async function createMessage(chatId: string, message: string) {
  console.log("creating message for chat w msg: ", chatId, message);

  const [msg] = await db
    .insert(messagesTable)
    .values({
      chatId,
      content: message,
      updatedAt: new Date().toISOString(),
      role: "user",
    })
    .returning();

  console.log("MESSAGE CREATED: ", msg);

  revalidatePath("/chat/" + chatId);
}
