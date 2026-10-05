import { LandingConfetti } from "./_components/landing-confetti";
import { Hero } from "./_components/hero";
import { Fellows } from "./_components/fellows";
import { Vip } from "./_components/vip";
// import { Faq } from "./_components/faq";
import { Testimonials } from "./_components/testimonials";
import { UpgradeTable } from "./_components/upgrade-table";

export const metadata = {
  title: "Upgrade Your Access — The SuperRad Cinematic AI Film Challenge",
};

export default function SuperradUpgradePage() {
  return (
    <main className="w-full bg-[#221919]">
      <LandingConfetti />
      <Hero />
      <Fellows />
      <Vip />
      {/* <Faq /> */}
      <Testimonials />
      <UpgradeTable />
    </main>
  );
}
