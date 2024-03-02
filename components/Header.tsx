import { cn } from "@/lib/utils";
import { ToggleTheme } from "./toggle-theme";
import { SelectModel } from "./SelectModel";

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Header({ className, children }: HeaderProps) {
  return (
    <>
      <div
        className={cn("flex items-center justify-between px-4 pb-3", className)}
      >
        <SelectModel />
        <ToggleTheme />
      </div>
      <div className="px-4">{children}</div>
    </>
  );
}
