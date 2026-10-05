export const links = {
  university: "https://app.attentionfactory.io",
  waitlist: "https://app.attentionfactory.io/attnhq-waitlist",
  workshops: "https://weekendsofai.com",
  services: "/#top",
  guides: "/playbooks",
};

export const services = [
  {
    title: "Education",
    description:
      "Learn AI through structured courses and practical projects at the AI University.",
    action: "Visit University",
    href: links.university,
    icon: "7644e.svg",
    mobileIcon: "mobile-education.png",
    mobileAction: "Visit University",
  },
  {
    title: "Team Training",
    description:
      "Training built around your team’s roles, tools, and everyday work.",
    action: "View Workshops",
    href: "/#top",
    icon: "518f4.svg",
    mobileIcon: "mobile-training.png",
    mobileAction: "View Workshops",
  },
  {
    title: "Distribution",
    description:
      "Bring your work to the people it is made for through content and distribution.",
    action: "Explore Distribution",
    href: links.services,
    icon: "602b4.svg",
    mobileIcon: "mobile-distribution.png",
    mobileAction: "Explore Distribution",
  },
  {
    title: "Attention Films",
    href: "/#top",
    description:
      "Explore storytelling and film production with AI, from an idea to the screen.",
    action: "View Our Films",
    icon: "6ca45.svg",
    mobileIcon: "mobile-film.png",
    mobileAction: "View Our Films",
  },
];

export const partnerships = [
  {
    title: "Learn With Us",
    description:
      "Weekends of AI gives people a free place to begin. Attention University offers structured courses, practical projects, and a community for people who want to keep going.",
    action: "Explore University",
    mobileAction: "Explore University",
    href: links.university,
    icon: "7644e.svg",
    mobileIcon: "mobile-education.png",
  },
  {
    title: "Train Your Team",
    description:
      "We build training around your team's roles, tools, and daily work, so the learning shows up in what people do next.",
    action: "Register Your Team",
    mobileAction: "Register Your Team",
    href: "/#top",
    icon: "518f4.svg",
    mobileIcon: "mobile-training.png",
  },
  {
    title: "Plan Your Use of AI",
    description:
      "We help organizations choose the right starting points, decide who owns the work, and turn the plan into clear next steps.",
    action: "Plan Your AI Rollout",
    mobileAction: "Plan Your AI Rollout",
    href: links.services,
    icon: "602b4.svg",
    mobileIcon: "mobile-distribution.png",
  },
  {
    title: "Build With Us",
    description:
      "We design and build apps, internal tools, AI products, and workflow automations that solve a real problem.",
    action: "See Our Services",
    mobileAction: "See Our Services",
    href: links.services,
    icon: "6ca45.svg",
    mobileIcon: "mobile-film.png",
  },
];

export const testimonials = [
  {
    headline: "I don't just talk about AI anymore.",
    quote:
      "Before the bootcamp, I understood AI in theory. I could talk about it, but I couldn't actually ship anything. Since then, I've built and launched websites, apps, AI agents, and my own digital product. I don't just talk about AI anymore. I build it and ship it, for myself and for real clients.",
    name: "Dapo Ijaola",
    role: "AI Fellow",
    cohort: "Alpha cohort",
  },
  {
    headline: "I stopped guessing, saved hours of trial and error…",
    quote:
      "Before the mentorship, I was overwhelmed and lacked direction. … The mentorship gave me clear guidance, practical systems, and hands-on skills. I stopped guessing, saved hours of trial and error, and became more confident and intentional with my content.",
    name: "Sonia Omasheye",
    role: "Business Manager",
  },
  {
    headline: "I left with practical, hands-on skills…",
    quote:
      "I wasn't sure I would get enough value from the program. I left with practical, hands-on skills and built and deployed apps using Claude Code, Lovable, Replit, and Emergent. I would definitely recommend it.",
    name: "S.K.",
    role: "AI Fellow",
    cohort: "Bravo cohort",
  },
];

export type Product = {
  name: string;
  description: string;
  image: string;
  backdrop: string;
  href?: string;
  metric?: string;
  metricLabel?: string;
};

export const featuredProducts: Product[] = [
  {
    name: "TranscriptX",
    description: "Get instant transcripts for all your videos",
    image: "0110e.png",
    backdrop: "product-1-desktop-bg.png",
    href: "https://transcriptx.xyz",
    metric: "3.8k",
    metricLabel: "Users",
  },
  {
    name: "Weekends of AI",
    description: "Learn one transferable AI skill every week",
    image: "656eb.png",
    backdrop: "product-2-desktop-bg.png",
    href: links.workshops,
    metric: "6.9k",
    metricLabel: "AI Fellows",
  },
];

// Figma contains preview artwork for these products; destinations await confirmation.
export const labProducts: Product[] = [
  featuredProducts[0]!,
  {
    name: "Bazooka",
    description: "An experiment from Attention Factory Labs.",
    image: "656eb.png",
    backdrop: "product-2-desktop-bg.png",
  },
  {
    name: "Billa",
    description: "An experiment from Attention Factory Labs.",
    image: "0110e.png",
    backdrop: "product-1-desktop-bg.png",
  },
  {
    name: "Tazer",
    description: "An experiment from Attention Factory Labs.",
    image: "0110e.png",
    backdrop: "product-1-desktop-bg.png",
  },
];
