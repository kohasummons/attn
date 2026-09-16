import type { Metadata } from "next";

export const SITE_URL = "https://www.attentionfactory.io";

export function withCanonical(path: string, metadata: Metadata = {}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      title: metadata.title ?? "Attention Factory | Your AI Partner",
      description:
        metadata.description ??
        "For people who would rather leverage AI than talk about leveraging AI.",
      siteName: "Attention Factory",
      // Preserve the main-site preview when a route has legacy image handlers.
      images: [{ url: "/opengraph-image.jpg" }],
      ...metadata.openGraph,
      url,
    },
  };
}
