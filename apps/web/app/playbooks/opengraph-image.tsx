import { ogSize, pageOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Free playbooks, guides and tools for putting AI to work.";

export default function Image() {
  return pageOgImage("Free playbooks, guides and tools for putting AI to work.");
}
