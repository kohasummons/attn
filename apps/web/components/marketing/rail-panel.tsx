"use client";

import { useEffect } from "react";
import { useDialKitController, type DialConfig } from "dialkit";
import {
  railMotionDefaults,
  restartRailMotion,
  setRailMotion,
} from "./rail-motion";

const controls = {
  speed: [railMotionDefaults.speed, 0.25, 3, 0.05],
  neighborDifference: [railMotionDefaults.neighborDifference, 0, 10, 0.1],
  playback: {
    paused: railMotionDefaults.paused,
    cycleSeconds: [railMotionDefaults.cycleSeconds, 2, 30, 0.1],
    easing: {
      type: "select",
      options: [
        { value: "gentle", label: "Gentle" },
        { value: "pronounced", label: "Pronounced ease in/out" },
        { value: "linear", label: "Constant speed" },
      ],
      default: railMotionDefaults.easing,
    },
  },
  spacing: {
    neighborPhasePercent: [railMotionDefaults.neighborPhase, -4, 4, 0.1],
  },
  travel: {
    topInsetPercent: [railMotionDefaults.topInset, 0, 45, 1],
    bottomInsetPercent: [railMotionDefaults.bottomInset, 0, 45, 1],
  },
  restart: { type: "action", label: "Restart animation" },
  reset: { type: "action", label: "Reset to site defaults" },
} satisfies DialConfig;

export default function RailPanel() {
  const dial = useDialKitController("Floating boxes", controls, {
    id: "attention-factory-rails-v1",
    persist: true,
    onAction: (action) => {
      if (action === "restart") restartRailMotion();
      if (action === "reset") {
        dial.resetValues();
        restartRailMotion();
      }
    },
  });
  const { speed, neighborDifference, playback, spacing, travel } = dial.values;
  const { paused, cycleSeconds, easing } = playback;
  const { neighborPhasePercent } = spacing;
  const { topInsetPercent, bottomInsetPercent } = travel;

  useEffect(() => {
    setRailMotion({
      speed,
      neighborDifference,
      paused,
      cycleSeconds,
      easing,
      neighborPhase: neighborPhasePercent,
      topInset: topInsetPercent,
      bottomInset: bottomInsetPercent,
    });
  }, [
    speed, neighborDifference, paused, cycleSeconds, easing,
    neighborPhasePercent, topInsetPercent, bottomInsetPercent,
  ]);

  useEffect(() => () => setRailMotion(railMotionDefaults), []);
  return null;
}
