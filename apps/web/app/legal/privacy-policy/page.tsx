import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";

import { privacyPolicy } from "../content";

export const metadata: Metadata = {
  title: "Privacy Policy — Attention Factory",
  description:
    "How Attention Factory collects, uses, stores, and protects the Personal Data you share with us.",
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
