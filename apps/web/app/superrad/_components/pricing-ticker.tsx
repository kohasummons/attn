import type { CSSProperties } from "react";

const T = "/superrad/ticker";

type Chip = { src: string; box: CSSProperties; inner: CSSProperties };

// Crops expressed as % of the 254px circle (from Figma node 78:4879).
const chips: Chip[] = [
  {
    src: `${T}/tubedancer.webp`,
    box: { left: "15.51%", top: "14.79%", width: "69.06%", height: "183.68%" },
    inner: { left: "0", top: "0", width: "265.97%", height: "100%" },
  },
  {
    src: `${T}/face.webp`,
    box: { left: "-6.55%", top: "4.67%", width: "102.19%", height: "129.15%" },
    inner: { left: "0", top: "0", width: "224.69%", height: "100%" },
  },
  {
    src: `${T}/headphones.webp`,
    box: { left: "22.15%", top: "13.09%", width: "55.7%", height: "73.93%" },
    inner: { left: "-5.72%", top: "-27.28%", width: "379%", height: "160.61%" },
  },
  {
    src: `${T}/bag.webp`,
    box: { left: "22.6%", top: "-15.7%", width: "54.84%", height: "131.51%" },
    inner: { left: "0", top: "0", width: "239.81%", height: "100%" },
  },
  {
    src: `${T}/boss.webp`,
    box: { left: "-7.98%", top: "-7.54%", width: "115.97%", height: "136.33%" },
    inner: { left: "0", top: "0", width: "207.89%", height: "100%" },
  },
];

function ChipCircle({ chip }: { chip: Chip }) {
  return (
    <div className="relative mr-[80px] lg:mr-[173px] size-[254px] shrink-0 overflow-hidden rounded-full bg-[#f8f8f8]">
      <div className="absolute overflow-hidden" style={chip.box}>
        <img src={chip.src} alt="" aria-hidden className="absolute max-w-none" style={chip.inner} />
      </div>
    </div>
  );
}

export function PricingTicker() {
  return (
    <section className="w-full overflow-hidden bg-white lg:py-[124px]">
      <div
        className="sr-marquee-track flex w-max items-center"
        style={{ animationDirection: "reverse" }}
      >
        {[...chips, ...chips].map((chip, i) => (
          <ChipCircle key={i} chip={chip} />
        ))}
      </div>
    </section>
  );
}
