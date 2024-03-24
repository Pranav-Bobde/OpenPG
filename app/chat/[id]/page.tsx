import { getMessages } from "@/actions/actions";
import ChatWithID from "@/components/chat/ChatWithID";

async function ChatWithIDWrapper({ chatId }: { chatId: string }) {
  const msgs = await getMessages(chatId);
  return <ChatWithID chatId={chatId} msgs={msgs} />;
}

export default function ChatIDPage({ params }: { params: { id: string } }) {
  const chatId = params.id;
  return (
    <>
      <ChatWithIDWrapper chatId={chatId} />
    </>
  );
}
