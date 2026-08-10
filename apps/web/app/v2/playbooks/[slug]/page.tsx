import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

import { GUIDE_ENTRIES, getGuideBySlug } from "../guides-data";
import { GuideDocument } from "./GuideDocument";

export function generateStaticParams() {
  return GUIDE_ENTRIES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found — Attention Factory" };
  return {
    title: `${guide.title} — Attention Factory`,
    description: guide.excerpt,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* Dark backdrop for the fixed header so it stays legible at the top. */}
        <div aria-hidden className="h-20 bg-[#121313]" />
        <GuideDocument entry={entry} />
      </main>
      <SiteFooter />
    </>
  );
}
