"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "../sidebar-status-provider";

export function SidebarButton() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      {setIsOpen ? (
        <Button
          variant={"ghost"}
          className="m-auto p-0 text-neutral-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      ) : (
        ""
      )}
    </>
  );
}
