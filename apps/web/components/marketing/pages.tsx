import localFont from "next/font/local";
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

const interDisplay = localFont({
  src: [
    {
      path: "./fonts/InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/InterDisplay-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "./fonts/InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export function HomePage() {
  return (
    <div
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
  );
}

export function AboutPage() {
  return (
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
  );
}

export function LabsPage() {
  return (
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
  );
}
