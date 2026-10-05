import { legacyPageRedirects, legacyAssetRewrites } from "./route-migration.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
      { source: "/the-lab", destination: "/labs", permanent: false }
];
  },
  async rewrites() {
    return legacyAssetRewrites;
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
