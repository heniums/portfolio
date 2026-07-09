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
    jobTitle: "Full-Stack Developer",
    bio: "I build modern, user-friendly applications with 2+ years of experience in marketplace platforms, payment integrations, and cloud deployments. I love tweaking everything until it works and then tweaking it some more.",
    ctaPrimaryLabel: "Get in Touch",
    ctaSecondaryLabel: "GitHub",
    badges: [
      {
        key: "education",
        label: "Education",
        value: "B.Sc. Software Engineering — GPA 8.86/10",
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
      title: "TECH STACK",
      subTitle: "Technologies and tools I work with daily.",
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
      "Full-stack developer specializing in React, TypeScript, Node.js, and Sharetribe marketplace platforms. Building real-world web applications with integrated payments and modern tooling.",
  },
};

// =============================================================================
// CONTENT DATA — Edit these arrays to update section content.
// =============================================================================

export const aboutMeNarrative =
  "Give me a problem that makes me think, and I'm hooked. I read the docs when I can, document my work so others don't have to guess, and always try to leave things better than I found them. At the end of the day, I just want to build stuff that makes life easier for the people using it.";

export const experienceEntries: ExperienceEntry[] = [
  {
    key: "itd-group",
    company: "ITD Group",
    companyUrl: "https://itd.com.vn",
    role: "Frontend Developer Intern",
    period: "Oct 2023 — Dec 2023",
    description: [
      "Built UI components with Blazor and ASP.NET for admin dashboard",
      "Implemented SQL query sanitization for data security",
      "Developed WPF desktop application for controlling dynamic highway message signs (frontend only, backend provided by third-party partner)",
    ],
  },
  {
    key: "journey-horizon",
    company: "Journeyhorizon",
    companyUrl: "https://journeyhorizon.com",
    role: "Software Engineer",
    period: "Mar 2024 — May 2026",
    description: [
      "Customized and deployed Sharetribe marketplace platforms for international clients (EU, AU, US, Asia) using Vite-fork template",
      "Integrated payment systems (Stripe, Airwallex, Wise) and calendar systems (iCal)",
      "Deployed marketplaces to AWS EC2, configured Nginx, managed CI/CD pipelines with CircleCI",
      "Performed data migrations between platforms (Airtable to NoCODB, legacy systems to Sharetribe)",
      "Designed transaction state machines and implemented internationalization",
      "Worked with PostgreSQL, DynamoDB, Lambda, S3, and NoCODB",
    ],
  },
];

export const projectInfoList: ProjectInfo[] = [
  {
    key: "realtime-chat-app",
    name: "Realtime Chat App",
    description:
      "A hobby chat project to demonstrate how WebSocket works",
    tags: ["React", "Node.js", "WebSocket"],
    url: "https://chat-heniums.vercel.app",
    sourceUrl: "https://github.com/heniums/realtime-chat-app",
    thumbnail:
      "https://i.ibb.co/MDprSdNy/Screenshot-2026-04-23-at-00-03-39.png",
  },
  {
    key: "kanban",
    name: "Kanban",
    description:
      "A real-time collaborative kanban board application for teams that want to move work forward.",
    tags: ["React", "Next.js", "Socket.io", "PostgreSQL", "Drizzle", "Tailwind CSS"],
    url: "https://kanban-heniums.vercel.app",
    sourceUrl: "https://github.com/heniums/kanban",
    // TODO: Replace with actual thumbnail URL
    thumbnail: "",
  },
];

export const techCategories: TechCategoryData[] = [
  {
    key: "marketplace-platforms",
    title: "Marketplace Platforms",
    note: "Core expertise — deep customization and deployment experience.",
    items: ["Sharetribe", "Payment Systems (Stripe, Airwallex, Wise)", "Transaction State Machines", "iCal/Calendar Integration", "Internationalization (i18n)"],
  },
  {
    key: "frontend-development",
    title: "Frontend Development",
    note: "Building modern, user-friendly interfaces.",
    items: ["React/TypeScript", "Blazor/ASP.NET", "WPF", "Modern UI/UX"],
  },
  {
    key: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    note: "Deploying and managing production systems.",
    items: ["AWS (EC2, Lambda, S3, DynamoDB)", "Docker", "Nginx", "CI/CD (CircleCI, GitHub Actions)", "PostgreSQL", "NoCODB"],
  },
  {
    key: "data-integration",
    title: "Data & Integration",
    note: "Moving and transforming data between systems.",
    items: ["Data Migration (Airtable → NoCODB, legacy → Sharetribe)", "Email Templates (SendGrid, Stripo)", "API Integration"],
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
