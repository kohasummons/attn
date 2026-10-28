import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Products and experiments we build with AI.";

export default function Image() {
  return pageOgImage("Products and experiments we build with AI.");
}
