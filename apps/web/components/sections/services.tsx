import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ServiceCard = {
  eyebrow: string;
  title: string;
  subline: string;
  href: string;
  /** Full-bleed artwork with live text above it. */
  background: string;
  /** Featured tile spans two columns on larger screens. */
  wide?: boolean;
};

const cards: ServiceCard[] = [
  {
    eyebrow: "Learn and build",
    title: "Attention University",
    subline:
      "THe AI University that take you from beginner to builder.",
    href: "https://app.attentionfactory.io",
    background: "/images/backgrounds/attention-university.png",
  },
  {
    eyebrow: "For your whole team",
    title: "Team Enablement",
    subline:
      "AI transformation, coaching, and strategy that stick past the pilot.",
    href: "/organizations",
    background: "/images/backgrounds/team-enablement.png",
  },
  {
    eyebrow: "Build with us",
    title: "AI Engineering & Automation",
    subline: "Apps, agents, and automations shipped in weeks, not months.",
    href: "/services/software-building",
    background: "/images/backgrounds/ai-engineering.png",
  },
  {
    eyebrow: "Community Program",
    title: "Weekends of AI",
    subline:
      "Live sessions that turn AI curiosity into skills you can use Monday.",
    href: "https://weekendsofai.com",
    background: "/images/backgrounds/weekends-of-ai.png",
    wide: true,
  },
  {
    eyebrow: "Research & writing",
    title: "Attention Factory Intelligence",
    subline: "Our read on where AI is actually going.",
    href: "/intelligence",
    background: "/images/backgrounds/intelligence.png",
  },
  {
    eyebrow: "What we're building",
    title: "The Lab",
    subline: "The products and experiments we ship, for us and for clients.",
    href: "/the-lab",
    background: "/images/backgrounds/the-lab.png",
  },
];

function ServiceTile({ card }: { card: ServiceCard }) {
  const external = card.href.startsWith("http");
  return (
    <Link
      href={card.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[16px]! bg-black p-8 transition-[translate] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${card.wide ? "md:col-span-2" : ""}`}
    >
      <Image
        src={card.background}
        alt=""
        fill
        sizes={
          card.wide
            ? "(max-width: 1023px) 100vw, 746px"
            : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 373px"
        }
        className="pointer-events-none object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,12,35,0.25)_0%,transparent_35%,rgba(5,12,35,0.2)_60%,rgba(5,12,35,0.6)_100%)]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <p className="text-[13px] leading-none font-medium tracking-[-0.02em] text-white/90 transition-colors duration-500 group-hover:text-white">
          {card.eyebrow}
        </p>
        <ArrowUpRight
          aria-hidden
          className="size-5 shrink-0 text-white/90 transition-[rotate,color] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-45 group-hover:text-white motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative flex flex-col gap-3">
        <h3
          className={
            card.wide
              ? "text-[clamp(36px,4.5vw,56px)] leading-[1.05] font-medium tracking-[-0.04em] text-white"
              : "max-w-[280px] text-[28px] leading-[1.1] font-medium tracking-[-0.03em] text-white"
          }
        >
          {card.title}
        </h3>
        <p
          className={`leading-[1.45] tracking-[-0.01em] text-white/90 ${card.wide ? "max-w-[420px] text-[16px]" : "max-w-[300px] text-[15px]"}`}
        >
          {card.subline}
        </p>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-black py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1166px] px-6">
        <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-white">
          Find your next step with AI.
        </h2>
        <p className="mt-4 text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.01em] text-white/70">
          Everything you need to leverage AI is here
        </p>

        <div className="mt-12 grid auto-rows-[400px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ServiceTile key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
