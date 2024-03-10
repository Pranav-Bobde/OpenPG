"use client";

import { cn } from "@/lib/utils";

import { useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { createChat, createMessage } from "@/actions/actions";

type ChatInputProps = {
  className?: string;
  chatId?: string;
};

export default function ChatInput({ className, chatId }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);
  const maxRows = 20;

  useEffect(() => {
    const lines = message.split("\n").length;
    const newRows = Math.min(Math.max(lines, 1), maxRows);
    setRows(newRows);
  }, [message]);

  function handleSubmit() {
    if (message.trim().length > 0) {
      console.log("submit chatId: ", chatId);
      if (chatId) {
        console.log("submit chatId: ", chatId);
        createMessage(chatId, message);
        setMessage("");
        return;
      }

      console.log("calling createChat")
      createChat(message);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  }

  return (
    <div className={cn("flex gap-2", className)}>
      <Textarea
        onKeyDown={handleKeyDown}
        rows={rows}
        value={message}
        className="text-xl resize-none min-h-min"
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant={"ghost"} className="py-4" onClick={handleSubmit}>
        <SendHorizonal />
      </Button>
    </div>
  );
}
