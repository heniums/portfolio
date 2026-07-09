# Track Specification: Portfolio Content Update

## Overview

A content update chore to refresh portfolio data in `src/config.ts`. Three changes:
1. Update the Realtime Chat App project URL
2. Add a new Kanban project entry
3. Add TOEIC score to the Hero badges

## Track Type

Chore (Content Update)

---

## Functional Requirements

### FR-1: Update Realtime Chat App URL

- **Current URL:** `https://rtchatdemo.vercel.app`
- **New URL:** `https://chat-heniums.vercel.app`
- **Location:** `projectInfoList` array in `src/config.ts`, entry with `key: "realtime-chat-app"`

### FR-2: Add Kanban Project

Add a new project entry to `projectInfoList` with:

| Field | Value |
|-------|-------|
| key | `kanban` |
| name | `Kanban` |
| description | `Real-time collaborative kanban board with drag-and-drop, optimistic updates, role-based permissions, and Socket.IO live sync.` |
| tags | `["React", "Next.js", "Socket.io", "PostgreSQL", "Drizzle", "Tailwind CSS"]` |
| url | `https://kanban-heniums.vercel.app` |
| sourceUrl | `https://github.com/heniums/kanban` |
| thumbnail | *(empty string with TODO comment)* |

### FR-3: Add TOEIC Score to Hero Badges

Add a new badge to `siteConfig.hero.badges` in `src/config.ts`:

| Field | Value |
|-------|-------|
| key | `toeic` |
| label | `TOEIC` |
| value | `Listening & Reading: 965/990` |
| icon | `language` |

---

## Non-Functional Requirements

- No new dependencies introduced
- No component changes required — only data updates in `src/config.ts`
- Must pass `npm run lint` and `npm run build` after changes

## Acceptance Criteria

- [x] Realtime Chat App URL is updated to `https://chat-heniums.vercel.app`
- [x] Kanban project card appears in the Portfolio section with correct details
- [x] TOEIC score appears in Hero badges
- [x] `npm run lint` passes with zero warnings
- [x] `npm run build` succeeds

## Out of Scope

- Adding a thumbnail image for the Kanban project (can be added later)
- Any UI/component changes
- Changes to other sections or config values
