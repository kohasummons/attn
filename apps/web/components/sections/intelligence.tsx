import { ArrowRight } from "lucide-react";

import { EyebrowLabel } from "@/components/ui/eyebrow-label";

export function Intelligence() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1166px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[584px]">
            <EyebrowLabel className="text-[#111400]">Intelligence</EyebrowLabel>
            <h2 className="mt-3 text-[clamp(28px,4vw,44px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#111400]">
              Research &amp; Intelligence
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-[#111400] hover:opacity-70 transition-opacity"
          >
            View all
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-1 lg:grid-cols-2">
          <div className="aspect-[1166/700] w-full bg-[#d9d9d9]" />
          <div className="aspect-[1166/700] w-full bg-[#d9d9d9]" />
        </div>
      </div>
    </section>
  );
}
