# Implementation Plan: About Me Section Enhancement

## Phase 1: Type & Data Structure

- [x] Task: Add `InfoBlockGroup` type to `src/types.ts` (bae903b)
    - [ ] Define type with `key: string`, `title: string`, `blocks: InfoBlock[]`

- [x] Task: Restructure `aboutMeInfoBlocks` in `src/config.ts` (d1a0d09)
    - [ ] Change from `InfoBlock[]` to `InfoBlockGroup[]`
    - [ ] Create 3 groups: Background, How I Work, Personal
    - [ ] Add new blocks: AI & Tools, Interests, Location
    - [ ] Reassign existing blocks to appropriate groups

- [x] Task: Update `Home.tsx` prop passing (e274bfe)
    - [ ] Change `<AboutMe infoBlocks={...}>` to `<AboutMe groups={...}>`

## Phase 2: Component Restructure

- [ ] Task: Update `AboutMe.tsx` to render grouped layout
    - [ ] Accept `groups: InfoBlockGroup[]` prop instead of `infoBlocks: InfoBlock[]`
    - [ ] Render each group with a heading label and divider
    - [ ] Render cards within each group using existing `AboutMeCard` + `speardProps`

## Phase 3: Verification

- [ ] Task: Run lint check
    - [ ] Execute `npm run lint` and confirm zero warnings

- [ ] Task: Run build check
    - [ ] Execute `npm run build` and confirm successful compilation

- [ ] Task: Conductor - User Manual Verification 'All Phases' (Protocol in workflow.md)
    - [ ] Start dev server with `npm run dev`
    - [ ] Verify 3 labeled groups: Background, How I Work, Personal
    - [ ] Verify AI & Tools, Interests, Location blocks appear with correct content
    - [ ] Verify existing blocks (Education, Skills, Personality, TOEIC) still render correctly
