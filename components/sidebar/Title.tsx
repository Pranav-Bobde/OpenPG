import { SquarePen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Title() {
  return (
    <div className="flex items-center gap-2">
      <>
        <Avatar>
          <AvatarImage src="favicon.png" />
          <AvatarFallback>OP</AvatarFallback>
        </Avatar>
        <h4 className="text-md font-semibold tracking-tight">OpenPG</h4>
      </>
      <Button variant={"ghost"} className="ml-auto">
        <Link href={"/"}>
          <SquarePen size={20} />
        </Link>
      </Button>
    </div>
  );
}
