import { withCanonical } from "@/lib/site-metadata";
import type { Metadata } from "next";
import { LabsPage } from "@/components/marketing/pages";

export const metadata = withCanonical("/labs", {
  title: "Labs — Attention Factory",
  description:
    "Products and experiments built at Attention Factory. Explore what we’re building with AI.",
}, { ownImage: true });

export default LabsPage;
