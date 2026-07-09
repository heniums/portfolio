# Initial Concept

A personal portfolio website for Nguyen Van Hen, a Full-Stack Developer specializing in React, TypeScript, Node.js, and Sharetribe marketplace platforms. The site is a single-page application built with React 18, TypeScript, Vite, and Tailwind CSS v4. It features sections for About Me, Experience, Portfolio Projects, Tech Stack, and Contact information. All editable content is centralized in `src/config.ts` for easy customization.

---

# Product Guide

## Vision

A clean, fast, and professional single-page portfolio website that serves as the digital identity for Nguyen Van Hen. It should communicate technical competence, professional experience, and personality — without unnecessary complexity. The site must be trivial to fork and customize by anyone who wants a similar portfolio.

## Target Audience

- **Primary:** Hiring managers, recruiters, and potential clients evaluating Nguyen Van Hen for full-stack or frontend engineering roles.
- **Secondary:** Other developers who may fork the repository to build their own portfolio.

## Goals

1. **Professional credibility:** Present work history, project contributions, and technical skills in a structured, scannable format.
2. **Ease of customization:** All personal data lives in a single config file (`src/config.ts`). Swapping names, bios, projects, or tech stacks should take minutes, not hours.
3. **Performance:** Leverage Vite + SWC for fast builds and Tailwind v4 for minimal CSS overhead. The site should load instantly and scroll smoothly.
4. **Maintainability:** Use TypeScript with strict settings, ESLint with zero warnings, and a component-based architecture that is easy to extend.

## Core Features

- **Hero Section:** Name, job title, short bio, and primary CTAs (Contact / GitHub).
- **About Me:** Education background, core skills summary, and personality statement.
- **Experience Timeline:** Chronological work history with company links, roles, periods, and bullet-point contributions.
- **Portfolio Grid:** Project cards with thumbnails, descriptions, tech tags, and links to live demos and source code.
- **Tech Stack Categories:** Grouped technology lists (Frontend, Backend, Marketplace, Payments, Cloud & DevOps) with contextual notes.
- **Contact Footer:** Direct links to email, GitHub, and LinkedIn.
- **Responsive TopBar Navigation:** Desktop dropdown menu + mobile dialog modal with anchor links to each section.

## Design & UX Principles

- **Single-page, anchor-based navigation:** All content is accessible via smooth-scrolling anchor links.
- **Dark-first aesthetic:** Default section background is zinc-900; content uses high-contrast typography.
- **Typography-driven:** Custom MrDafoe font for accents, full Poppins family (100–900, both upright and italic) for body text.
- **Minimal dependencies:** Only React, React Router, Tailwind, clsx/tailwind-merge, and lucide-react icons. No heavy UI component libraries.
- **HOC-based component primitives:** Reusable Button, A, Icon, Section, and Heading components composed via higher-order component patterns.

## Content Strategy

- **Single source of truth:** `src/config.ts` contains all editable content — site metadata, hero copy, section titles, about blocks, experience entries, project list, tech categories, and contact links.
- **SEO basics:** Title and meta description are kept in config and mirrored in `index.html`.
- **Asset convention:** Hero photo is `src/assets/me.jpg`; custom fonts are in `public/fonts/`.

## Non-Functional Requirements

- **Performance:** Static site build, minimal JS bundle, optimized assets.
- **Accessibility:** Semantic HTML, keyboard-navigable mobile menu, sufficient color contrast.
- **Compatibility:** Modern evergreen browsers.
- **Build quality:** Zero ESLint warnings, TypeScript strict mode compliance.

## Future Opportunities

- Add a blog or writing section.
- Dark/light theme toggle.
- CMS integration (e.g., Sanity or Contentful) for non-technical content updates.
- Automated deployment via GitHub Actions to Vercel/Netlify.
