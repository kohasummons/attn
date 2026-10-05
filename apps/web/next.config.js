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
            "destination": "/v2/playbooks",
            "permanent": false
      },
      {
            "source": "/guide/:slug",
            "destination": "/v2/playbooks/:slug",
            "permanent": false
      }
];
  },
  async rewrites() {
    return [
      {
            "source": "/courses/:path*",
            "destination": "/v2/courses/:path*"
      },
      {
            "source": "/organizations/:path*",
            "destination": "/v2/organizations/:path*"
      },
      {
            "source": "/playbooks/:path*",
            "destination": "/v2/playbooks/:path*"
      },
      {
            "source": "/blog/:path*",
            "destination": "/v2/blog/:path*"
      },
      {
            "source": "/intelligence/:path*",
            "destination": "/v2/intelligence/:path*"
      },
      {
            "source": "/community/:path*",
            "destination": "/v2/community/:path*"
      },
      {
            "source": "/brand/:path*",
            "destination": "/v2/brand/:path*"
      },
      {
            "source": "/ai-archetype/:path*",
            "destination": "/v2/ai-archetype/:path*"
      }
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
