import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "We help people learn AI to create real value.";

export default function Image() {
  return pageOgImage("We help people learn AI to create real value.");
}
