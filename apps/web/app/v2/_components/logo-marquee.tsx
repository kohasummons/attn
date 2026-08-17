import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

type Brand = {
  name: string;
  logo?: { src: string; width: number; height: number };
};

const brands: Brand[] = [
  { name: "Meta", logo: { src: "/v2/brands/meta.png", width: 791, height: 160 } },
  {
    name: "Google Labs",
    logo: { src: "/v2/brands/google-labs.png", width: 996, height: 160 },
  },
  { name: "Higgsfield" },
  { name: "Kimi", logo: { src: "/v2/brands/kimi.png", width: 522, height: 160 } },
  {
    name: "Relume",
    logo: { src: "/v2/brands/relume.png", width: 525, height: 160 },
  },
  {
    name: "Gamma",
    logo: { src: "/v2/brands/gamma.png", width: 532, height: 160 },
  },
  {
    name: "Speak French Fast",
    logo: {
      src: "/v2/brands/speak-french-fast.png",
      width: 252,
      height: 160,
    },
  },
  {
    name: "Abacus",
    logo: { src: "/v2/brands/abacus.png", width: 965, height: 160 },
  },
  {
    name: "Red Bull",
    logo: { src: "/v2/brands/red-bull.png", width: 239, height: 160 },
  },
  { name: "Liners" },
  {
    name: "Recall",
    logo: { src: "/v2/brands/recall.png", width: 776, height: 160 },
  },
  {
    name: "KaneAI",
    logo: { src: "/v2/brands/kaneai.png", width: 1020, height: 160 },
  },
];

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
            className="flex size-[160px] shrink-0 items-center justify-center border-l border-[#e4e3de] px-4 md:size-[272px] md:px-6"
          >
            {brand.logo ? (
              <Image
                src={brand.logo.src}
                alt={brand.name}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-auto max-h-[34px] w-auto max-w-[110px] object-contain select-none md:max-h-[46px] md:max-w-[160px]"
              />
            ) : (
              <span className="text-[16px] font-medium tracking-[-0.02em] whitespace-nowrap text-[#8a8a86] md:text-[22px]">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
