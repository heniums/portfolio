# Specification: Portfolio Refresh

## Overview

Complete portfolio refresh to establish clear professional branding as a **Marketplace Platform Engineer** and optimize recruiter scanability. Restructure content hierarchy so that core expertise leads, while experience and projects reinforce the story.

## Functional Requirements

### FR1: Reorder Sections (Expertise-First)

Change the page layout to:
`Hero → Core Expertise → Experience → Projects → About`

This requires updating:
- `src/pages/Home/Home.tsx` — reorder `<AnimatedSection>` components
- `src/main.tsx` — reorder `links` array to match new nav order (Expertise → Experience → Projects → About)

### FR2: Update Journey Horizon End Date

Change the period for the Journeyhorizon experience entry from:
`"Mar 2024 — Present"`
to:
`"Mar 2024 — May 2026"`

### FR3: Add Kanban Project Thumbnail

Add a placeholder thumbnail URL to the existing Kanban project entry with a `// TODO` comment.

### FR4: Hero Branding Refactor

**Title:** Replace generic "Full-Stack Developer" with:
> Software Engineer specializing in Marketplace Platforms

**Bio:** Rewrite to immediately communicate niche and scope:
> I build and deploy marketplace platforms used by businesses across Europe, Australia, North America, and Asia. My work focuses on React, payment integrations, booking systems, internationalization, and AWS deployments.

**Badges:** Display Education, TOEIC, and Location badges in Hero.

**Contact buttons:** Retain Email, GitHub, and LinkedIn CTAs in Hero.

### FR5: Core Expertise Section

Section title: "CORE EXPERTISE" with subtitle "What I do best."

Four categories in a 2×2 grid of outlined cards with eyebrow labels:

**Frontend**
- Next.js, React, TypeScript, Blazor, WPF (C#), Tailwind CSS

**Backend**
- WebSocket, Express, PostgreSQL, Drizzle ORM, REST

**Cloud & Deployment**
- AWS, Docker, Nginx

**Marketplace Related**
- Sharetribe
- Payment systems: Wise, Airwallex, Stripe
- State machine
- Email automation (SendGrid)
- i18n

### FR6: Rewrite Experience as Achievement Narratives

Transform Journeyhorizon bullets from technology lists into achievement stories:

- "Customized Sharetribe marketplaces to meet client-specific business requirements."
- "Built marketplace features including payment processing, booking, transaction workflows, and multilingual support."
- "Deployed production applications to AWS using EC2, Nginx, Docker, and CircleCI."
- "Integrated Stripe, Airwallex, Wise, and iCal into client platforms."
- "Migrated customer data from Airtable and legacy systems into NoCoDB and Sharetribe."
- "Collaborated with designers, backend engineers, and clients throughout feature delivery."

Update ITD Group to clarify real-world impact:
- "Developed a WPF desktop application used by operators to design and publish content to electronic highway message signs."

### FR7: Projects → Feature-Focused Descriptions

Rewrite project descriptions to emphasize **features** over technologies:

**Kanban:**
> Real-time collaborative kanban board with drag-and-drop, optimistic updates, role-based permissions, and Socket.IO live sync.

**Realtime Chat:**
> Hobby project demonstrating WebSocket real-time messaging with user authentication and presence indicators.

### FR8: About Me — Personal Story

Replace current generic narrative with a personal, reflective paragraph:

> I enjoy solving problems that sit between product ideas and implementation. Whether it's designing a transaction workflow, integrating a payment provider, or deploying a marketplace to production, I like understanding how all the pieces fit together. I care about writing maintainable code, documenting my work, and building software that's reliable for both users and teammates.

### FR9: Merge Contact into Hero (Already Implemented)

Contact section remains merged into Hero per previous work. No standalone Contact section.

## Acceptance Criteria

- [x] Page sections appear in order: Hero → Core Expertise → Experience → Projects → About
- [x] TopBar navigation links match the new section order (no Contact link)
- [x] Journey Horizon experience shows "Mar 2024 — May 2026"
- [x] Kanban project has a thumbnail placeholder with a `// TODO` comment
- [x] Hero title reads "Software Engineer specializing in Marketplace Platforms"
- [x] Hero bio communicates marketplace niche and geographic scope
- [x] Experience bullets read as achievement narratives, not technology lists
- [x] Project descriptions emphasize features over technologies
- [x] Section title "TECH STACK" renamed to "CORE EXPERTISE"
- [x] Core Expertise uses outlined eyebrow-card layout in 2×2 grid
- [x] About Me reads as a personal reflection, not a generic bio
- [x] `npm run build` passes (TypeScript check + Vite build)
- [x] `npm run lint` passes with zero warnings

## Out of Scope

- Adding new projects beyond Kanban
- Visual redesign or new color schemes
- SEO updates
- Adding a separate Education section (credentials remain in Hero badges)
