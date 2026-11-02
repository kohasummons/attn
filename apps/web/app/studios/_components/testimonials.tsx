"use client";

import { motion } from "motion/react";
import { useReveal } from "./stagger";

const smallQuote =
  '"We saw a massive improvement in our team\'s collaboration and communication. Session Pilot helped us organize tasks efficiently, leading to better outcomes across all projects."';

function SmallCard() {
  const { item } = useReveal();
  return (
    <motion.div
      variants={item}
      className="relative flex h-full min-h-[213px] flex-col justify-between rounded-[10.223px] border-[0.852px] border-[#f1f0ee] bg-white p-[20.447px]"
    >
      <p className="sr-inter font-medium leading-[23px] text-[#1e1e1e] text-[15.335px]">
        {smallQuote}
      </p>
      <div className="flex items-center gap-[10.223px]">
        <img
          src="/superrad/testimonials/selma.webp"
          alt=""
          className="size-[39.19px] shrink-0 rounded-[5.964px] object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="sr-inter font-medium leading-[21.7px] text-black text-[14.483px]">
            Selma Saidi
          </p>
          <p className="sr-inter font-medium leading-[19.17px] text-[#4c4c4c] text-[12.779px]">
            TU Braunschweig
          </p>
        </div>
        <img
          src="/superrad/testimonials/seal.webp"
          alt=""
          aria-hidden
          className="size-[39.19px] shrink-0 rounded-[5.964px] object-cover"
        />
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const { container, viewport } = useReveal();
  return (
    <section className="w-full bg-white px-6 py-[80px]">
      <div className="mx-auto max-w-[1312px]">
        {/* header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="sr-greed font-semibold leading-[1.0] text-[#1a0000] text-[clamp(40px,5vw,60px)]">
              Testimonials
            </h2>
            <p className="sr-nimbus mt-[10px] max-w-[840px] leading-[21.6px] text-[#6e6e73] text-[16.7px] tracking-[-0.36px]">
              Every recording adapts to your style. Phia lets you shape the look
              and feel of your videos with subtle controls, making everything you
              share feels consistent, considered, and on brand
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-[18px] pt-2 sm:flex">
            <button
              aria-label="Previous"
              className="flex size-[36px] items-center justify-center rounded-full bg-[#f3f2e6] opacity-50"
            >
              <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" aria-hidden>
                <path d="M15 6l-6 6 6 6" stroke="#1a0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              aria-label="Next"
              className="flex size-[36px] items-center justify-center rounded-full bg-[#f3f2e6]"
            >
              <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" aria-hidden>
                <path d="M9 6l6 6-6 6" stroke="#1a0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* featured row */}
        <div className="mt-[40px] flex flex-col gap-[24px] lg:flex-row">
          {/* purple quote card */}
          <div className="flex flex-1 flex-col justify-between rounded-[8px] bg-[#4c0e3a] p-[48px] lg:h-[512px]">
            <div className="flex flex-col gap-[24px]">
              <p className="sr-dmsans leading-[1.3] text-white text-[clamp(24px,2.4vw,32px)]">
                Before Farway®, I was stuck in the same routine with minimal
                progress. Now I&apos;m running farther than ever, with less
                fatigue and more enjoyment.
              </p>
              <p className="sr-dmsans leading-[1.5] text-white text-[16px]">
                Our intelligent algorithms identify patterns in your running
                behavior that you can&apos;t see on your own, helping you make
                meaningful adjustments that lead to breakthrough results.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-[8px]">
              <span className="sr-dmsans font-semibold leading-[1.5] text-white text-[16px] tracking-[-0.32px]">
                Joh
              </span>
              <svg viewBox="0 0 24 24" className="size-[24px]" fill="none" aria-hidden>
                <path d="M5 12h13M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* image card */}
          <div className="relative flex min-h-[320px] flex-1 flex-col justify-end overflow-hidden rounded-[8px] p-[24px] lg:h-[512px]">
            <img
              src="/superrad/testimonials/runner.webp"
              alt=""
              aria-hidden
              className="absolute max-w-none object-cover"
              style={{ left: "-86.17%", top: "0", width: "196.17%", height: "163.48%" }}
            />
            <div className="absolute inset-0 bg-[rgba(76,14,58,0.2)]" />
            <p className="sr-dmsans relative leading-[1.3] text-white text-[clamp(24px,2.4vw,32px)]">
              John Kevin, 54 years old
            </p>
          </div>
        </div>

        {/* small cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-[15px] grid grid-cols-1 gap-[11px] md:grid-cols-3"
        >
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </motion.div>
      </div>
    </section>
  );
}
