import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Learn cinematic AI filmmaking in 3 days.";

export default function Image() {
  return pageOgImage("Learn cinematic AI filmmaking in 3 days.");
}
