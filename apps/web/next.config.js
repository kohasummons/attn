import { legacyPageRedirects, legacyAssetRewrites } from "./route-migration.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...legacyPageRedirects,
      { source: "/guide", destination: "/playbooks", permanent: false },
      {
        source: "/guide/:slug",
        destination: "/playbooks/:slug",
        permanent: false,
      },
      {
        source: "/v2/privacy-policy",
        destination: "/legal/privacy-policy",
        permanent: true,
      },
      {
        source: "/v2/terms-of-service",
        destination: "/legal/terms-of-service",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return legacyAssetRewrites;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
