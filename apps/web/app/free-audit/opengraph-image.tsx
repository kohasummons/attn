import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "A free AI audit: what to keep, kill or start.";

export default function Image() {
  return pageOgImage("A free AI audit: what to keep, kill or start.");
}
