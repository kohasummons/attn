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
