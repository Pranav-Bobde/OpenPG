import { cn } from "@/lib/utils";
import { ToggleTheme } from "./toggle-theme";
import { SelectModel } from "./SelectModel";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <>
      <div
        className={cn("flex items-center justify-between px-4 pb-3", className)}
      >
        <SelectModel />
        <ToggleTheme />
      </div>
    </>
  );
}
