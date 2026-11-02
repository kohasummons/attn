"use client";

import { useReducedMotion, type Variants } from "motion/react";

/**
 * Reduced-motion-aware variants for scroll-triggered stagger reveals.
 * Put `container` on a `motion.div` grid with `initial="hidden"
 * whileInView="visible" viewport={viewport}`, and `item` on each child card's
 * root `motion.div` (variants only — it inherits the group's state and staggers).
 */
export function useReveal() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return { container, item, viewport: { once: true, margin: "-80px" } as const };
}
