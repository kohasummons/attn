import Image from "next/image";

import { CTABanner } from "@/components/sections/cta-banner";
import { Business } from "@/components/sections/business";
import { FAQ } from "@/components/sections/faq";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Services } from "@/components/sections/services";
import { Intelligence } from "@/components/sections/intelligence";
import { MembershipsBento } from "@/components/sections/memberships-bento";
import { MembershipsIntro } from "@/components/sections/memberships-intro";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Testimonial } from "@/components/sections/testimonial";
import { ArrowButton } from "@/components/ui/arrow-button";

import { LogoMarquee } from "./_components/logo-marquee";

export default function V2Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="relative flex md:h-svh h-[85svh] flex-col overflow-hidden bg-[#121313]">
          <Image
            src="/images/bg-atf2.webp"
            alt=""
            fill
            priority
            sizes="90vw"
            className="object-cover object-center"
          />
          <div className="relative mx-auto flex max-w-[1166px] flex-1 flex-col items-center justify-start px-6 pt-[240px] pb-20 text-center">
            <h1 className="font-medium tracking-[-0.04em] text-[#fdfdfd] text-[clamp(40px,10vw,100px)] leading-[1.02]">
              <span className="block">AI is the Multiplier</span>
              <span className="block">Make it work for you</span>
            </h1>

            <p className="mt-5 md:mt-7 max-w-[846px] text-[clamp(14px,2vw,20px)] leading-[1.2] tracking-[-0.02em] text-[#fdfdfd]">
              Attention Factory has trained more than 3,000 individuals and
              teams to use the power of artificial intelligence for better
              results and as a real advantage.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <ArrowButton variant="dark">Train Yourself</ArrowButton>
              <ArrowButton variant="light" showArrow={false}>
                Train your team
              </ArrowButton>
            </div>

            <div className="mt-5 flex justify-center">
              <ArrowButton
                variant="light"
                showArrow={false}
                className="bg-white text-[#121313] hover:bg-white/90 hover:text-[#121313]"
              >
                Find your AI Archetype
              </ArrowButton>
            </div>
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

        <section className="flex flex-col  h-[50svh] max-w-[1738px] mx-auto items-center justify-center bg-white px-6 border-l border-r border-[#e4e3de]">
          <p className="max-w-[600px] text-center font-medium tracking-[-0.02em] text-[clamp(28px,4vw,40px)] leading-[1.2] text-neutral-900">
            * * * *
          </p>
          <p className="max-w-[600px] text-center font-medium tracking-[-0.02em] text-[clamp(28px,4vw,40px)] leading-[1.2] text-neutral-900">
            We help organizations build tailored AI systems to solve the world’s hardest problems.
          </p>
        </section>

        <section
          aria-label="Trusted by leading organizations"
          className="mx-auto max-w-[1738px] border-x border-[#e4e3de]"
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
