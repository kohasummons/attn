/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/guide", destination: "/v2/playbooks", permanent: false },
      {
        source: "/guide/:slug",
        destination: "/v2/playbooks/:slug",
        permanent: false,
      },
      {
        source: "/v2/privacy-policy",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/v2/terms-of-service",
        destination: "/legal/tos",
        permanent: true,
      },
    ];
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
