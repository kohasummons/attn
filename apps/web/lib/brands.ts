type Brand = {
  name: string;
  showName?: boolean;
  logo?: { src: string; width: number; height: number };
};

export const brands: Brand[] = [
  {
    name: "Meta",
    logo: { src: "/v2/brands/meta.png", width: 791, height: 160 },
  },
  {
    name: "Google Labs",
    logo: { src: "/v2/brands/google-labs.png", width: 996, height: 160 },
  },
  { name: "Higgsfield" },
  {
    name: "Kimi",
    logo: { src: "/v2/brands/kimi.png", width: 522, height: 160 },
  },
  {
    name: "Relume",
    logo: { src: "/v2/brands/relume.png", width: 525, height: 160 },
  },
  {
    name: "Gamma",
    logo: { src: "/v2/brands/gamma.png", width: 532, height: 160 },
  },
  {
    name: "Speak French Fast",
    logo: {
      src: "/v2/brands/speak-french-fast.png",
      width: 252,
      height: 160,
    },
  },
  {
    name: "Abacus",
    logo: { src: "/v2/brands/abacus.png", width: 965, height: 160 },
  },
  {
    name: "Red Bull",
    logo: { src: "/redesign/red-bull-mark.svg", width: 150, height: 24 },
  },
  {
    name: "Liners",
    showName: true,
    logo: { src: "/v2/brands/liners.png", width: 256, height: 256 },
  },
  {
    name: "Recall",
    logo: { src: "/v2/brands/recall.png", width: 776, height: 160 },
  },
  {
    name: "KaneAI",
    logo: { src: "/v2/brands/kaneai.png", width: 1020, height: 160 },
  },
];
