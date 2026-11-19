# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` / `npm run preview` — production build / serve it
- `npm run lint` — ESLint (`--max-warnings 0`, so any warning fails)
- Tests use Vitest, but there is **no `test` script** in package.json:
  - `npx vitest` (watch) or `npx vitest run` (once)
  - Single file: `npx vitest run src/sections/Navbar/index.test.jsx`
  - Single test: `npx vitest run -t "should render about"`

Vitest config lives in `vite.config.js` (`globals: true`, jsdom, setup file `test-setup.js` which loads `@testing-library/jest-dom`). Tests are colocated as `index.test.jsx` next to the section they cover (Header, Navbar, Contact).

## Architecture

Single-page personal portfolio: React 18 + Vite 4 + Tailwind 3 (no router in use despite `react-router-dom` being installed; `framer-motion` is also installed).

- `src/main.jsx` wraps `<App/>` in a Redux `Provider`. `App` is a two-column flex layout (42%/58% on `lg`): `LeftSection` (sticky: Header, Navbar, Contact) and `RightSection` (About, Experience, Footer).
- **Content is data-driven**: text/links/images live in `src/contents/*.js` (each exports `data`) and are consumed by sections. Edit these files to change portfolio content (`header.js` also imports `src/assets/Resume.pdf`; `experience.js` imports project screenshots from `src/assets/`). Each experience entry has `date, title, link, materials, descriptions, skills (array of arrays), picture`.
- `src/components/ContentContainer` renders a list of such entries. Its section element id is `${sectionTitle}-section`, and `Navbar` scrolls to those ids (`About-section`, `Experience-section`) via `scrollIntoView` — keep ids and the `navs` array in sync when adding sections. 
- Redux store (`src/store.js`) has only a demo `counter` slice (`src/counterSlice.js`, decrement clamps at 0), used by `Header`'s counter buttons; nothing else uses the store.
- Theme: Tailwind v4 via `@tailwindcss/vite`; there is no `tailwind.config.js`. Color tokens (`bg`, `surface`, `fg`, `muted`, `line`, `accent`) are CSS variables in `src/index.css`, mapped in `@theme inline`. Light/dark follows system preference; `components/ThemeToggle` sets `data-theme` on `<html>` and persists it in localStorage. Font: Inter + Noto Sans Thai (Google Fonts in `index.html`).
