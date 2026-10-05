import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

import { brands } from "@/lib/brands";

export function LogoMarquee() {
  return (
    <div className="flex border-y border-[#e4e3de] bg-background">
      <div className="flex shrink-0 items-center border-r border-[#e4e3de] px-6 md:px-10">
        <span className="text-[13px] font-medium tracking-[-0.02em] whitespace-nowrap text-[#8a8a86] md:text-[14px]">
          Trusted by
        </span>
      </div>
      <Marquee
        repeat={2}
        className="min-w-0 flex-1 p-0 [--duration:90s] [--gap:0px]"
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex size-[160px] shrink-0 items-center justify-center border-l border-[#e4e3de] gap-2 px-4 md:size-[272px] md:px-6"
          >
            {brand.logo ? (
              <Image
                src={brand.logo.src}
                alt={brand.name}
                width={brand.logo.width}
                height={brand.logo.height}
                className={
                  brand.showName
                    ? "size-7 shrink-0 object-contain md:size-9"
                    : "h-auto max-h-[34px] w-auto max-w-[110px] object-contain select-none md:max-h-[46px] md:max-w-[160px]"
                }
              />
            ) : (
              <span className="text-[16px] font-medium tracking-[-0.02em] whitespace-nowrap text-[#8a8a86] md:text-[22px]">
                {brand.name}
              </span>
            )}
            {brand.showName && (
              <span
                aria-hidden="true"
                className="text-[20px] font-medium tracking-tight md:text-[28px]"
              >
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
