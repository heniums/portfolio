# src/components — UI Primitive Library

## OVERVIEW
Reusable UI primitives using plain imperative React components with `clsx` for class merging
and a `BASE` + `variantClasses` pattern for variant-aware styling.
No test files exist in this directory.

## FILES
| File | Role |
|------|------|
| `Layout.tsx` | Route wrapper: TopBar + `<Outlet>` + Footer |
| `TopBar.tsx` | Responsive nav — desktop: floating dropdown; mobile: `<dialog>` modal. Contains `Modal` + `TopbarMenuLink` sub-components. Uses `lucide-react` Menu + X icons |
| `Section.tsx` | Semantic `<section>` with `title`/`subTitle` props; default dark (zinc-900) bg via `BASE` class |
| `Button.tsx` | Variant-aware `<button>` (primary/secondary/outline/ghost/success/danger/warning) |
| `A.tsx` | Variant-aware `<a>` — same variants as Button |
| `Footer.tsx` | Footer — **uses inline `style` prop** (intentional legacy, do not replicate) |
| `headings/H2.tsx` | `<h2>` with default `text-xl font-bold` style |
| `headings/H3.tsx` | `<h3>` with default `font-bold text-lg` style |
| `icons/Icon.tsx` | Base icon wrapper; applies `w-6 h-6` as default, merged via `clsx` |
| `icons/Github.tsx` | GitHub SVG icon wrapped in `Icon`; uses relative `./Icon` import (only exception) |

## COMPONENT PATTERN — Variant-aware primitives
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

## COMPONENT PATTERN — No variants (e.g. Icon, Section)
```tsx
const BASE = "w-6 h-6";

export default function MyComponent({ className, ...rest }: MyProps) {
  return <element className={clsx(BASE, className)} {...rest} />;
}
```

## CONVENTIONS
- Import `clsx` from `src/utils/css`, never from `clsx` directly
- `variant` prop defaults to `"primary"` in the function signature or body
- `TopbarMenuLink` + `Modal` are intentionally co-located in `TopBar.tsx`, not separate files
- Icons live in `icons/` and wrap `Icon.tsx` — add new icons here following `Github.tsx` pattern
- Headings in `headings/` are thin functional components with hardcoded classes — no BASE const needed

## ANTI-PATTERNS
- **Never** use `flow`, `withDefaultClass`, `withVariantClasses`, or `fp/component` — these have been removed
- **Never** use inline `style` prop in new components (Footer is a legacy exception)
- **Never** import raw `clsx` or `twMerge` — always `src/utils/css#clsx`
- **Never** create a `Modal` standalone file — it lives inside `TopBar.tsx`
