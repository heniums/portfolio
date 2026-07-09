# Implementation Plan: Portfolio Content Update

## Phase 1: Content Updates

- [x] Task: Update Realtime Chat App URL in `src/config.ts`
    - [x] Change `url` field from `https://rtchatdemo.vercel.app` to `https://chat-heniums.vercel.app`

- [x] Task: Add Kanban project entry to `projectInfoList` in `src/config.ts`
    - [x] Add new object with key `kanban`, name `Kanban`, description, tags, url, sourceUrl
    - [x] Add `thumbnail` field with empty string and `// TODO` comment

- [x] Task: Add TOEIC score to Hero badges in `src/config.ts`
    - [x] Add TOEIC badge to `siteConfig.hero.badges` array with label "TOEIC" and value "Listening & Reading: 965/990"
    - [x] Note: TOEIC moved from About Me section to Hero badges for better visibility

## Phase 2: Verification

- [x] Task: Run lint check
    - [x] Execute `npm run lint` and confirm zero warnings

- [x] Task: Run build check
    - [x] Execute `npm run build` and confirm successful compilation

- [x] Task: Manual verification
    - [x] Realtime Chat App card links to new URL
    - [x] Kanban project card appears with correct details
    - [x] TOEIC score appears in Hero badges
