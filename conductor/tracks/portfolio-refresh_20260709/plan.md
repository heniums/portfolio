# Implementation Plan

## Phase 1: Content & Layout Updates

- [x] Task: Update Journey Horizon period in `src/config.ts` `b9da4d5`
    - [x] Change `"Mar 2024 — Present"` to `"Mar 2024 — May 2026"` in the Journeyhorizon entry
- [ ] Task: Add Kanban thumbnail placeholder in `src/config.ts`
    - [ ] Add `thumbnail` field to the Kanban project entry with a TODO comment
- [ ] Task: Reorder sections in `src/pages/Home/Home.tsx`
    - [ ] Reorder `<AnimatedSection>` components to: Tech → Experience → Projects → About → Contact
- [ ] Task: Reorder nav links in `src/main.tsx`
    - [ ] Reorder `links` array to match: Tech, Experience, Projects, About, Contact
- [ ] Task: Conductor - User Manual Verification 'Content & Layout Updates' (Protocol in workflow.md)

## Phase 2: Build & Quality Verification

- [ ] Task: Run TypeScript type check (`npm run build`)
- [ ] Task: Run ESLint (`npm run lint`)
- [ ] Task: Manual verification via dev server (`npm run dev`)
- [ ] Task: Conductor - User Manual Verification 'Build & Quality Verification' (Protocol in workflow.md)
