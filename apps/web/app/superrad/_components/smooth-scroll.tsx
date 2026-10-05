"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.5,
        smoothWheel: true,
        anchors: {
          offset: 0,
          duration: 3.0,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
