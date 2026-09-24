export const links = {
  university: "https://app.attentionfactory.io",
  waitlist: "https://nestuge.com/attnhq-waitlist",
  workshops: "https://weekendsofai.com",
  services: "/v2/services",
  guides: "/v2/playbooks",
};

export const services = [
  {
    title: "Education",
    description:
      "Training for you and your team, to get the best of AI knowledge to implement it",
    action: "Visit University",
    href: links.university,
    icon: "7644e.svg",
    mobileIcon: "mobile-education.png",
    mobileAction: "Visit University",
  },
  {
    title: "Team Trainings",
    description:
      "Training for you and your team, to get the best of AI knowledge to implement it",
    action: "View Workshops",
    href: "/v2/organizations",
    icon: "518f4.svg",
    mobileIcon: "mobile-training.png",
    mobileAction: "View Workshops",
  },
  {
    title: "Distributions",
    description:
      "Training for you and your team, to get the best of AI knowledge to implement it",
    action: "View Workshops",
    href: links.services,
    icon: "602b4.svg",
    mobileIcon: "mobile-distribution.png",
    mobileAction: "View Workshops",
  },
  {
    title: "Attention Films",
    description:
      "Training for you and your team, to get the best of AI knowledge to implement it",
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
    mobileAction: "iRegister Your Team",
    href: "/v2/organizations",
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

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We build custom software, automate business workflows, help organizations plan and carry out AI adoption, and train individuals and teams. Our education arm includes Attention University and the free Weekends of AI program.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing depends on the scope, complexity, and support your project needs. Get in touch with your goals and we’ll work through the right approach with you.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Use the contact form to tell us what you want to build or improve. We’ll follow up to understand your goals, scope, and next steps.",
  },
  {
    question: "Do you work with clients from anywhere in the world?",
    answer:
      "Yes. We work remotely with individuals and teams around the world.",
  },
  {
    question: "Do I need technical knowledge to join your training?",
    answer:
      "No. Weekends of AI is a practical place to start. Our programs help you move from understanding AI to applying it to your own work.",
  },
  {
    question: "Can you build software for an early idea?",
    answer:
      "Yes. Share the problem you’re trying to solve, who it’s for, and what you have so far. We can help you decide what to build first.",
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
