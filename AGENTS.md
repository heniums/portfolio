# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-04
**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS v4

## OVERVIEW
Personal portfolio site — single-page app with anchor-based navigation. All editable content (bio, projects) lives in `src/config.ts`. No test framework is present.

---

## COMMANDS
```bash
npm run dev       # Dev server with Vite HMR
npm run build     # Type-check (tsc -b) then Vite bundle
npm run lint      # ESLint — zero warnings allowed (--max-warnings 0)
npm run preview   # Preview production build locally
```
> There are **no tests**. No vitest/jest config or `.test.`/`.spec.` files exist.

---

## STRUCTURE
```
portfolio/
├── src/
│   ├── config.ts              # ALL editable content (aboutMe blocks, projects list)
│   ├── types.ts               # Shared TypeScript types (TopbarMenuLinkConfig)
│   ├── main.tsx               # App entry: BrowserRouter + Layout + Home; nav links[]
│   ├── App.tsx                # UNUSED Vite stub — never edit or import
│   ├── index.css              # Tailwind @import + @font-face + @theme tokens
│   ├── assets/                # Static assets (me.jpg hero image)
│   ├── components/            # Reusable UI primitives (HOC-based)
│   ├── pages/Home/            # Only page: Hero, AboutMe, Portfolio sections
│   └── utils/
│       ├── css.ts             # clsx() — ONLY entry point for class merging
│       ├── component.tsx      # Direct HOC factories (withDefaultClass, speardProps)
│       └── fp/component.tsx   # Curried HOC wrappers for use with lodash flow()
├── public/                    # Static assets (fonts)
├── index.html
├── vite.config.ts             # SWC plugin + Tailwind v4 plugin + src/ alias
└── Dockerfile                 # Bun-based Docker build (local dev uses npm)
```

---

## WHERE TO LOOK
| Task | Location |
|------|----------|
| Edit bio / skills / projects | `src/config.ts` |
| Add a nav link | `src/main.tsx` — `links` array |
| Change page layout | `src/components/Layout.tsx` |
| Edit Hero section | `src/pages/Home/components/Hero.tsx` |
| Edit About Me section | `src/pages/Home/components/AboutMe/AboutMe.tsx` |
| Edit Portfolio section | `src/pages/Home/components/Portfolio.tsx` |
| Add new UI primitive | `src/components/` |
| Add icon | `src/components/icons/` |
| Add new shared type | `src/types.ts` |
| Customize Tailwind theme | `src/index.css` — `@theme` block |

---

## CODE MAP
| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `Layout` | Component | `src/components/Layout.tsx` | TopBar + `<Outlet>` + Footer |
| `TopBar` | Component | `src/components/TopBar.tsx` | Responsive nav; desktop dropdown + mobile `<dialog>` modal |
| `Section` | Component | `src/components/Section.tsx` | Titled section wrapper (dark zinc-900 default) |
| `Button` | Component | `src/components/Button.tsx` | Variant-aware button (HOC-composed) |
| `A` | Component | `src/components/A.tsx` | Variant-aware anchor (HOC-composed) |
| `Icon` | Component | `src/components/icons/Icon.tsx` | Base SVG icon with default sizing |
| `Home` | Page | `src/pages/Home/Home.tsx` | Assembles Hero + AboutMe + Portfolio |
| `projectInfoList` | Config | `src/config.ts` | Project cards data |
| `aboutMeInfoBlocks` | Config | `src/config.ts` | About Me card data |

---

## CONVENTIONS

### Imports
- **Path alias**: `src/` is aliased — always `import from 'src/...'`, never `../../`
- `main.tsx` and `icons/Github.tsx` use local relative imports — these are the only exceptions

### Class Merging
- **Always** import `clsx` from `src/utils/css` — never raw `clsx` or `tailwind-merge`
- `src/utils/css#clsx` wraps both `clsx` + `twMerge` for safe Tailwind deduplication

### HOC Composition (UI Primitives)
UI primitives use straightforward imperative React components with `clsx` for class merging.
For variant-aware components (Button, A), declare a `BASE` const and a `variantClasses` map:
```tsx
import { clsx } from "src/utils/css";

export type MyVariant = "primary" | "secondary";
export type MyProps = React.HTMLAttributes<HTMLElement> & { variant?: MyVariant };

const BASE = "...base tailwind classes...";

const variantClasses: Partial<Record<MyVariant, string>> = {
  primary: "bg-zinc-900 text-white",
  secondary: "bg-zinc-100 text-zinc-900",
};

export default function MyComponent({
  children,
  className,
  variant = "primary",
  ...rest
}: MyProps) {
  return (
    <element className={clsx(BASE, variantClasses[variant], className)} {...rest}>
      {children}
    </element>
  );
}
```

### Array-to-Component Mapping
Use `speardProps` to map arrays to component lists — it preserves React `key` correctly:
```tsx
import { speardProps } from "src/utils/component";
{items.map(speardProps(MyComponent))}  // items must have a `key` field
```

### TypeScript
- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true` — no unused code
- `isolatedModules: true` — no `const enum`, no type-only namespace imports
- Use `export type` for type-only exports
- New shared types belong in `src/types.ts`, not in component files

### Tailwind v4
- Config-less: no `tailwind.config.js` — all customization in `src/index.css` via `@theme`
- Custom fonts: `--font-mr-dafoe`, `--font-poppins-thin` through `--font-poppins-black` etc.
- Custom utility: `scrollbar-hide` defined via `@utility` in `src/index.css`

### Styling
- Use Tailwind utility classes for all styling
- `clsx()` from `src/utils/css` for conditional/merged class strings
- `Footer.tsx` uses inline `style` prop — intentional legacy exception, do not replicate

### Naming
- Components: `PascalCase`
- Utilities / hooks: `camelCase`
- Config arrays: `camelCase` with descriptive suffix (`InfoBlocks`, `InfoList`)
- Files: match their default export name (`Button.tsx` → `export default Button`)

---

## ANTI-PATTERNS (THIS PROJECT)
- **Never** use relative imports `../../` — use `src/...` alias everywhere except `main.tsx`
- **Never** import `clsx` or `twMerge` directly — always use `src/utils/css#clsx`
- **Never** edit `App.tsx` — it is an unused Vite stub, not in the router tree
- **Never** put editable content in component files — all data belongs in `src/config.ts`
- **Never** add a `tailwind.config.js` — Tailwind v4 is CSS-driven, config file not used
- **Never** add new types to `Portfolio.tsx` or `AboutMe.tsx` — use `src/types.ts` to avoid circular dependencies (`config.ts` imports from these files)

---

## NOTES
- `src/pages/Home/components/Portfolio.tsx` exports `ProjectInfo` type — `src/config.ts` imports it (circular dependency risk: do not add more types here)
- `src/pages/Home/components/AboutMe/AboutMe.tsx` exports `InfoBlock` — same warning
- `Modal` component lives inside `TopBar.tsx`, not a standalone file
- Dockerfile uses Bun (`oven/bun:1`) — local dev uses npm; both are valid
- Hero image (`src/assets/me.jpg`) is imported as an ES module, not a public URL

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **portfolio** (122 symbols, 167 relationships, 0 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/portfolio/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool | When to use | Command |
|------|-------------|---------|
| `query` | Find code by concept | `gitnexus_query({query: "auth validation"})` |
| `context` | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})` |
| `impact` | Blast radius before editing | `gitnexus_impact({target: "X", direction: "upstream"})` |
| `detect_changes` | Pre-commit scope check | `gitnexus_detect_changes({scope: "staged"})` |
| `rename` | Safe multi-file rename | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher` | Custom graph queries | `gitnexus_cypher({query: "MATCH ..."})` |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers/importers | MUST update these |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/portfolio/context` | Codebase overview, check index freshness |
| `gitnexus://repo/portfolio/clusters` | All functional areas |
| `gitnexus://repo/portfolio/processes` | All execution flows |
| `gitnexus://repo/portfolio/process/{name}` | Step-by-step execution trace |

## Self-Check Before Finishing

Before completing any code modification task, verify:
1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## Keeping the Index Fresh

After committing code changes, the GitNexus index becomes stale. Re-run analyze to update it:

```bash
npx gitnexus analyze
```

If the index previously included embeddings, preserve them by adding `--embeddings`:

```bash
npx gitnexus analyze --embeddings
```

To check whether embeddings exist, inspect `.gitnexus/meta.json` — the `stats.embeddings` field shows the count (0 means no embeddings). **Running analyze without `--embeddings` will delete any previously generated embeddings.**

> Claude Code users: A PostToolUse hook handles this automatically after `git commit` and `git merge`.

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
