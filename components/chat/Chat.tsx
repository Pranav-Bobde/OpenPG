"use client";

import { cn } from "@/lib/utils";

import { Avatar } from "@/components/ui/avatar";
import { Message } from "ai/react";
import { useEffect, useRef } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

type ChatProps = {
  className?: string;
  messages: Message[];
};

export default function Chat({ className, messages }: ChatProps) {
  const endReef = useRef<HTMLDivElement>(null);
  const { user, isLoading } = useKindeBrowserClient();

  // const messages={[
  //   {
  //     id: "1",
  //     role: "user",
  //     content: "Hi!",
  //   },
  //   {
  //     id: "1",
  //     role: "assistant",
  //     content: "Hi!",
  //   },
  // ]}

  useEffect(() => {
    endReef?.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={cn("", className)}>
      {messages.map((message, index) => (
        <div key={index} className={cn("flex gap-4 whitespace-pre-wrap mt-4")}>
          <Avatar className="justify-center">
            {(message.role === "assistant" && "AI") ||
              (!isLoading && user && user.given_name && user.family_name
                ? user.given_name[0].toUpperCase() +
                  user.family_name[0].toUpperCase()
                : "You")}
          </Avatar>
          <span className="flex-grow prose dark:prose-invert">
            {message.content}
          </span>
        </div>
      ))}
      <div ref={endReef} className="invisible"></div>
    </div>
  );
}
