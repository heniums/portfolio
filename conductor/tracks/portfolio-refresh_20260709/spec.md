# Specification: Portfolio Content Update & Section Reorder

## Overview

Complete portfolio redesign to establish clear professional branding as a **Marketplace Platform Engineer** and optimize recruiter scanability. Restructure content hierarchy so that experience and capabilities lead, while technology reinforces the story rather than dominates it.

## Functional Requirements

### FR1: Reorder Sections (Experience-First)

Change the page layout from:
`Hero → Tech Stack → Experience → Projects → About`
to:
`Hero → Highlights → Experience → Projects → Core Expertise → About`

This requires updating:
- `src/pages/Home/Home.tsx` — reorder `<AnimatedSection>` components
- `src/main.tsx` — reorder `links` array to match new nav order

### FR2: Update Journey Horizon End Date

Change the period for the Journeyhorizon experience entry from:
`"Mar 2024 — Present"`
to:
`"Mar 2024 — May 2026"`

### FR3: Add Kanban Project Thumbnail

Add a placeholder thumbnail URL to the existing Kanban project entry. The user will provide the actual URL later, but a `// TODO` comment should mark the placeholder.

### FR4: Hero Branding Refactor

**Title:** Replace generic "Full-Stack Developer" with:
> Software Engineer specializing in Marketplace Platforms

**Bio:** Rewrite to immediately communicate niche and scope:
> I build and deploy marketplace platforms used by businesses across Europe, Australia, North America, and Asia. My work focuses on React, payment integrations, booking systems, internationalization, and AWS deployments.

**Badges:** Retain Education, TOEIC, and Location badges in Hero.

**Contact buttons:** Retain Email, GitHub, and LinkedIn CTAs in Hero.

### FR5: Add Highlights Section (New)

Insert a new **Highlights** section immediately after Hero to give recruiters a 5-second summary:

- **2+ Years Experience**
- **10+ Marketplace Deployments**
- **International Clients** — EU • Australia • North America • Asia
- **Payment Systems** — Stripe • Airwallex • Wise
- **Cloud** — AWS • Docker • CircleCI

Create a new `Highlights` component and `highlightsData` config array.

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

### FR8: Tech Stack → Core Expertise

Rename section title from "TECH STACK" to "CORE EXPERTISE".

Restructure categories to focus on **capabilities** rather than raw technology lists:

**Marketplace Platforms ⭐**
- Sharetribe
- Marketplace customization
- Payment integrations
- Booking & iCal
- Transaction workflows
- Internationalization
- Email automation

**Frontend**
- React
- TypeScript
- Blazor
- WPF

**Deployment & Cloud**
- AWS EC2
- Lambda
- S3
- Docker
- Nginx
- CircleCI

**Data & Integration**
- PostgreSQL
- DynamoDB
- NoCoDB
- SQL
- REST APIs
- Data migration

### FR9: About Me — Personal Story

Replace current generic narrative with a personal, reflective paragraph:

> I enjoy solving problems that sit between product ideas and implementation. Whether it's designing a transaction workflow, integrating a payment provider, or deploying a marketplace to production, I like understanding how all the pieces fit together. I care about writing maintainable code, documenting my work, and building software that's reliable for both users and teammates.

### FR10: Merge Contact into Hero (Already Implemented)

Contact section remains merged into Hero per previous work. No standalone Contact section.

## Acceptance Criteria

- [ ] Page sections appear in order: Hero → Highlights → Experience → Projects → Core Expertise → About
- [ ] TopBar navigation links match the new section order (no Contact link)
- [ ] Journey Horizon experience shows "Mar 2024 — May 2026"
- [ ] Kanban project has a thumbnail placeholder with a `// TODO` comment
- [ ] Hero title reads "Software Engineer specializing in Marketplace Platforms"
- [ ] Hero bio communicates marketplace niche and geographic scope
- [ ] Highlights section displays 5 key stats immediately after Hero
- [ ] Experience bullets read as achievement narratives, not technology lists
- [ ] Project descriptions emphasize features over technologies
- [ ] Section title "TECH STACK" renamed to "CORE EXPERTISE"
- [ ] Core Expertise categories lead with capabilities (Marketplace Platforms ⭐)
- [ ] About Me reads as a personal reflection, not a generic bio
- [ ] `npm run build` passes (TypeScript check + Vite build)
- [ ] `npm run lint` passes with zero warnings

## Out of Scope

- Adding new projects beyond Kanban
- Visual redesign or new color schemes
- SEO updates
- Adding a separate Education section (credentials remain in Hero badges)
