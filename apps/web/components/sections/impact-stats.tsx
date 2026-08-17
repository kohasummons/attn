"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ImpactCard = {
  label: string;
  sublabel: string;
  image: string;
};

const cards: ImpactCard[] = [
  {
    label: "Education",
    sublabel: "Membership for individuals & teams",
    image: "/v2/impact-education.png",
  },
  {
    label: "MVPs",
    sublabel: "Membership for individuals & teams",
    image: "/v2/impact-mvps-1.png",
  },
  {
    label: "MVPs",
    sublabel: "Membership for individuals & teams",
    image: "/v2/impact-mvps-2.png",
  },
  {
    label: "MVPs",
    sublabel: "Membership for individuals & teams",
    image: "/v2/impact-mvps-2.png",
  },
  {
    label: "MVPs",
    sublabel: "Membership for individuals & teams",
    image: "/v2/impact-mvps-2.png",
  },
];

export function ImpactStats() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 0);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector("article");
    const cardWidth = firstCard?.clientWidth ?? el.clientWidth * 0.8;
    el.scrollBy({ left: direction * (cardWidth + 4), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-20 pb-24 text-white md:pt-[135px] md:pb-[170px]">
      <div className="mx-auto max-w-[1166px] px-6">
        <div className="flex flex-col gap-4 md:items-start md:justify-between">
          <h2 className="text-[clamp(28px,5vw,40px)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            The Impact
          </h2>
          <p className="text-[14px] font-medium leading-[1.4] tracking-[-0.04em] text-[#dfdfdf]">
            At attention factory, we believe that great AI is built on trust,
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-12 overflow-x-auto md:mt-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto max-w-[1166px] px-6">
          <div className="flex w-fit gap-1">
            {cards.map((card, i) => (
              <article
                key={`${card.label}-${i}`}
                className="relative aspect-[3/2] w-[280px] shrink-0 overflow-hidden bg-[#d9d9d9] md:w-[480px]"
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 280px, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[#121212] px-4 py-3 md:gap-1.5 md:px-[22px] md:py-3.5">
                  <p className="text-[18px] font-medium leading-none tracking-[-0.04em] text-white md:text-[24px]">
                    {card.label}
                  </p>
                  <p className="text-[11px] font-normal leading-none tracking-[-0.04em] text-white md:text-[13px]">
                    {card.sublabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-[1166px] px-6 md:mt-[35px]">
        <div className="flex items-center gap-[22px]">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            className="flex h-[36px] w-[37px] items-center justify-center text-white transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            className="flex h-[36px] w-[37px] items-center justify-center text-white transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
