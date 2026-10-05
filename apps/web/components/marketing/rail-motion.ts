"use client";

import { animate, cubicBezier, motionValue } from "motion/react";
import { clamp, getCycleProgress, getNeighborPhase } from "./rail-motion-math";

export type RailMotionSettings = {
  speed: number;
  neighborDifference: number;
  neighborPhase: number;
  cycleSeconds: number;
  paused: boolean;
  easing: string;
  topInset: number;
  bottomInset: number;
};

export const railMotionDefaults: RailMotionSettings = {
  speed: 2.7,
  neighborDifference: 10,
  neighborPhase: -2.8,
  cycleSeconds: 11.1,
  paused: false,
  easing: "gentle",
  topInset: 0,
  bottomInset: 5,
};

export const railPhase = motionValue(0);
export const railSettings = motionValue(railMotionDefaults);
const gentle = cubicBezier(0.37, 0, 0.63, 1);
const pronounced = cubicBezier(0.77, 0, 0.175, 1);
let clockUsers = 0;
let clock: {
  speed: number;
  time: number;
  state: string;
  pause: () => void;
  play: () => void;
  stop: () => void;
} | undefined;

export function getRailProgress(
  phase: number,
  settings: RailMotionSettings,
  index: number,
) {
  const progress = getCycleProgress(getNeighborPhase(
    phase, index, settings.neighborDifference, settings.neighborPhase,
  ));
  if (settings.easing === "linear") return progress;
  return settings.easing === "pronounced"
    ? pronounced(progress)
    : gentle(progress);
}

export function setRailMotion(values: RailMotionSettings) {
  railSettings.set(values);
  // Speed/duration changes retain the current phase; pausing freezes it.
  if (clock) {
    if (values.paused && clock.state !== "paused") clock.pause();
    clock.speed = clamp(values.speed, 0.25, 3) / clamp(values.cycleSeconds, 2, 30);
    if (!values.paused && clock.state === "paused") {
      const time = clock.time;
      clock.play();
      // Restore time after play so non-unit playback rates resume in place.
      clock.time = time;
    }
  }
}

export function restartRailMotion() {
  if (clock) clock.time = 0;
  railPhase.set(0);
}

// One linear phase clock drives all rails. Each square derives its position
// from the same phase and settings, including its opposite partner.
export function acquireRailClock() {
  clockUsers += 1;
  if (clockUsers === 1) {
    clock = animate(railPhase, [0, 1], {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    });
    setRailMotion(railSettings.get());
  }
  return () => {
    clockUsers -= 1;
    if (clockUsers === 0) {
      clock?.stop();
      clock = undefined;
      railPhase.set(0);
    }
  };
}
