import type { Metadata } from "next";

export const SITE_URL = "https://www.attentionfactory.io";

/**
 * Pass `ownImage` when the route has its own opengraph-image file; metadata
 * images would otherwise win over it.
 */
export function withCanonical(
  path: string,
  metadata: Metadata = {},
  { ownImage = false }: { ownImage?: boolean } = {},
): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      title: metadata.title ?? "Attention Factory — Your AI Partner",
      description:
        metadata.description ??
        "For people who would rather leverage AI than talk about leveraging AI.",
      siteName: "Attention Factory",
      ...(ownImage ? {} : { images: [{ url: "/opengraph-image.jpg" }] }),
      ...metadata.openGraph,
      url,
    },
  };
}
