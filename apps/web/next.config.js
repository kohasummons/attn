import { legacyPageRedirects, legacyAssetRewrites } from "./route-migration.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/studio", destination: "/studios", permanent: false },
      { source: "/studio/brief", destination: "/studios/brief", permanent: false },
      { source: "/studio/:path*", destination: "/studios/brief", permanent: false },
      {
            "source": "/legal/privacy-policy",
            "destination": "/privacy-policy",
            "permanent": false
      },
      {
            "source": "/legal/terms-of-service",
            "destination": "/terms-of-service",
            "permanent": false
      },
      {
            "source": "/terms-of-use",
            "destination": "/terms-of-service",
            "permanent": false
      },
      {
            "source": "/v2/privacy-policy",
            "destination": "/privacy-policy",
            "permanent": false
      },
      {
            "source": "/v2/terms-of-service",
            "destination": "/terms-of-service",
            "permanent": false
      },
      {
            "source": "/v2/about",
            "destination": "/about",
            "permanent": false
      },
      {
            "source": "/v2/the-lab",
            "destination": "/labs",
            "permanent": false
      },
      {
            "source": "/contact",
            "destination": "/#contact",
            "permanent": false
      },
      {
            "source": "/contact-us",
            "destination": "/#contact",
            "permanent": false
      },
      {
            "source": "/v2/contact",
            "destination": "/#contact",
            "permanent": false
      },
      {
            "source": "/services/:path*",
            "destination": "/",
            "permanent": false
      },
      {
            "source": "/v2/services/:path*",
            "destination": "/",
            "permanent": false
      },
      {
            "source": "/guide",
            "destination": "/playbooks",
            "permanent": false
      },
      {
            "source": "/guide/:slug",
            "destination": "/playbooks/:slug",
            "permanent": false
      }
      ,...legacyPageRedirects.filter((route) => ![
        "/v2/about", "/v2/the-lab", "/v2/contact", "/v2/services/:path*"
      ].includes(route.source)),
      { source: "/the-lab", destination: "/labs", permanent: false },
      { source: "/university", destination: "https://university.attentionfactory.io", permanent: true },
      { source: "/launch", destination: "https://university.attentionfactory.io", permanent: true },
      { source: "/courses", destination: "https://university.attentionfactory.io", permanent: true },
      // X post still points here. Canonical guide is the published AttentionHQ page.
      {
        source: "/playbooks/edit-videos-with-claude",
        destination:
          "https://app.attentionfactory.io/guides/40-claude-commands-to-edit-better-videos",
        permanent: true,
      },
];
  },
  async rewrites() {
    return [
      { source: "/studios", destination: "/studios/index.html" },
      { source: "/studios/brief", destination: "/studios/brief/index.html" },
      ...legacyAssetRewrites,
    ];
  },
  images: {
    qualities: [75, 90],
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
