# Changelog

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.4.0] — 2026-07-09

### Added

- **Kanban project** — new portfolio entry: real-time collaborative kanban board with drag-and-drop, Socket.IO sync, role-based permissions (React, Next.js, PostgreSQL, Drizzle, Tailwind CSS)
- **Hero badges** — education (UIT VNU-HCM, GPA 8.86/10), TOEIC (965/990), and location displayed below hero bio
- **LinkedIn CTA button** — added alongside GitHub in hero action area
- **`HeroBadge` component** — new `src/pages/Home/components/HeroBadge.tsx` for rendering label/value pairs
- **`HeroBadge` type** — added to `src/types.ts` with `key`, `label`, `value`, optional `icon`
- **`HighlightItem` type** — added to `src/types.ts`
- **Grouped tech badges** — `TechCategoryData.items` now supports `{ label, badges }` objects alongside plain strings (e.g. "Payment systems" groups Wise, Airwallex, Stripe)

### Changed

- **Hero** — job title updated to "Software Engineer specializing in Marketplace Platforms"; bio rewritten to highlight marketplace platforms across regions
- **About Me section** — converted from card-based layout (`InfoBlock[]`) to a single narrative paragraph; `AboutMeCard` component removed
- **Tech Stack → Core Expertise** — section renamed; categories restructured (Frontend, Backend, Cloud & Deployment, Marketplace Related); cards redesigned with light background and bordered style; grid changed from 3-col to 2-col
- **Section order** — Core Expertise moved above Experience; About Me moved to bottom of page
- **Navigation** — links reordered to Expertise → Experience → Projects → About; Contact link removed
- **Portfolio cards** — redesigned with blurred background image, text shadows, and glassmorphic buttons (`variant="ghost"`)
- **Badge component** — updated to darker background with border and backdrop blur
- **Experience entries** — Journeyhorizon period updated to "Mar 2024 — May 2026"; bullets rewritten for both roles
- **Tech stack categories** — Frontend now includes Next.js, Blazor, WPF; Backend includes WebSocket, PostgreSQL, Drizzle ORM; Cloud & Deployment simplified; Marketplace Related consolidates payment systems
- **Realtime Chat App** — URL updated to `chat.heniums.vercel.app`; description improved

### Removed

- **Contact section** — removed from page layout and navigation
- **`InfoBlock` type** — removed from `src/types.ts` (no longer used)
- **`aboutMeInfoBlocks` config** — replaced by `aboutMeNarrative` string in `src/config.ts`
- **`AboutMeCard` component** — deleted (`src/pages/Home/components/AboutMe/components/AboutMeCard.tsx`)

---

## [1.3.1] — 2026-04-23

### Added

- **Experience section** — timeline of work history rendered from `experienceEntries` in `src/config.ts`
- **Tech Stack section** — categorized badge grid rendered from `techCategories` in `src/config.ts`, each category supports an optional `note` field for recruiter context
- **Contact section** — links rendered from `contactLinks` in `src/config.ts`
- **AnimatedSection component** — scroll-triggered fade-in animations using `IntersectionObserver` via `useInView` hook
- **Realtime Chat App project** — hobby project demonstrating WebSocket real-time messaging
- **`sourceUrl` field on portfolio cards** — GitHub source link alongside live demo link
- **Custom favicon** — replaced default Vite SVG with `favicon.png`
- **Shared types** — `ExperienceEntry`, `TechCategoryData`, `ContactLink`, `SocialLinks`, `HeroConfig`, `SectionMeta`, `SiteConfig` moved to `src/types.ts`
- **`SiteConfig` type** — centralized site configuration with `siteConfig` object in `src/config.ts`
- **LinkedIn and Mail icon components** — `src/components/icons/Linkedin.tsx`, `src/components/icons/Mail.tsx`

### Changed

- **Hero section** — complete redesign: dark theme, side-by-side layout (text + portrait), CTA buttons (Get in Touch + GitHub), config-driven content
- **Portfolio cards** — converted from horizontal scroll to responsive grid; added background images, gradient overlays, and conditional "View Project" / "Github" links
- **TopBar** — restyled to dark theme with sticky positioning; desktop nav links always visible; mobile modal updated to dark background
- **Footer** — restyled with Tailwind (dark zinc-950), removed social links, uses `siteConfig.fullName`
- **Section component** — removed default dark background; updated heading styles with uppercase tracking
- **AboutMe cards** — updated to bordered style with hover effects
- **Hero bio** — rewritten to be honest about depth: leads with React/Node.js/marketplaces, explicit that cloud/DevOps is comfortable but not the primary role
- **About Me skills block** — updated to reflect actual stack depth; names Sharetribe explicitly
- **Tech stack categories** — reordered (Frontend → Backend → Marketplace → Payments & Email → Cloud & DevOps) and enriched: Sharetribe items expanded, DynamoDB and CircleCI added
- **README** — rewritten with a personal tone (built for myself, free to use)
- **Navigation** — added Experience and Tech links
- **Smooth scrolling** — enabled via `html { scroll-behavior: smooth }` in `src/index.css`
- **Journeyhorizon company name** — corrected from "Journey Horizon"
- **Content updates** — hero bio, skills, portfolio subtitles, and cloud & devops note refined

### Fixed

- **GitHub icon color** — `fill="currentColor"` was missing on the SVG element, causing the icon to default to black and ignore Tailwind text color classes

---

## [1.3.0] — 2026-04-10

### Added

- **MIT License** — `LICENSE` file added
- **CHANGELOG.md** — project changelog following Keep a Changelog format
- **Hero photo update** — higher resolution portrait image

### Changed

- **README** — updated documentation

---

## [0.2.0] — 2026-04-08

### Added

- Footer component
- Responsive TopBar with mobile modal

### Changed

- Refactored functional HOC composition to plain imperative React components

---

## [0.1.0] — 2025-10-24

### Added

- Initial portfolio scaffold: Hero, About Me, Portfolio sections
- React 18 + TypeScript + Vite (SWC) + Tailwind CSS v4 setup
- BrowserRouter with anchor-based navigation
- GitHub and LinkedIn icon components
- `src/config.ts` as single source of truth for all editable content

[Unreleased]: https://github.com/heniums/portfolio/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/heniums/portfolio/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/heniums/portfolio/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/heniums/portfolio/compare/v0.2.0...v1.3.0
[0.2.0]: https://github.com/heniums/portfolio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/heniums/portfolio/releases/tag/v0.1.0
