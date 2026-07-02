# Recreated Components by YSH

A showcase/playground of **43+ UI components** built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **motion** (Framer Motion successor).

Components include: Apple-style carousel, gooey menu, magnetic buttons, mesh gradients, expandable cards, parallax hero sections, drag cards, 3D box, SVG morphing, animated number counter, frosted nav, elastic slider, and many more.

---

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to preview components. Toggle them on/off in `src/app/page.tsx`.

---

## Plan: shadcn-style Component Distribution

The goal is to distribute these components via the **shadcn CLI** pattern — users install components by copying source files into their own projects using `npx shadcn add`, rather than installing a compiled npm package.

### Step 1 — Install shadcn CLI tooling

```bash
pnpm add -D shadcn@canary
```

### Step 2 — Create a registry schema

Create `registry.json` (or `src/registry.ts`). Each component entry specifies:
- `name` — kebab-case identifier (e.g. `"magnetic-button"`)
- `type` — `"registry:ui"` for copy/paste components
- `dependencies` — npm packages (e.g. `motion`, `clsx`, `tailwind-merge`)
- `registryDependencies` — other components this depends on
- `files` — array of `{ path, type: "registry:ui", content }`
- `categories` — optional, for filtering

### Step 3 — Refactor components to be self-contained

Each component needs to be standalone and importable:
- **Inline the `cn()` utility** or add it as a separate registry entry
- **Remove tight coupling** to app-specific layouts, providers, and static assets
- Ensure every component has **`'use client'`** (most already do)
- Replace local image/file references with props or external URLs

### Step 4 — Define peer dependencies

Move runtime dependencies in `package.json` to `peerDependencies`:
- `react`, `react-dom` (>=19)
- `motion`
- `clsx`, `tailwind-merge`
- `next-themes` (for theme-aware components)
- `@phosphor-icons/react` (for icon-dependent components)
- `react-hook-form`, `zod`, `@hookform/resolvers` (for form components)
- `@number-flow/react` (for the `Bits` counter component)

### Step 5 — Set up the registry (two approaches)

**Option A — GitHub-hosted (simpler)**
- Create a `registry/` directory with one JSON/TS file per component
- Consumers install via `npx shadcn add https://github.com/you/recreatedcomponents/registry/<component-name>.json`
- No npm publish needed

**Option B — npm-published (more discoverable)**
- Remove `"private": true`
- Add `"publishConfig"`, `"repository"`, `"files"` fields
- Publish to npm (e.g. `@your-scope/recreatedcomponents`)
- Consumers install via `npx shadcn add @your-scope/recreatedcomponents/<component-name>`
- The npm package contains component source + registry manifest

### Step 6 — Extract Tailwind CSS v4 theme

Pull the custom theme from `src/app/globals.css` into a standalone `theme.css` so consumers can `@import` or `@plugin` the design tokens.

### Step 7 — Provide `components.json` template

Document (or auto-generate via CLI) what a consumer's `components.json` should look like — path aliases, CSS variables path, style preferences, etc.

### Key Architectural Decisions (TBD)

1. **Monorepo?** — Separate `apps/www/` (demo app) from `packages/components/` (the registry) using pnpm workspaces?
2. **Separate demo from source?** — Extract just the component files into `packages/ui/`, keep the existing Next.js app as `apps/www/`.
3. **Image handling?** — Components like `appleCarousel`, `hero`, `profile` reference images from `public/`. Replace with externally-hosted URLs or accept them as props (e.g. `imageSrc: string`).

---

## Stack

| Category | Libraries |
|---|---|
| Framework | `next@16`, `react@19`, `react-dom@19` |
| Animation | `motion` |
| Styling | `tailwindcss@^4`, `@tailwindcss/postcss`, `clsx`, `tailwind-merge` |
| Icons | `@phosphor-icons/react` |
| Forms | `react-hook-form`, `zod`, `@hookform/resolvers` |
| Theming | `next-themes` |
| Counter | `@number-flow/react` |
