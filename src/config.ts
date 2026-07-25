import type {
  ProjectInfo,
  ExperienceEntry,
  TechCategoryData,
  ContactLink,
  SiteConfig,
} from "src/types";

// =============================================================================
// SITE CONFIG — All personal/configurable values in one place.
// Fork this project and edit this object to make it your own.
// =============================================================================

export const siteConfig: SiteConfig = {
  fullName: "Nguyen Van Hen",
  logoText: "Vh",

  social: {
    github: "https://github.com/heniums",
    linkedin: "https://linkedin.com/in/hennv",
    email: "hennv404@gmail.com",
  },

  hero: {
    greeting: "Hello, I'm",
    fullName: "Nguyen Van Hen",
    jobTitle: "Full-Stack Software Engineer building scalable web applications",
    bio: "I build production web applications using React, TypeScript, Node.js, and AWS. I contributed to 10+ production web applications, implementing payment integrations, booking workflows, internationalization, cloud deployments, and other business-critical features for businesses across Europe, Australia, North America, and Asia.",
    ctaPrimaryLabel: "Get in Touch",
    ctaSecondaryLabel: "GitHub",
    badges: [
      {
        key: "education",
        label: "Education",
        value: "B.Sc. Software Engineering — UIT (VNU-HCM) — GPA 8.86/10",
        icon: "academic",
      },
      {
        key: "toeic",
        label: "TOEIC",
        value: "Listening & Reading: 965/990",
        icon: "language",
      },
      {
        key: "location",
        label: "Location",
        value: "Ho Chi Minh City, Vietnam",
        icon: "location",
      },
    ],
  },

  sections: {
    about: {
      title: "ABOUT ME",
      subTitle:
        "I am a software engineer who thrives on challenges and is passionate about crafting impactful digital experiences.",
    },
    experience: {
      title: "EXPERIENCE",
      subTitle: "My professional journey so far.",
    },
    portfolio: {
      title: "PORTFOLIO",
      subTitle: "A selection of projects I've spent time on.",
    },
    techStack: {
      title: "CORE EXPERTISE",
      subTitle: "What I do best.",
    },
    contact: {
      title: "CONTACT",
      subTitle: "Let's connect.",
    },
  },

  // Keep these in sync with index.html <title> and <meta name="description">
  seo: {
    title: "Nguyen Van Hen — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, TypeScript, Node.js, and AWS. Building production web applications with payment integrations, cloud deployments, and modern tooling.",
  },
};

// =============================================================================
// CONTENT DATA — Edit these arrays to update section content.
// =============================================================================

export const aboutMeNarrative =
  "I enjoy solving problems that sit between product ideas and implementation. Whether it's designing a transaction workflow, integrating a payment provider, or deploying production applications, I like understanding how all the pieces fit together. I care about writing maintainable code, documenting my work, and building software that's reliable for both users and teammates.";

export const experienceEntries: ExperienceEntry[] = [
  {
    key: "itd-group",
    company: "ITD Group",
    companyUrl: "https://itd.com.vn",
    role: "Frontend Developer Intern",
    period: "Oct 2023 — Dec 2023",
    description: [
      "Built UI components with Blazor and ASP.NET for admin dashboard.",
      "Implemented SQL query sanitization for data security.",
      "Developed a WPF desktop application used by operators to design and publish content to electronic highway message signs.",
    ],
  },
  {
    key: "journey-horizon",
    company: "Journeyhorizon",
    companyUrl: "https://journeyhorizon.com",
    role: "Software Engineer",
    period: "Mar 2024 — May 2026",
    description: [
      "Contributed to production web applications by implementing business workflows, booking systems, payment integrations, and multilingual support.",
      "Implemented production features including payment processing, booking workflows, transaction management, and internationalization.",
      "Deployed production applications to AWS using EC2, Nginx, Docker, and CircleCI.",
      "Integrated Stripe, Airwallex, Wise, and iCal into production applications.",
      "Migrated customer data from Airtable and legacy systems into NoCoDB and Sharetribe.",
      "Collaborated with designers, backend engineers, and clients throughout feature delivery.",
    ],
  },
];

export const projectInfoList: ProjectInfo[] = [
  {
    key: "budgeto",
    name: "Budgeto",
    description:
      "Personal finance & budgeting PWA with multi-wallet tracking, categorized transactions, budget management with per-category limits, wallet-to-wallet transfers, and balance adjustments with audit trails.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    url: "https://budgeto.vercel.app",
    sourceUrl: "https://github.com/heniums/budgeto",
    thumbnail: "https://i.ibb.co/budgeto-thumbnail.png",
  },
  {
    key: "realtime-chat-app",
    name: "Realtime Chat App",
    description:
      "Real-time chat application built to explore WebSocket architecture, authentication, presence tracking, and scalable messaging.",
    tags: ["React", "Node.js", "WebSocket"],
    url: "https://chat.heniums.vercel.app",
    sourceUrl: "https://github.com/heniums/realtime-chat-app",
    thumbnail:
      "https://i.ibb.co/MDprSdNy/Screenshot-2026-04-23-at-00-03-39.png",
  },
  {
    key: "kanban",
    name: "Kanban",
    description:
      "Real-time collaborative kanban board with drag-and-drop, optimistic updates, role-based permissions, and Socket.IO live sync.",
    tags: ["React", "Next.js", "Socket.io", "PostgreSQL", "Drizzle", "Tailwind CSS"],
    url: "https://kanban.heniums.vercel.app",
    sourceUrl: "https://github.com/heniums/kanban",
    thumbnail: "https://i.ibb.co/nMHKMPtw/kanban-app-thumbnail.png",
  },
];

export const techCategories: TechCategoryData[] = [
  {
    key: "frontend",
    title: "Frontend",
    note: "Building modern, user-friendly interfaces.",
    items: ["Next.js", "React", "TypeScript", "Blazor", "WPF (C#)", "Tailwind CSS"],
  },
  {
    key: "backend",
    title: "Backend",
    note: "APIs, real-time systems, and data layers.",
    items: ["WebSocket", "Express", "PostgreSQL", "Drizzle ORM", "REST"],
  },
  {
    key: "cloud",
    title: "Cloud & Deployment",
    note: "Deploying and managing production systems.",
    items: ["AWS", "Docker", "Nginx"],
  },
  {
    key: "integrations",
    title: "Integrations",
    note: "Payment, communication, and localization integrations built for production applications.",
    items: [
      "Sharetribe",
      { label: "Payment systems", badges: ["Wise", "Airwallex", "Stripe"] },
      "State machine",
      "Email automation (SendGrid)",
      "i18n",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    key: "email",
    label: siteConfig.social.email,
    url: `mailto:${siteConfig.social.email}`,
    icon: "mail",
  },
  {
    key: "github",
    label: siteConfig.social.github.replace("https://github.com/", ""),
    url: siteConfig.social.github,
    icon: "github",
  },
  {
    key: "linkedin",
    label: siteConfig.social.linkedin.replace("https://linkedin.com/in/", ""),
    url: siteConfig.social.linkedin,
    icon: "linkedin",
  },
];
