import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";

import { termsOfUse } from "../content";

export const metadata: Metadata = {
  title: "Terms of Use — Attention Factory",
  description:
    "The terms that govern your access to and use of Attention Factory's Services.",
};

export default function TermsOfUsePage() {
  return <LegalDocument doc={termsOfUse} />;
}
