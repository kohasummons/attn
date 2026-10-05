"use client";

import { useEffect } from "react";
import { useDialKitController, type DialConfig } from "dialkit";
import type { DitherTuningValues } from "./dither-tuning-context";
import { ditherSiteDefaults } from "./dither-defaults";

const controls = {
  applyTo: {
    type: "select",
    options: [
      { value: "all", label: "All images" },
      { value: "hero", label: "Hero images only" },
    ],
    default: "all",
  },
  effect: {
    strength: [ditherSiteDefaults.strength, 0, 1, 0.01],
    colorLevels: [ditherSiteDefaults.levels, 2, 16, 1],
    pixelSize: [ditherSiteDefaults.pixelSize, 0.5, 6, 0.1],
  },
  animation: {
    enabled: ditherSiteDefaults.animated,
    cycleSeconds: [ditherSiteDefaults.animationDuration, 0.5, 30, 0.1],
    amount: [ditherSiteDefaults.animationAmount, 0, 0.3, 0.005],
  },
  color: {
    _collapsed: true,
    overrideImageColors: true,
    dimming: [ditherSiteDefaults.dim, 0, 0.8, 0.01],
    contrast: [ditherSiteDefaults.contrast, 0.5, 2, 0.01],
    saturation: [ditherSiteDefaults.saturation, 0, 2, 0.01],
    warmth: [ditherSiteDefaults.warmth, -1, 1, 0.01],
  },
  reset: { type: "action", label: "Reset to site defaults" },
} satisfies DialConfig;

export default function DitherPanel({
  onChange,
}: {
  onChange: (values: DitherTuningValues) => void;
}) {
  const dial = useDialKitController("Image dithering", controls, {
    id: "attention-factory-dither-v2",
    persist: true,
    onAction: (action) => {
      if (action === "reset") dial.resetValues();
    },
  });
  const { applyTo, effect, animation, color } = dial.values;
  useEffect(() => {
    onChange({
      scope: applyTo,
      overrideImageColors: color.overrideImageColors,
      options: {
        strength: effect.strength,
        levels: effect.colorLevels,
        pixelSize: effect.pixelSize,
        animated: animation.enabled,
        animationDuration: animation.cycleSeconds,
        animationAmount: animation.amount,
        ...(color.overrideImageColors
          ? {
              dim: color.dimming,
              contrast: color.contrast,
              saturation: color.saturation,
              warmth: color.warmth,
            }
          : {}),
      },
    });
  }, [
    onChange,
    applyTo,
    effect.strength,
    effect.colorLevels,
    effect.pixelSize,
    animation.enabled,
    animation.cycleSeconds,
    animation.amount,
    color.overrideImageColors,
    color.dimming,
    color.contrast,
    color.saturation,
    color.warmth,
  ]);
  return null;
}
