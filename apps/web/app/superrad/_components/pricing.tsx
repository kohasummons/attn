"use client";

import { motion } from "motion/react";
import { useReveal } from "./stagger";

function Tick() {
  return (
    <svg viewBox="0 0 8 5" className="mt-[6px] h-[7px] w-[11px] shrink-0" fill="none" aria-hidden>
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
    desc: "Perfect for solo founders and first growth hires",
    price: "$99.99",
    features: [
      "All three live sessions",
      "Small production team placement",
      "Prompt Playbook, skills and templates",
      "Three days of replay access",
      "Accountability partner",
    ],
    cta: "I’m In",
    bg: "bg-[#f8f8f8]",
    border: "border border-[#ebebeb]",
  },
  {
    name: "Gold",
    emoji: "🥇",
    desc: "Built for lean marketing and sales teams",
    price: "$149.99",
    features: [
      "Everything in Silver",
      "Six months of replay access",
      "Private Q&A WhatsApp group",
      "One instructor review of your team film",
      "Additional post-session support",
    ],
    cta: "I’m in",
    bg: "bg-white",
    border: "border border-[#2a2a2a]",
    popular: true,
  },
  {
    name: "Diamond",
    emoji: "💎",
    desc: "Help your teams scale faster with agentic collaboration",
    price: "$199.99",
    features: [
      "Everything in Gold",
      "Twelve months of replay access",
      "60-minute post-challenge group review",
      "Personal review and final feedback",
      "Free TranscriptX credits",
    ],
    cta: "I’m In",
    bg: "bg-[#f8f8f8]",
    border: "",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const { item } = useReveal();
  return (
    <motion.div
      variants={item}
      className={`relative flex min-h-[543px] w-full max-w-[305px] flex-col rounded-[20px] px-[30px] pt-[60px] pb-[30px] ${plan.bg} ${plan.border}`}
    >
      {plan.popular && (
        <span className="sr-inter absolute -top-[14px] left-1/2 flex h-[28px] -translate-x-1/2 items-center rounded-[8px] bg-[#2a2a2a] px-[16px] font-medium leading-none tracking-[-0.48px] text-white text-[12px]">
          Most Popular
        </span>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[24px] top-[2px] select-none leading-none text-[60px]"
      >
        {plan.emoji}
      </span>
      <h3 className="sr-inter leading-[32px] tracking-[-1.28px] text-black text-[32px]">
        {plan.name}
      </h3>
      <p className="sr-inter mt-[12px] max-w-[210px] font-medium leading-[19.6px] tracking-[-0.56px] text-[#8a8a8a] text-[14px]">
        {plan.desc}
      </p>
      <p className="sr-inter mt-[34px] font-medium leading-[36px] tracking-[-2.16px] text-black text-[36px]">
        {plan.price}
      </p>
      <div className="mt-[24px] border-t border-[#e8e8e8]" />
      <ul className="mt-[24px] flex flex-col gap-[16px]">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-[8px]">
            <Tick />
            <span className="sr-inter leading-[19.6px] tracking-[-0.56px] text-[#646464] text-[14px]">
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={`https://nestuge.com/attn-superad?ref=${plan.name.toLowerCase()}`}
        className="sr-inter mt-auto flex h-[43.2px] items-center justify-center rounded-[8px] bg-[#750af9] font-medium leading-none tracking-[-0.32px] text-white text-[16px]"
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
