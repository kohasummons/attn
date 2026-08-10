import Image from "next/image";

import { Container } from "@/components/ui/container";

const APP_URL = "https://app.attentionfactory.io";
const WOA_URL = "https://weekendsofai.com";

type FooterLink = { label: string; href: string };

const columns: { label: string; items: FooterLink[] }[] = [
  {
    label: "Services",
    items: [
      { label: "Software development", href: "/v2/services/software-building" },
      {
        label: "Workflow automation",
        href: "/v2/services/workflow-automation",
      },
      {
        label: "AI planning",
        href: "/v2/services/ai-transformation-planning",
      },
      {
        label: "Ongoing AI support",
        href: "/v2/services/ai-strategy-support",
      },
      { label: "Organization training", href: "/v2/organizations" },
    ],
  },
  {
    label: "University",
    items: [
      { label: "Courses", href: "/v2/courses" },
      { label: "Membership", href: `${APP_URL}/membership` },
      { label: "Weekends of AI", href: WOA_URL },
    ],
  },
  {
    label: "Resources",
    items: [
      // Temporarily hidden — routes still exist, just off the menu.
      // { label: "Blog", href: "/v2/blog" },
      { label: "Playbooks, guides and tools", href: "/v2/playbooks" },
      { label: "AI archetype", href: "/v2/ai-archetype" },
      // {
      //   label: "Attention Factory Intelligence",
      //   href: "/v2/intelligence",
      // },
      // { label: "The Lab", href: "/v2/the-lab" },
      { label: "About", href: "/v2/about" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About us", href: "/v2/about" },
      { label: "Contact us", href: "/v2/contact" },
      { label: "Talk to us", href: "/v2/contact" },
      { label: "Privacy Policy", href: "/v2/privacy-policy" },
      { label: "Terms of Service", href: "/v2/terms-of-service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative h-[714px] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[246px] hidden justify-end lg:flex">
        <div className="relative h-[742px] w-[857px] -mr-[103px]">
          <Image
            src="/v2/footer-art.png"
            alt=""
            fill
            sizes="857px"
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>

      <Container className="relative pt-[69px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[auto_1fr]">
          <div>
            <p className="text-[30px] font-extrabold leading-none tracking-[-0.07em] text-white">
              attn.
            </p>
            <p className="mt-3 max-w-[280px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#b3b7b9]">
              We help people and organizations learn, use, and build with AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-4 md:justify-self-end">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="text-[16px] font-normal text-white/65">{col.label}</p>
                <ul className="mt-7 flex flex-col gap-3">
                  {col.items.map((item) => {
                    const external = item.href.startsWith("http");
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-[16px] tracking-[-0.02em] text-[#d0d0d0] transition-colors hover:text-white"
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
