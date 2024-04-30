"use client";

import { cn } from "@/lib/utils";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar } from "@/components/ui/avatar";
import { Message } from "ai/react";
import { useEffect, useRef } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ChatProps = {
  className?: string;
  messages: Message[];
};

export default function Chat({ className, messages }: ChatProps) {
  const endReef = useRef<HTMLDivElement>(null);
  const { user, isLoading } = useKindeBrowserClient();

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
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={dark}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </Markdown>
          </span>
        </div>
      ))}
      <div ref={endReef} className="invisible"></div>
    </div>
  );
}
