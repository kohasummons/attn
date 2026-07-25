import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/**
 * Shared page furniture. Every v2 marketing page is assembled from these so the
 * type scale, spacing rhythm and color rules in BRAND.md are applied once,
 * not re-typed per page.
 */

export function Section({
  tone = "light",
  size = "lg",
  className,
  ...props
}: ComponentProps<"section"> & {
  tone?: "light" | "paper" | "dark" | "black";
  size?: "sm" | "lg";
}) {
  return (
    <section
      className={cn(
        size === "lg" ? "py-24 md:py-36" : "py-20 md:py-28",
        {
          light: "bg-white text-[#121313]",
          paper: "bg-[#f9f9f9] text-[#121313]",
          dark: "bg-[#121313] text-[#fdfdfd]",
          black: "bg-black text-[#fdfdfd]",
        }[tone],
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow({
  tone = "light",
  className,
  ...props
}: ComponentProps<"p"> & { tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "text-[11px] leading-none font-medium tracking-[0.18em] uppercase",
        tone === "dark" ? "text-white/45" : "text-[#8a8a86]",
        className,
      )}
      {...props}
    />
  );
}

/** Section heading: optional eyebrow, a title, an optional muted second line. */
export function SectionHeading({
  eyebrow,
  title,
  muted,
  lead,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  muted?: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]",
          eyebrow && "mt-4",
          tone === "dark" ? "text-white" : "text-[#121313]",
        )}
      >
        <span className="block">{title}</span>
        {muted ? (
          <span className="block text-[#6a7282]">{muted}</span>
        ) : null}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 max-w-[620px] text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.02em]",
            tone === "dark" ? "text-white/60" : "text-[#5a5a5a]",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Page hero. Carries a full-bleed image the way the homepage hero does — a
 * bare black box reads as unfinished next to it. `bloom` places a single
 * flower on the right instead, matching the services grid.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image = "/images/bg-atf2.webp",
  bloom,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string | null;
  bloom?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-[#121313] pt-[168px] pb-20 text-[#fdfdfd] md:min-h-[720px] md:pt-[220px] md:pb-28">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
      ) : null}

      {bloom ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 hidden bg-[length:auto_78%] bg-no-repeat md:block"
          style={{
            backgroundImage: `url('/images/flowers/${bloom}.webp')`,
            backgroundPosition: "88% 45%",
          }}
        />
      ) : null}

      {/* Scrim: solid under the text column, clearing to the right so the
          image reads. Without this the lead copy sits on mid-tones. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0c0c] via-[#0b0c0c]/85 to-[#0b0c0c]/35"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#0b0c0c] to-transparent"
      />

      <Container>
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        <h1
          className={cn(
            "max-w-[900px] text-[clamp(36px,6vw,64px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#fdfdfd]",
            eyebrow && "mt-5",
          )}
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-[620px] text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.02em] text-white/70">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

/** Full-bleed image band — breaks up long stacks of text sections. */
export function ImageBand({
  src,
  height = "md",
  children,
}: {
  src: string;
  height?: "sm" | "md" | "lg";
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-[#0b0c0c]",
        { sm: "h-[280px]", md: "h-[420px]", lg: "h-[560px]" }[height],
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {children ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0c0c] via-[#0b0c0c]/50 to-transparent"
          />
          <Container className="pb-12">{children}</Container>
        </>
      ) : null}
    </section>
  );
}

/** Link styled as our primary button. ArrowButton renders a <button>. */
export function ButtonLink({
  href,
  variant = "accent",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: "accent" | "light" | "dark" }) {
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center px-7 py-4 text-[16px] leading-none font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:text-[18px]",
        {
          accent: "bg-[#ff4100] text-[#fdfdfd] hover:bg-white hover:text-black",
          light: "border border-white text-white hover:bg-white hover:text-black",
          dark: "bg-[#121313] text-[#fdfdfd] hover:bg-[#121313]/90",
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
