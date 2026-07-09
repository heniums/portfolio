# Track Specification: About Me Section Enhancement

## Overview

Enhance the About Me section with 2 new content blocks (Interests, Location) and restructure the layout from a flat grid into 2 labeled groups with visual dividers.

## Track Type

Feature (UI Enhancement + Content Update)

---

## Functional Requirements

### FR-1: Restructure About Me Layout

Replace the current flat grid of `InfoBlock` cards with a grouped layout. The section will have 2 labeled groups separated by visual dividers:

| Group          | Blocks                     |
| -------------- | -------------------------- |
| **Background** | Education, TOEIC           |
| **Personal**   | Location, Interests, Personality |

Each group has a heading label. Blocks within each group remain as cards but are visually organized under their group heading.

### FR-2: Add Interests Block

| Field   | Value                                                       |
| ------- | ----------------------------------------------------------- |
| key     | `interests`                                                   |
| title   | `Interests`                                                   |
| content | `Side projects, exploring new technologies, and open source.` |

### FR-3: Add Location Block

| Field   | Value                     |
| ------- | ------------------------- |
| key     | `location`                  |
| title   | `Location`                  |
| content | `Ho Chi Minh City, Vietnam` |

---

## Non-Functional Requirements

- Config data structure in `src/config.ts` must support grouped blocks (new type or restructured array)
- `AboutMe.tsx` component must render groups with headings and dividers
- Styling via Tailwind only, consistent with existing dark theme (zinc-900 sections)
- Must pass `npm run lint` (zero warnings) and `npm run build`
- Responsive: groups stack vertically on mobile, cards within groups follow existing responsive grid

## Acceptance Criteria

- [ ] About Me section displays 2 labeled groups: Background, Personal
- [ ] Interests block shows correct content
- [ ] Location block shows correct content
- [ ] Groups are visually separated with headings and dividers
- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run build` succeeds

## Out of Scope

- Changes to other sections (Hero, Experience, Portfolio, etc.)
- Dark/light theme toggle
- Animation or transitions between groups
