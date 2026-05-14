import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function EyebrowLabel({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[20px] font-normal tracking-[-0.04em] text-foreground",
        className,
      )}
      {...props}
    />
  );
}
