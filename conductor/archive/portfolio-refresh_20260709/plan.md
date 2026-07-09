# Implementation Plan

## Phase 1: Structure & Layout

- [x] Task: Update Journey Horizon period in `src/config.ts` `b9da4d5`
    - [x] Change `"Mar 2024 — Present"` to `"Mar 2024 — May 2026"` in the Journeyhorizon entry
- [x] Task: Add Kanban thumbnail placeholder in `src/config.ts` `656f1ae`
    - [x] Add `thumbnail` field to the Kanban project entry with a TODO comment
- [x] Task: Reorder sections in `src/pages/Home/Home.tsx` `0beb9d4`, `91e4b26`
    - [x] Reorder `<AnimatedSection>` components: Hero → Core Expertise → Experience → Projects → About
- [x] Task: Reorder nav links in `src/main.tsx` `0beb9d4`, `91e4b26`
    - [x] Reorder `links` array: Expertise → Experience → Projects → About
- [x] Task: Remove Highlights section from Home.tsx `91e4b26`
    - [x] Remove highlightsData from config, remove highlights prop from TechStack, delete Highlights.tsx

## Phase 2: Hero & Contact Refactor

- [x] Task: Add hero badges data to `src/config.ts` `4eb5c3a`
    - [x] Add `badges` array to `siteConfig.hero` with Education, TOEIC, and Location entries
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
- [x] Task: Rewrite hero title and bio for marketplace branding `0beb9d4`
    - [x] Change title to "Software Engineer specializing in Marketplace Platforms"
    - [x] Rewrite bio to communicate niche and geographic scope

## Phase 3: Experience & Projects Rewrite

- [x] Task: Update ITD Group experience description `0beb9d4`
    - [x] Rewrite WPF bullet to clarify real-world impact
- [x] Task: Update Journeyhorizon experience descriptions `0beb9d4`
    - [x] Transform bullets from technology lists into achievement narratives
- [x] Task: Rewrite project descriptions to feature-focused `0beb9d4`
    - [x] Update Kanban description to emphasize features (drag-and-drop, optimistic updates, etc.)
    - [x] Update Realtime Chat description to emphasize features (WebSocket, auth, presence)

## Phase 4: Core Expertise Rebrand & UI Revamp

- [x] Task: Rename section title in config `0beb9d4`
    - [x] Change "TECH STACK" to "CORE EXPERTISE"
- [x] Task: Restructure Core Expertise categories `0beb9d4`, `91e4b26`
    - [x] Update categories: Frontend, Backend, Cloud & Deployment, Marketplace Related
    - [x] Add TypeScript to Frontend, remove CI from Cloud, trim parentheticals in Marketplace
- [x] Task: Revamp TechCategory UI to outlined eyebrow-card layout `91e4b26`
    - [x] Bordered white cards with title as top-left eyebrow label
    - [x] 2×2 grid layout for 4 categories
- [x] Task: Remove Highlights section entirely `91e4b26`
    - [x] Delete Highlights.tsx, remove highlightsData from config, remove highlights prop from TechStack

## Phase 5: About Me Rewrite

- [x] Task: Transform About Me to narrative format `a03ad82`
    - [x] Replace cards with single paragraph
- [x] Task: Rewrite About Me narrative to personal reflection `0beb9d4`
    - [x] Update text to focus on problem-solving between product and implementation
    - [x] Emphasize maintainable code, documentation, and reliability

## Phase 6: Build & Quality Verification

- [x] Task: Run TypeScript type check (`npm run build`) `91e4b26`
- [x] Task: Run ESLint (`npm run lint`) `91e4b26`
- [x] Task: Manual verification via dev server (`npm run dev`)
