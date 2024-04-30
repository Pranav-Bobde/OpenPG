import Link from "next/link";
import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import { Button, buttonVariants } from "../ui/button";
import Title from "@/components/sidebar/Title";
import ProfileSection from "../profile/ProfileSection";
import { getChats } from "@/actions/actions";
import { Suspense } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserChatsLoader } from "./UserChatsLoader";

type SidebarProps = {
  className?: string;
};

async function UserChats() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log("User in Sidebar: ", user);
  const chats = user ? await getChats(user.id) : [];
  console.log("User Chats in Sidebar: ", chats);

  return (
    <>
      {chats.map((chat) => (
        <Link
          key={chat.id}
          href={`/chat/${chat.id}`}
          passHref
          legacyBehavior
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "dark: dark:text-white dark:hover: dark:hover:text-white",
            "justify-start"
          )}
        >
          <Button variant="ghost" className="w-full justify-start">
            {chat.name}
          </Button>
        </Link>
      ))}
    </>
  );
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("h-screen", className)}>
      <div className="flex flex-col h-full relative border-r-[1px] border-neutral-300 dark:border-neutral-700">
        <div>
          <div className="my-4 ml-2">
            <Title />
          </div>
          <Separator className="my-8 invisible" />

          <Suspense fallback={<UserChatsLoader />}>
            <UserChats />
          </Suspense>
        </div>

        <div className="mt-auto mb-4">
          <Suspense fallback={<>Loading...</>}>
            <ProfileSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
