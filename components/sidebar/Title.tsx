import { SquarePen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function Title() {
  return (
    <div className="flex items-center">
      <>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>OP</AvatarFallback>
        </Avatar>
        <h4 className="text-md font-semibold tracking-tight ml-2">OpenPG</h4>
      </>
      <Button variant={"ghost"} className="ml-auto">
        <SquarePen size={20} />
      </Button>
    </div>
  );
}
