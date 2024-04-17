import ChatInput from "@/components/chat/ChatInput";

export default function ChatPage() {
  return (
    <div className="flex flex-col justify-end h-full w-full md:mx-auto md:max-w-[850px]">
      <ChatInput className="mb-8" />
    </div>
  );
}
