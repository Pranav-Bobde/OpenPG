"use client";

import { cn } from "@/lib/utils";

import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";

type ChatInputProps = {
  className?: string;
};

export default function ChatInput({ className }: ChatInputProps) {
  const [content, setContent] = useState("");
  const [rows, setRows] = useState(1);
  const maxRows = 20;

  useEffect(() => {
    const lines = content.split("\n").length;
    const newRows = Math.min(Math.max(lines, 1), maxRows);
    setRows(newRows);
  }, [content]);

  return (
    <div className={cn("", className)}>
      <Textarea
        rows={rows}
        value={content}
        className="text-xl resize-none min-h-min"
        placeholder="Type your message here..."
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
