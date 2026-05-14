import Image from "next/image";

import { ArrowButton } from "@/components/ui/arrow-button";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#d9d9d9]">
      <Image
        src="/v2/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto min-h-[600px] max-w-[1166px] px-6 py-24">
        <div className="max-w-[535px]">
          <EyebrowLabel className="text-white">Intelligence</EyebrowLabel>
          <h2 className="mt-3 text-[clamp(36px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            Will your company scale or stall AI?
          </h2>
          <div className="mt-10">
            <ArrowButton variant="light" showArrow={false}>
              Train your team
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
