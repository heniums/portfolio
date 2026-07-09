# Product Guidelines

## Voice & Tone

- **Professional but approachable:** The portfolio should feel like a conversation with a competent engineer — confident, clear, and free of corporate jargon.
- **Concise:** Say what matters. Avoid filler words. Bullet points and short paragraphs are preferred over dense blocks of text.
- **First-person ownership:** Use "I" statements in bio and experience descriptions (e.g., "I built...", "I integrated...") to convey direct accountability.
- **No fluff:** Skip superlatives like "world-class" or "cutting-edge." Let the work speak for itself.

## Branding

- **Identity:** The site is an extension of Nguyen Van Hen's professional identity — clean, organized, and technically precise.
- **Name/Logo:** "Vh" is the abbreviated logo text. Full name appears in the hero and SEO metadata.
- **Color palette:** Dark-first. Zinc-900 as the dominant background, high-contrast white/off-white text, subtle accent colors only when necessary.
- **Typography:** MrDafoe for decorative accents (e.g., hero greeting). Poppins (100–900, upright + italic) for all body and heading text. Do not introduce additional font families.

## UX Principles

- **Single-page scannability:** Every section must be scannable within 2–3 seconds. Use clear headings, visual hierarchy, and adequate whitespace.
- **Smooth navigation:** Anchor links with smooth scroll. The mobile menu must close automatically after navigation.
- **Content-first:** The design exists to present the content. Never sacrifice readability for decoration.
- **Config-driven simplicity:** Any future contributor should be able to change all visible text by editing only `src/config.ts`.
- **Minimal motion:** Animations (if any) should be subtle and purposeful — fade-ins, smooth scroll. Avoid bounce, shake, or excessive transitions.

## Writing Style

- **Technical accuracy:** Technology names must be spelled correctly (e.g., "Sharetribe", "TypeScript", "Tailwind CSS").
- **Consistent casing:** Job titles in Title Case ("Full-Stack Developer"). Company names match their official branding.
- **Date format:** Use em-dashes for date ranges ("Mar 2024 — Present").
- **Bullet style:** Action-oriented verb phrases for experience descriptions (e.g., "Built and maintained...", "Integrated payment gateways...").

## Visual Design

- **Spacing:** Consistent padding and margin scales via Tailwind utilities. Section vertical padding should feel generous but not wasteful.
- **Cards:** If content is grouped (e.g., About Me cards, Portfolio cards), use subtle borders or background contrast — avoid heavy drop shadows.
- **Icons:** Use `lucide-react` exclusively. No custom SVG icons unless absolutely necessary.
- **Images:** Hero image and portfolio thumbnails should be optimized WebP or JPEG. Provide `alt` text for all images.

## Component Patterns

- **HOC composition:** Reusable UI primitives (Button, A, Icon, Section) are composed via higher-order component factories (`withDefaultClass`, `spreadProps`).
- **Variant maps:** For variant-aware components, define a `BASE` class string and a `variantClasses` Partial Record. Merge via `clsx` from `src/utils/css`.
- **Props forwarding:** Always spread `...rest` props onto the underlying DOM element so consumers can override `className`, `onClick`, etc.
- **Type safety:** Export component prop types. Use `React.HTMLAttributes<HTMLElement>` as the base and extend with custom props.

## Accessibility

- **Semantic HTML:** Use correct heading levels (`h1` for hero name, `h2` for section titles, `h3` for card titles).
- **Keyboard navigation:** All interactive elements must be reachable via Tab. The mobile `<dialog>` menu must trap focus while open.
- **Contrast:** Text on dark backgrounds must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
- **Reduced motion:** Respect `prefers-reduced-motion` for any CSS animations or scroll behaviors.

## Code Quality

- **TypeScript strict mode:** `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.
- **Zero warnings:** ESLint `--max-warnings 0` must pass before any build.
- **No dead code:** Remove unused imports, variables, and commented-out code immediately.
- **Path alias only:** Always import via `src/...` alias. The only exceptions are `main.tsx` and `icons/Github.tsx`.
