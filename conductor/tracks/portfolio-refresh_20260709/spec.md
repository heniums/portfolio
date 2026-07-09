# Specification: Portfolio Content Update & Section Reorder

## Overview

Update portfolio content to reflect current professional status and reorder page sections for better recruiter-friendliness (skills-first layout).

## Functional Requirements

### FR1: Reorder Sections (Skills-First)

Change the page layout from:
`Hero → About → Experience → Projects → Tech → Contact`
to:
`Hero → Tech Stack → Experience → Projects → About → Contact`

This requires updating:
- `src/pages/Home/Home.tsx` — reorder `<AnimatedSection>` components
- `src/main.tsx` — reorder `links` array to match new nav order

### FR2: Update Journey Horizon End Date

Change the period for the Journeyhorizon experience entry from:
`"Mar 2024 — Present"`
to:
`"Mar 2024 — May 2026"`

This is a single-string change in `src/config.ts`.

### FR3: Add Kanban Project Thumbnail

Add a placeholder thumbnail URL to the existing Kanban project entry. The user will provide the actual URL later, but a TODO comment should mark the placeholder.

### FR4: Hero Spotlight Badges

Add three spotlight badges to the Hero section highlighting key credentials:
- **Education:** Bachelor of Software Engineering, GPA 8.86/10
- **TOEIC:** Listening & Reading 965/990
- **Location:** Ho Chi Minh City, Vietnam

These should be visually remarkable and spotlighted — styled as prominent badges/bills in the Hero area. Data should originate from `src/config.ts`.

### FR5: Simplify About Me

Remove the following from the About Me section (now promoted to Hero):
- Education block (from Background group)
- TOEIC block (from Background group)
- Location block (from Personal group)

The Background group should be removed entirely. The Personal group should retain only Interests and Personality.

## Acceptance Criteria

- [ ] Page sections appear in order: Hero → Tech Stack → Experience → Projects → About → Contact
- [ ] TopBar navigation links match the new section order
- [ ] Journey Horizon experience shows "Mar 2024 — May 2026"
- [ ] Kanban project has a thumbnail placeholder with a `// TODO` comment
- [ ] Hero section displays Education, TOEIC, and Location as spotlight badges
- [ ] About Me no longer contains Education, TOEIC, or Location
- [ ] `npm run build` passes (TypeScript check + Vite build)
- [ ] `npm run lint` passes with zero warnings

## Out of Scope

- Adding new projects beyond Kanban
- Changes to tech stack categories or items
- SEO updates
