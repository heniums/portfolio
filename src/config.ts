import type {
  InfoBlock,
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
    bio: "I build marketplace platforms and full-stack web applications. My edge is in React and Node.js — I'm the one writing the features, wiring up the payments, and figuring out why the Handlebars template isn't rendering. Cloud and DevOps? I'm comfortable there, but I'm not the one writing the Dockerfile from scratch.",
    ctaPrimaryLabel: "Get in Touch",
    ctaSecondaryLabel: "GitHub",
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

export const aboutMeInfoBlocks: InfoBlock[] = [
  {
    key: "education",
    title: "Education",
    content:
      "Bachelor of Software Engineering from the University of Information Technology, HCMC. Graduated with GPA 8.86/10.",
  },
  {
    key: "skills",
    title: "Skills",
    content:
      "Full-stack web development with React, Node.js, and TypeScript is where I live. I integrate payment gateways (Stripe, Airwallex, Wise), build email flows, and work deeply with Sharetribe marketplaces. Comfortable with AWS, Docker, Nginx, and CI/CD — I deploy confidently but I'm not the infra architect.",
  },
  {
    key: "personality",
    title: "Personality",
    content:
      "Dedicated and results-oriented. I approach work with enthusiasm and strive for elegant, maintainable solutions.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    key: "itd-group",
    company: "ITD Group",
    companyUrl: "https://itd.com.vn",
    role: "Frontend Developer Intern",
    period: "Oct 2023 — Dec 2023",
    description: [
      "Worked with graph-based data visualization for a highway camera tracking system using Blazor and ASP.NET.",
      "Contributed to the frontend of an admin dashboard built with Blazor, including the login screen.",
      "Built a WPF desktop application to manage dynamic highway sign content — enabling operators to push new text and position updates to roadside display boards.",
    ],
  },
  {
    key: "journey-horizon",
    company: "Journey Horizon",
    companyUrl: "https://journeyhorizon.com",
    role: "Associate Software Engineer",
    period: "Mar 2024 — Present",
    description: [
      "Built and maintained 10+ Sharetribe-based marketplace platforms for international clients across AU, US, and EU regions.",
      "Integrated payment gateways including Stripe, Airwallex, and Wise for multi-currency transaction processing.",
      "Handled production deployments and server migrations using AWS, Docker, Nginx, and CI/CD pipelines — following established infrastructure guides.",
      "Executed complex data migrations and platform upgrades across multiple marketplace environments.",
      "Delivered full-stack features across React frontends, Node.js backends, and marketplace-specific flows (transactions, state machines, emails, internationalization).",
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
    url: "https://rtchatdemo.vercel.app",
    sourceUrl: "https://github.com/heniums/realtime-chat-app",
    thumbnail:
      "https://i.ibb.co/MDprSdNy/Screenshot-2026-04-23-at-00-03-39.png",
  },
];

export const techCategories: TechCategoryData[] = [
  {
    key: "frontend",
    title: "Frontend",
    note: "Day-to-day — this is where most of my work lives.",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    key: "backend",
    title: "Backend",
    note: "APIs, business logic, and server-side features.",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    key: "platforms",
    title: "Marketplace",
    note: "Deep domain expertise — I know the internals well.",
    items: ["Sharetribe", "Handlebars", "Transaction State Machines", "i18n"],
  },
  {
    key: "payments",
    title: "Payments & Email",
    note: "Integrated across multiple production platforms.",
    items: ["Stripe", "Airwallex", "Wise", "SendGrid", "Stripo"],
  },
  {
    key: "cloud-devops",
    title: "Cloud & DevOps",
    note: "Comfortable deploying and operating — not the infra architect.",
    items: ["AWS (EC2, S3, CloudFront, DynamoDB)", "Docker", "Nginx", "CircleCI", "GitHub Actions"],
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
