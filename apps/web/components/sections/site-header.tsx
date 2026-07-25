"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type MenuItem = {
  title: string;
  description: string;
  href: string;
};

const servicesMenu: MenuItem[] = [
  {
    title: "Software building",
    description: "Ship production-ready AI applications and platforms.",
    href: "/v2/services/software-building",
  },
  {
    title: "Workflow automation",
    description:
      "Build the agents and automations that kill your team's repetitive work.",
    href: "/v2/services/workflow-automation",
  },
  {
    title: "AI transformation planning",
    description:
      "Build a clear roadmap and training for AI across your company.",
    href: "/v2/services/ai-transformation-planning",
  },
  {
    title: "AI strategy support",
    description:
      "Get integrated experts driving your rollout from plan to launch.",
    href: "/v2/services/ai-strategy-support",
  },
];

const universityMenu: MenuItem[] = [
  {
    title: "Courses",
    description: "Browse the courses we offer.",
    href: "https://app.attentionfactory.io/courses",
  },
  {
    title: "Membership",
    description:
      "Join Attention University, our full learning platform and community.",
    href: "https://app.attentionfactory.io/membership",
  },
];

const resourcesMenu: MenuItem[] = [
  {
    title: "Weekends of AI",
    description: "Free live AI training sessions.",
    href: "https://weekendsofai.com",
  },
  {
    title: "Playbooks, guides and tools",
    description: "Practical resources for putting AI to work.",
    href: "/v2/playbooks",
  },
  {
    title: "AI archetype",
    description: "Take the quiz to find your AI archetype.",
    href: "/v2/ai-archetype",
  },
  {
    title: "Blog",
    description: "Insights and updates from Attention Factory.",
    href: "/v2/blog",
  },
  {
    title: "Attention Factory Intelligence",
    description: "Our read on where AI is actually going, minus the hype.",
    href: "/v2/intelligence",
  },
  {
    title: "The Lab",
    description: "The products and experiments we ship.",
    href: "/v2/the-lab",
  },
  {
    title: "About",
    description: "Why we started, and who builds this.",
    href: "/v2/about",
  },
];

const dropdowns = [
  { label: "Services", items: servicesMenu },
  { label: "University", items: universityMenu },
] as const;

function MenuPanel({ items }: { items: MenuItem[] }) {
  return (
    <ul className="grid w-[360px] gap-1 p-1">
      {items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink
            href={item.href}
            className="flex-col items-start gap-1 p-3"
          >
            <span className="text-sm font-medium text-foreground">
              {item.title}
            </span>
            <span className="text-[13px] leading-snug text-muted-foreground">
              {item.description}
            </span>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      setScrolled(y > 10);
      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerClasses = cn(
    "h-auto bg-transparent px-3 py-2 text-[16px] font-medium",
    scrolled
      ? "text-[#121313] hover:bg-black/5 focus:bg-black/5 data-open:bg-black/5 data-open:hover:bg-black/5 data-open:focus:bg-black/5 data-popup-open:bg-black/5 data-popup-open:hover:bg-black/5"
      : "text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 data-open:bg-white/10 data-open:hover:bg-white/10 data-open:focus:bg-white/10 data-popup-open:bg-white/10 data-popup-open:hover:bg-white/10",
  );

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.6 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-200",
        scrolled ? "bg-white backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1166px] items-center justify-between px-6">
        <a
          href="/v2"
          className={cn(
            "flex items-center gap-1 text-[20px] font-semibold tracking-[-0.04em] transition-colors",
            scrolled ? "text-[#121313]" : "text-white",
          )}
        >
          <span>attention</span>
          <span>factory</span>
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {dropdowns.map((menu) => (
              <NavigationMenuItem key={menu.label}>
                <NavigationMenuTrigger className={triggerClasses}>
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuPanel items={menu.items} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/v2/organizations"
                className={cn("inline-flex rounded-lg", triggerClasses)}
              >
                Organizations
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClasses}>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MenuPanel items={resourcesMenu} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-6">
          <a
            href="https://platform.attentionfactory.io"
            className={cn(
              "hidden text-[16px] font-medium transition-colors sm:inline",
              scrolled
                ? "text-[#121313] hover:text-[#121313]/70"
                : "text-white/90 hover:text-white",
            )}
          >
            Log in
          </a>
          <a
            href="/v2/contact"
            className={cn(
              "px-5 py-2 text-[16px] font-medium transition-colors",
              scrolled
                ? "bg-black text-[#fdfdfd] hover:bg-black/90"
                : "bg-white text-[#121313] hover:bg-white/90",
            )}
          >
            Talk to us
          </a>
        </div>
      </div>
    </motion.header>
  );
}
