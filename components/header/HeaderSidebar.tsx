"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetPrimitive,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getChats } from "@/actions/actions";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { UserChatsLoader } from "../sidebar/UserChatsLoader";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Chat = Awaited<ReturnType<typeof getChats>>[number];

function UserChats() {
  const { user, isLoading } = useKindeBrowserClient();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    async function fetchChats(user: KindeUser) {
      const chats = await getChats(user.id);
      setChats(chats);
    }
    if (!isLoading && user) {
      fetchChats(user);
    }
  }, [user]);

  return (
    <div className="">
      {isLoading ? (
        <UserChatsLoader />
      ) : (
        chats.map((chat) => (
          <SheetPrimitive.Close asChild key={chat.id}>
            <Link
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
          </SheetPrimitive.Close>
        ))
      )}
    </div>
  );
}

export function HeaderSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px] sm:w-[500px]">
          <div className="flex items-center mb-20">
            <Avatar>
              <AvatarImage src="favicon.png" />
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>
            <h4 className="text-md font-semibold tracking-tight ml-2">
              OpenPG
            </h4>
          </div>
          <UserChats />
        </SheetContent>
      </Sheet>
    </>
  );
}
