"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

type PhotoCard = {
  kind: "photo";
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  image: string;
  name: string;
  quote: string;
};

type StatCard = {
  kind: "stat";
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  heading: string;
  stat: string;
  label: string;
};

type FeatureCard = {
  kind: "feature";
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  heading: string;
  stat: string;
  label: string;
  image: string;
};

type TeamCard = PhotoCard | StatCard | FeatureCard;

const cards: TeamCard[] = [
  {
    kind: "photo",
    company: "Vercel",
    logo: "/v2/team/logo-vercel.svg",
    logoWidth: 74,
    logoHeight: 14,
    image: "/v2/team/portrait-vercel.jpg",
    name: "AI Engineering & Integration",
    quote: "“We design, build & Integrate AI systems to mulitply your results.”",
  },
  {
    kind: "photo",
    company: "Dropbox",
    logo: "/v2/team/logo-dropbox.svg",
    logoWidth: 102,
    logoHeight: 20,
    image: "/v2/team/portrait-dropbox.jpg",
    name: "Attention Engineering",
    quote:
      "“We funnel attention to your business with educational media that converts”",
  },
  {
    kind: "stat",
    company: "Coursera",
    logo: "/v2/team/logo-coursera.svg",
    logoWidth: 85,
    logoHeight: 12,
    heading: "How Coursera builds next-generation learning tools",
    stat: "45x",
    label: "More feedback with AI grading",
  },
  {
    kind: "feature",
    company: "Notion",
    logo: "/v2/team/logo-notion.svg",
    logoWidth: 88,
    logoHeight: 32,
    heading: "Build & Monetize AI Skills in One Weekend",
    stat: "Weekends of AI",
    label: "",
    image: "/v2/team/illustration-notion.jpg",
  },
  {
    kind: "photo",
    company: "Notion",
    logo: "/v2/team/logo-notion.svg",
    logoWidth: 83,
    logoHeight: 30,
    image: "/v2/team/portrait-notion.jpg",
    name: "Agents & Workflow Automation",
    quote:
      "“We multiply human efforts with Intelligent Agents getting the work done”",
  },
  {
    kind: "photo",
    company: "Replit",
    logo: "/v2/team/logo-replit.svg",
    logoWidth: 84,
    logoHeight: 30,
    image: "/v2/team/portrait-replit.jpg",
    name: "Luis Héctor Chávez, CTO",
    quote:
      "“Braintrust helped us identify several patterns that we wouldn't have found.”",
  },
  // {
  //   kind: "stat",
  //   company: "Graphite",
  //   logo: "/v2/team/logo-graphite.svg",
  //   logoWidth: 112,
  //   logoHeight: 22,
  //   heading: "How Graphite builds reliable AI code review at scale",
  //   stat: "5%",
  //   label: "Reduction in negative rules",
  // },
  // {
  //   kind: "photo",
  //   company: "Navan",
  //   logo: "/v2/team/logo-navan.svg",
  //   logoWidth: 62,
  //   logoHeight: 14,
  //   image: "/v2/team/portrait-navan.jpg",
  //   name: "Sarav Bhatia, Sr. Dir. of Engineering",
  //   quote:
  //     "“Braintrust is the core of our evaluation framework process.”",
  // },
];

function PhotoTile({ card }: { card: PhotoCard }) {
  return (
    <article data-play-card className="relative cursor-pointer overflow-hidden md:cursor-none">
      <Image
        src={card.image}
        alt={card.name}
        fill
        sizes="(max-width: 1024px) 100vw, 380px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent to-50%" />
      <Image
        src={card.logo}
        alt={card.company}
        width={card.logoWidth}
        height={card.logoHeight}
        unoptimized
        className="absolute top-8 left-8"
      />
      <div className="absolute right-8 bottom-8 left-8 flex flex-col gap-2">
        <p className="text-[14px] leading-[20px] tracking-[-0.02em] text-[#d4d4d4]">
          {card.name}
        </p>
        <p className="text-[24px] leading-[1.2] tracking-[-0.02em] text-white">
          {card.quote}
        </p>
      </div>
    </article>
  );
}

function StatTile({ card }: { card: StatCard }) {
  return (
    <article className="flex flex-col justify-between bg-[#262626] p-8">
      <div className="flex h-8 items-center">
        <Image
          src={card.logo}
          alt={card.company}
          width={card.logoWidth}
          height={card.logoHeight}
          unoptimized
        />
      </div>
      <p className="max-w-[310px] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#d4d4d4]">
        {card.heading}
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-[48px] leading-none tracking-[-0.02em] text-white">
          {card.stat}
        </p>
        <p className="text-[16px] leading-[20px] tracking-[-0.02em] text-[#737373]">
          {card.label}
        </p>
      </div>
    </article>
  );
}

function FeatureTile({ card }: { card: FeatureCard }) {
  return (
    <article className="flex overflow-hidden bg-white bg-cover bg-center lg:col-span-2">
      <div className="flex flex-1 flex-col justify-between p-8">
        <div className="flex h-8 items-center">
          {/* <Image
            src={card.logo}
            alt={card.company}
            width={card.logoWidth}
            height={card.logoHeight}
            unoptimized
          /> */}
        </div>
        <p className="max-w-[280px] text-[24px] leading-[1.2] tracking-[-0.02em] text-[#262626]">
          {card.heading}
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-[48px] leading-none tracking-[-0.02em] text-black">
            {card.stat}
          </p>
          <p className="text-[16px] leading-[20px] tracking-[-0.02em] text-[#737373]">
            {card.label}
          </p>
        </div>
      </div>
      <div className="relative hidden flex-1 md:block">
        <Image
          src={card.image}
          alt=""
          fill
          sizes="380px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export function Services() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const setCursorVisible = (visible: boolean) => {
    const el = cursorRef.current;
    if (!el) return;
    el.style.opacity = visible ? "1" : "0";
    el.style.transform = `translate(-50%, -50%) scale(${visible ? 1 : 0.75})`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cursorRef.current;
    if (!el) return;
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
    setCursorVisible(!!(e.target as HTMLElement).closest("[data-play-card]"));
  };

  return (
    <section className="bg-[#0a0a0a] py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1166px] px-6">
        <h2 className="text-[clamp(28px,5vw,48px)] font-medium leading-[1.05] tracking-[-0.04em] text-ce">
          <span className="block text-white">
            Multipliying your results
          </span>
          <span className="block text-[#6a7282]">
            From zero to scale
          </span>
        </h2>

        {/* <a
          href="#"
          className="mt-10 inline-flex h-8 items-center gap-2 rounded-full bg-[rgba(243,244,246,0.15)] px-3 text-[16px] leading-none tracking-[-0.02em] text-[#f3f4f6] transition-colors hover:bg-[rgba(243,244,246,0.25)]"
        >
          Meet all the teams
          <ArrowRight className="size-3" strokeWidth={2} />
        </a> */}

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setCursorVisible(false)}
          className="mt-12 grid auto-rows-[400px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) =>
            card.kind === "photo" ? (
              <PhotoTile key={`${card.company}-${card.name}`} card={card} />
            ) : card.kind === "stat" ? (
              <StatTile key={card.company} card={card} />
            ) : (
              <FeatureTile key={`${card.company}-feature`} card={card} />
            ),
          )}
        </div>
      </div>

      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed z-50 hidden items-center gap-1 rounded-full bg-[#ff4100] px-4 py-2 md:flex"
        style={{
          left: -100,
          top: -100,
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.75)",
          transition: "opacity 200ms ease-out, transform 200ms ease-out",
        }}
      >
        <Play className="size-3 text-white" fill="currentColor" stroke="none" />
        <span className="text-xs whitespace-nowrap text-white uppercase">
          Play
        </span>
      </div>
    </section>
  );
}
