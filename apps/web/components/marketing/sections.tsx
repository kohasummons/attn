import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { GUIDE_ENTRIES } from "@/app/v2/playbooks/guides-data";
import { ContactDialog } from "./contact-dialog";
import {
  featuredProducts,
  labProducts,
  links,
  services,
  type Product,
} from "./content";
import {
  ActionLink,
  Artwork,
  asset,
  Eyebrow,
  PageContainer,
} from "./primitives";

export function TrustSection() {
  return (
    <section className="af-trust af-section">
      <PageContainer>
        <Eyebrow>Trusted by the best</Eyebrow>
        <h2>We are trusted by industry leaders</h2>
        <div className="af-logos">
          {["Relume", "Meta", "Redbull", "Google", "Recall"].map((name) => (
            <Image
              key={name}
              src={asset(`${name.toLowerCase()}-logo.png`)}
              alt={
                name === "Google"
                  ? "Google Labs"
                  : name === "Recall"
                    ? "recall.ai"
                    : name
              }
              width={226}
              height={112}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function CoursesSection({ mission = false }: { mission?: boolean }) {
  return (
    <section className="af-landscape-section af-section">
      <Artwork
        name={mission ? "mission-painting.png" : "courses-painting.png"}
      />
      <div className="af-landscape-fade" aria-hidden="true" />
      <PageContainer className="af-split">
        <div>
          <Eyebrow>{mission ? "Mission" : "The future is now"}</Eyebrow>
          <p className="af-lead">
            {mission
              ? "Helping people could mean building an app, automating a workflow, using AI better at work, or starting a new career."
              : "Everything you need to leverage AI starts here at attention factory"}
          </p>
        </div>
        <div>
          <h2>
            {mission
              ? "People should leave Attention Factory able to do something they could not do before."
              : "We have curated all you need to know to stay ahead of the curve in this rapidly changing world of AI"}
          </h2>
          <ActionLink href={links.university}>View Our Courses</ActionLink>
        </div>
      </PageContainer>
    </section>
  );
}

function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <article className="af-product">
      <div
        className="af-product-art"
        style={{ backgroundImage: `url(${asset(product.backdrop)})` }}
      >
        <div className="af-product-screen">
          <Image
            src={asset(product.image)}
            alt={`${product.name} product preview`}
            fill
            sizes={
              featured
                ? "(max-width: 700px) 90vw, 550px"
                : "(max-width: 700px) 90vw, 360px"
            }
          />
        </div>
        {featured && product.metric && (
          <div className="af-product-metric">
            <Image src={asset("411d5.svg")} alt="" fill sizes="130px" />
            <strong>{product.metric}</strong>
            <span>{product.metricLabel}</span>
          </div>
        )}
        {product.href && (
          <Link className="af-text-link af-product-visit" href={product.href}>
            Visit Website
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">: {product.name}</span>
          </Link>
        )}
      </div>
      <div className="af-product-heading">
        <h3>{product.name}</h3>
        {!featured &&
          (product.href ? (
            <span className="af-live">Live</span>
          ) : (
            <span className="af-preview">Preview</span>
          ))}
      </div>
      <p>{product.description}</p>
      {!product.href && (
        <span className="af-text-link af-muted">
          Website coming soon
          <ArrowUpRight size={20} aria-hidden="true" />
        </span>
      )}
    </article>
  );
}

export function ProjectsSection({ labs = false }: { labs?: boolean }) {
  return (
    <section
      className={`af-projects af-section${labs ? " af-lab-projects" : ""}`}
    >
      <PageContainer>
        {!labs && (
          <div className="af-projects-heading">
            <Eyebrow>We are always tinkering</Eyebrow>
            <h2>
              We are builders by nature and in our labs we always try to solve
              problems using AI
            </h2>
          </div>
        )}
        <div
          className={
            labs ? "af-product-grid af-product-grid-three" : "af-product-grid"
          }
        >
          {(labs ? labProducts : featuredProducts).map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              featured={!labs}
            />
          ))}
          {labs &&
            [1, 2].map((id) => (
              <article className="af-product af-redacted" key={id}>
                <div
                  className="af-product-art"
                  style={{ backgroundImage: `url(${asset("8aabf.png")})` }}
                >
                  <div className="af-product-screen">
                    <Image
                      src={asset("6bc7a.svg")}
                      alt="Unreleased project"
                      fill
                      sizes="360px"
                    />
                  </div>
                </div>
                <h3>[Redacted]</h3>
                <p>Something new is taking shape.</p>
                <span className="af-preview">Coming soon</span>
              </article>
            ))}
        </div>
      </PageContainer>
      {!labs && (
        <Link href="/labs" className="af-lab-ribbon">
          <span className="sr-only">Visit Our Lab</span>
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} aria-hidden="true">
              <FlaskConical size={14} /> Visit Our Lab{" "}
              <ArrowUpRight size={14} />
            </span>
          ))}
        </Link>
      )}
    </section>
  );
}

export function HeadquartersSection() {
  return (
    <section className="af-hq af-section" id="headquarters">
      <Artwork name="hq-illustration.png" />
      <PageContainer>
        <div className="af-split af-split-wide-left">
          <div>
            <Eyebrow>Attention Factory University</Eyebrow>
            <h2>
              The power to build is now in your hands, opening 5th October 2026
            </h2>
            <ActionLink href={links.waitlist}>Join the HQ</ActionLink>
          </div>
          <p className="af-lead">
            At Attention HQ, we provide the best tutorials for you to go out and
            build anything with AI
          </p>
        </div>
        <p className="af-hq-note af-lead">
          Join us on 5/10/2026 as we begin a new cohort of AI Fellows that will
          change the world
        </p>
      </PageContainer>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="af-services af-section" id="services">
      <PageContainer className="af-split">
        <div>
          <Eyebrow>Trainings, workshops and more</Eyebrow>
          <h2>
            At attention factory we provide the best services and trainings for
            you or your team
          </h2>
        </div>
        <div className="af-services-list">
          {services.map((service) => (
            <article key={service.title}>
              <Image src={asset(service.icon)} alt="" width={40} height={40} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.href ? (
                  <Link className="af-text-link" href={service.href}>
                    {service.action}
                    <ArrowUpRight size={20} />
                  </Link>
                ) : (
                  <ContactDialog className="af-text-link af-text-button">
                    {service.action}
                    <ArrowUpRight size={20} />
                  </ContactDialog>
                )}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="af-testimonials af-section">
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>Feedback from our AI fellows</Eyebrow>
          <h2>We are spoken of kindly</h2>
        </div>
        <div className="af-testimonial-grid">
          {[0, 1, 2].map((index) => (
            <figure
              className="af-testimonial"
              key={index}
              aria-hidden={index > 0 ? true : undefined}
            >
              <blockquote>
                <h3>“I don’t just talk about AI anymore.”</h3>
                <p>
                  Before the bootcamp, I understood AI in theory. I could talk
                  about it, but I couldn’t actually ship anything. Since then,
                  I’ve built and launched websites, apps, AI agents, and my own
                  digital product. I don’t just talk about AI anymore. I build
                  it and ship it, for myself and for real clients.
                </p>
              </blockquote>
              <figcaption>
                <strong>Dapo Ijaola</strong>
                <span>
                  AI Fellow <i aria-hidden="true" /> Alpha Cohort
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function ArticlesSection() {
  return (
    <section className="af-articles af-section">
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>State of intelligence</Eyebrow>
          <h2>We write about the new things in AI</h2>
        </div>
        <div className="af-article-grid">
          {GUIDE_ENTRIES.slice(0, 3).map((guide, index) => (
            <article key={guide.slug}>
              <Link
                href={`${links.guides}/${guide.slug}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="af-article-image">
                  <Image
                    src={asset(["9db56.png", "c91ac.png", "468cc.png"][index]!)}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 90vw, 380px"
                  />
                </div>
              </Link>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>
              <Link
                className="af-text-link"
                href={`${links.guides}/${guide.slug}`}
              >
                Read Now
                <ArrowUpRight size={20} aria-hidden="true" />
                <span className="sr-only">: {guide.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="af-story af-section">
      <Artwork name="story-illustration.png" />
      <PageContainer className="af-split">
        <div>
          <Eyebrow>Humble beginnings</Eyebrow>
          <h2>
            It started with free content with the purpose of informing and
            educating.
          </h2>
          <p className="af-lead af-story-note">
            Businesses began coming to us with another set of needs: team
            training, software development, workflow automation, and help
            deciding where AI fits.
          </p>
        </div>
        <div>
          <p className="af-lead">
            As the audience grew, people asked for deeper classes, more
            structure, and help applying AI to their own work.
          </p>
          <ActionLink href={links.university}>View Our Courses</ActionLink>
        </div>
      </PageContainer>
    </section>
  );
}

export function MetricsSection() {
  const metrics = [
    ["250,000+", "People reached through our educational content."],
    ["3,200+", "Learners trained through Weekends of AI."],
    ["160+", "Learners who have completed our intensive bootcamp."],
  ];
  return (
    <section className="af-metrics af-section">
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>Metrics</Eyebrow>
          <h2>A few numbers from our journey</h2>
        </div>
        <dl>
          {metrics.map(([value, description]) => (
            <div key={value}>
              <dt>{value}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </PageContainer>
    </section>
  );
}
