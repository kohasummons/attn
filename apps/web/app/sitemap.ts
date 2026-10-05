import type { MetadataRoute } from "next";
import { GUIDE_ENTRIES } from "./playbooks/guides-data";
import { SITE_URL } from "@/lib/site-metadata";

const pages = [
  "/",
  "/about",
  "/ai-archetype",
  "/blog",
  "/brand",
  "/community",
  "/courses",
  "/free-audit",
  "/intelligence",
  "/launch",
  "/privacy-policy",
  "/terms-of-service",
  "/organizations",
  "/playbooks",
  "/superrad",
  "/superrad/upgrade",
  "/team",
  "/labs",
  "/university",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    ...GUIDE_ENTRIES.map((guide) => ({
      url: `${SITE_URL}/playbooks/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
