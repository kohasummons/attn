import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "We train your people to use AI on their actual work.";

export default function Image() {
  return pageOgImage("We train your people to use AI on their actual work.");
}
