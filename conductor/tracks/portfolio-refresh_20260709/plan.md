# Implementation Plan

## Phase 1: Structure & Layout

- [x] Task: Update Journey Horizon period in `src/config.ts` `b9da4d5`
    - [x] Change `"Mar 2024 — Present"` to `"Mar 2024 — May 2026"` in the Journeyhorizon entry
- [x] Task: Add Kanban thumbnail placeholder in `src/config.ts` `656f1ae`
    - [x] Add `thumbnail` field to the Kanban project entry with a TODO comment
- [x] Task: Reorder sections in `src/pages/Home/Home.tsx` `a73491c`
    - [x] Reorder `<AnimatedSection>` components
- [x] Task: Reorder nav links in `src/main.tsx` `3e89da5`
    - [x] Reorder `links` array to match new nav order
- [ ] Task: Add Highlights section to Home.tsx (after Hero)
    - [ ] Add `<AnimatedSection id="highlights">` with new `Highlights` component
- [ ] Task: Conductor - User Manual Verification 'Structure & Layout' (Protocol in workflow.md)

## Phase 2: Hero & Contact Refactor

- [x] Task: Add hero badges data to `src/config.ts` `4eb5c3a`
    - [x] Add `heroBadges` array to `siteConfig.hero` with Education, TOEIC, and Location entries
    - [x] Add `HeroBadge` type to `src/types.ts`
- [x] Task: Create `HeroBadge` component `5e67ee2`
    - [x] Create `src/pages/Home/components/HeroBadge.tsx`
- [x] Task: Render hero badges in `Hero.tsx` `5e9218f`
    - [x] Import and render `HeroBadge` components
- [x] Task: Add LinkedIn link to Hero section `58e6faa`
    - [x] Import LinkedIn icon and add LinkedIn CTA button
- [x] Task: Remove Contact section from page layout `3d8cc93`
    - [x] Remove `<AnimatedSection id="contact">` from Home.tsx
- [x] Task: Remove Contact link from navigation `530664a`
    - [x] Remove Contact entry from `links` array in main.tsx
- [ ] Task: Rewrite hero title and bio for marketplace branding
    - [ ] Change title from "Full-Stack Developer" to "Software Engineer specializing in Marketplace Platforms"
    - [ ] Rewrite bio to communicate niche and geographic scope
- [ ] Task: Conductor - User Manual Verification 'Hero & Contact Refactor' (Protocol in workflow.md)

## Phase 3: Highlights Section

- [ ] Task: Add `highlightsData` array to `src/config.ts`
    - [ ] Define 5 highlight items (Experience, Deployments, Clients, Payments, Cloud)
    - [ ] Add `HighlightItem` type to `src/types.ts`
- [ ] Task: Create `Highlights` component
    - [ ] Create `src/pages/Home/components/Highlights.tsx` with clean stat grid layout
- [ ] Task: Conductor - User Manual Verification 'Highlights Section' (Protocol in workflow.md)

## Phase 4: Experience & Projects Rewrite

- [x] Task: Update ITD Group experience description
    - [x] Rewrite WPF bullet to clarify real-world impact
- [x] Task: Update Journeyhorizon experience descriptions `8169878`
    - [x] Transform bullets from technology lists into achievement narratives
- [ ] Task: Rewrite project descriptions to feature-focused
    - [ ] Update Kanban description to emphasize features (drag-and-drop, optimistic updates, etc.)
    - [ ] Update Realtime Chat description to emphasize features (WebSocket, auth, presence)
- [ ] Task: Conductor - User Manual Verification 'Experience & Projects Rewrite' (Protocol in workflow.md)

## Phase 5: Core Expertise Rebrand

- [x] Task: Rename section title in config `39f1a0d`
    - [x] Change "TECH STACK" to "CORE EXPERTISE"
- [ ] Task: Restructure Core Expertise categories for capabilities-first
    - [ ] Update Marketplace Platforms ⭐ category with capabilities (customization, payments, booking, etc.)
    - [ ] Update Frontend category to minimal tech list
    - [ ] Update Cloud category to minimal tech list
    - [ ] Update Data category to minimal tech list
- [ ] Task: Rename `techCategories` to `coreExpertiseCategories` in config (optional — keep variable name if too disruptive)
- [ ] Task: Conductor - User Manual Verification 'Core Expertise Rebrand' (Protocol in workflow.md)

## Phase 6: About Me Rewrite

- [x] Task: Transform About Me to narrative format `a03ad82`
    - [x] Replace cards with single paragraph
- [ ] Task: Rewrite About Me narrative to personal reflection
    - [ ] Update text to focus on problem-solving between product and implementation
    - [ ] Emphasize maintainable code, documentation, and reliability
- [ ] Task: Conductor - User Manual Verification 'About Me Rewrite' (Protocol in workflow.md)

## Phase 7: Build & Quality Verification

- [ ] Task: Run TypeScript type check (`npm run build`)
- [ ] Task: Run ESLint (`npm run lint`)
- [ ] Task: Manual verification via dev server (`npm run dev`)
- [ ] Task: Conductor - User Manual Verification 'Build & Quality Verification' (Protocol in workflow.md)
