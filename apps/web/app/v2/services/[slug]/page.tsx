import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceMain } from "@/components/sections/service-page";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

import { getService, services } from "../_data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.nav} — Attention Factory`,
    description: service.menuDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <ServiceMain service={service} />
      <SiteFooter />
    </>
  );
}
