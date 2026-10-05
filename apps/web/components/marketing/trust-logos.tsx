"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSyncExternalStore,
  type ReactNode,
  type CSSProperties,
} from "react";
import { brands } from "@/lib/brands";

// Native Figma wordmarks preserve the original 24px baseline and proportions.
const designLogos: Record<
  string,
  { src: string; width: number; height: number }
> = {
  Meta: { src: "/redesign/meta-mark.svg", width: 120, height: 24 },
  "Google Labs": {
    src: "/redesign/google-labs-mark.svg",
    width: 164,
    height: 24,
  },
  Recall: { src: "/redesign/recall-mark.svg", width: 127, height: 24 },
};
// Compact symbol-led marks need a little more height for equal visual weight.
const opticalHeights: Record<string, number> = {
  Relume: 32,
  Kimi: 32,
  Gamma: 32,
  "Speak French Fast": 40,
  Liners: 28,
};

const loop = {
  duration: brands.length * 6,
  ease: "linear",
  repeat: Infinity,
} as const;

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function LogoLoop({ children }: { children: ReactNode }) {
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );

  return (
    <div className="af-logo-viewport">
      <motion.div
        className="af-logo-track"
        aria-hidden="true"
        initial={false}
        animate={{
          transform: reduceMotion
            ? "translateX(0%)"
            : ["translateX(0%)", "translateX(-50%)"],
        }}
        transition={reduceMotion ? { duration: 0 } : loop}
      >
        {/* Identical halves make the leftward loop seamless at every width. */}
        <div className="af-logo-group">{children}</div>
        <div className="af-logo-group">{children}</div>
      </motion.div>
    </div>
  );
}

export function TrustLogos() {
  return (
    <>
      <p className="sr-only">{brands.map((brand) => brand.name).join(", ")}</p>
      <div
        className="af-logos af-logo-viewport"
        style={{ "--brand-count": brands.length } as CSSProperties}
      >
        <LogoLoop>
          {brands.map((brand) => {
            const logo = designLogos[brand.name] ?? brand.logo;
            const height = opticalHeights[brand.name] ?? 24;
            const width = logo
              ? (logo.width / logo.height) * height
              : undefined;

            return (
              <div className="af-logo-cell" key={brand.name}>
                <div className="af-logo-lockup">
                  {logo && (
                    <Image
                      src={logo.src}
                      alt=""
                      loading="eager"
                      width={logo.width}
                      height={logo.height}
                      style={{ width }}
                    />
                  )}
                  {(!logo || brand.showName) && <span>{brand.name}</span>}
                </div>
              </div>
            );
          })}
        </LogoLoop>
      </div>
    </>
  );
}
