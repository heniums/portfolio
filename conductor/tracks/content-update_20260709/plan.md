# Implementation Plan: Portfolio Content Update

## Phase 1: Content Updates

- [ ] Task: Update Realtime Chat App URL in `src/config.ts`
    - [ ] Change `url` field from `https://rtchatdemo.vercel.app` to `https://chat-heniums.vercel.app`

- [ ] Task: Add Kanban project entry to `projectInfoList` in `src/config.ts`
    - [ ] Add new object with key `kanban`, name `Kanban`, description, tags, url, sourceUrl

- [ ] Task: Add TOEIC info block to `aboutMeInfoBlocks` in `src/config.ts`
    - [ ] Add new object with key `toeic`, title `TOEIC`, content `TOEIC Listening & Reading: 965/990`

## Phase 2: Verification

- [ ] Task: Run lint check
    - [ ] Execute `npm run lint` and confirm zero warnings

- [ ] Task: Run build check
    - [ ] Execute `npm run build` and confirm successful compilation

- [ ] Task: Conductor - User Manual Verification 'All Phases' (Protocol in workflow.md)
    - [ ] Start dev server with `npm run dev`
    - [ ] Verify Realtime Chat App card links to new URL
    - [ ] Verify Kanban project card appears with correct details
    - [ ] Verify TOEIC score appears in About Me section
