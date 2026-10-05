import localFont from "next/font/local";

export const interDisplay = localFont({
  src: [
    {
      path: "./fonts/InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/InterDisplay-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "./fonts/InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
});
