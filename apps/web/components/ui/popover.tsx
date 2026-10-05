"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverTitle = PopoverPrimitive.Title;

export function PopoverContent({
  className,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  positionMethod = "absolute",
  ...props
}: ComponentProps<typeof PopoverPrimitive.Popup> &
  Pick<
    ComponentProps<typeof PopoverPrimitive.Positioner>,
    "side" | "align" | "sideOffset" | "positionMethod"
  >) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        positionMethod={positionMethod}
        side={side}
        align={align}
        sideOffset={sideOffset}
        className="z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "rounded-xl border bg-white p-4 shadow-lg outline-none",
            className,
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}
