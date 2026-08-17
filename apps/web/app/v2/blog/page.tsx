import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { PageHero, Section, SectionHeading } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Blog — Attention Factory",
  description:
    "Field notes on putting AI to work: what shipped, what broke, and what it cost. Written by the people who did the build.",
};

/**
 * PLACEHOLDER CONTENT — the `posts` array below is hand-written sample data
 * standing in for a CMS. Do not treat these entries as published articles.
 * Replace this array with a CMS fetch (and move the type to a shared module)
 * before this page goes live. Every `href` is currently a dead "#".
 */
type Post = {
  category: string;
  readTime: string;
  headline: string;
  standfirst: string;
  date: string;
  href: string;
};

// Newest first.
const posts: Post[] = [
  {
    category: "Field notes",
    readTime: "6 min read",
    headline: "We shipped an agent in nine days. Three things broke.",
    standfirst:
      "The build was the easy part. Permissions, handoffs, and one very confident hallucination were not.",
    date: "9 July 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
  {
    category: "Training",
    readTime: "5 min read",
    headline: "Most AI training is theatre. Ours has homework.",
    standfirst:
      "A ninety-minute webinar changes nobody's Monday. Here is what we run instead, week by week.",
    date: "24 June 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
  {
    category: "Strategy",
    readTime: "8 min read",
    headline: "Your AI pilot died in March. Here is why.",
    standfirst:
      "Four failure patterns we saw in twelve companies, and the one question that predicts all of them.",
    date: "2 June 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
  {
    category: "Operations",
    readTime: "4 min read",
    headline: "Stop buying seats. Start counting hours.",
    standfirst:
      "Licence count tells you nothing. Here is the measurement we ask every team to run for two weeks.",
    date: "13 May 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
  {
    category: "Field notes",
    readTime: "7 min read",
    headline: "The prompt library is not the strategy.",
    standfirst:
      "Shared prompts are useful and roughly two percent of the work. The other ninety-eight is process.",
    date: "28 April 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
  {
    category: "Budgets",
    readTime: "6 min read",
    headline: "What 2025 taught us about AI budgets.",
    standfirst:
      "Spend went up, output mostly did not. A plain read of where the money actually went last year.",
    date: "16 April 2026",
    href: "#", // TODO: point at the CMS post route once the blog CMS exists.
  },
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Blog"
          title={["What we shipped. What broke.", "What it cost."]}
          lead="Field notes from the builds, the training rooms and the budget meetings. Our read on where AI is actually going, minus the hype."
        />

        <Section tone="light">
          <Container>
            <SectionHeading
              title="Latest writing."
              muted="Newest first."
            />

            <div className="mt-16 border-t border-[#e4e3de]">
              {posts.map((post) => (
                <a
                  key={post.headline}
                  href={post.href}
                  className="group grid grid-cols-1 gap-4 border-b border-[#e4e3de] py-10 transition-colors hover:bg-[#f9f9f9] md:grid-cols-[220px_1fr] md:gap-10"
                >
                  <div className="flex items-baseline gap-4 md:flex-col md:gap-3">
                    <p className="text-[13px] tracking-[-0.02em] text-[#8a8a86]">
                      {post.category}
                    </p>
                    <p className="text-[13px] tracking-[-0.02em] text-[#c4c4c0]">
                      {post.readTime}
                    </p>
                  </div>

                  <div className="max-w-[680px]">
                    <h3 className="text-[clamp(22px,2.5vw,28px)] leading-[1.1] font-medium tracking-[-0.04em] text-[#121313]">
                      {post.headline}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.02em] text-[#5a5a5a]">
                      {post.standfirst}
                    </p>
                    <p className="mt-6 text-[14px] leading-none text-[#8a8a86]">
                      {post.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
