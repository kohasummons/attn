"use client";

import { ScrollArea as Primitive } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";

export function ScrollArea({ children, ...props }: ComponentProps<typeof Primitive.Root>) {
  return (
    <Primitive.Root data-slot="scroll-area" {...props}>
      <Primitive.Viewport data-slot="scroll-area-viewport">
        <Primitive.Content>{children}</Primitive.Content>
      </Primitive.Viewport>
      <Primitive.Scrollbar data-slot="scroll-area-scrollbar">
        <Primitive.Thumb data-slot="scroll-area-thumb" />
      </Primitive.Scrollbar>
    </Primitive.Root>
  );
}
