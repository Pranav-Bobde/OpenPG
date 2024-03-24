"use client";

import { cn } from "@/lib/utils";

import { Avatar } from "@/components/ui/avatar";
import { Message } from "ai/react";
import { useEffect, useRef } from "react";

type ChatProps = {
  className?: string;
  messages: Message[];
};

export default function Chat({ className, messages }: ChatProps) {
  const endReef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endReef?.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={cn("", className)}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn("flex gap-4 mb-8 whitespace-pre-wrap", message.role)}
        >
          <Avatar className="justify-center">
            {(message.role === "assistant" && "AI") || "You"}
          </Avatar>
          <span className="flex-grow">{message.content}</span>
        </div>
      ))}

      <div ref={endReef} className="invisible"></div>
    </div>
  );
}
