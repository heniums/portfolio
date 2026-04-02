# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-02
**Commit:** ac3bbe2
**Branch:** fix/dark-constrast-text-in-topbar-menu

## OVERVIEW
Personal portfolio site — React 18 + TypeScript + Vite + Tailwind CSS v4. Single-page app with anchor-based navigation. Content data lives in `src/config.ts`.

## STRUCTURE
```
portfolio/
├── src/
│   ├── config.ts          # ALL editable content (aboutMe blocks, projects list)
│   ├── types.ts           # Shared TypeScript types
│   ├── main.tsx           # App entry: router setup + nav link config
│   ├── App.tsx            # Unused default Vite stub (not in router tree)
│   ├── components/        # Reusable UI primitives (HOC-based)
│   ├── pages/Home/        # Only page; sections: Hero, AboutMe, Portfolio
│   └── utils/             # CSS helpers + FP component transformers
├── public/                # Static assets (fonts)
├── index.html
├── vite.config.ts         # SWC + Tailwind plugin + `src` path alias
└── Dockerfile
```

## WHERE TO LOOK
| Task | Location |
|------|----------|
| Edit bio / skills / projects | `src/config.ts` |
| Add a nav link | `src/main.tsx` (links array) |
| Change page layout | `src/components/Layout.tsx` |
| Edit Hero section | `src/pages/Home/components/Hero.tsx` |
| Edit About Me section | `src/pages/Home/components/AboutMe/AboutMe.tsx` |
| Edit Portfolio section | `src/pages/Home/components/Portfolio.tsx` |
| Add new UI primitive | `src/components/` |
| Add icon | `src/components/icons/` |

## CODE MAP
| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `Layout` | Component | `src/components/Layout.tsx` | TopBar + Outlet + Footer wrapper |
| `TopBar` | Component | `src/components/TopBar.tsx` | Responsive nav; desktop dropdown + mobile modal |
| `Section` | Component | `src/components/Section.tsx` | Titled section wrapper with default dark styles |
| `Button` | Component | `src/components/Button.tsx` | Variant-aware button (HOC-composed) |
| `A` | Component | `src/components/A.tsx` | Variant-aware anchor (HOC-composed) |
| `Home` | Page | `src/pages/Home/Home.tsx` | Assembles Hero + AboutMe + Portfolio |
| `projectInfoList` | Config | `src/config.ts` | Project cards data |
| `aboutMeInfoBlocks` | Config | `src/config.ts` | About Me card data |

## CONVENTIONS
- **Path alias**: `src/` is aliased as `src` — always import `from 'src/...'`, never relative `../../`
- **HOC composition**: UI primitives (Button, A, Section, Icon) built via `flow(withDefaultClass(...), withVariantClasses(...))` from `src/utils/fp/component`
- **clsx**: always use `src/utils/css#clsx` (wraps clsx + twMerge) — never raw `clsx` or `twMerge`
- **speardProps**: use when mapping array to component list to preserve React `key` correctly
- **Tailwind v4**: config-less, uses `@tailwindcss/vite` plugin — no `tailwind.config.js`
- **Fonts**: custom fonts loaded from `src/public/fonts/` (referenced in CSS)
- **Footer**: uses inline styles (style attribute) — intentional inconsistency, not a bug

## ANTI-PATTERNS (THIS PROJECT)
- **Never** use relative imports (`../../`) — use `src/...` alias
- **Never** add raw `clsx` or `twMerge` imports — always use `src/utils/css#clsx`
- **Never** edit `App.tsx` — it's an unused Vite stub, not in the router tree
- **Never** duplicate content in component files — all editable data lives in `src/config.ts`

## COMMANDS
```bash
npm run dev       # Dev server (Vite HMR)
npm run build     # tsc -b && vite build
npm run lint      # ESLint (0 warnings allowed)
npm run preview   # Preview production build
```

## NOTES
- `src/pages/Home/components/Portfolio.tsx` exports `ProjectInfo` type — imported by `src/config.ts` (avoid circular dependency trap when adding new types)
- `src/pages/Home/components/AboutMe/AboutMe.tsx` exports `InfoBlock` type — same pattern
- `Modal` component lives inside `TopBar.tsx`, not a standalone file
- `App.tsx` exists but is **not** rendered — `main.tsx` uses `Layout` + `Home` directly
