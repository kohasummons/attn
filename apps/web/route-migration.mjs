// Backward-compatible URLs for the September 2026 homepage migration.
// Asset rewrites keep existing image embeds and cached pages working.
export const legacyPageRedirects = [
  {
    source: "/v2/about",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/v2/ai-archetype",
    destination: "/ai-archetype",
    permanent: true,
  },
  {
    source: "/v2/blog",
    destination: "/blog",
    permanent: true,
  },
  {
    source: "/v2/brand",
    destination: "/brand",
    permanent: true,
  },
  {
    source: "/v2/community",
    destination: "/community",
    permanent: true,
  },
  {
    source: "/v2/contact",
    destination: "/contact",
    permanent: true,
  },
  {
    source: "/v2/courses",
    destination: "/courses",
    permanent: true,
  },
  {
    source: "/v2/intelligence",
    destination: "/intelligence",
    permanent: true,
  },
  {
    source: "/v2/organizations",
    destination: "/organizations",
    permanent: true,
  },
  {
    source: "/v2",
    destination: "/",
    permanent: true,
  },
  {
    source: "/v2/playbooks/:slug",
    destination: "/playbooks/:slug",
    permanent: true,
  },
  {
    source: "/v2/playbooks",
    destination: "/playbooks",
    permanent: true,
  },
  {
    source: "/v2/services/:slug",
    destination: "/services/:slug",
    permanent: true,
  },
  {
    source: "/v2/services",
    destination: "/services",
    permanent: true,
  },
  {
    source: "/v2/the-lab",
    destination: "/the-lab",
    permanent: true,
  },
];

export const legacyAssetRewrites = [
  {
    source: "/v2/Logos_Group_X_02.png",
    destination: "/images/logos/Logos_Group_X_02.png",
  },
  {
    source: "/v2/Logos_Group_X_03.png",
    destination: "/images/logos/Logos_Group_X_03.png",
  },
  {
    source: "/v2/background-hero.png",
    destination: "/images/backgrounds/background-hero.png",
  },
  {
    source: "/v2/brands/abacus.png",
    destination: "/images/brands/abacus.png",
  },
  {
    source: "/v2/brands/gamma.png",
    destination: "/images/brands/gamma.png",
  },
  {
    source: "/v2/brands/google-labs.png",
    destination: "/images/brands/google-labs.png",
  },
  {
    source: "/v2/brands/kaneai.png",
    destination: "/images/brands/kaneai.png",
  },
  {
    source: "/v2/brands/kimi.png",
    destination: "/images/brands/kimi.png",
  },
  {
    source: "/v2/brands/meta.png",
    destination: "/images/brands/meta.png",
  },
  {
    source: "/v2/brands/recall.png",
    destination: "/images/brands/recall.png",
  },
  {
    source: "/v2/brands/red-bull.png",
    destination: "/images/brands/red-bull.png",
  },
  {
    source: "/v2/brands/relume.png",
    destination: "/images/brands/relume.png",
  },
  {
    source: "/v2/brands/speak-french-fast.png",
    destination: "/images/brands/speak-french-fast.png",
  },
  {
    source: "/v2/cta-bg.png",
    destination: "/images/backgrounds/cta-bg.png",
  },
  {
    source: "/v2/footer-art.png",
    destination: "/images/brand/footer-art.png",
  },
  {
    source: "/v2/hero-bg.png",
    destination: "/images/backgrounds/hero-bg.png",
  },
  {
    source: "/v2/impact-education.png",
    destination: "/images/impact/impact-education.png",
  },
  {
    source: "/v2/impact-mvps-1.png",
    destination: "/images/impact/impact-mvps-1.png",
  },
  {
    source: "/v2/impact-mvps-2.png",
    destination: "/images/impact/impact-mvps-2.png",
  },
  {
    source: "/v2/logo-cloud.png",
    destination: "/images/logos/logo-cloud.png",
  },
  {
    source: "/v2/logo_group_1.png",
    destination: "/images/logos/logo_group_1.png",
  },
  {
    source: "/v2/logo_group_3.png",
    destination: "/images/logos/logo_group_3.png",
  },
  {
    source: "/v2/logo_group_4.png",
    destination: "/images/logos/logo_group_4.png",
  },
  {
    source: "/v2/logo_group_6.png",
    destination: "/images/logos/logo_group_6.png",
  },
  {
    source: "/v2/logos/2k-games.png",
    destination: "/images/logos/2k-games.png",
  },
  {
    source: "/v2/logos/adobe.png",
    destination: "/images/logos/adobe.png",
  },
  {
    source: "/v2/logos/amazon.png",
    destination: "/images/logos/amazon.png",
  },
  {
    source: "/v2/logos/apple.png",
    destination: "/images/logos/apple.png",
  },
  {
    source: "/v2/logos/brand-mark.png",
    destination: "/images/logos/brand-mark.png",
  },
  {
    source: "/v2/logos/british-airways.png",
    destination: "/images/logos/british-airways.png",
  },
  {
    source: "/v2/logos/das-erste.png",
    destination: "/images/logos/das-erste.png",
  },
  {
    source: "/v2/logos/der-spiegel.png",
    destination: "/images/logos/der-spiegel.png",
  },
  {
    source: "/v2/logos/google.png",
    destination: "/images/logos/google.png",
  },
  {
    source: "/v2/logos/lg.png",
    destination: "/images/logos/lg.png",
  },
  {
    source: "/v2/logos/lyft.png",
    destination: "/images/logos/lyft.png",
  },
  {
    source: "/v2/logos/magenta.png",
    destination: "/images/logos/magenta.png",
  },
  {
    source: "/v2/logos/microsoft.png",
    destination: "/images/logos/microsoft.png",
  },
  {
    source: "/v2/logos/netflix.png",
    destination: "/images/logos/netflix.png",
  },
  {
    source: "/v2/logos/nike.png",
    destination: "/images/logos/nike.png",
  },
  {
    source: "/v2/logos/nvidia.png",
    destination: "/images/logos/nvidia.png",
  },
  {
    source: "/v2/logos/samsung.png",
    destination: "/images/logos/samsung.png",
  },
  {
    source: "/v2/logos/snap.png",
    destination: "/images/logos/snap.png",
  },
  {
    source: "/v2/logos/spotify.png",
    destination: "/images/logos/spotify.png",
  },
  {
    source: "/v2/logos/swatch.png",
    destination: "/images/logos/swatch.png",
  },
  {
    source: "/v2/logos/toyota.png",
    destination: "/images/logos/toyota.png",
  },
  {
    source: "/v2/logos/vw.png",
    destination: "/images/logos/vw.png",
  },
  {
    source: "/v2/logos/wired.png",
    destination: "/images/logos/wired.png",
  },
  {
    source: "/v2/logos/wwf.png",
    destination: "/images/logos/wwf.png",
  },
  {
    source: "/v2/team/illustration-notion.jpg",
    destination: "/images/team/illustration-notion.jpg",
  },
  {
    source: "/v2/team/logo-coursera.svg",
    destination: "/images/team/logo-coursera.svg",
  },
  {
    source: "/v2/team/logo-dropbox.svg",
    destination: "/images/team/logo-dropbox.svg",
  },
  {
    source: "/v2/team/logo-graphite.svg",
    destination: "/images/team/logo-graphite.svg",
  },
  {
    source: "/v2/team/logo-navan.svg",
    destination: "/images/team/logo-navan.svg",
  },
  {
    source: "/v2/team/logo-notion-dark.svg",
    destination: "/images/team/logo-notion-dark.svg",
  },
  {
    source: "/v2/team/logo-notion.svg",
    destination: "/images/team/logo-notion.svg",
  },
  {
    source: "/v2/team/logo-replit.svg",
    destination: "/images/team/logo-replit.svg",
  },
  {
    source: "/v2/team/logo-vercel.svg",
    destination: "/images/team/logo-vercel.svg",
  },
  {
    source: "/v2/team/portrait-business-manager.png",
    destination: "/images/team/portrait-business-manager.png",
  },
  {
    source: "/v2/team/portrait-dropbox.jpg",
    destination: "/images/team/portrait-dropbox.jpg",
  },
  {
    source: "/v2/team/portrait-navan.jpg",
    destination: "/images/team/portrait-navan.jpg",
  },
  {
    source: "/v2/team/portrait-notion.jpg",
    destination: "/images/team/portrait-notion.jpg",
  },
  {
    source: "/v2/team/portrait-replit.jpg",
    destination: "/images/team/portrait-replit.jpg",
  },
  {
    source: "/v2/team/portrait-vercel.jpg",
    destination: "/images/team/portrait-vercel.jpg",
  },
  {
    source: "/v2/testimonial-logo.svg",
    destination: "/images/testimonials/testimonial-logo.svg",
  },
  {
    source: "/v2/testimonial-portrait.png",
    destination: "/images/testimonials/testimonial-portrait.png",
  },
  {
    source: "/v2/woa-gold.png",
    destination: "/images/logos/woa-gold.png",
  },
  {
    source: "/v2/woa.png",
    destination: "/images/logos/woa.png",
  },
];
