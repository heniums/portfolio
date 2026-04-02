# src/components — UI Primitive Library

## OVERVIEW
HOC-composed reusable primitives. All styled with Tailwind + variant system.

## FILES
| File | Role |
|------|------|
| `Layout.tsx` | Route wrapper: TopBar + `<Outlet>` + Footer |
| `TopBar.tsx` | Responsive nav — desktop: floating dropdown; mobile: `<dialog>` modal. Contains `Modal` + `TopbarMenuLink` sub-components |
| `Section.tsx` | Semantic `<section>` with title/subTitle; default dark (zinc-900) bg via HOC |
| `Button.tsx` | Variant-aware `<button>` (primary/secondary/outline + ghost/success/danger/warning) |
| `A.tsx` | Variant-aware `<a>` — same variants as Button |
| `Footer.tsx` | Footer — **uses inline `style` prop** (intentional, not a pattern to replicate) |
| `headings/H2.tsx` | `<h2>` with default bold style |
| `headings/H3.tsx` | `<h3>` with default bold style |
| `icons/Icon.tsx` | Base icon wrapper; applies `w-6 h-6` via `withDefaultClass` |
| `icons/Github.tsx` | GitHub SVG icon wrapped in `Icon` |

## HOC PATTERN (ALL new primitives must follow)
```tsx
import { flow } from "lodash";
import { withDefaultClass, withVariantClasses } from "src/utils/fp/component";

const variantClasses: Partial<Record<MyVariant, string>> = { ... };

function MyComponent(props: MyProps) { ... }

const transform = flow(
  withDefaultClass("...base classes..."),
  withVariantClasses(variantClasses),   // omit if no variants
);

const MyPrimitive = transform(MyComponent) as typeof MyComponent;
export default MyPrimitive;
```

## CONVENTIONS
- Import `clsx` from `src/utils/css`, never from `clsx` directly
- `variant` prop defaults to `"primary"` in component body
- `TopbarMenuLink` + `Modal` are intentionally co-located in `TopBar.tsx`

## ANTI-PATTERNS
- **Never** create a new HOC-composed component without following the `flow(withDefaultClass, withVariantClasses)` pattern
- **Never** use inline `style` prop in new components (Footer is a legacy exception)
- **Never** import raw `clsx` or `twMerge`
