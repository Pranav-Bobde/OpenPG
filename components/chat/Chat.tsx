import { cn } from "@/lib/utils"

type ChatProps = {
  className?: string;
}

export default function Chat({className}: ChatProps) {
  return (
    <div className={cn("", className)}>
        Chat
    </div>
  )
}