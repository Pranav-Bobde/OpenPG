"use client";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { createChat, createMessage } from "@/actions/actions";

import type { Message, CreateMessage } from "ai/react";
import type { ChatRequestOptions } from "ai";

type ChatInputProps = {
  className?: string;
  chatId?: string;
  append?: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => Promise<string | null | undefined>;
};

export default function ChatInput({
  className,
  chatId,
  append,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);
  const maxRows = 20;

  useEffect(() => {
    const lines = message.split("\n").length;
    const newRows = Math.min(Math.max(lines, 1), maxRows);
    setRows(newRows);
  }, [message]);

  async function handleSubmit() {
    if (!message.trim().length) return;

    if (!chatId) {
      const id = await createChat(message);
      await createMessage(id, message, "user", true);
      setMessage("");
      return;
    }

    const msg = await createMessage(chatId, message, "user", false);
    append &&
      append({
        role: msg.role,
        content: msg.content,
      });
    setMessage("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  }

  return (
    <div className={cn("flex items-center gap-2 relative", className)}>
      <Textarea
        onKeyDown={handleKeyDown}
        rows={rows}
        value={message}
        className="text-xl resize-none min-h-min pr-16 bg-muted border border-slate-600 focus:border-none"
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant={"ghost"} className="py-4 absolute right-1 bottom-1" onClick={handleSubmit}>
        <SendHorizonal />
      </Button>
    </div>
  );
}
