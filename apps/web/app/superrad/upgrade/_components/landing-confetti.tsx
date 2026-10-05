"use client";

import { useEffect } from "react";

const SESSION_KEY = "superrad-upgrade-confetti";
const DURATION_MS = 5000;
const COLORS = ["#750af9", "#f10c5c", "#ff8d28", "#ffffff"];

// Fires a celebratory fireworks burst once when someone lands on the page.
// Respects prefers-reduced-motion and only fires once per browser session.
export function LandingConfetti() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | undefined;

    // Load the lib after mount so it stays out of the initial bundle.
    import("canvas-confetti").then(({ default: confetti }) => {
      if (cancelled) return;

      const end = Date.now() + DURATION_MS;
      const defaults = {
        startVelocity: 32,
        spread: 360,
        ticks: 70,
        zIndex: 200,
        colors: COLORS,
        disableForReducedMotion: true,
      };
      const rand = (min: number, max: number) => Math.random() * (max - min) + min;

      interval = setInterval(() => {
        const left = end - Date.now();
        if (left <= 0) {
          if (interval) clearInterval(interval);
          return;
        }
        const particleCount = 50 * (left / DURATION_MS);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: rand(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: rand(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    });

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
