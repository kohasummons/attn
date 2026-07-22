"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
  portrait: string;
  logo: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We completely rebuilt our GTM stack with Attio in under 90 days while growing pipeline",
    name: "Joshua Phyl",
    company: "BB Capital",
    portrait: "/v2/testimonial-portrait.png",
    logo: "/v2/testimonial-logo.svg",
  },
  {
    quote:
      "Their team became an extension of ours — we shipped a working MVP in six weeks.",
    name: "Jane Doe",
    company: "Acme",
    portrait: "/v2/testimonial-portrait.png",
    logo: "/v2/testimonial-logo.svg",
  },
  {
    quote:
      "Saw a 3x lift in qualified pipeline within a quarter of launching with them.",
    name: "Sam Lee",
    company: "Globex",
    portrait: "/v2/testimonial-portrait.png",
    logo: "/v2/testimonial-logo.svg",
  },
];

const spring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 32,
  mass: 0.7,
};

export function Testimonial() {
  const [active, setActive] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setMobileIndex(index);
  }, []);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleMobileScroll);
  }, [handleMobileScroll]);

  const goToMobile = (i: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f9f9f9] py-12">
      <div className="mx-auto hidden max-w-[1166px] items-stretch gap-1 px-6 md:flex">
        {testimonials.map((t, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={t.name}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              animate={{ flexGrow: isActive ? 1 : 0 }}
              transition={spring}
              style={{ flexBasis: 0, flexShrink: 0 }}
              className={cn(
                "relative h-[500px] min-w-[132px] overflow-hidden border border-[#f0f0f0] bg-[#f9f9f9] text-left outline-none focus-visible:ring-2 focus-visible:ring-black",
                !isActive && "cursor-pointer transition-colors hover:bg-[#f3f3f3]",
              )}
            >
              <motion.div
                animate={{ x: isActive ? -100 : -37 }}
                transition={spring}
                className="absolute top-[134px] border"
              >
                <Image
                  src={t.portrait}
                  alt=""
                  width={220}
                  height={243}
                  className="max-w-none object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.25, delay: isActive ? 0.2 : 0 }}
                className="pointer-events-none relative flex h-full flex-col justify-center px-16"
              >
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={124}
                  height={36}
                  className="ml-[140px]"
                />
                <blockquote className="ml-[140px] max-w-[633px] text-[clamp(22px,2.5vw,28px)] font-normal leading-[1.4] tracking-[-0.01em] text-black">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 ml-[140px] flex items-center text-[18px] text-black">
                  <span className="font-bold">{t.name}</span>
                  <span>,&nbsp;{t.company}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="md:hidden">
        <div
          ref={mobileScrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-[420px] w-full shrink-0 snap-center flex-col justify-center border-[#f0f0f0] bg-[#f9f9f9] px-6"
            >
              <Image
                src={t.logo}
                alt={t.company}
                width={104}
                height={30}
                className="mb-8"
              />
              <blockquote className="max-w-[480px] text-[20px] font-normal leading-[1.4] tracking-[-0.01em] text-black">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center text-[15px] text-black">
                <span className="font-bold">{t.name}</span>
                <span>,&nbsp;{t.company}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show ${t.name}`}
              onClick={() => goToMobile(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                mobileIndex === i ? "w-6 bg-black" : "w-2 bg-black/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
