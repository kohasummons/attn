import type { Metadata } from "next";
import Link from "next/link";

import { PhotoCarousel } from "../../components/photo-carousel";
import { TrackedApplyLink } from "./tracked-apply-link";

const APPLY_URL =
  "https://trail-fruitadens-7a4.notion.site/d19a1e47d8c6483cba48fa4c2e4c6861";

const photos = [
  { alt: "AttentionHQ", height: 800, src: "/images/attn-hq.png", width: 800 },
  { alt: "AttentionHQ", height: 800, src: "/images/attn-hq.png", width: 800 },
  { alt: "AttentionHQ", height: 800, src: "/images/attn-hq.png", width: 800 },
  { alt: "AttentionHQ", height: 800, src: "/images/attn-hq.png", width: 800 },
];

export const metadata: Metadata = {
  title: "free ai audit — attention factory",
  description:
    "we look at how you're using ai right now and tell you what to keep, kill, or start. for leaders, builders & creators.",
};

export default function FreeAuditPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative p-0">
      <div className="fixed bottom-0 w-full left-0 h-32 bg-linear-to-t from-[#fefefe] from-10% via-50% via-[#fefefe]/50 to-transparent pointer-events-none isolate" />
      <div className="w-full max-w-[600px] px-5 py-8 text-[18px] font-medium leading-[1.55] tracking-[-0.7px] text-[#888888] sm:p-14 sm:text-[20px]">
        <nav className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[18px] font-medium sm:text-[20px]">
          <Link
            className="text-[#0099ff] underline underline-offset-2"
            href="/"
          >
            home
          </Link>
        </nav>

        <h1 className="mb-4 text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[50px]">
          attention factory.
        </h1>

        <p className="mb-4">a free ai audit.</p>

        <p className="mb-8">
          we look at how you&apos;re actually using ai right now. tell you what
          to keep, kill, or start. one call. no pitch.
        </p>

        <p className="mb-4">for leaders, builders & creators</p>

        <section className="mt-10">
          <TrackedApplyLink
            href={APPLY_URL}
            className="mb-8 inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
          >
            apply for your audit <span aria-hidden>&rarr;</span>
          </TrackedApplyLink>

          <PhotoCarousel photos={photos} />
        </section>
      </div>
    </main>
  );
}
