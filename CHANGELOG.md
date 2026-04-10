# Changelog

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- **Experience section** — timeline of work history rendered from `experienceEntries` in `src/config.ts`
- **Tech Stack section** — categorized badge grid rendered from `techCategories` in `src/config.ts`, each category supports an optional `note` field for recruiter context
- **ITD Group experience entry** — Frontend Developer Intern role (Oct 2023 – Dec 2023) with company link
- `companyUrl` optional field on `ExperienceEntry` type — company name renders as an external link with inline icon when provided
- `note` optional field on `TechCategoryData` type — small italic description rendered below each category title

### Changed

- **Hero bio** — rewritten to be honest about depth: leads with React/Node.js/marketplaces, explicit that cloud/DevOps is comfortable but not the primary role
- **About Me skills block** — updated to reflect actual stack depth; names Sharetribe explicitly; uses "comfortable with" for cloud rather than claiming ownership
- **Journey Horizon experience bullets** — "Led production deployments" softened to accurately reflect role within established infrastructure workflows
- **Tech stack categories** — reordered (Frontend → Backend → Marketplace → Payments & Email → Cloud & DevOps) and enriched: Sharetribe items expanded (Handlebars, Transaction State Machines, i18n), Payments & Email merged into one category, DynamoDB and CircleCI added
- **Footer** — removed social icon links; contact section already covers this
- **SEO description** — updated to mention Sharetribe and integrated payments instead of generic "cloud infrastructure"

### Fixed

- **GitHub icon color** — `fill="currentColor"` was missing on the SVG element, causing the icon to default to black and ignore Tailwind text color classes

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

[Unreleased]: https://github.com/heniums/portfolio/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/heniums/portfolio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/heniums/portfolio/releases/tag/v0.1.0
