import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "Voice Cloning for Brands | Attention Factory",
  description: "Your brand voice, infinitely scalable.",
};

export default function VoiceCloningPage() {
  return (
    <ServiceLayout
      title="Voice Cloning for Brands"
      subtitle="Your brand voice, infinitely scalable."
      carouselItems={serviceCarousels["voice-cloning"]}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We clone your founder&apos;s voice, your spokesperson, or create a unique brand voice from scratch. Use it for ads, podcasts, IVR, audiobooks — anywhere.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Founder/CEO voice for authentic content</li>
          <li>→ Multilingual voice cloning (30+ languages)</li>
          <li>→ Custom brand voice creation</li>
          <li>→ API access for dynamic audio generation</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Record 30-60 minutes of source audio</li>
          <li><span className="text-black">02.</span> We train a custom voice model</li>
          <li><span className="text-black">03.</span> Generate unlimited audio from text</li>
          <li><span className="text-black">04.</span> Fine-tune for emotion, pacing, style</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          <span className="text-black font-medium">$2,500</span> voice clone setup + <span className="text-black font-medium">$0.10/minute</span> generated audio.
        </p>
      </section>
    </ServiceLayout>
  );
}
