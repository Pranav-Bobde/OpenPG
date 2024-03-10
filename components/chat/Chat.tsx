import { cn } from "@/lib/utils";

import { Avatar } from "@/components/ui/avatar";
import { getMessages } from "@/actions/actions";

type ChatProps = {
  className?: string;
  chatId: string;
};

export default async function Chat({ className, chatId }: ChatProps) {
  const messages = await getMessages(chatId);

  return (
    <div className={cn("", className)}>
      {messages.map((message, index) => (
        <div key={index} className={cn("flex gap-4 mb-8", message.role)}>
          <Avatar className="justify-center">
            {(message.role === "ai" && "AI") || "You"}
          </Avatar>
          <span className="flex-grow">{message.content}</span>
        </div>
      ))}
    </div>
  );
}
