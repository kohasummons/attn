import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  display: "text-[64px] sm:text-[83px] leading-[1] tracking-[-0.04em]",
  xl: "text-[44px] sm:text-[56px] leading-[1.05] tracking-[-0.04em]",
  lg: "text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.03em]",
  md: "text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.02em]",
} as const;

type Size = keyof typeof sizeClasses;

type SectionHeadingProps = ComponentProps<"h2"> & {
  as?: ElementType;
  size?: Size;
};

export function SectionHeading({
  as: Tag = "h2",
  size = "xl",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-medium text-foreground",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
