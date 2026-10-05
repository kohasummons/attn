import { DitherTuning } from "@/components/effects/dither/dither-tuning";
import { interDisplay } from "./fonts";
import { FrequentlyAskedQuestions } from "./faq";
import { SiteFooter } from "./footer";
import { Hero } from "./hero";
import { EventSection } from "./event";
import {
  ArticlesSection,
  CoursesSection,
  HeadquartersSection,
  MetricsSection,
  ProjectsSection,
  ServicesSection,
  StorySection,
  TestimonialsSection,
  TrustSection,
} from "./sections";
import "./styles.css";
import "./desktop.css";
import "./mobile.css";
import "./interior.css";
import "./artwork.css";



export function HomePage() {
  return (
    <DitherTuning>
      <div
        id="top"
        className={`af-site af-home af-mobile-layout ${interDisplay.variable}`}
      >
        <a href="#main" className="af-skip-link">
          Skip to content
        </a>
        <Hero />
        <main id="main">
          <TrustSection />
          <CoursesSection />
          <ProjectsSection />
          <HeadquartersSection />
          <ServicesSection />
          <TestimonialsSection />
          <FrequentlyAskedQuestions />
          <ArticlesSection />
          <EventSection />
        </main>
        <SiteFooter />
      </div>
    </DitherTuning>
  );
}

export function AboutPage() {
  return (
    <DitherTuning>
      <div
        className={`af-site af-about af-mobile-layout ${interDisplay.variable}`}
      >
        <a href="#main" className="af-skip-link">
          Skip to content
        </a>
        <Hero page="about" />
        <main id="main">
          <StorySection />
          <ServicesSection about />
          <CoursesSection mission />
          <MetricsSection />
          <FrequentlyAskedQuestions />
          <EventSection />
        </main>
        <SiteFooter />
      </div>
    </DitherTuning>
  );
}

export function LabsPage() {
  return (
    <DitherTuning>
      <div
        className={`af-site af-labs af-mobile-layout ${interDisplay.variable}`}
      >
        <a href="#main" className="af-skip-link">
          Skip to content
        </a>
        <Hero page="labs" />
        <main id="main">
          <ProjectsSection labs />
          <FrequentlyAskedQuestions />
          <EventSection />
        </main>
        <SiteFooter />
      </div>
    </DitherTuning>
  );
}
