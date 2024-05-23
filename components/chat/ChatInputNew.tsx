"use client";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";

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

export default function ChatInputNew({ className }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);
  const maxRows = 20;

  useEffect(() => {
    const lines = message.split("\n").length;
    const newRows = Math.min(Math.max(lines, 1), maxRows);
    setRows(newRows);
  }, [message]);

  async function handleSubmit() {}

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  }

  return (
    <form className={cn("flex items-center gap-2 relative", className)}>
      <Textarea
        name="message"
        onKeyDown={handleKeyDown}
        rows={rows}
        value={message}
        className="text-xl resize-none min-h-min pr-16  border border-slate-600 focus:border-none"
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant={"ghost"}
        className="py-4 absolute right-1 bottom-1"
        onClick={handleSubmit}
      >
        <SendHorizonal />
      </Button>
    </form>
  );
}
