import type { MetadataRoute } from "next";
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
  ];
}
