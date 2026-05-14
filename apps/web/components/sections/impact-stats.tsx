import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-[135px] pb-[170px] text-white">
      <div className="mx-auto max-w-[1166px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="text-[40px] font-medium leading-none tracking-[-0.04em] text-white whitespace-nowrap">
            The Impact we&rsquo;ve made
          </h2>
          <p className="text-[14px] font-medium leading-[1.4] tracking-[-0.04em] text-[#dfdfdf] md:w-[213px]">
            At Grossman, we believe that great partnerships are built on trust,
          </p>
        </div>
      </div>

      <div className="mt-24 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto max-w-[1166px] px-6">
          <div className="flex w-[1808px] gap-1">
            {cards.map((card, i) => (
              <article
                key={`${card.label}-${i}`}
                className="relative h-[400px] w-[600px] shrink-0 overflow-hidden bg-[#d9d9d9]"
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="600px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-[105px] bg-[#121212]">
                  <p className="absolute left-[27px] top-[13px] text-[33px] font-medium leading-none tracking-[-0.04em] text-white whitespace-nowrap">
                    {card.label}
                  </p>
                  <p className="absolute left-[24px] top-[59px] text-[16px] font-normal leading-none tracking-[-0.04em] text-white whitespace-nowrap">
                    {card.sublabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[35px] max-w-[1166px] px-6">
        <div className="flex items-center gap-[22px]">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-[36px] w-[37px] items-center justify-center text-white transition-opacity hover:opacity-70"
          >
            <ChevronLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-[36px] w-[37px] items-center justify-center text-white transition-opacity hover:opacity-70"
          >
            <ChevronRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
