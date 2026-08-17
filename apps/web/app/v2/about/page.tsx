import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { ButtonLink, PageHero, Section } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "About Attention Factory",
  description:
    "Attention Factory helps people learn AI, trains teams, and builds software and workflow automations for organizations.",
};

const waysToWork = [
  {
    title: "Learn with us",
    body: "Weekends of AI gives people a free place to begin. Attention University offers structured courses, practical projects, and a community for people who want to keep going.",
    label: "Explore learning",
    href: "/v2/courses",
    flower: "peony",
  },
  {
    title: "Train your team",
    body: "We build training around your team's roles, tools, and daily work, so the learning shows up in what people do next.",
    label: "Train your team",
    href: "/v2/organizations",
    flower: "iris",
  },
  {
    title: "Plan your use of AI",
    body: "We help organizations choose the right starting points, decide who owns the work, and turn the plan into clear next steps.",
    label: "Plan your AI rollout",
    href: "/v2/services/ai-transformation-planning",
    flower: "dahlia",
  },
  {
    title: "Build with us",
    body: "We design and build apps, internal tools, AI products, and workflow automations that solve a real problem.",
    label: "See our services",
    href: "/v2/services",
    flower: "rose",
  },
];

const founders = [
  {
    name: "Mercy Thaddeus",
    role: "Cofounder",
    photo: "/images/team-mercy.jpg",
    bio: "Mercy started her career as a software engineer and now works across AI education, product building, and business adoption. She created the free content that grew into Attention Factory and still teaches, builds, and works directly with organizations.",
  },
  {
    name: "Joshua Omobola",
    role: "Cofounder",
    photo: "/images/team-joshua.jpg",
    bio: "Joshua works across Attention Factory's training and organizational projects. He helps turn broad goals into clear programs, working sessions, and systems that teams can keep using after the engagement.",
  },
];

const impact = [
  {
    figure: "250,000+",
    body: "People reached through our educational content.",
  },
  {
    figure: "3,200+",
    body: "Learners trained through Weekends of AI.",
  },
  {
    figure: "160+",
    body: "Learners who have completed our intensive bootcamp.",
  },
];

const paths = [
  { label: "Join Weekends of AI", href: "https://weekendsofai.com" },
  {
    label: "Explore Attention University",
    href: "https://app.attentionfactory.io",
  },
  { label: "Train your team", href: "/v2/organizations" },
  { label: "Build with us", href: "/v2/services" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <PageHero
          image="/images/bg-atf2.webp"
          title={[
            "We help people learn AI,",
            "use it at work, and build with it.",
          ]}
          lead="Attention Factory is an AI education and technology company. What started as free online content has grown into learning programs for individuals, training for teams, and software and automation for organizations."
        >
          <ButtonLink href="#what-we-do">See what we do</ButtonLink>
        </PageHero>

        {/* Our story */}
        <section className="mx-auto max-w-[1738px] border-x border-[#e4e3de] bg-white">
          <Container className="py-24 md:py-36">
            <div className="grid grid-cols-1 border-y border-[#e4e3de] lg:grid-cols-2">
              <div className="py-10 lg:border-r lg:border-[#e4e3de] lg:py-16 lg:pr-16">
                <h2 className="max-w-[470px] text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
                  <span className="block text-[#121313]">It started with</span>
                  <span className="block text-[#6a7282]">free content.</span>
                </h2>
              </div>
              <div className="max-w-[650px] space-y-7 py-10 text-[16px] leading-[1.7] tracking-[-0.01em] text-[#505050] lg:py-16 lg:pl-16 md:text-[18px]">
                <p>
                  Attention Factory began with free online content that showed
                  people how to use AI for real work. As the audience grew,
                  people asked for deeper classes, more structure, and help
                  applying AI to their own work.
                </p>
                <p>
                  That led to free masterclasses, Weekends of AI, bootcamps, and
                  Attention University. Businesses began coming to us with
                  another set of needs: team training, software development,
                  workflow automation, and help deciding where AI fits.
                </p>
                <p>
                  Because the work began online, the audience and client base
                  crossed borders from the start. Some of our earliest clients
                  were in the UK and Canada. Today, we work with learners and
                  organizations across Africa and beyond.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* What we do */}
        <Section id="what-we-do" tone="black" className="scroll-mt-20">
          <Container>
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block text-white">Four ways to</span>
              <span className="block text-[#6a7282]">work with us.</span>
            </h2>
            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.65] text-white/65 md:text-[18px]">
              People come to Attention Factory to learn, train their teams, plan
              how AI should be used, or build something that solves a real
              problem.
            </p>
            <div className="mt-12 grid auto-rows-[400px] grid-cols-1 gap-2 md:grid-cols-2">
              {waysToWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-black p-8 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/30"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 scale-[1.06] bg-[length:auto_62%] bg-no-repeat opacity-0 transition-[opacity,transform] duration-[700ms] ease-out group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url('/images/flowers/${item.flower}.webp')`,
                      backgroundPosition: "82% 45%",
                    }}
                  />
                  <div className="relative flex justify-end">
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 text-white/40 transition-colors group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="relative max-w-[470px]">
                    <h3 className="text-[clamp(26px,3vw,34px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[430px] text-[16px] leading-[1.55] text-white/68 md:text-[17px]">
                      {item.body}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="relative text-[16px] text-white/60 transition-colors group-hover:text-white"
                  >
                    {item.label} →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Company statement */}
        <section className="mx-auto flex min-h-[56svh] max-w-[1738px] items-center border-x border-[#e4e3de] bg-white">
          <Container className="py-24 text-center md:py-36">
            <p className="text-[20px] leading-none tracking-[0.18em] text-[#121313]">
              * * * *
            </p>
            <h2 className="mx-auto mt-8 max-w-[1100px] text-[clamp(34px,6vw,64px)] leading-[1.03] font-medium tracking-[-0.05em] text-[#121313]">
              People should leave Attention Factory{" "}
              <span className="text-[#6a7282]">
                able to do something they could not do before.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-[650px] text-[16px] leading-[1.65] text-[#5a5a5a] md:text-[18px]">
              That could mean building an app, automating a workflow, using AI
              better at work, or starting a new career.
            </p>
          </Container>
        </section>

        {/* Founders */}
        <Section tone="paper">
          <Container>
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block text-[#121313]">Meet the founders</span>
              <span className="block text-[#6a7282]">Mercy &amp; Joshua</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2">
              {founders.map((founder) => (
                <article
                  key={founder.name}
                  className="flex flex-col bg-white"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e4e3de]">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <p className="text-[15px] tracking-[-0.01em] text-[#8a8a86]">
                      {founder.role}
                    </p>
                    <h3 className="mt-4 text-[clamp(26px,3vw,34px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                      {founder.name}
                    </h3>
                    <p className="mt-6 max-w-[540px] text-[16px] leading-[1.65] text-[#555] md:text-[17px]">
                      {founder.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Impact */}
        <section className="mx-auto max-w-[1738px] border-x border-[#e4e3de] bg-white">
          <Container className="py-24 md:py-36">
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block text-[#121313]">A few numbers</span>
              <span className="block text-[#6a7282]">from the work.</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3">
              {impact.map((item) => (
                <div
                  key={item.figure}
                  className="flex min-h-[250px] flex-col justify-between border border-[#e4e3de] bg-[#f9f9f9] p-8 md:p-10"
                >
                  <p className="mt-auto text-[clamp(42px,6vw,64px)] leading-none font-medium tracking-[-0.055em] text-[#121313]">
                    {item.figure}
                  </p>
                  <p className="mt-5 max-w-[270px] text-[16px] leading-[1.55] text-[#5a5a5a] md:text-[17px]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-[680px] text-[16px] leading-[1.7] text-[#505050] md:text-[18px]">
              The better part is what people do next. Learners have launched
              products, built systems for their employers, started businesses,
              earned promotions, and created new sources of income.
            </p>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="relative isolate min-h-[650px] overflow-hidden bg-[#121313] text-white">
          <Image
            src="/v2/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
          <Container className="py-24 md:py-36">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
              <div>
                <h2 className="max-w-[620px] text-[clamp(36px,6vw,64px)] leading-[1.05] font-medium tracking-[-0.04em] text-white">
                  Choose where you want to begin.
                </h2>
                <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-white/65 md:text-[18px]">
                  Join a free session, take a structured course, train your team,
                  or bring us a product or workflow you want built.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="/v2/courses">Explore learning</ButtonLink>
                  <ButtonLink href="/v2/services" variant="light">
                    Work with us
                  </ButtonLink>
                </div>
              </div>

              <div>
                <h3 className="text-[22px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
                  Choose a path
                </h3>
                <ul className="mt-7 border-t border-white/10">
                  {paths.map((path) => (
                    <li key={path.label} className="border-b border-white/10">
                      <a
                        href={path.href}
                        {...(path.href.startsWith("http")
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="flex items-center justify-between py-5 text-[16px] leading-[1.45] text-white/78 transition-colors hover:text-white md:text-[17px]"
                      >
                        {path.label}
                        <span aria-hidden className="text-white/40">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
