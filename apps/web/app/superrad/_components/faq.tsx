"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const faqs = [
  {
    q: "Is this beginner-friendly?",
    a: "Yes. We cover the complete process from idea development to final export. You do not need filmmaking experience. You only need a laptop, stable internet and a willingness to participate.",
  },
  {
    q: "Do I need every tool listed?",
    a: "No. You will learn how to choose a suitable tool for each stage, and your team will plan production so every person does not need to buy every subscription.",
  },
  {
    q: "Are AI tool subscriptions included?",
    a: "Third-party subscriptions and generation credits are not included unless your selected plan says otherwise. You will receive a tool checklist and recommended credit budget before the first session.",
  },
  {
    q: "Will I work alone?",
    a: "No. You will join a small team of three or four participants. Each person has a clear role, and the team works toward one completed film.",
  },
  {
    q: "What if I miss a live session?",
    a: "Replay access depends on your plan: three days for Silver, six months for Gold and twelve months for Diamond.",
  },
  {
    q: "Can I use the finished film in my portfolio?",
    a: "Yes, subject to the challenge rules and the rights attached to products, music and third-party assets. We will show you how to label unofficial concept work correctly.",
  },
  {
    q: "Will this guarantee a brand deal?",
    a: "No course can guarantee that. We will teach you how to present the project, package your service and approach brands with a specific idea; results depend on the quality and consistency of your work and outreach.",
  },
];

function Plus({ open }: { open: boolean }) {
  return (
    <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[13px]">
      <svg viewBox="0 0 16 16" className="size-[16px]" fill="none" aria-hidden>
        <path d="M8 3v10" stroke={open ? "#ffffff" : "#0a0a0a"} strokeWidth="2" strokeLinecap="round" className={open ? "hidden" : ""} />
        <path d="M3 8h10" stroke={open ? "#ffffff" : "#0a0a0a"} strokeWidth="2" strokeLinecap="round" />
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
        src="/superrad/faq/bg.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] min-h-full w-full object-cover"
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
                  <Plus open={isOpen} />
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
