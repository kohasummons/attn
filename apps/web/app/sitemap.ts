import type { MetadataRoute } from "next";
import { GUIDE_ENTRIES } from "./playbooks/guides-data";
import { SITE_URL } from "@/lib/site-metadata";

const pages = [
  "/",
  "/about",
  "/ai-archetype",
  "/brand",
  "/free-audit",
  "/privacy-policy",
  "/terms-of-service",
  "/organizations",
  "/playbooks",
  "/superrad",
  "/superrad/upgrade",
  "/team",
  "/labs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    // This slug 308s to the AttentionHQ guide, so it is not a local URL.
    ...GUIDE_ENTRIES.filter(
      (guide) => guide.slug !== "edit-videos-with-claude",
    ).map((guide) => ({
      url: `${SITE_URL}/playbooks/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
