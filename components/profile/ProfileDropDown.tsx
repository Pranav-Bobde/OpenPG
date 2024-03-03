"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { LogOut, Settings } from "lucide-react";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

type ProfileDropDownProps = {
  user: KindeUser;
};

export default function ProfileDropDown({ user }: ProfileDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <Button variant="ghost" className="gap-4 w-full justify-start py-6">
          <Avatar className="p-2 rounded-full justify-center items-center shadow-inner bg-slate-100 dark:bg-gray-800">
            {user?.given_name?.[0]}
            {user?.family_name?.[0]}
          </Avatar>
          {user?.given_name} {user?.family_name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
