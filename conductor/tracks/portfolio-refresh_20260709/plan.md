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

- [ ] Task: Add hero badges data to `src/config.ts`
    - [ ] Add `heroBadges` array to `siteConfig.hero` with Education, TOEIC, and Location entries
    - [ ] Add `HeroBadge` type to `src/types.ts`
- [ ] Task: Create `HeroBadge` component
    - [ ] Create `src/pages/Home/components/HeroBadge.tsx` — visually prominent badge/bill styling
- [ ] Task: Render hero badges in `Hero.tsx`
    - [ ] Import and render `HeroBadge` components from config data in the Hero section
- [ ] Task: Simplify About Me in `src/config.ts`
    - [ ] Remove Background group (education + TOEIC) from `aboutMeInfoBlocks`
    - [ ] Remove Location block from Personal group in `aboutMeInfoBlocks`
- [ ] Task: Conductor - User Manual Verification 'Hero Badges & About Me Simplification' (Protocol in workflow.md)

## Phase 3: Build & Quality Verification

- [ ] Task: Run TypeScript type check (`npm run build`)
- [ ] Task: Run ESLint (`npm run lint`)
- [ ] Task: Manual verification via dev server (`npm run dev`)
- [ ] Task: Conductor - User Manual Verification 'Build & Quality Verification' (Protocol in workflow.md)
