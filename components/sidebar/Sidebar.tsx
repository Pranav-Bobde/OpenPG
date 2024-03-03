import Link from "next/link";
import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import { Button, buttonVariants } from "../ui/button";
import Title from "@/components/sidebar/Title";
import ProfileSection from "../profile/ProfileSection";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("h-screen", className)}>
      <div className="flex flex-col h-full">
        <div>
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

        <div className="mt-auto mb-4">
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}
