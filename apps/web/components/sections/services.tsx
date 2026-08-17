import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ServiceCard = {
  eyebrow: string;
  title: string;
  subline: string;
  href: string;
  /** Each card gets its own bloom, isolated on black. */
  flower?: string;
  /** The wide white accent tile — spans two columns, no flower. */
  wide?: boolean;
};

const cards: ServiceCard[] = [
  {
    eyebrow: "Learn and build",
    title: "Attention University",
    subline:
      "THe AI University that take you from beginner to builder.",
    href: "https://app.attentionfactory.io",
    flower: "peony",
  },
  {
    eyebrow: "For your whole team",
    title: "Team Enablement",
    subline:
      "AI transformation, coaching, and strategy that stick past the pilot.",
    href: "/v2/organizations",
    flower: "iris",
  },
  {
    eyebrow: "Build with us",
    title: "AI Engineering & Automation",
    subline: "Apps, agents, and automations shipped in weeks, not months.",
    href: "/v2/services/software-building",
    flower: "rose",
  },
  {
    eyebrow: "Community Program",
    title: "Weekends of AI",
    subline:
      "Live sessions that turn AI curiosity into skills you can use Monday.",
    href: "https://weekendsofai.com",
    wide: true,
  },
  {
    eyebrow: "Research & writing",
    title: "Attention Factory Intelligence",
    subline: "Our read on where AI is actually going.",
    href: "/v2/intelligence",
    flower: "dahlia",
  },
  {
    eyebrow: "What we're building",
    title: "The Lab",
    subline: "The products and experiments we ship, for us and for clients.",
    href: "/v2/the-lab",
    flower: "lotus",
  },
];

function DarkTile({ card }: { card: ServiceCard }) {
  const external = card.href.startsWith("http");
  return (
    <Link
      href={card.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-black p-8 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/30"
    >
      {/* The bloom — shot on black, so it drops straight onto the card with
          no overlay. Hidden at rest, fades in on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-[1.06] bg-[length:auto_58%] bg-no-repeat opacity-10 transition-[opacity,transform] duration-[700ms] ease-out group-hover:scale-100 group-hover:opacity-100"
        style={{
          backgroundImage: `url('/images/flowers/${card.flower}.webp')`,
          backgroundPosition: "80% 42%",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <p className="text-[13px] leading-none font-medium tracking-[-0.02em] text-white/45 transition-colors duration-500 group-hover:text-white/75">
          {card.eyebrow}
        </p>
        <ArrowUpRight
          aria-hidden
          className="size-5 shrink-0 text-white/40 transition-colors duration-500 group-hover:text-white"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className="max-w-[280px] text-[28px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
          {card.title}
        </h3>
        <p className="max-w-[300px] text-[15px] leading-[1.45] tracking-[-0.01em] text-white/70">
          {card.subline}
        </p>
      </div>
    </Link>
  );
}

function WideTile({ card }: { card: ServiceCard }) {
  const external = card.href.startsWith("http");
  return (
    <Link
      href={card.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex flex-col justify-between overflow-hidden bg-white p-8 transition-transform duration-500 ease-out hover:-translate-y-1 md:col-span-2"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[13px] leading-none font-medium tracking-[-0.02em] text-black/45 transition-colors duration-500 group-hover:text-black/70">
          {card.eyebrow}
        </p>
        <ArrowUpRight
          aria-hidden
          className="size-5 shrink-0 text-black/40 transition-colors duration-500 group-hover:text-black"
          strokeWidth={1.5}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-medium tracking-[-0.04em] text-black">
          {card.title}
        </h3>
        <p className="max-w-[420px] text-[16px] leading-[1.45] tracking-[-0.01em] text-black/60">
          {card.subline}
        </p>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section className="bg-black py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1166px] px-6">
        <h2 className="text-ce text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
          <span className="block text-white">Multipliying your results</span>
          <span className="block text-[#6a7282]">From zero to scale</span>
        </h2>

        <div className="mt-12 grid auto-rows-[400px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) =>
            card.wide ? (
              <WideTile key={card.title} card={card} />
            ) : (
              <DarkTile key={card.title} card={card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
