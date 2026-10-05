import type { DitherOptions } from "@/components/effects/dither/dither-types";

type Painting = DitherOptions & { src: string };
const source = (name: string, dim = 0.4): Painting => ({
  src: `/redesign/originals/${name}.webp`,
  dim,
});
const hero = {
  ...source("hero"),
  contrast: 1.2,
  saturation: 1.25,
  warmth: 0.24,
};
const courses = source("courses");
const about = source("about");
const event = source("event");
const agents = source("agents");

// Explicit migration map: legacy composition names now resolve to clean,
// full-resolution originals. Desktop/mobile crops use the same source bytes.
export const paintingAssets: Record<string, Painting> = {
  "hero-desktop-bg.png": hero,
  "hero-mobile-bg.png": hero,
  "about-desktop-bg.png": about,
  "about-mobile-bg.png": about,
  "labs-desktop-bg.png": about,
  "courses-desktop-bg.png": courses,
  "courses-mobile-bg.png": courses,
  "mission-desktop-bg.png": source("mission"),
  "mission-mobile-bg.png": courses,
  "event-desktop-bg.png": event,
  "event-mobile-bg.png": event,
  "footer-desktop-bg.png": event,
  "footer-mobile-bg.png": event,
  "agent-painting.png": agents,
  "agent-mobile-bg.png": agents,
  "product-1-desktop-bg.png": source("product-1", 0.3),
  "product-2-desktop-bg.png": source("product-2", 0.2),
  "article-1-desktop.png": source("article-1", 0.2),
  "article-2-desktop.png": source("article-2", 0),
  "article-3-desktop.png": source("article-3", 0.2),
};
