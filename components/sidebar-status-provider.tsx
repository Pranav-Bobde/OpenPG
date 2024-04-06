"use client";

import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | null;
}>({
  isOpen: true,
  setIsOpen: null,
});

export function SidebarProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
