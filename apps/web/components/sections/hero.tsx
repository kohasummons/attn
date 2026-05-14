import Image from "next/image";

import { ArrowButton } from "@/components/ui/arrow-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#121313]">
      <Image
        src="/v2/background-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto flex min-h-[832px] max-w-[1166px] flex-col items-center justify-start px-6 pt-[173px] pb-20 text-center">
        <h1 className="font-medium tracking-[-0.04em] text-[#fdfdfd] text-[clamp(48px,8vw,83px)] leading-[0.98]">
          <span className="block">Ship or Sink.</span>
          <span className="block">and never sleeps.</span>
        </h1>

        <p className="mt-10 max-w-[846px] text-[clamp(18px,2vw,28px)] leading-[1.2] tracking-[-0.02em] text-[#fdfdfd]">
          Section turns AI investment into workforce transformation and ROI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <ArrowButton variant="dark">Join the Community</ArrowButton>
          <ArrowButton variant="light" showArrow={false}>
            Train your team
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
