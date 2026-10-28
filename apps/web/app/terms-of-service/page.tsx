import { withCanonical } from "@/lib/site-metadata";
import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";
import { termsOfService } from "@/components/marketing/legal-documents";

export const metadata = withCanonical("/terms-of-service", {
  title: "Terms of Service — Attention Factory",
  description:
    "The terms that apply when you use the Attention Factory website and the materials we publish on it.",
});

export default function Page() {
  return <LegalPage document={termsOfService} />;
}
