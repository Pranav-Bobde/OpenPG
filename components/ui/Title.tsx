import { SquarePen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Title() {
  return (
    <div className="flex items-center">
      <>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="text-xl font-semibold tracking-tight ml-2">OpenPG</h4>
      </>
      <SquarePen className="ml-auto" />
    </div>
  );
}
