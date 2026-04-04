# src/pages/Home/components — Page Sections

## OVERVIEW
Three sections rendered by `Home.tsx` in order: Hero → AboutMe → Portfolio.
All content data flows from `src/config.ts`. No test files exist here.

## FILES
| File | Role |
|------|------|
| `Hero.tsx` | Full-width hero with portrait (`src/assets/me.jpg`), name, quote, CTA buttons |
| `Portfolio.tsx` | Horizontal scroll carousel of project cards; **exports `ProjectInfo` type** |
| `PortfolioCard.tsx` | Single project card with background image, tags (Badge), external link; uses `clsx` for class merging |
| `Badge.tsx` | Tag pill `<span>` — plain functional component, no HOC needed |
| `AboutMe/AboutMe.tsx` | Grid of `AboutMeCard` components; **exports `InfoBlock` type** |
| `AboutMe/components/AboutMeCard.tsx` | Single card: title + content text |

## DATA FLOW
All content comes from `src/config.ts` → passed down as props by `Home.tsx`:

```
src/config.ts
  ├── aboutMeInfoBlocks  →  Home → AboutMe → speardProps(AboutMeCard)
  └── projectInfoList    →  Home → Portfolio → PortfolioCard[]
```

## TYPE EXPORTS — CRITICAL DEPENDENCY (do not break)
Both `Portfolio.tsx` and `AboutMe.tsx` export types that `src/config.ts` imports:

| File | Exported type | Imported by |
|------|--------------|-------------|
| `Portfolio.tsx` | `ProjectInfo` | `src/config.ts` |
| `AboutMe/AboutMe.tsx` | `InfoBlock` | `src/config.ts` |

Adding **more** exported types to either file risks circular import issues.
**New shared types must go in `src/types.ts` instead.**

## CONVENTIONS
- `speardProps(Component)` from `src/utils/component` — use for all array-to-component mappings
- Wrap each section in `<Section>` from `src/components/Section.tsx` for consistent chrome
- `PortfolioCard` uses `clsx` with a `BASE` const for its default classes — no HOC involved
- `PortfolioCard` uses inline `style` for `backgroundImage` — acceptable when value is data-driven
- `Badge` is a simple functional component — no HOC warranted for single-purpose pills
- Hero image is imported as an ES module: `import heroImage from "src/assets/me.jpg"`

## ANTI-PATTERNS
- **Never** hardcode content in components — all data must originate from `src/config.ts`
- **Never** add new exported types to `Portfolio.tsx` or `AboutMe.tsx` that `config.ts` needs — use `src/types.ts`
- **Never** use raw `key` prop inside `.map()` when `speardProps` is applicable
- **Never** reach outside the `src/pages/Home/` tree for page-local sub-components
