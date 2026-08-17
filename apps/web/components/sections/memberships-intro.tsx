import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";

export function MembershipsIntro() {
  return (
    <section className="bg-white pt-32 pb-16">
      <Container>
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <EyebrowLabel className="text-[#111400]">Memberships</EyebrowLabel>
          <h2 className="mt-3 text-[clamp(28px,4vw,32px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#111400]">
            Master AI with expert-led courses and coaching
          </h2>
          <p className="mt-3 text-[18px] font-normal leading-[1.4] tracking-[-0.04em] text-[#121313]/70">
            Build your competitive advantage with hands-on AI courses, AI coaching, and AI events
          </p>
        </div>
      </Container>
    </section>
  );
}
