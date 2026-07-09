# Implementation Plan: About Me Section Enhancement

## Phase 1: Type & Data Structure

- [x] Task: Add `InfoBlockGroup` type to `src/types.ts` (bae903b)
    - [ ] Define type with `key: string`, `title: string`, `blocks: InfoBlock[]`

- [x] Task: Restructure `aboutMeInfoBlocks` in `src/config.ts` (d1a0d09)
    - [x] Change from `InfoBlock[]` to `InfoBlockGroup[]`
    - [x] Create 2 groups: Background, Personal
    - [x] Add new blocks: Interests, Location
    - [x] Reassign existing blocks to appropriate groups

- [x] Task: Update `Home.tsx` prop passing (e274bfe)
    - [ ] Change `<AboutMe infoBlocks={...}>` to `<AboutMe groups={...}>`

## Phase 2: Component Restructure

- [x] Task: Update `AboutMe.tsx` to render grouped layout (f565b08)
    - [ ] Accept `groups: InfoBlockGroup[]` prop instead of `infoBlocks: InfoBlock[]`
    - [ ] Render each group with a heading label and divider
    - [ ] Render cards within each group using existing `AboutMeCard` + `speardProps`

## Phase 3: Verification

- [x] Task: Run lint check (b80531a)
    - [ ] Execute `npm run lint` and confirm zero warnings

- [x] Task: Run build check (07f6084)
    - [ ] Execute `npm run build` and confirm successful compilation

- [x] Task: Conductor - User Manual Verification 'All Phases' (Protocol in workflow.md) [checkpoint: b56c1a4]
    - [x] Start dev server with `npm run dev`
    - [x] Verify 2 labeled groups: Background, Personal
    - [x] Verify Interests, Location blocks appear with correct content
    - [x] Verify existing blocks (Education, Personality, TOEIC) still render correctly
