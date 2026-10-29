import type { DitherOptions } from "./dither-types";

/** Published image treatment; the editor starts from these same values. */
export const ditherSiteDefaults = {
  strength: 0.03,
  levels: 2,
  pixelSize: 0.7,
  animated: true,
  animationDuration: 16.2,
  animationAmount: 0.2,
  dim: 0.53,
  contrast: 1.54,
  saturation: 1,
  warmth: -0.01,
} satisfies Required<DitherOptions>;

/** Groups an image can be tuned under; the first part of each artwork name. */
export const ditherGroups = [
  { value: "hero", label: "Hero" },
  { value: "about", label: "About" },
  { value: "labs", label: "Labs" },
  { value: "courses", label: "Courses" },
  { value: "mission", label: "Mission" },
  { value: "event", label: "Events" },
  { value: "agent", label: "AI apps card" },
  { value: "product", label: "Product cards" },
  { value: "article", label: "Article cards" },
  { value: "contact", label: "Contact dialog" },
] as const;

/** Per-group changes on top of the site defaults. Paste tuned DialKit values here. */
export const ditherGroupPresets: Record<string, DitherOptions> = {
  agent: { strength: 0.24, pixelSize: 1, animationDuration: 23 },
};

/** Original image grades used when the editor's color override is off. */
export const originalImageColors = {
  dim: 0,
  contrast: 1.2,
  saturation: 1,
  warmth: 0,
};
