import type { ReactNode } from "react";
import { DM_Sans, Rubik, Hedvig_Letters_Serif, Instrument_Sans, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./superrad.css";
import { SmoothScroll } from "./_components/smooth-scroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Used for the pain-section list items (Rubik Light).
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-rubik",
  display: "swap",
});

// Instructor bio body copy.
const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hedvig",
  display: "swap",
});

// "Brands we've worked with" label + small UI labels.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

// "Included in your kit" section (headings, card titles, body).
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

// Normal-width Greed (variable) — used for instructor names.
const greedNormal = localFont({
  src: [{ path: "../fonts/greed/GreedCollectionVF-TRIAL.ttf", weight: "100 900", style: "normal" }],
  variable: "--font-greed-normal",
  display: "swap",
});

// Ultra-condensed display face — the 100px hero title uses the "98" cut.
const sansPlomb = localFont({
  src: [
    { path: "../fonts/sans_plomb/SansPlomb_TRIAL-95.otf", weight: "400", style: "normal" },
    { path: "../fonts/sans_plomb/SansPlomb_TRIAL-98.otf", weight: "700", style: "normal" },
    { path: "../fonts/sans_plomb/SansPlomb_TRIAL-Super.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sansplomb",
  display: "swap",
});

// Condensed display face — section headers use SemiBold.
const greed = localFont({
  src: [
    { path: "../fonts/greed/GreedCondensed-TRIAL-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/greed/GreedCondensed-TRIAL-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/greed/GreedCondensed-TRIAL-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../fonts/greed/GreedCondensed-TRIAL-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-greed",
  display: "swap",
});

// Subheads (Medium) and the Enroll button (Bold).
const ppNeue = localFont({
  src: [
    { path: "../fonts/pp_neue_montreal/ppneuemontreal-book.otf", weight: "400", style: "normal" },
    { path: "../fonts/pp_neue_montreal/ppneuemontreal-medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/pp_neue_montreal/ppneuemontreal-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-ppneue",
  display: "swap",
});

export const metadata = {
  title: "The SuperRad Challenge — Learn Cinematic AI Film Making in 3 Days",
  description:
    "Master cinematic AI generation in 3 days. Direct AI films good enough to win contests and land paid brand work.",
};

export default function SuperradLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${dmSans.variable} ${rubik.variable} ${hedvig.variable} ${instrumentSans.variable} ${archivo.variable} ${greedNormal.variable} ${sansPlomb.variable} ${greed.variable} ${ppNeue.variable} superrad-root min-h-screen w-full overflow-x-hidden`}
    >
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
