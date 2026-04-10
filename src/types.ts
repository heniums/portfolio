export type TopbarMenuLinkConfig = {
  label: string;
  link: string;
};

export type InfoBlock = {
  key: string;
  title: string;
  content: string;
};

export type ProjectInfo = {
  key?: string;
  name: string;
  description?: string;
  tags?: string[];
  url?: string;
  thumbnail?: string;
};

export type ExperienceEntry = {
  key: string;
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type TechCategoryData = {
  key: string;
  title: string;
  items: string[];
};

export type ContactLink = {
  key: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
};

export type HeroConfig = {
  greeting: string;
  fullName: string;
  jobTitle: string;
  bio: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
};

export type SectionMeta = {
  title: string;
  subTitle: string;
};

export type SiteConfig = {
  /** Display name used in Hero, Footer, page title */
  fullName: string;
  /** Short logo text for the top bar (e.g. initials) */
  logoText: string;
  /** Social/contact URLs — single source of truth */
  social: SocialLinks;
  /** Hero section content */
  hero: HeroConfig;
  /** Section titles and subtitles */
  sections: {
    about: SectionMeta;
    experience: SectionMeta;
    portfolio: SectionMeta;
    techStack: SectionMeta;
    contact: SectionMeta;
  };
  /** SEO metadata — keep in sync with index.html manually */
  seo: {
    title: string;
    description: string;
  };
};
