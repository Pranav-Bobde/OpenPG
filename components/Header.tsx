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
        className={cn(
          "flex items-center justify-between px-4 pr-6 pb-3 pt-4",
          className
        )}
      >
        <SelectModel />
        <ToggleTheme />
      </div>
    </>
  );
}
