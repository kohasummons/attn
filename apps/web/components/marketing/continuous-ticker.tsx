"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { motion } from "motion/react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function ContinuousTicker({ children }: { children: ReactNode }) {
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );

  return (
    <motion.div
      className="af-ticker-track"
      aria-hidden="true"
      initial={false}
      animate={{
        transform: reduceMotion
          ? "translateX(0%)"
          : ["translateX(0%)", "translateX(-50%)"],
      }}
      transition={reduceMotion
        ? { duration: 0 }
        : { duration: 40, ease: "linear", repeat: Infinity }
      }
    >
      {/* Equal halves meet at the loop boundary without a gap or jump. */}
      <div className="af-ticker-group">{children}</div>
      <div className="af-ticker-group">{children}</div>
    </motion.div>
  );
}
