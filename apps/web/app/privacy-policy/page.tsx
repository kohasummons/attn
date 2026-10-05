import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { privacyPolicy } from "@/components/marketing/legal-documents";

export const metadata: Metadata = {
  title: "Privacy Policy — Attention Factory",
  description:
    "How Attention Factory collects, uses and stores the information you give us, and how to get in touch about it.",
};

export default function Page() {
  return <LegalPage document={privacyPolicy} />;
}
