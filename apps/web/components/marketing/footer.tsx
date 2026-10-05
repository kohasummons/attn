import Image from "next/image";
import { GlassScene, GlassSurface } from "@/components/effects/glass/glass";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";
import { links } from "./content";
import { Artwork, asset, PageContainer } from "./primitives";

const columns = [
  {
    title: "Services",
    items: [
      ["Software Development", links.services],
      ["Workflow Automation", links.services],
      ["AI Planning", links.services],
      ["Ongoing AI Support", links.services],
      ["Organization Training", "/#top"],
    ],
  },
  {
    title: "AI HQ",
    items: [
      ["Courses", links.university],
      ["Membership", links.waitlist],
      ["Weekends of AI", links.workshops],
    ],
  },
  {
    title: "Resources",
    items: [
      ["Playbooks", links.guides],
      ["Guides and Tools", links.guides],
      ["Events and Workshops", links.workshops],
    ],
  },
  {
    title: "Company",
    items: [
      ["About Us", "/about"],
      ["Contact Us", null],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Usage", "/terms-of-service"],
    ],
  },
];
const aiQuestion =
  "Tell me about Attention Factory (https://attentionfactory.io) and how it can help me or my team learn and use AI through training, workshops, software development, and workflow automation.";

const encodedAiQuestion = encodeURIComponent(aiQuestion);

const agents = [
  {
    name: "ChatGPT",
    icon: "agent-chatgpt.svg",
    href: `https://chatgpt.com/?prompt=${encodedAiQuestion}`,
  },
  {
    name: "Claude",
    icon: "agent-claude.svg",
    href: `https://claude.ai/new?q=${encodedAiQuestion}`,
  },
  {
    name: "Grok",
    icon: "agent-grok.svg",
    href: `https://grok.com/?q=${encodedAiQuestion}`,
  },
  {
    name: "Google AI",
    icon: "6792f.svg",
    href: `https://www.google.com/search?udm=50&source=searchlabs&q=${encodedAiQuestion}`,
  },
  {
    name: "Perplexity",
    icon: "agent-perplexity.svg",
    href: `https://www.perplexity.ai/search/new?q=${encodedAiQuestion}`,
  },
];

function AgentCard() {
  return (
    <GlassScene className="af-agent-card" backdropSelector=".af-artwork img">
      <Artwork
        name="agent-painting.png"
        mobileName="agent-mobile-bg.png"
        sizes="(max-width: 600px) calc(100vw - 48px), 326px"
      />
      <div className="af-agent-content">
        <div className="af-agent-links">
          {agents.map((agent) => (
            <GlassSurface
              key={agent.name}
              render={<a href={agent.href} target="_blank" rel="noreferrer" />}
            >
              <GlassSurface className="af-agent-icon" render={<span />}>
                <Image src={asset(agent.icon)} alt="" width={32} height={32} />
              </GlassSurface>
              {agent.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </GlassSurface>
          ))}
        </div>
        <p>Ask your favourite agent about attention factory</p>
      </div>
    </GlassScene>
  );
}

export function SiteFooter() {
  return (
    <footer className="af-footer">
      <PageContainer className="af-footer-wordmark-container">
        <picture className="af-wordmark" aria-hidden="true">
          <source
            media="(max-width: 600px)"
            srcSet={asset("footer-wordmark-mobile.svg")}
          />
          <Image
            src={asset("footer-wordmark.svg")}
            alt=""
            width={1160}
            height={232}
          />
        </picture>
      </PageContainer>
      <div className="af-footer-body">
        <Artwork
          blend="top"
          name="footer-desktop-bg.png"
          mobileName="footer-mobile-bg.png"
        />
        <div className="af-footer-fade" aria-hidden="true" />
        <PageContainer>
          <div className="af-footer-top">
            <div className="af-footer-brand">
              <Link href="/" aria-label="Attention Factory home">
                <Image
                  src={asset("attention-factory-logo.svg")}
                  alt="Attention Factory"
                  width={275}
                  height={36}
                />
              </Link>
              <p>
                AI is your multiplier. We make you equipped to become 10x with
                it
              </p>
            </div>
            <div className="af-footer-columns">
              {columns.map((column) => (
                <div key={column.title}>
                  <h2>{column.title}</h2>
                  <ul>
                    {column.items.map(([label, href]) => (
                      <li key={label}>
                        {href ? (
                          <Link href={href}>{label}</Link>
                        ) : (
                          <ContactDialog className="af-footer-contact" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <AgentCard />
            <p className="af-system-status af-footer-status">
              <span aria-hidden="true" />
              All systems operational
            </p>
          </div>
          <div className="af-footer-bottom">
            <span>© {new Date().getFullYear()} Attention Factory</span>
            <span className="af-built-for">Built for people who build.</span>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
