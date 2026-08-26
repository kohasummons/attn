"use client";

import { motion } from "motion/react";
import { useReveal } from "./stagger";

function Tick() {
  return (
    <svg viewBox="0 0 8 5" className="mt-[9px] h-[11px] w-[16px] shrink-0" fill="none" aria-hidden>
      <path d="M7.2 0.625L2.8 4.0625L0.8 2.5" stroke="#656565" strokeWidth="0.707107" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Plan = {
  name: string;
  emoji: string;
  desc: string;
  price: string;
  features: string[];
  cta: string;
  bg: string;
  border: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Silver",
    emoji: "🥈",
    desc: "For beginners ready to complete their first cinematic AI commercial. ",
    price: "$99.99",
    features: [
      "Pre-Accelerator Onboarding Session",
      "Access To The 3 day live sessions",
      "The SuperRad ⏤ Prompt Playbook, skills and templates",
      "Graduation & Networking Ceremony",
      "14 days of replay access",
      "Accountability partner",
    ],
    cta: "Invest",
    bg: "bg-[#f8f8f8]",
    border: "border border-[#ebebeb]",
  },
  // {
  //   name: "Gold",
  //   emoji: "🥇",
  //   desc: "For creators who want extended access, feedback and additional support.",
  //   price: "$149.99",
  //   features: [
  //     "Everything in Silver",
  //     "Six months of replay access",
  //     "Private Q&A WhatsApp group",
  //     "One instructor review of your team film",
  //     "Additional post-session support",
  //   ],
  //   cta: "I’m in",
  //   bg: "bg-white",
  //   border: "border border-[#2a2a2a]",
  //   popular: true,
  // },
  // {
  //   name: "Diamond",
  //   emoji: "💎",
  //   desc: "For professionals who want personal review and deeper feedback.",
  //   price: "$199.99",
  //   features: [
  //     "Everything in Gold",
  //     "Twelve months of replay access",
  //     "60-minute post-challenge group review",
  //     "Personal review and final feedback",
  //     "Free TranscriptX credits",
  //   ],
  //   cta: "I’m In",
  //   bg: "bg-[#f8f8f8]",
  //   border: "",
  // },
];

function PlanCard({ plan }: { plan: Plan }) {
  const { item } = useReveal();
  return (
    <motion.div
      variants={item}
      className={`relative flex min-h-[815px] w-full max-w-[458px] flex-col rounded-[30px] px-[45px] pt-[90px] pb-[45px] ${plan.bg} ${plan.border}`}
    >
      {plan.popular && (
        <span className="sr-inter absolute -top-[21px] left-1/2 flex h-[42px] -translate-x-1/2 items-center rounded-[12px] bg-[#2a2a2a] px-[24px] font-medium leading-none tracking-[-0.72px] text-white text-[18px]">
          Most Popular
        </span>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[36px] top-[3px] select-none leading-none text-[90px]"
      >
        {plan.emoji}
      </span>
      <h3 className="sr-inter leading-[48px] tracking-[-1.92px] text-black text-[48px]">
        {plan.name}
      </h3>
      <p className="sr-inter mt-[18px] max-w-[315px] font-medium leading-[29px] tracking-[-0.84px] text-[#8a8a8a] text-[21px]">
        {plan.desc}
      </p>
      <p className="sr-inter mt-[51px] font-medium leading-[54px] tracking-[-3.24px] text-black text-[54px]">
        {plan.price}
      </p>
      <div className="mt-[36px] border-t border-[#e8e8e8]" />
      <ul className="mt-[36px] flex flex-col gap-[15px]">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-[12px]">
            <Tick />
            <span className="sr-dmsans leading-[29px] tracking-[-0.84px] text-[#646464] text-[21px]">
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        data-posthog-event="pricing_cta_clicked"
        data-posthog-property="plan"
        data-posthog-value={plan.name}
        href={`https://nestuge.com/attn-superad?ref=${plan.name.toLowerCase()}`}
        className="sr-inter sr-stripes sr-stripes-hover mt-[20px] flex h-[65px] items-center justify-center rounded-[12px] bg-[#750af9] font-bold leading-none tracking-[-0.48px] text-white text-[24px] transition hover:brightness-110"
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export function Pricing() {
  const { container, viewport } = useReveal();
  return (
    <section id="pricing" className="flex w-full flex-col items-center gap-[76px] bg-white px-[40px] pt-[99px] pb-[100px]">
      <div className="flex flex-col items-center gap-[11px] text-center">
        <h2 className="sr-sansplomb font-normal leading-[1.0] text-[#1a0000] text-[clamp(44px,7vw,72px)]">
          Start Your Transformation Here
        </h2>
        <p className="sr-ppneue font-medium text-[#4f4d4d] text-[clamp(18px,2vw,24px)]">
          The Fastest Way to Learn How to Create Cinematic Content with AI
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex w-full flex-col items-center justify-center gap-[20px] md:flex-row md:items-stretch"
      >
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </motion.div>
    </section>
  );
}
