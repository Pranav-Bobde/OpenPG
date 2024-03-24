"use client";

import { createMessage, getMessages } from "@/actions/actions";
import Chat from "@/components/chat/Chat";
import ChatInput from "@/components/chat/ChatInput";
import { useChat } from "ai/react";
import { Suspense, useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";

type Message = Awaited<ReturnType<typeof getMessages>>[0];

type ChatWithIDProps = {
  chatId: string;
  msgs: Message[];
};

export default function ChatWithID({ chatId, msgs }: ChatWithIDProps) {
  const { messages, append, reload } = useChat({
    id: chatId,
    initialMessages: msgs,
    async onFinish(message) {
      await createMessage(chatId, message.content, "assistant", false);
    },
  });

  useEffect(() => {
    async function callReload() {
      await reload();
    }
    if (messages.length && messages[messages.length - 1].role != "assistant")
      callReload();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-end h-full mx-44">
        <ScrollArea className="h-[600px] rounded-md pr-4">
          <Chat messages={messages} />
        </ScrollArea>
        <ChatInput chatId={chatId} append={append} className="mb-8" />
      </div>
    </>
  );
}
