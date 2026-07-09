import type {
  ProjectInfo,
  ExperienceEntry,
  TechCategoryData,
  ContactLink,
  SiteConfig,
  HighlightItem,
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
    jobTitle: "Software Engineer specializing in Marketplace Platforms",
    bio: "I build and deploy marketplace platforms used by businesses across Europe, Australia, North America, and Asia. My work focuses on React, payment integrations, booking systems, internationalization, and AWS deployments.",
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
      "Full-stack developer specializing in React, TypeScript, Node.js, and Sharetribe marketplace platforms. Building real-world web applications with integrated payments and modern tooling.",
  },
};

// =============================================================================
// CONTENT DATA — Edit these arrays to update section content.
// =============================================================================

export const aboutMeNarrative =
  "I enjoy solving problems that sit between product ideas and implementation. Whether it's designing a transaction workflow, integrating a payment provider, or deploying a marketplace to production, I like understanding how all the pieces fit together. I care about writing maintainable code, documenting my work, and building software that's reliable for both users and teammates.";

export const highlightsData: HighlightItem[] = [
  {
    key: "experience",
    label: "Experience",
    value: "2+ Years",
  },
  {
    key: "payments",
    label: "Payment Systems",
    value: "Stripe • Airwallex • Wise",
  },
  {
    key: "cloud",
    label: "Cloud & Infrastructure",
    value: "AWS • Docker • CircleCI",
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
      "Customized Sharetribe marketplaces to meet client-specific business requirements.",
      "Built marketplace features including payment processing, booking, transaction workflows, and multilingual support.",
      "Deployed production applications to AWS using EC2, Nginx, Docker, and CircleCI.",
      "Integrated Stripe, Airwallex, Wise, and iCal into client platforms.",
      "Migrated customer data from Airtable and legacy systems into NoCoDB and Sharetribe.",
      "Collaborated with designers, backend engineers, and clients throughout feature delivery.",
    ],
  },
];

export const projectInfoList: ProjectInfo[] = [
  {
    key: "realtime-chat-app",
    name: "Realtime Chat App",
    description:
      "Hobby project demonstrating WebSocket real-time messaging with user authentication and presence indicators.",
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
      "Real-time collaborative kanban board with drag-and-drop, optimistic updates, role-based permissions, and Socket.IO live sync.",
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
    title: "Marketplace Platforms ⭐",
    note: "Core expertise — capabilities built across multiple production platforms.",
    items: [
      "Marketplace customization",
      { label: "Payment integrations", badges: ["Stripe", "Airwallex", "Wise"] },
      "Booking & iCal",
      "Transaction workflows",
      "Internationalization",
      "Email automation",
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    note: "Building modern, user-friendly interfaces.",
    items: ["React", "TypeScript", "Blazor", "WPF"],
  },
  {
    key: "cloud",
    title: "Deployment & Cloud",
    note: "Deploying and managing production systems.",
    items: [
      {
        label: "AWS",
        badges: ["EC2", "Lambda", "S3"],
      },
      "Docker",
      "Nginx",
      "CircleCI",
    ],
  },
  {
    key: "data",
    title: "Data & Integration",
    note: "Moving and transforming data between systems.",
    items: [
      "PostgreSQL",
      "DynamoDB",
      "NoCoDB",
      "SQL",
      "REST APIs",
      "Data migration",
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
