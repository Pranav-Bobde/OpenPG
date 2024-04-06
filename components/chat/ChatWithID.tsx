"use client";

import { createMessage, getMessages } from "@/actions/actions";
import Chat from "@/components/chat/Chat";
import ChatInput from "@/components/chat/ChatInput";
import { useChat } from "ai/react";
import { useEffect } from "react";
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
      <div className="flex flex-col h-full md:mx-auto md:max-w-[850px]">
        <ScrollArea className="h-[76vh] rounded-md pr-4 mb-7">
          <Chat messages={messages} />
        </ScrollArea>
        <ChatInput chatId={chatId} append={append} className="mb-8 mt-auto" />
      </div>
    </>
  );
}
