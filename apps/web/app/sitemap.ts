import type { MetadataRoute } from "next";
import { GUIDE_ENTRIES } from "./playbooks/guides-data";
import { services } from "./services/_data";
import { SITE_URL } from "@/lib/site-metadata";

const pages = [
  "/",
  "/about",
  "/ai-archetype",
  "/blog",
  "/brand",
  "/community",
  "/contact",
  "/courses",
  "/free-audit",
  "/intelligence",
  "/launch",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/organizations",
  "/playbooks",
  "/services",
  "/services/ai-spokespersons",
  "/services/chatbots",
  "/services/music-videos",
  "/services/mvps-prototypes",
  "/services/partnerships",
  "/services/seo-content",
  "/services/social-media",
  "/services/training",
  "/services/video-ads",
  "/services/voice-cloning",
  "/superrad",
  "/superrad/upgrade",
  "/team",
  "/the-lab",
  "/university",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...GUIDE_ENTRIES.map((guide) => ({
      url: `${SITE_URL}/playbooks/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
