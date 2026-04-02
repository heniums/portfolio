# src/utils — Shared Utilities

## OVERVIEW
Two concerns: CSS merging (`css.ts`) and FP-style HOC component transformers (`component.tsx` + `fp/component.tsx`).

## FILES
| File | Role |
|------|------|
| `css.ts` | Re-exports `clsx` wrapping `clsx` + `twMerge` — **the only clsx entry point** |
| `component.tsx` | HOC factories: `withDefaultClass`, `withVariantClasses`, `speardProps` |
| `fp/component.tsx` | Curried (right-curried) versions of above for `lodash.flow` composition |

## HOC SPLIT — WHY TWO FILES
- `src/utils/component.tsx`: Direct call style — `withDefaultClass(Component, "classes")`
- `src/utils/fp/component.tsx`: Curried (point-free) style — `withDefaultClass("classes")(Component)` — used with `flow()`

Use `src/utils/fp/component` when composing with `flow`. Use `src/utils/component` for one-off wrapping (e.g., `Icon.tsx`, `PortfolioCard.tsx`).

## API
```ts
// css.ts
clsx(...args)  // clsx + twMerge combined

// component.tsx (direct)
withDefaultClass(Component, "base classes")
withVariantClasses(Component, { variant: "classes" })
speardProps(Component)  // preserves React key in array.map()

// fp/component.tsx (curried for flow)
withDefaultClass("base classes")         // returns (Component) => HOC
withVariantClasses({ variant: "..." })   // returns (Component) => HOC
```

## ANTI-PATTERNS
- **Never** import `clsx` or `twMerge` directly — always use `src/utils/css#clsx`
- **Never** use `fp/component` without `flow` — use direct `component.tsx` instead
- **Never** forget `speardProps` when mapping an array of components that need `key`
