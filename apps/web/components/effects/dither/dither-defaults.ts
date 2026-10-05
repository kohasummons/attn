import type { DitherOptions } from "./dither-types";

/** Published image treatment; the editor starts from these same values. */
export const ditherSiteDefaults = {
  strength: 0.32,
  levels: 4,
  pixelSize: 1.8,
  animated: true,
  animationDuration: 16.2,
  animationAmount: 0.2,
  dim: 0.36,
  contrast: 1.3,
  saturation: 1.02,
  warmth: 0.09,
} satisfies Required<DitherOptions>;

/** Original image grades used when the editor's color override is off. */
export const originalImageColors = {
  dim: 0,
  contrast: 1.2,
  saturation: 1,
  warmth: 0,
};
