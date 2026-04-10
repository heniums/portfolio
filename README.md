# ✨ Open Source Portfolio Template

> A clean, modern, shamelessly-ready-to-steal portfolio template built with React 18, TypeScript, Vite, and Tailwind CSS v4.

---

## What is this?

This is a **personal portfolio template** that you can clone, fill in your own details, and deploy — without having to touch 90% of the code. Built for developers who want a good-looking portfolio but don't want to spend three weekends fighting CSS.

Is it perfect? No. Is it good enough to impress a recruiter at 2am the night before an interview? Absolutely.

---

## Tech Stack

Because apparently we all need to put this in our READMEs:

- **React 18** — the library everyone uses and pretends they understand deeply
- **TypeScript** — because `any` is not a personality type
- **Vite + SWC** — builds so fast you'll think it's broken
- **Tailwind CSS v4** — utility-first, config-free, vibes-only styling
- **React Router v7** — for when you have multiple pages (you probably don't, but options are nice)

---

## Getting Started

```bash
# Clone it
git clone https://github.com/heninums/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

That's it. No ceremony. No 47-step setup guide. Just `npm run dev` and go.

---

## Customizing Your Portfolio

Here's the thing — almost everything you'd want to change lives in **one single file**:

```
src/config.ts
```

Open it. Replace the placeholder content with your actual info. Done.

### What you can update in `src/config.ts`:

**About Me blocks** — your education, skills, personality, secret talents, etc.:

```ts
export const aboutMeInfoBlocks: InfoBlock[] = [
  {
    key: 'education',
    title: "Education",
    content: "Your degree, university, flex-worthy GPA here",
  },
  {
    key: 'skills',
    title: "Skills",
    content: "ReactJS, Node.js, the ability to Google things very fast",
  },
  // add more blocks as needed
];
```

**Projects list** — your actual projects, not "Project A" placeholders:

```ts
export const projectInfoList: ProjectInfo[] = [
  {
    key: 'my-cool-project',
    name: "My Cool Project",
    description: "A thing I built that actually works (most of the time).",
    tags: ["React", "Node.js"],
    url: "https://my-cool-project.com",
    thumbnail: "https://link-to-your-screenshot.jpg",
  },
  // ...
];
```

### Other things you'll probably want to change:

- **Your photo** → replace `src/assets/me.jpg` with your own (keep the filename or update the import in `Hero.tsx`)
- **Nav links** → edit the `links` array in `src/main.tsx`
- **Page layout / sections** → see `src/components/Layout.tsx`, `src/pages/Home/`
- **Tailwind theme tokens** → all in `src/index.css` under `@theme`

---

## Available Scripts

```bash
npm run dev       # Dev server with hot reload
npm run build     # Type-check + production build
npm run lint      # ESLint (zero warnings allowed, we have standards)
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
src/
├── config.ts         ← START HERE. All your content lives here.
├── types.ts          ← Shared TypeScript types
├── main.tsx          ← App entry + nav links
├── index.css         ← Tailwind config + custom fonts + theme tokens
├── assets/           ← Your hero image goes here
├── components/       ← Reusable UI components (Button, TopBar, Layout, etc.)
├── pages/Home/       ← Hero, About Me, Portfolio sections
└── utils/            ← clsx helper, HOC utilities
```

---

## Docker (Optional)

If you want to containerize it for some reason:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Uses Bun under the hood in Docker. Local dev still uses npm. Both work. Don't ask why.

---

## Contributing

Found a bug? Have a cool idea? PRs are welcome.

Spotted something embarrassing in the codebase? Same — PRs are welcome.

---

## License

MIT. Take it. Use it. Make it yours. No need to credit me (but it would be nice).

---

> Built with too much coffee and a healthy fear of bland portfolios. — [heniums](https://github.com/heniums)
