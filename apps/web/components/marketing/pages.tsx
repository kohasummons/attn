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

export function HomePage() {
  return (
    <div className="af-site">
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
  );
}

export function AboutPage() {
  return (
    <div className="af-site">
      <a href="#main" className="af-skip-link">
        Skip to content
      </a>
      <Hero page="about" />
      <main id="main">
        <StorySection />
        <ServicesSection />
        <CoursesSection mission />
        <MetricsSection />
        <FrequentlyAskedQuestions />
        <EventSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export function LabsPage() {
  return (
    <div className="af-site">
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
  );
}
