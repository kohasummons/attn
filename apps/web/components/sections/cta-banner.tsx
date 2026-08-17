import Image from "next/image";

import { ButtonLink } from "@/components/ui/page-shell";

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
          <h2 className="text-[clamp(36px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            What kind of AI user are you?
          </h2>
          <p className="mt-5 text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.01em] text-white">
            Most people use AI in a way that doesn&rsquo;t match how they
            actually work. Answer a few questions and find out what fits you,
            plus what to learn next.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="https://ai-archetype-pied.vercel.app/"
              variant="light"
            >
              Find your archetype
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
