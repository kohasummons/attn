import type { DitherOptions } from "@/components/effects/dither/dither-types";

type Painting = DitherOptions & { src: string };
const source = (name: string, dim = 0.4): Painting => ({
  src: `/redesign/originals/${name}.webp`,
  dim,
});
// Thomas Cole, The Voyage of Life: Youth (1842), National Gallery of Art, public domain.
const hero = {
  ...source("voyage-youth"),
  contrast: 1.2,
  saturation: 1.25,
  warmth: 0.24,
};
// Same painting extended downward with a blurred mirror of its foreground, so on
// wide screens the boat and the guardian sit above the bottom fade.
const heroDesktop = { ...hero, src: "/redesign/originals/voyage-youth-extended.webp" };
// Albert Bierstadt, Valley of the Yosemite (1864); Frederic Edwin Church,
// The Heart of the Andes (1859). Both public domain.
const yosemite = source("yosemite");
const andes = source("andes");
// Desktop crops use copies extended downward (like the hero) so the valley floor
// and the river sit above each section's bottom fade.
const yosemiteDesktop = { ...yosemite, src: "/redesign/originals/yosemite-extended.webp" };
const andesDesktop = { ...andes, src: "/redesign/originals/andes-extended.webp" };
const agents = source("agents");

// Explicit migration map: legacy composition names now resolve to clean,
// full-resolution originals. Desktop/mobile crops use the same source bytes.
export const paintingAssets: Record<string, Painting> = {
  "hero-desktop-bg.png": heroDesktop,
  "hero-mobile-bg.png": hero,
  "about-desktop-bg.png": yosemiteDesktop,
  "about-mobile-bg.png": yosemite,
  "labs-desktop-bg.png": yosemiteDesktop,
  "courses-desktop-bg.png": andesDesktop,
  "courses-mobile-bg.png": andes,
  "mission-desktop-bg.png": andesDesktop,
  "mission-mobile-bg.png": andes,
  "event-desktop-bg.png": yosemiteDesktop,
  "event-mobile-bg.png": yosemite,
  "footer-desktop-bg.png": yosemiteDesktop,
  "footer-mobile-bg.png": yosemite,
  "agent-painting.png": agents,
  "agent-mobile-bg.png": agents,
  "product-1-desktop-bg.png": source("product-1", 0.3),
  "product-2-desktop-bg.png": source("product-2", 0.2),
  "article-1-desktop.png": source("article-1", 0.2),
  "article-2-desktop.png": source("article-2", 0),
  "article-3-desktop.png": source("article-3", 0.2),
};
