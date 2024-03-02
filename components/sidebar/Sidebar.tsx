import Link from "next/link";
import Title from "@/components/sidebar/Title";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("h-screen", className)}>
      <div className="my-4 ml-2 mr-5">
        <Title />
      </div>
      <Separator className="my-8 invisible" />
      <Link
        href="/chat/1"
        legacyBehavior
        passHref
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
          "justify-start"
        )}
      >
        <Button variant="ghost" className="w-full justify-start">
          Chat
        </Button>
      </Link>
    </div>
  );
}
