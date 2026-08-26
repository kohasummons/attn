"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const faqs = [
  {
    q: "Will the AI keep my product details accurate?",
    a: "Absolutely. Our system is optimized to preserve logos, colors, and shapes, so your product looks true to life in every creative.",
  },
  {
    q: "What if I run out of credits?",
    a: "Upgrade or buy add-ons.",
  },
  {
    q: "Do unused subscription credits roll over?",
    a: "No. Subscription credits reset at the start of each billing cycle. Any unused credits from the previous month do not carry over.",
  },
  {
    q: "Do top-up credits expire?",
    a: "No. Top-up credits never expire and stay in your account until you use them unlike subscriptions.",
  },
  {
    q: "Do I need design skills to use Adject?",
    a: "Not at all. Just upload your product photo, choose a template (or type a prompt), and Adject handles the rest, no design experience required.",
  },
  {
    q: "Can I use the generated images for commercial purposes?",
    a: "You are responsible for ensuring that the final output does not intentionally replicate or closely resemble identifiable third-party works, brands, or copyrighted designs.",
  },
];

function Icon({ open }: { open: boolean }) {
  return (
    <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[13px]">
      <svg
        viewBox="0 0 16 16"
        className={`size-[16px] transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        fill="none"
        aria-hidden
      >
        <path
          d="M8 2v12M2 8h12"
          stroke={open ? "#ffffff" : "#0a0a0a"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden px-[40px] pt-[99px] pb-[100px]">
      <img
        src="/superrad/upgrade/faq-bg.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[42px]">
        <h2 className="sr-sansplomb text-center font-normal leading-[1.0] text-[#ededec] text-[clamp(44px,7vw,72px)] [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]">
          Frequently Asked Questions
        </h2>

        <div className="flex w-full max-w-[800px] flex-col gap-[10px]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-[30px] p-[5px] ${isOpen ? "bg-[#f5f6fa]" : "bg-white"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-[25px] p-[20px] text-left ${isOpen ? "bg-[#1a0000]" : "bg-white"}`}
                >
                  <span
                    className={`sr-cabinet font-bold leading-[26px] tracking-[-0.6px] text-[19.2px] ${isOpen ? "text-white" : "text-[#0a0a0a]"}`}
                  >
                    {item.q}
                  </span>
                  <Icon open={isOpen} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      className="overflow-hidden"
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={
                        reduce
                          ? { duration: 0.15 }
                          : { duration: 0.22, ease: [0.23, 1, 0.32, 1] }
                      }
                    >
                      <div className="px-[20px] pt-[19px] pb-[20px]">
                        <p className="sr-cabinet font-medium leading-[22.5px] tracking-[-0.3px] text-[#0a0a0a] text-[14.3px] opacity-70">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
