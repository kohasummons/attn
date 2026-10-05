"use client";

import { useId } from "react";
import { motion, useTransform } from "motion/react";
import { getRailProgress, railPhase, railSettings } from "./rail-motion";
import { getSquarePosition } from "./rail-motion-math";
import { useRailAnimation } from "./use-rail-animation";

/** A stationary horizontal track with the same motion as the vertical rails. */
export function HorizontalRail({
  width = 219,
  index = 1,
  restingX = 139,
  className = "",
}: {
  width?: number;
  index?: number;
  restingX?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const reducedMotion = useRailAnimation();
  const transform = useTransform(() => {
    const settings = railSettings.get();
    const x = reducedMotion
      ? Math.max(0, Math.min(width - 16, restingX))
      : getSquarePosition({
          ...settings,
          progress: getRailProgress(railPhase.get(), settings, index),
          start: 0,
          end: width - 16,
        });
    return `translateX(${x}px)`;
  });

  return (
    <svg
      className={`af-horizontal-rail ${className}`}
      width={width}
      height="16"
      viewBox={`0 0 ${width} 16`}
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ overflow: "hidden", pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id={`${id}-fade`} gradientUnits="userSpaceOnUse" x1="0" y1="8.5" x2={width} y2="8.5">
          <stop stopColor="#E3E3E3" stopOpacity="0" />
          <stop offset="0.5" stopColor="#E3E3E3" />
          <stop offset="1" stopColor="#E3E3E3" stopOpacity="0" />
        </linearGradient>
        <pattern id={`${id}-hatch`} width="3.889" height="3.889" patternUnits="userSpaceOnUse">
          <path d="M-1 2.889 1 4.889 M0 0 3.889 3.889 M2.889 -1 4.889 1" stroke="#E85626" strokeWidth="0.11" />
        </pattern>
      </defs>
      <path d={`M0.5 8.5 H${width - 0.5}`} stroke={`url(#${id}-fade)`} strokeDasharray="8 8" strokeLinecap="round" />
      <motion.g className="af-horizontal-square" style={{ transform }}>
        <rect x="0.5" y="0.5" width="15" height="15" fill="#F4B09A" />
        <rect x="0.5" y="0.5" width="15" height="15" fill={`url(#${id}-hatch)`} stroke="#E85626" />
      </motion.g>
    </svg>
  );
}
