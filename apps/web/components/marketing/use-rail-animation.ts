"use client";

import { useEffect, useSyncExternalStore } from "react";
import { acquireRailClock } from "./rail-motion";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function useRailAnimation() {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  useEffect(() => {
    if (!reducedMotion) return acquireRailClock();
  }, [reducedMotion]);
  return reducedMotion;
}
