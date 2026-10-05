"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const compactQuery = "(max-width: 600px)";

function subscribeToPreferences(callback: () => void) {
  const queries = [reducedMotionQuery, compactQuery].map((query) =>
    window.matchMedia(query),
  );
  queries.forEach((query) => query.addEventListener("change", callback));
  return () =>
    queries.forEach((query) => query.removeEventListener("change", callback));
}

function getMotionMode() {
  if (window.matchMedia(reducedMotionQuery).matches) return "still";
  return window.matchMedia(compactQuery).matches ? "mobile" : "desktop";
}

export function ParallaxArtwork({
  children,
  className,
  blend,
}: {
  children: ReactNode;
  className: string;
  blend: "top" | "bottom" | "both";
}) {
  const frame = useRef<HTMLDivElement>(null);
  const mode = useSyncExternalStore(
    subscribeToPreferences,
    getMotionMode,
    () => "still",
  );
  const distance = mode === "still" ? 0 : mode === "mobile" ? 12 : 24;
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [`translate3d(0, ${-distance}px, 0)`, `translate3d(0, ${distance}px, 0)`],
  );

  return (
    <div
      ref={frame}
      className={`${className} af-artwork-blend`}
      data-blend={blend}
      data-motion={mode}
      aria-hidden="true"
    >
      {/* Keep the edge mask stationary; only the oversized painting moves. */}
      <motion.div className="af-parallax-layer" style={{ transform }}>
        {children}
      </motion.div>
    </div>
  );
}
