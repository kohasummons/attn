import type { ComponentProps } from "react";

import { CaretDown } from "@/components/ui/caret-down";
import { cn } from "@/lib/utils";

const variantClasses = {
  dark: "bg-[#ff4100] text-[#fdfdfd] hover:bg-white hover:text-black",
  light: "text-white border border-white hover:bg-white hover:text-black",
  ghost: "bg-transparent text-foreground hover:bg-foreground/5",
} as const;

type Variant = keyof typeof variantClasses;

type ArrowButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  showArrow?: boolean;
};

export function ArrowButton({
  variant = "dark",
  showArrow = true,
  className,
  type = "button",
  children,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-3 px-7 py-4 text-[16px] sm:text-[18px] font-medium leading-none whitespace-nowrap transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <CaretDown className="-rotate-90" width="12" height="8" />
      ) : null}
    </button>
  );
}
