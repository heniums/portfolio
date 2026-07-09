# Technology Stack

## Overview

This project is a single-page portfolio website built with modern React tooling. All dependencies are locked via npm. The build pipeline uses Vite with SWC for fast compilation and HMR.

## Language & Runtime

- **TypeScript 5.2+**
  - Strict mode enabled (`strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`).
  - Isolated modules (`isolatedModules: true`) — no `const enum` or type-only namespace imports.

## Frontend Framework

- **React 18.3**
  - Client-side rendering via `react-dom/client`.
  - Functional components only; no class components observed.

## Routing

- **React Router v7**
  - `react-router-dom` for DOM bindings.
  - `BrowserRouter` with a single route layout (`Layout` + `Home`).
  - Anchor-based navigation (`#about`, `#experience`, etc.) for in-page sections.

## Build Tool

- **Vite 5.3**
  - Dev server with HMR (`npm run dev`).
  - Production build via `vite build` after TypeScript check (`tsc -b`).
  - SWC-powered React transform (`@vitejs/plugin-react-swc`).
  - Path alias: `src/` → `/src` configured in `vite.config.ts`.

## Styling

- **Tailwind CSS v4**
  - Config-free: no `tailwind.config.js`. All customization lives in `src/index.css` via `@theme` and `@utility` directives.
  - Custom font theme tokens for MrDafoe and full Poppins family.
  - `scrollbar-hide` utility defined in CSS.
  - Vite plugin (`@tailwindcss/vite`) handles compilation.

## UI & Utilities

- **clsx** — Conditional className construction.
- **tailwind-merge** — Deduplicates conflicting Tailwind classes.
- **lucide-react** — Icon library (no custom SVGs unless necessary).
- **clsx wrapper** (`src/utils/css.ts`): The project's only entry point for class merging; never import raw `clsx` or `tailwind-merge` directly.

## Code Quality

- **ESLint 8.57**
  - TypeScript parser and plugin (`@typescript-eslint/*`).
  - React Hooks plugin (`eslint-plugin-react-hooks`).
  - React Refresh plugin (`eslint-plugin-react-refresh`).
  - Zero warnings enforced (`--max-warnings 0`).

## Package Manager

- **npm** (standard for local development).
- Dockerfile uses Bun (`oven/bun:1`) for containerized builds; both are valid.

## Static Assets

- **Fonts:** Custom `.ttf` files in `public/fonts/` (MrDafoe + Poppins variants).
- **Images:** Hero photo (`src/assets/me.jpg`) imported as ES module; portfolio thumbnails loaded via external URLs.

## Notable Absence

- **No test framework:** No Vitest, Jest, or Cypress config or test files exist.
- **No backend:** Purely static frontend; no API server, database, or SSR.
- **No state management library:** React props and local state are sufficient for this UI surface area.
