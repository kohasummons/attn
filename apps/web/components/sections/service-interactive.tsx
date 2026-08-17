"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  Globe,
  Layers,
  MessageSquare,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/* ---------------------------------------------------------- feature explorer
   Left: a feature list where only the active item expands to show its copy;
   the rest collapse to an icon and a label. Right: a tilted deck of cards
   that re-centers on the active item (image 12 — Duna). Square corners and
   borders instead of the reference's rounding and shadows, per BRAND.md. */

const FEATURE_ICONS = [
  Layers,
  Eye,
  MessageSquare,
  SlidersHorizontal,
  Globe,
  Zap,
];

export function FeatureExplorer({
  items,
}: {
  items: { name: string; body: string }[];
}) {
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  return (
    <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-12">
      {/* Feature list — active item carries its description. */}
      <ul className="flex flex-col gap-1">
        {items.map((item, i) => {
          const on = active === i;
          const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length] ?? Layers;
          return (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={cn(
                  "flex w-full flex-col gap-2.5 px-5 py-4 text-left transition-colors duration-300",
                  on ? "bg-[#f1f0ec]" : "hover:bg-[#f7f6f2]",
                )}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    aria-hidden
                    className={cn(
                      "size-5 shrink-0 transition-colors duration-300",
                      on ? "text-[#121313]" : "text-[#9a9a96]",
                    )}
                    strokeWidth={1.5}
                  />
                  <span
                    className={cn(
                      "text-[17px] leading-[1.25] tracking-[-0.02em] transition-colors duration-300",
                      on ? "text-[#121313]" : "text-[#5a5a5a]",
                    )}
                  >
                    {item.name}
                  </span>
                </span>
                {on ? (
                  <p className="max-w-[440px] pl-8 text-[14px] leading-[1.5] text-[#5a5a5a]">
                    {item.body}
                  </p>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Deck — the same items, stacked and re-centering on the active one. */}
      <div className="relative h-[400px] overflow-hidden bg-[#f4f3ef] md:h-[480px]">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#f4f3ef] to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#f4f3ef] to-transparent"
        />
        <div className="absolute inset-y-0 -left-[4%] w-[122%] -rotate-6">
          {items.map((item, i) => {
            const dist = i - active;
            const abs = Math.abs(dist);
            const on = dist === 0;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={item.name}
                className={cn(
                  "absolute top-1/2 right-0 left-0 flex items-center gap-3.5 border px-6 py-4 transition-all duration-500 ease-out",
                  on
                    ? "border-[#e4e3de] bg-white"
                    : "border-transparent bg-white/45",
                )}
                style={{
                  transform: `translateY(calc(-50% + ${dist * 64}px)) scale(${
                    on ? 1 : 1 - Math.min(abs, 3) * 0.05
                  })`,
                  opacity: on ? 1 : Math.max(0.22, 0.68 - abs * 0.16),
                  zIndex: 10 - abs,
                }}
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full",
                    on
                      ? "bg-[#121313]"
                      : "border border-dashed border-[#c4c4c0]",
                  )}
                >
                  {on ? <Check className="size-3.5 text-white" strokeWidth={2.5} /> : null}
                </span>
                <span
                  className={cn(
                    "truncate text-[16px] leading-[1.2] tracking-[-0.02em]",
                    on ? "text-[#121313]" : "text-[#8a8a86]",
                  )}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- work slider
   Horizontal, arrow-driven carousel of real projects (image 13). Each card is
   an image, a name, one line, and a category tag. Equal heights; opens a touch
   past the start so the strip reads as slidable. */

type WorkProject = {
  name: string;
  tag: string;
  blurb: string;
  image: string;
};

/* ------------------------------------------------------------- list carousel
   The numbered support tiles as a strip that advances on its own at a steady
   interval, with partial cards showing at both edges so it reads as slidable.
   The set is rendered twice so advancing past the last card lands on an
   identical copy; we rewind by exactly one set while the strip is stationary,
   which is invisible. Square corners and hairline borders instead of the
   reference's rounded, shadowed cards, per BRAND.md. */

const LIST_CARD_STEP = 380; // card width (360) + gap-5 (20), kept in sync below
const LIST_AUTO_MS = 3600;

type ListCard = { title: string; body: string; image: string; alt: string };

export function ListCarousel({ items }: { items: ListCard[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);

  const advance = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    // Rewind while stationary — never mid-animation, or the seam shows.
    if (dir === 1 && el.scrollLeft >= half - LIST_CARD_STEP / 2) {
      el.scrollLeft -= half;
    } else if (dir === -1 && el.scrollLeft <= LIST_CARD_STEP / 2) {
      el.scrollLeft += half;
    }
    el.scrollBy({ left: dir * LIST_CARD_STEP, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    // Auto-motion is opt-out for anyone who has asked for less of it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => advance(1), LIST_AUTO_MS);
    return () => window.clearInterval(id);
  }, [advance, paused]);

  if (!items.length) return null;

  return (
    <div
      className="mt-12"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => advance(-1)}
          aria-label="Previous"
          className="flex size-10 items-center justify-center border border-[#e4e3de] text-[#5a5a5a] transition-colors duration-300 hover:border-[#121313] hover:text-[#121313]"
        >
          <ArrowLeft className="size-4" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => advance(1)}
          aria-label="Next"
          className="flex size-10 items-center justify-center border border-[#e4e3de] text-[#5a5a5a] transition-colors duration-300 hover:border-[#121313] hover:text-[#121313]"
        >
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </button>
      </div>

      <ul
        ref={ref}
        className="mt-6 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...items, ...items].map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            // The second set is decorative padding for the loop, not content.
            aria-hidden={i >= items.length}
            className="flex w-[360px] shrink-0 snap-start flex-col border border-[#e4e3de] bg-white"
          >
            <div className="flex flex-col items-center px-8 pt-10 text-center">
              <h3 className="text-[24px] leading-[1.1] font-medium tracking-[-0.04em] text-[#121313]">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.5] text-[#5a5a5a]">
                {item.body}
              </p>
            </div>
            {/* The art sits straight on the card and is anchored to the bottom.
                No frame, no fill and `contain` rather than `cover`, so the
                white around the object is the card's own white and the block
                has no edge of its own. */}
            <div className="relative mt-auto h-[230px] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="360px"
                className="object-contain object-bottom"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const CARD_STEP = 400; // card width + gap, kept in sync with the markup below

export function WorkCarousel({ projects }: { projects: WorkProject[] }) {
  const ref = useRef<HTMLDivElement>(null);

  // Nudge off the hard-left so the strip reads as slidable, without hiding the
  // first project.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollLeft = Math.round(CARD_STEP * 0.28);
  }, []);

  const nudge = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * CARD_STEP, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous"
          className="flex size-10 items-center justify-center border border-[#e4e3de] text-[#5a5a5a] transition-colors duration-300 hover:border-[#121313] hover:text-[#121313]"
        >
          <ArrowLeft className="size-4" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next"
          className="flex size-10 items-center justify-center border border-[#e4e3de] text-[#5a5a5a] transition-colors duration-300 hover:border-[#121313] hover:text-[#121313]"
        >
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </button>
      </div>

      <div
        ref={ref}
        className="mt-6 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex w-[300px] shrink-0 snap-start flex-col md:w-[380px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#e4e3de] bg-[#f1f0ec]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 768px) 380px, 300px"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-[19px] leading-[1.15] font-medium tracking-[-0.03em] text-[#121313]">
                {p.name}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.5] text-[#5a5a5a]">
                {p.blurb}
              </p>
              <span className="mt-5 inline-flex w-fit items-center rounded-full border border-[#d5d4cf] px-3.5 py-1.5 text-[12px] leading-none text-[#5a5a5a]">
                {p.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
