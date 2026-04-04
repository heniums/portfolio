# src/utils — Shared Utilities

## OVERVIEW
Two concerns: CSS class merging (`css.ts`) and the `speardProps` helper (`component.tsx`).
No test files exist here.

## FILES
| File | Role |
|------|------|
| `css.ts` | Re-exports `clsx` wrapping `clsx` lib + `twMerge` — **the only clsx entry point** |
| `component.tsx` | `speardProps` — preserves React `key` when mapping arrays to components |

## API REFERENCE

```ts
// ── css.ts ────────────────────────────────────────────────────────────────
import { clsx } from "src/utils/css";
clsx(...args)
// Equivalent to twMerge(libClsx(...args))
// Handles conditional classes, arrays, objects AND Tailwind class deduplication

// ── component.tsx ─────────────────────────────────────────────────────────
import { speardProps } from "src/utils/component";

speardProps(Component)
// Returns (props) => <Component {...props} />
// Use in array.map() to preserve React `key` correctly:
//   items.map(speardProps(MyComponent))  // items must have a `key` field
```

## ANTI-PATTERNS
- **Never** import `clsx` or `twMerge` directly — always use `src/utils/css#clsx`
- **Never** forget `speardProps` (or an explicit `key` prop) when mapping an array to components
