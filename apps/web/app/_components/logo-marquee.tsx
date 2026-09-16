import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

type Brand = {
  name: string;
  showName?: boolean;
  logo?: { src: string; width: number; height: number };
};

const brands: Brand[] = [
  { name: "Meta", logo: { src: "/images/brands/meta.png", width: 791, height: 160 } },
  {
    name: "Google Labs",
    logo: { src: "/images/brands/google-labs.png", width: 996, height: 160 },
  },
  { name: "Higgsfield" },
  { name: "Kimi", logo: { src: "/images/brands/kimi.png", width: 522, height: 160 } },
  {
    name: "Relume",
    logo: { src: "/images/brands/relume.png", width: 525, height: 160 },
  },
  {
    name: "Gamma",
    logo: { src: "/images/brands/gamma.png", width: 532, height: 160 },
  },
  {
    name: "Speak French Fast",
    logo: {
      src: "/images/brands/speak-french-fast.png",
      width: 252,
      height: 160,
    },
  },
  {
    name: "Abacus",
    logo: { src: "/images/brands/abacus.png", width: 965, height: 160 },
  },
  {
    name: "Red Bull",
    logo: { src: "/images/brands/red-bull.png", width: 239, height: 160 },
  },
  { name: "Liners", showName: true, logo: { src: "/images/brands/liners.png", width: 256, height: 256 } },
  {
    name: "Recall",
    logo: { src: "/images/brands/recall.png", width: 776, height: 160 },
  },
  {
    name: "KaneAI",
    logo: { src: "/images/brands/kaneai.png", width: 1020, height: 160 },
  },
];

export function LogoMarquee() {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white pt-6 md:pt-8">
      <p className="px-6 text-center text-[18px] font-medium tracking-[-0.02em] text-[#8a8a86] md:text-[22px]">
        Trusted by
      </p>
      <div className="relative w-full overflow-hidden">
        <Marquee
          repeat={2}
          className="w-full min-w-0 p-0 [--duration:90s] [--gap:0px] [&>div]:min-w-full"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex size-[160px] shrink-0 items-center justify-center gap-1.5 px-4 md:size-[272px] md:px-6"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo.src}
                  alt={brand.name}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className={brand.showName ? "size-7 shrink-0 object-contain select-none md:size-9" : "h-auto max-h-[34px] w-auto max-w-[110px] object-contain select-none md:max-h-[46px] md:max-w-[160px]"}
                />
              ) : (
                <span className="text-[16px] font-medium tracking-[-0.02em] whitespace-nowrap text-[#8a8a86] md:text-[22px]">
                  {brand.name}
                </span>
              )}
              {brand.showName && (
                <span aria-hidden="true" className="text-[20px] font-medium tracking-[-0.02em] text-[#171717] md:text-[28px]">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </Marquee>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[clamp(32px,8vw,160px)] bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[clamp(32px,8vw,160px)] bg-gradient-to-l from-white to-transparent"
        />
      </div>
    </div>
  );
}
