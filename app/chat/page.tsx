"use client";

import { cn } from "@/lib/utils";
import Chat from "@/components/chat/Chat";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export default function ChatPage() {
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
    <div className="flex flex-col justify-end h-full w-full md:mx-auto md:max-w-[850px]">
      {/* <ChatInput className="mb-8" /> */}

      <Chat messages={[]} className="" />
      <form className={cn("flex items-center gap-2 relative")}>
        <Textarea
          onKeyDown={handleKeyDown}
          name="message"
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
    </div>
  );
}
