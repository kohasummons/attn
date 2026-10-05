"use client";

import posthog from "posthog-js";
import type { Currency } from "./currency";

export function ScrollHero({
  checkoutUrl,
  currency,
}: {
  checkoutUrl: string;
  currency?: Currency;
}) {
  return (
    <div className="mx-auto w-full max-w-[900px] px-5 pt-12 pb-16 sm:px-14 sm:pt-16 sm:pb-24">
      <div className="font-medium mb-3 inline-flex flex-wrap items-center gap-2 bg-white px-2 py-[2px] text-[11px] uppercase -tracking-[0.0.6] text-[#888]">
        <span>ai accelerator</span>
        <span className="text-neutral-300">✦</span>
        <span className="text-neutral-950">starts july 1</span>
      </div>

      <h1 className="mb-5 text-[40px] font-medium leading-[1.12] tracking-[-0.045em] text-[#0a0a0a] sm:text-[60px]">
        build ai skills that pay you, scale your business, land you clients and
        jobs, get you promoted, and run your life.
      </h1>

      <p className="mb-8 max-w-[720px] text-[17px] leading-[1.55] tracking-[-0.3px] text-[#888] sm:text-[19px]">
        Go from zero to Executing with AI in 7 days.
      </p>

      <div className="flex flex-col items-start gap-4">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            posthog.capture("enroll_clicked", { source: "hero", currency });
          }}
          className="inline-flex items-center gap-2  bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
        >
          Become an AI Fellow <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
