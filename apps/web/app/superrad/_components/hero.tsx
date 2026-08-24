import { EnrollButton } from "./enroll-button";
import { Countdown } from "./countdown";

function Star({ haloed = false }: { haloed?: boolean }) {
  return (
    <span
      className={`flex size-[48px] items-center justify-center rounded-full ${
        haloed ? "bg-[rgba(123,97,255,0.2)]" : ""
      }`}
    >
      <svg viewBox="0 0 32 32" className="size-[32px]" fill="#ff8d28" aria-hidden>
        <path d="M16 1.5l4.28 9.02 9.92 1.2-7.32 6.77 1.94 9.81L16 23.3l-8.82 4.99 1.94-9.81L1.8 11.72l9.92-1.2L16 1.5z" />
      </svg>
    </span>
  );
}

function StarRating() {
  return (
    <div className="flex items-center justify-center" aria-label="5 out of 5 stars">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

const logos = [
  { src: "/superrad/logos/midjourney.svg", alt: "Midjourney" },
  { src: "/superrad/logos/claude.svg", alt: "Claude" },
  { src: "/superrad/logos/gemini.svg", alt: "Gemini" },
  { src: "/superrad/logos/openai.svg", alt: "OpenAI" },
  { src: "/superrad/logos/higgsfield.svg", alt: "Higgsfield" },
  { src: "/superrad/logos/seeddance.svg", alt: "SeedDance" },
];

function LogoBar() {
  return (
    <div className="relative mt-[80px] w-full overflow-hidden px-[64px] py-[32px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-[40px] gap-y-[16px]">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-[40px] w-auto shrink-0"
          />
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[#ffffff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[#ffffff] to-transparent" />
    </div>
  );
}

function SideModels() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 z-10 hidden w-[1440px] -translate-x-1/2 lg:block"
    >
      {/* front-facing model, bled off the left edge */}
      <div className="absolute left-[-226px] top-[86px] h-[1107px] w-[452px] overflow-hidden">
        <img
          src="/superrad/hero/side-left.webp"
          alt=""
          className="absolute left-[-205.89%] top-[-0.04%] h-[100.02%] w-[435.47%] max-w-none"
        />
      </div>
      {/* back-facing model, bled off the right edge */}
      <div className="absolute left-[1214px] top-[86px] h-[1107px] w-[452px] overflow-hidden">
        <img
          src="/superrad/hero/side-right.webp"
          alt=""
          className="absolute left-[-313.82%] top-[-0.04%] h-[100.02%] w-[435.47%] max-w-none"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full bg-[#ffffff]">
      <SideModels />

      {/* top bar / banner */}
      <div className="relative z-20 flex h-[58px] w-full items-center justify-center gap-[16px] bg-[#f6f6f6] px-4">
        <span className="sr-ppneue font-medium tracking-[-0.72px] text-[#002a3a] text-[clamp(18px,3vw,24px)]">
          SuperRad kicks off in
        </span>
        <Countdown />
      </div>

      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-[150px] text-center">
        <StarRating />

        <h1 className="sr-sansplomb mt-[10px] font-bold leading-[1.0] text-black text-[clamp(48px,9.5vw,100px)]">
          The SuperRad Challenge
        </h1>

        <p className="sr-ppneue mt-[14px] font-medium text-[#4f4d4d] text-[clamp(20px,3.2vw,35px)]">
          Learn Cinematic AI Film Making in 3 Days
        </p>

        <EnrollButton className="mt-[56px]" />
      </div>

      <div className="relative z-0">
        <LogoBar />
      </div>
    </section>
  );
}
