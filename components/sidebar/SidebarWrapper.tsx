"use client";

import { useContext } from "react";
import { SidebarContext } from "../sidebar-status-provider";
import { cn } from "@/lib/utils";

export function SideBarWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isOpen } = useContext(SidebarContext);
  return <div className={cn({ hidden: !isOpen })}>{children}</div>;
}
