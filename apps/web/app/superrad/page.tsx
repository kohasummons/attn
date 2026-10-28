import { Hero } from "./_components/hero";
import { MasterGeneration } from "./_components/master-generation";
import { Pain } from "./_components/pain";
import { Learn } from "./_components/learn";
import { Instructors } from "./_components/instructors";
import { Kit } from "./_components/kit";
import { Fit } from "./_components/fit";
import { PricingTicker } from "./_components/pricing-ticker";
import { Pricing } from "./_components/pricing";
import { Faq } from "./_components/faq";
import { ClosingCta } from "./_components/closing-cta";
import { Footer } from "./_components/footer";
import { withCanonical } from "@/lib/site-metadata";

export const metadata = withCanonical("/superrad", {
  title: "The SuperRad Challenge — Learn Cinematic AI Film Making in 3 Days",
  description:
    "Master cinematic AI generation in 3 days. Direct AI films good enough to win contests and land paid brand work.",
}, { ownImage: true });

export default function SuperradPage() {
  return (
    <main className="w-full">
      <Hero />
      <MasterGeneration />
      <Pain />
      <Learn />
      <Instructors />
      <Kit />
      {/* <Testimonials /> (import removed; re-add import to re-enable) */}
      <Fit />
      <PricingTicker />
      <Pricing />
      <Faq />
      <ClosingCta />
      <Footer />
    </main>
  );
}
