import Chat from "@/components/chat/Chat";
import ChatInput from "@/components/chat/ChatInput";
import { Suspense } from "react";

export default function ChatWithID({ params }: { params: { id: string } }) {
  console.log("ChatID: ", params.id);

  return (
    <>
      <div className="flex flex-col justify-end h-full mx-44">
        <Suspense fallback={<div>Loading...</div>}>
          <Chat chatId={params.id} />
        </Suspense>
        <ChatInput className="mb-8" chatId={params.id} />
      </div>
    </>
  );
}
