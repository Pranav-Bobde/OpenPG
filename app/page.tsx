import ChatInput from "@/components/chat/ChatInput";
import Chat from "@/components/chat/Chat";

export default function ChatHome() {
  return (
    <div className="flex flex-col justify-end h-full mx-44">
      <Chat className="" messages={[]} />
      <ChatInput className="mb-8" />
    </div>
  );
}
