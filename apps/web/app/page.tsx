import { withCanonical } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { CTABanner } from "@/components/sections/cta-banner";
import { Business } from "@/components/sections/business";
import { FAQ } from "@/components/sections/faq";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Testimonial } from "@/components/sections/testimonial";
import { ArrowButton } from "@/components/ui/arrow-button";

import { LogoMarquee } from "./_components/logo-marquee";

const greedCondensed = localFont({
  src: "./fonts/greed/GreedCondensed-TRIAL-Medium.otf",
  weight: "500",
  style: "normal",
  variable: "--font-home-heading",
  display: "swap",
});

export const metadata = withCanonical("/");

export default function V2Page() {
  return (
    <>
      <SiteHeader />
      <main className={`${greedCondensed.variable} home-page bg-background text-foreground`}>
        <section className="relative flex h-[85svh] flex-col overflow-hidden bg-[#121313] md:h-[min(100svh,1000px)] md:min-h-[640px]">
          <Image
            src="/images/backgrounds/hero-figma-outdoors-v2.webp"
            unoptimized
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/40" />
          <div className="relative mx-auto flex max-w-[1166px] flex-1 flex-col items-center justify-start px-6 pt-[240px] pb-20 text-center md:justify-center md:pt-20 md:pb-28">
            <h1 className={`${greedCondensed.className} font-medium tracking-[-1.5px] text-[#fdfdfd] text-[clamp(30px,9.5vw,64px)] leading-[1.02] md:text-[clamp(64px,10vw,120px)]`}>
              <span className="block">AI is a multiplier</span>
              <span className="block whitespace-nowrap md:whitespace-normal">We make it work for you</span>
            </h1>

            <p className="mt-5 md:mt-7 max-w-[846px] text-[clamp(14px,2vw,20px)] leading-[1.2] tracking-[-0.02em] text-[#fdfdfd]">
              Getting value from AI is a different job. We help you do that.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a href="https://dub.sh/attn-university">
                <ArrowButton variant="dark">Train Yourself</ArrowButton>
              </a>
              <Link href="/organizations">
                <ArrowButton variant="light" showArrow={false}>
                  Train your team
                </ArrowButton>
              </Link>
            </div>

            {/* <div className="mt-5 flex justify-center">
              <a
                href="https://ai-archetype-pied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowButton
                  variant="light"
                  showArrow={false}
                  className="bg-white text-[#121313] hover:bg-white/90 hover:text-[#121313]"
                >
                  Find your AI Archetype
                </ArrowButton>
              </a>
            </div> */}
          </div>
{/*
          <div className="absolute right-0 bottom-0 left-0">
            <div
              className="mt-5 relative mx-auto flex h-[60px] bg-white items-center justify-center rounded-t-[40px]`
                before:absolute before:bottom-0 before:-right-[26px] before:h-[26px] before:w-[42px] before:scale-x-[-1] before:bg-no-repeat before:content-[''] before:[background-image:var(--bl-fillet)]
                after:absolute after:bottom-0 after:-left-[26px] after:h-[26px] after:w-[42px] after:bg-no-repeat after:content-[''] after:[background-image:var(--bl-fillet)]"
              // style={
              //   {
              //     "--bl-fillet": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 26'%3E%3Cpath d='M42 0L42 26L0 26C14.359 26 26 14.359 26 0L42 0Z' fill='white'/%3E%3C/svg%3E")`,
              //   } as React.CSSProperties
              // }
            />
          </div> */}
        </section>

        <section className="flex flex-col h-[50svh] max-w-[1738px] mx-auto items-center justify-center bg-white px-6">
          <p className="max-w-[600px] text-center font-medium tracking-[-0.02em] text-[clamp(28px,4vw,40px)] leading-[1.2] text-neutral-900">
            * * * *
          </p>
          <h2 style={{ fontFamily: "inherit", letterSpacing: "-0.02em" }} className="max-w-[600px] text-center font-medium text-[clamp(28px,4vw,40px)] leading-[1.2] text-neutral-900">
            We help people and organizations learn AI, put it to work, and build what comes next.
          </h2>
        </section>

        <section
          aria-label="Trusted by leading organizations"
          className="w-full"
        >
          <LogoMarquee />
        </section>

        {/* <ImpactStats /> */}
        <Services />
        {/* <MembershipsIntro /> */}
        {/* <MembershipsBento /> */}
        {/* <Intelligence /> */}
        <Testimonial />
        <FAQ />
        <CTABanner />
        <Business />
      </main>
      <SiteFooter />
    </>
  );
}
