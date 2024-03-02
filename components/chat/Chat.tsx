import { cn } from "@/lib/utils";

import { Avatar } from "@/components/ui/avatar";

type ChatProps = {
  className?: string;
  messages: {
    content: string;
    type: "ai" | "user";
  }[];
};

export default function Chat({ className, messages }: ChatProps) {
  const messagess = [
    {
      content: "Hi, how are you?",
      type: "ai",
    },
    {
      content: "I'm doing well, thank you! How about you?",
      type: "user",
    },
    {
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eius, quos modi praesentium earum aperiam enim quod obcaecati vero vitae sint voluptatum beatae dolores suscipit quibusdam deserunt velit facere mollitia.
      Rerum, natus mollitia? Ducimus voluptatem officiis suscipit laboriosam rerum temporibus, vel debitis, explicabo dolorem necessitatibus quo quos ad quaerat deleniti libero animi! Quo laudantium accusamus fugit, totam natus cumque ratione?
      Nostrum non cumque maiores magni fuga vel, eveniet odit illo totam nobis ullam ea voluptates tempore, sapiente, repudiandae similique quibusdam? Dolorem possimus aut eius odio nulla nesciunt officiis quae eum.
      Doloremque, aperiam saepe. Omnis quod autem animi? Id reiciendis voluptatem veritatis possimus ipsa neque! Quae voluptate enim natus vero voluptatibus illo saepe consequuntur, odit doloribus aut libero sed, maiores fuga!
      Impedit sed nulla quas itaque nostrum vitae consectetur. Accusantium iure tempora accusamus in maiores modi, libero ab vel nulla quisquam labore minus error quas nobis, omnis obcaecati exercitationem, unde ratione.`,
      type: "ai",
    },
  ];

  return (
    <div className={cn("", className)}>
      {messagess.map((message, index) => (
        <div key={index} className={cn("flex gap-4 mb-8", message.type)}>
          <Avatar className="justify-center">
            {(message.type === "ai" && "AI") || "You"}
          </Avatar>
          <span className="flex-grow">{message.content}</span>
        </div>
      ))}
    </div>
  );
}
