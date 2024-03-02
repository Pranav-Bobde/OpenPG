"use client";
import Link from "next/link";
import Title from "@/components/ui/Title";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

export default function Sidebar() {
  return (
    <div className="h-screen w-1/5 border-solid border-black border-2">
      <div className="my-3 ml-2 mr-5">
        <Title />
      </div>
      <Separator className="my-5" />
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
