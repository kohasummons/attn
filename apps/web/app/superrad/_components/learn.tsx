"use client";

import { motion } from "motion/react";
import { useReveal } from "./stagger";

type Inset = { top: string; right: string; bottom: string; left: string };

function LearnIcon({
  a,
  b,
  aInset,
  bInset,
}: {
  a: string;
  b: string;
  aInset: Inset;
  bInset: Inset;
}) {
  return (
    <div className="relative size-[30px] shrink-0">
      <img src={a} alt="" aria-hidden className="absolute max-w-none" style={aInset} />
      <img src={b} alt="" aria-hidden className="absolute max-w-none" style={bInset} />
    </div>
  );
}

const cells = [
  {
    a: "/superrad/learn-icons/i1a.svg",
    b: "/superrad/learn-icons/i1b.svg",
    aInset: { top: "15.63%", right: "15.63%", bottom: "15.63%", left: "6.25%" },
    bInset: { top: "12.5%", right: "12.5%", bottom: "12.5%", left: "3.13%" },
    title: "The SuperRad Framework",
    body: "Our Proved System that will make you a Master of Cinematic Content Creation with AI.",
    bodyWeight: 500,
  },
  {
    a: "/superrad/learn-icons/i2a.svg",
    b: "/superrad/learn-icons/i2b.svg",
    aInset: { top: "9.37%", right: "9.4%", bottom: "12.51%", left: "9.4%" },
    bInset: { top: "6.25%", right: "6.25%", bottom: "9.38%", left: "6.25%" },
    title: "Creative direction & Prompting",
    body: "Learn how to direct AI Video Models properly instead of endlessly rewriting prompts and hoping for a good result.",
    bodyWeight: 500,
  },
  {
    a: "/superrad/learn-icons/i3a.svg",
    b: "/superrad/learn-icons/i3b.svg",
    aInset: { top: "12.5%", right: "12.5%", bottom: "22.12%", left: "12.5%" },
    bInset: { top: "9.37%", right: "9.37%", bottom: "9.44%", left: "9.44%" },
    title: "Building consistent assets",
    body: "The hack to create your characters, products, locations, props, and visual references so every scene feels like it belongs in the same film.",
    bodyWeight: 500,
  },
  {
    a: "/superrad/learn-icons/i4a.svg",
    b: "/superrad/learn-icons/i4b.svg",
    aInset: { top: "15.63%", right: "15.64%", bottom: "25%", left: "15.64%" },
    bInset: { top: "6.25%", right: "10.81%", bottom: "9.36%", left: "10.83%" },
    title: "Editing and sound design",
    body: "How to bring your scenes + assests together with music, sound effects, dialogue, transitions and more.",
    bodyWeight: 500,
  },
  {
    a: "/superrad/learn-icons/i4a.svg",
    b: "/superrad/learn-icons/i4b.svg",
    aInset: { top: "15.63%", right: "15.64%", bottom: "25%", left: "15.64%" },
    bInset: { top: "6.25%", right: "10.81%", bottom: "9.36%", left: "10.83%" },
    title: "Cinematic AI commercials",
    body: "How to create product ads, brand films, launch videos, and cinematic commercials using AI from start to finish..",
    bodyWeight: 500,
  },
  {
    a: "/superrad/learn-icons/i4a.svg",
    b: "/superrad/learn-icons/i4b.svg",
    aInset: { top: "15.63%", right: "15.64%", bottom: "25%", left: "15.64%" },
    bInset: { top: "6.25%", right: "10.81%", bottom: "9.36%", left: "10.83%" },
    title: "Distribution & Getting Paid",
    body: "How to package, distribute your work, package your service, approach potential clients and get paid for your work.",
    bodyWeight: 500,
  },
];

function Cell({ cell }: { cell: (typeof cells)[number] }) {
  const { item } = useReveal();
  return (
    <motion.div variants={item} className="flex flex-1 flex-col items-start gap-[20px] py-[16px]">
      <LearnIcon a={cell.a} b={cell.b} aInset={cell.aInset} bInset={cell.bInset} />
      <div>
        <h3 className="sr-inter font-semibold leading-[30px] text-[#1e1e1e] text-[20px]">
          {cell.title}
        </h3>
        <p
          className="sr-inter mt-[3px] leading-[25.5px] text-[#4c4c4c] text-[17px]"
          style={{ fontWeight: cell.bodyWeight }}
        >
          {cell.body}
        </p>
      </div>
    </motion.div>
  );
}

function Divider() {
  return <div className="hidden w-px self-stretch bg-[#ded8d3] sm:block" />;
}

export function Learn() {
  const { container, viewport } = useReveal();
  return (
    <section className="w-full px-6 pt-[80px] lg:pt-[150px] pb-[80px] lg:pb-[150px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <h2 className="sr-greed text-center font-semibold leading-[1.0] text-[#1a0000] text-[clamp(52px,9vw,100px)]">
          What you will learn
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-[90px] flex w-full max-w-[1291px] flex-col gap-[20px]"
        >
          <div className="flex flex-col items-stretch gap-[20px] sm:flex-row sm:gap-[30px]">
            <Cell cell={cells[0]} />
            <Divider />
            <Cell cell={cells[1]} />
            <Divider />
            <Cell cell={cells[4]} />
          </div>
          <div className="flex flex-col items-stretch gap-[20px] sm:flex-row sm:gap-[30px]">
            <Cell cell={cells[2]} />
            <Divider />
            <Cell cell={cells[3]} />
            <Divider />
            <Cell cell={cells[5]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
