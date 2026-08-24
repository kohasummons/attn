import { Countdown } from "./countdown";

type Pos = { left: string; top: string; width: string; height: string };

const mercyBio = [
  "Mercy Thaddeus is a self-taught AI software engineer and educator, and the Co-founder of Attention Factory, an AI education company helping Africans use artificial intelligence to solve real problems, build businesses, and create new opportunities.",
  "Her work in AI education has reached over 250,000 people, with partnerships spanning Google, Meta, Kimi AI, and Cursor. She’s also an AI builder, creating AI products and solutions for businesses across different industries.",
  "Recognized among Nigeria’s Top 10 Meta AI Creators in 2026 and named one of the 10Alytics 50 Women in Data & Tech, Mercy is passionate about making AI practical, accessible, and focused on real-world impact.",
];

const joshuaBio = [
  "Joshua Omobola is an AI product builder, software engineer, and educator, and the Co-founder and CEO of Attention Factory, an AI education and technology company helping Africans use artificial intelligence to build useful products, improve their work, and create new opportunities.",
  "His work spans AI products, automation, AI agents, and business systems. Through free masterclasses, online content, and programs such as Weekends of AI, his work has reached over 100,000 people and helped more than 3,200 Africans gain practical AI skills.",
  "Joshua also works with businesses to turn ideas and manual processes into working software, automated systems, and AI solutions. He is passionate about helping Africans move beyond simply using AI tools to building products, businesses, and careers with them.",
];

function ImageCard({
  bg,
  portrait,
  bgPos,
  portraitPos,
  className = "",
}: {
  bg: string;
  portrait: string;
  bgPos: Pos;
  portraitPos: Pos;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[684/391] w-full shrink-0 overflow-hidden rounded-[4px] bg-[rgba(0,0,0,0.02)] lg:w-[684px] ${className}`}
    >
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute max-w-none object-cover"
        style={bgPos}
      />
      <img
        src={portrait}
        alt=""
        className="absolute max-w-none object-cover"
        style={portraitPos}
      />
    </div>
  );
}

function BioCard({ name, bio }: { name: string; bio: string[] }) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-[17px] bg-[#f8f8f8] px-[16.55px] py-[14.8px] lg:w-[578px]">
      <p className="sr-greed-normal text-left font-semibold text-[#1a0000] text-[27.87px]">
        {name}
      </p>
      <div className="sr-hedvig flex flex-col gap-[24px] text-[#0c0a09] text-[17.42px] leading-[24.04px] tracking-[-0.42px]">
        {bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

// Reuses the v2 index "Trusted by" logo set (public/v2/brands).
const logos: { name: string; src?: string }[] = [
  { name: "Meta", src: "/v2/brands/meta.png" },
  { name: "Google Labs", src: "/v2/brands/google-labs.png" },
  { name: "Higgsfield" },
  { name: "Kimi", src: "/v2/brands/kimi.png" },
  { name: "Relume", src: "/v2/brands/relume.png" },
  { name: "Gamma", src: "/v2/brands/gamma.png" },
  { name: "Speak French Fast", src: "/v2/brands/speak-french-fast.png" },
  { name: "Abacus", src: "/v2/brands/abacus.png" },
  { name: "Red Bull", src: "/v2/brands/red-bull.png" },
  { name: "Liners" },
  { name: "Recall", src: "/v2/brands/recall.png" },
  { name: "KaneAI", src: "/v2/brands/kaneai.png" },
];

function BrandMarquee() {
  const strip =
    "linear-gradient(90deg, rgba(243,242,230,0) 0%, rgb(243,242,230) 10%, rgb(243,242,230) 90%, rgba(243,242,230,0) 100%)";
  const fade =
    "linear-gradient(90deg, rgb(243,242,230) 0%, rgba(243,242,230,0) 10%, rgba(243,242,230,0) 90%, rgb(243,242,230) 100%)";
  return (
    <div className="mx-auto flex max-w-[1291px] items-center">
      <p className="sr-instrument hidden w-[150px] shrink-0 font-medium leading-[17.94px] text-[#6f6f6f] text-[13px] tracking-[-0.14px] md:block">
        Brands we&rsquo;ve Worked with
      </p>
      <div
        className="relative h-[48px] flex-1 overflow-hidden"
        style={{ backgroundImage: strip }}
      >
        <div className="sr-marquee-track flex h-full w-max items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex h-full items-center pr-[40px]">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[28px] w-auto max-w-[140px] object-contain"
                />
              ) : (
                <span className="sr-instrument whitespace-nowrap font-medium text-[#6f6f6f] text-[18px]">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: fade }}
        />
      </div>
    </div>
  );
}

export function Instructors() {
  return (
    <section className="w-full bg-[#ffffff]">
      {/* divider bar */}
      <div className="flex h-[58px] w-full items-center justify-center bg-[#f6f6f6]">
        <Countdown />
      </div>

      <h2 className="sr-greed mt-[70px] text-center font-semibold leading-[1.0] text-[#1a0000] text-[clamp(40px,5vw,60px)]">
        Built &amp; taught by
      </h2>

      {/* Instructor 1 — Mercy (image left) */}
      <div className="mx-auto mt-[64px] flex max-w-[1291px] flex-col items-stretch gap-[28px] px-6 lg:flex-row">
        <ImageCard
          bg="/superrad/instructors/mercy-bg.webp"
          portrait="/superrad/instructors/mercy-portrait.webp"
          bgPos={{
            left: "-10.48%",
            top: "0",
            width: "114.95%",
            height: "110.6%",
          }}
          portraitPos={{
            left: "9.35%",
            top: "-19.59%",
            width: "75.51%",
            height: "180.74%",
          }}
        />
        <BioCard name="Mercy Thaddeus" bio={mercyBio} />
      </div>

      {/* Brand marquee */}
      <div className="mt-[40px]">
        <BrandMarquee />
      </div>

      {/* Instructor 2 — Joshua (image right) */}
      <div className="mx-auto mt-[40px] flex max-w-[1291px] flex-col items-stretch gap-[28px] px-6 lg:flex-row">
        <BioCard name="Joshua Omobola" bio={joshuaBio} />
        <ImageCard
          className="order-first lg:order-none"
          bg="/superrad/instructors/joshua-bg.webp"
          portrait="/superrad/instructors/joshua-portrait.webp"
          bgPos={{
            left: "-13.37%",
            top: "-12.53%",
            width: "119.84%",
            height: "115.3%",
          }}
          portraitPos={{
            left: "15.55%",
            top: "-32.73%",
            width: "68.81%",
            height: "215.9%",
          }}
        />
      </div>
    </section>
  );
}
