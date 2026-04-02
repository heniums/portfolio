# src/pages/Home/components — Page Sections

## OVERVIEW
Three sections rendered by `Home.tsx`: Hero → AboutMe → Portfolio. Each maps to a file here.

## FILES
| File | Role |
|------|------|
| `Hero.tsx` | Full-width hero with portrait, name, quote, CTA buttons |
| `AboutMe/AboutMe.tsx` | Grid of `AboutMeCard` components; exports `InfoBlock` type |
| `AboutMe/components/AboutMeCard.tsx` | Single card (title + content) |
| `Portfolio.tsx` | Horizontal scroll carousel of project cards; exports `ProjectInfo` type |
| `PortfolioCard.tsx` | Single project card with bg image, tags, link; uses `withDefaultClass` directly |
| `Badge.tsx` | Tag pill for PortfolioCard |

## DATA FLOW
All content comes from `src/config.ts` → passed as props to `AboutMe` and `Portfolio`.

```
config.ts
  ├── aboutMeInfoBlocks → Home → AboutMe → AboutMeCard[]
  └── projectInfoList   → Home → Portfolio → PortfolioCard[]
```

## TYPE EXPORTS (cross-file dependency — do not break)
- `Portfolio.tsx` exports `ProjectInfo` — imported by `src/config.ts`
- `AboutMe/AboutMe.tsx` exports `InfoBlock` — imported by `src/config.ts`

Adding types to these components risks circular imports. New shared types → `src/types.ts`.

## CONVENTIONS
- `speardProps(Component)` used for array-to-component mapping (preserves `key`)
- `Section` wrapper from `src/components/Section` for consistent section chrome
- PortfolioCard uses `withDefaultClass` (not `flow`) since no variants needed

## ANTI-PATTERNS
- **Never** hardcode content — all data must come from `src/config.ts`
- **Never** add new exported types here that `config.ts` needs to import — use `src/types.ts`
- **Never** use `key` prop in direct JSX inside `.map()` — use `speardProps` or spread `key` explicitly
