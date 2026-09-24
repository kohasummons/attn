import type { MetadataRoute } from "next";

const baseUrl = "https://www.attentionfactory.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    ...["/about", "/labs", "/team"].map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
