import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Run by humans first. Then AI agents.";

export default function Image() {
  return pageOgImage("Run by humans first. Then AI agents.");
}
