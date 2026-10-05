"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";

type Base = { name: string; role: string };
type TextItem = Base & { type: "text"; quote: string };
type VideoItem = Base & {
  type: "video";
  poster?: string; // image URL; falls back to the purple placeholder
  videoSrc?: string; // embed URL for the modal player
};
type Item = TextItem | VideoItem;

// Real graduate testimonials (quotes trimmed for length). Add `type: "video"`
// items with a poster + videoSrc to bring back the video cards.
const testimonials: Item[] = [
  {
    type: "text",
    quote:
      "One of the best bootcamps I've attended. The hands-on experience was amazing — I recommend it to anyone looking to join the AI revolution.",
    name: "Constance Opara",
    role: "connieopara.com",
  },
  {
    type: "text",
    quote: "This truly challenged me in ways I never imagined.",
    name: "Francis Nebo",
    role: "francisnebo.com",
  },
  {
    type: "text",
    quote:
      "The flow kept me from procrastinating, and the practical approach meant everything stuck. Keep it up, team.",
    name: "Frances Omanukwue",
    role: "franceso.netlify.app",
  },
  {
    type: "text",
    quote:
      "I went from just learning about AI to actually building projects and seeing what I can create. It gave me the confidence to keep building.",
    name: "Miriam Nnaji",
    role: "miriamnm.com",
  },
  {
    type: "text",
    quote:
      "What I learned, built and achieved in such a short time is something I don't think I could have accomplished alone — even in six months.",
    name: "Roselyne June",
    role: "roselynejune.dev",
  },
  {
    type: "text",
    quote:
      "Intensive, comprehensive, and they held nothing back. I've got AI wings now and I'm firing on to greater heights.",
    name: "Terkuma Ivande",
    role: "tkthetinktank.com",
  },
  {
    type: "text",
    quote: "I never believed I could do this. It's like going from zero to hero.",
    name: "Michelle Robert",
    role: "michellerobert.xyz",
  },
];

const N = testimonials.length;
const W_TEXT = 1093;
const W_VIDEO = 596;
const GAP = 25;
const AUTOPLAY_MS = 5000;

// Tripled so the strip always has neighbours to both sides; we live in the
// middle copy and snap back invisibly when we drift into an outer copy.
const strip = [...testimonials, ...testimonials, ...testimonials];

const wrap = (page: number) => (((page % N) + N) % N) + N;

function TextCard({ item }: { item: TextItem }) {
  return (
    <div className="flex size-full items-center justify-center bg-white px-[clamp(20px,4vw,40px)]">
      <div className="flex w-[690px] max-w-full flex-col items-center gap-[clamp(16px,3vw,34px)]">
        <p className="sr-ppneue text-center font-medium leading-[1.4] text-[#111] text-[clamp(18px,2.6vw,30px)]">
          &quot;{item.quote}&quot;
        </p>
        <div className="flex items-center gap-[13px]">
          <img
            src="/superrad/upgrade/avatar.png"
            alt=""
            aria-hidden
            className="size-[31px] shrink-0 rounded-[16.848px] object-cover"
          />
          <span className="sr-inter font-medium leading-[1.4] text-[#4c4c4c] text-[clamp(13px,1.6vw,16.7px)]">
            {item.name}, {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ item }: { item: VideoItem }) {
  return (
    <div className="relative size-full w-[596px] h-[348.465px] bg-[#5539d1]">
      {item.poster && (
        <img
          src={item.poster}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <img
        src="/superrad/upgrade/play.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[120px] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function Lightbox({ item, onClose }: { item: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} video testimonial`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[900px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-[44px] right-0 flex size-[32px] cursor-pointer items-center justify-center text-white"
        >
          <svg viewBox="0 0 24 24" className="size-[24px]" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-[16px] bg-[#5539d1]">
          {item.videoSrc ? (
            <iframe
              src={item.videoSrc}
              title={`${item.name} testimonial`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          ) : (
            <img
              src="/superrad/upgrade/play.svg"
              alt=""
              aria-hidden
              className="absolute left-1/2 top-1/2 size-[120px] -translate-x-1/2 -translate-y-1/2"
            />
          )}
        </div>

        <p className="sr-inter mt-[16px] text-center font-medium text-white text-[16px]">
          {item.name}, {item.role}
        </p>
      </div>
    </motion.div>,
    document.body
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(N); // start on the middle copy
  const [animateX, setAnimateX] = useState(true);
  const [open, setOpen] = useState<VideoItem | null>(null);

  // Responsive card width: cards render at CSS width min(design, 88vw); mirror
  // that here so the glide centring lands correctly on any screen. Seed from the
  // viewport on the first client render, then refine via the observer.
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : W_TEXT + 500
  );
  // Hidden until mounted so the SSR frame (which can't know the viewport and
  // assumes desktop) is never shown mispositioned on mobile.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const rgap = vw < 748 ? 12 : GAP;
  const cardW = (item: Item | undefined) =>
    Math.min(item?.type === "video" ? W_VIDEO : W_TEXT, Math.round(vw * 0.88));
  const offset = (p: number) => {
    let left = 0;
    for (let k = 0; k < p; k++) left += cardW(strip[k]) + rgap;
    return -(left + cardW(strip[p]) / 2);
  };

  const activeMod = ((page % N) + N) % N;
  const paused = open !== null;

  const go = (delta: number) => {
    setAnimateX(true);
    setPage((p) => p + delta);
  };
  const jumpTo = (renderIndex: number) => {
    setAnimateX(true);
    setPage(renderIndex);
  };

  // Auto-advance — keyed on the visible testimonial so the invisible snap
  // never resets the timer; pauses while the modal is open.
  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [activeMod, reduce, paused]);

  // Re-enable animation the frame after an instant snap.
  useEffect(() => {
    if (animateX) return;
    const id = requestAnimationFrame(() => setAnimateX(true));
    return () => cancelAnimationFrame(id);
  }, [animateX]);

  const handleRest = () => {
    if (page >= 2 * N || page < N) {
      setAnimateX(false);
      setPage((p) => wrap(p));
    }
  };

  const glide = reduce
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="w-full overflow-hidden bg-[#221919] px-6 pt-[100px] pb-[100px]">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-[6px] text-center">
        <h2 className="sr-greed font-semibold leading-[1.0] tracking-[-2.4px] text-white text-[clamp(30px,7vw,50px)]">
          What Past Participants are saying
        </h2>
        <p className="sr-dmsans max-w-[361px] font-medium leading-[24px] text-[#aeaea6] text-[16px]">
          Real results from creators who completed the SuperRad Cinematic AI
          Challenge.
        </p>
      </div>

      {/* Filmstrip — fixed per-type widths; the track glides to centre the focus. */}
      <div className="relative mt-[80px] h-[348.465px] w-full">
        <motion.div
          className="absolute left-1/2 top-0 flex items-center transition-opacity duration-200"
          style={{ gap: rgap, opacity: mounted ? 1 : 0 }}
          initial={false}
          animate={{ x: offset(page) }}
          transition={animateX ? glide : { duration: 0 }}
          onAnimationComplete={handleRest}
        >
          {strip.map((item, i) => {
            const active = i === page;
            const isVideo = item.type === "video";
            const clickable = !active || isVideo;
            return (
              <div
                key={i}
                onClick={() => {
                  if (!active) jumpTo(i);
                  else if (item.type === "video") setOpen(item);
                }}
                style={{
                  width: isVideo ? "min(596px, 88vw)" : "min(1093px, 88vw)",
                }}
                className={`h-[348.465px] shrink-0 overflow-hidden rounded-[16px] ${
                  clickable ? "cursor-pointer" : ""
                }`}
              >
                {item.type === "text" ? (
                  <TextCard item={item} />
                ) : (
                  <VideoCard item={item} />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Filling indicator — the active pill fills over the 5s, then advances. */}
      <div className="mt-[40px] flex items-center justify-center gap-[3px]">
        {testimonials.map((_, i) => {
          const on = i === activeMod;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={on ? true : undefined}
              onClick={() => jumpTo(N + i)}
              className="cursor-pointer p-[3px]"
            >
              <span
                className={`block h-[10px] overflow-hidden rounded-[27px] bg-white/[0.29] ${
                  on ? "w-[47px]" : "w-[10px]"
                }`}
              >
                {on && !paused && (
                  <motion.span
                    key={activeMod}
                    className="block h-full rounded-[27px] bg-[#cbcbcb]"
                    initial={{ width: reduce ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                    }
                  />
                )}
                {on && paused && (
                  <span className="block h-full w-full rounded-[27px] bg-[#cbcbcb]" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
