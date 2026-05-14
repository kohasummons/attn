import Image from "next/image";

import { CTABanner } from "@/components/sections/cta-banner";
import { FAQChat } from "@/components/sections/faq-chat";
import { MembershipsBento } from "@/components/sections/memberships-bento";
import { MembershipsIntro } from "@/components/sections/memberships-intro";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Testimonial } from "@/components/sections/testimonial";
import { ArrowButton } from "@/components/ui/arrow-button";

import { LogoMarquee } from "../_components/logo-marquee";

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#121313] pb-[140px]">
          <Image
            src="/v2/background-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative mx-auto flex min-h-[700px] max-w-[1166px] flex-col items-center justify-start px-6 pt-[173px] pb-20 text-center">
            <h1 className="font-medium tracking-[-0.04em] text-[#fdfdfd] text-[clamp(48px,8vw,60px)] leading-[0.98]">
              <span className="block">Ship or Sink.</span>
              <span className="block">and never sleeps.</span>
            </h1>

            <p className="mt-10 max-w-[846px] text-[clamp(18px,2vw,20px)] leading-[1.2] tracking-[-0.02em] text-[#fdfdfd]">
              Section turns AI investment into workforce transformation and ROI.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <ArrowButton variant="light">Join the Waitlist</ArrowButton>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 px-12">
            <div
              className="relative mx-auto flex h-[90px] max-w-[1166px] items-center justify-center rounded-t-[40px] bg-white
                before:absolute before:bottom-0 before:-right-[26px] before:h-[26px] before:w-[42px] before:scale-x-[-1] before:bg-no-repeat before:content-[''] before:[background-image:var(--bl-fillet)]
                after:absolute after:bottom-0 after:-left-[26px] after:h-[26px] after:w-[42px] after:bg-no-repeat after:content-[''] after:[background-image:var(--bl-fillet)]"
              style={
                {
                  "--bl-fillet": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 26'%3E%3Cpath d='M42 0L42 26L0 26C14.359 26 26 14.359 26 0L42 0Z' fill='white'/%3E%3C/svg%3E")`,
                } as React.CSSProperties
              }
            >
              <LogoMarquee />
            </div>
          </div>
        </section>

        <MembershipsIntro />
        <MembershipsBento />

        <section className="bg-white py-32">
          <div className="mx-auto max-w-[1166px] px-6">
            <h2 className="text-center text-[clamp(28px,4vw,32px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#111400]">
              What you get with AttentionHQ Membership
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Unlimited Workshops" },
                { title: "AI coaching" },
                { title: "Certificate Fellowships" },
                { title: "Office hours w/ Experts" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative aspect-[350/679] overflow-hidden rounded-2xl bg-[#1a1a1a]"
                >
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="text-[20px] font-medium leading-tight tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQChat />
        <CTABanner />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
