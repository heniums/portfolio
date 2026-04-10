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
    bio: "I build modern web applications and marketplace platforms. Passionate about clean code, scalable architecture, and delivering impactful digital experiences.",
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
      subTitle: "A selection of projects I've worked on.",
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
      "Full-stack developer specializing in React, TypeScript, Node.js, and cloud infrastructure. Building modern web applications and marketplace platforms.",
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
      "Full-stack web development with React, Node.js, and TypeScript. Cloud infrastructure with AWS, Docker, and CI/CD pipelines.",
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
    key: "journey-horizon",
    company: "Journey Horizon",
    role: "Associate Software Engineer",
    period: "Mar 2024 — Present",
    description: [
      "Built and maintained 10+ Sharetribe-based marketplace platforms for international clients across AU, US, and EU regions.",
      "Integrated payment gateways including Stripe, Airwallex, and Wise for multi-currency transaction processing.",
      "Led production deployments, server migrations, and zero-downtime releases using AWS, Docker, and CI/CD pipelines.",
      "Executed complex data migrations and platform upgrades across multiple marketplace environments.",
      "Delivered full-stack features spanning React frontends, Node.js backends, and cloud infrastructure.",
    ],
  },
];

export const projectInfoList: ProjectInfo[] = [
  {
    key: "project-a",
    name: "Marketplace Platform",
    description:
      "A full-featured online marketplace connecting buyers and sellers with real-time search, booking management, and integrated payments.",
    tags: ["React", "Node.js", "Sharetribe"],
    url: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    key: "project-b",
    name: "Payment Gateway Integration",
    description:
      "Multi-currency payment processing system supporting Stripe, Airwallex, and Wise for cross-border transactions.",
    tags: ["Stripe", "Airwallex", "TypeScript"],
    url: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    key: "project-c",
    name: "Portfolio Website",
    description:
      "Modern personal portfolio built with React, TypeScript, and Tailwind CSS. Fully responsive with smooth scroll animations.",
    tags: ["React", "TypeScript", "Tailwind"],
    url: siteConfig.social.github,
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
];

export const techCategories: TechCategoryData[] = [
  {
    key: "frontend",
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    key: "backend",
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    key: "cloud-devops",
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, CloudFront)", "Docker", "Nginx", "CI/CD", "GitHub Actions"],
  },
  {
    key: "payments",
    title: "Payments",
    items: ["Stripe", "Airwallex", "Wise"],
  },
  {
    key: "email-marketing",
    title: "Email & Marketing",
    items: ["SendGrid", "Stripo"],
  },
  {
    key: "platforms",
    title: "Platforms",
    items: ["Sharetribe"],
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
