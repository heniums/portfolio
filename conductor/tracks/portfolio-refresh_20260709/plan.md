# Implementation Plan

## Phase 1: Content & Layout Updates

- [x] Task: Update Journey Horizon period in `src/config.ts` `b9da4d5`
    - [x] Change `"Mar 2024 — Present"` to `"Mar 2024 — May 2026"` in the Journeyhorizon entry
- [x] Task: Add Kanban thumbnail placeholder in `src/config.ts` `656f1ae`
    - [x] Add `thumbnail` field to the Kanban project entry with a TODO comment
- [x] Task: Reorder sections in `src/pages/Home/Home.tsx` `a73491c`
    - [x] Reorder `<AnimatedSection>` components to: Tech → Experience → Projects → About → Contact
- [x] Task: Reorder nav links in `src/main.tsx` `3e89da5`
    - [x] Reorder `links` array to match: Tech, Experience, Projects, About, Contact
- [ ] Task: Conductor - User Manual Verification 'Content & Layout Updates' (Protocol in workflow.md)

## Phase 2: Hero Badges & About Me Simplification

- [x] Task: Add hero badges data to `src/config.ts` `4eb5c3a`
    - [x] Add `heroBadges` array to `siteConfig.hero` with Education, TOEIC, and Location entries
    - [x] Add `HeroBadge` type to `src/types.ts`
- [x] Task: Create `HeroBadge` component `5e67ee2`
    - [x] Create `src/pages/Home/components/HeroBadge.tsx` — visually prominent badge/bill styling
- [x] Task: Render hero badges in `Hero.tsx` `5e9218f`
    - [x] Import and render `HeroBadge` components from config data in the Hero section
- [x] Task: Simplify About Me in `src/config.ts` `7fe747b`
    - [x] Remove Background group (education + TOEIC) from `aboutMeInfoBlocks`
    - [x] Remove Location block from Personal group in `aboutMeInfoBlocks`
- [x] Task: Add LinkedIn link to Hero section `58e6faa`
    - [x] Import LinkedIn icon and add LinkedIn CTA button to Hero.tsx
- [x] Task: Remove Contact section from page layout `3d8cc93`
    - [x] Remove `<AnimatedSection id="contact">` from Home.tsx
- [x] Task: Remove Contact link from navigation `530664a`
    - [x] Remove Contact entry from `links` array in main.tsx
- [x] Task: Update config.ts for narrative About Me `f9467a0`
    - [x] Replace `aboutMeInfoBlocks` with `aboutMeNarrative` text field
    - [x] Remove `InfoBlock` and `InfoBlockGroup` types from types.ts (no longer needed)
- [x] Task: Refactor AboutMe component for storytelling `a03ad82`
    - [x] Update AboutMe.tsx to render a single narrative paragraph
    - [x] Remove AboutMeCard.tsx (no longer needed)
- [x] Task: Update hero bio and about me narrative with authentic voice `0397c4e`
    - [x] Rewrite hero bio based on user interview (concise, no dashes)
    - [x] Rewrite about me narrative with authentic, human voice
- [x] Task: Restructure tech stack and update experience descriptions `8169878`
    - [x] Reorganize tech stack into 4 clear categories (Marketplace, Frontend, Cloud, Data)
    - [x] Update ITD Group experience with accurate descriptions
    - [x] Update Journeyhorizon experience with specific technologies and achievements
- [x] Task: Simplify tech stack badges and clean up experience descriptions `39f1a0d`
    - [x] Remove Modern UI/UX, NoCODB, data migration details from tech stack
    - [x] Shorten long badge labels for better layout
    - [x] Remove bracket content from ITD WPF description
- [ ] Task: Conductor - User Manual Verification 'Hero Badges & About Me Simplification' (Protocol in workflow.md)

## Phase 3: Build & Quality Verification

- [ ] Task: Run TypeScript type check (`npm run build`)
- [ ] Task: Run ESLint (`npm run lint`)
- [ ] Task: Manual verification via dev server (`npm run dev`)
- [ ] Task: Conductor - User Manual Verification 'Build & Quality Verification' (Protocol in workflow.md)
