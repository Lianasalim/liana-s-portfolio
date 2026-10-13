# Liana S — AI / ML Portfolio

A responsive, recruiter-friendly portfolio for a data scientist and ML researcher, covering data science, AI/ML and research roles. Built with Next.js (App Router) and Tailwind CSS. All content comes from the candidate's résumé and LinkedIn profile.

## Overview

- **Hero** with name, title, positioning statement and CTAs
- **Featured projects** (Problem / Solution / Contribution / Outcome, with key results), plus a short "more projects" list
- **Research & publications** (published, submitted and manuscript papers)
- **Experience** timeline, **About**, grouped **Skills**
- **Education, certifications & publication**
- **Contact** (email, phone, LinkedIn, GitHub)
- Dark / light mode (follows system preference, with a toggle), subtle scroll-reveal animations that respect `prefers-reduced-motion`

## Tech stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS 3. No API keys, no environment variables, no external fonts.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Customize the content

Everything lives in **`data/portfolio.ts`**:

| What | Where |
| --- | --- |
| Name, title, positioning, contact links, résumé path | `profile` |
| Hero "snapshot" card | `snapshot` |
| About text and highlight tiles | `about` |
| Featured projects (add `link` for repo/demo URLs) | `featuredProjects` |
| Smaller projects | `moreProjects` |
| Research interests and papers | `research` |
| Work history (add an end date to `period` as needed) | `experience` |
| Skill groups | `skills` |
| Degree, certifications, publication | `education`, `certifications` |

- Replace the résumé by overwriting `public/Liana_S_Resume.docx` (or change `profile.resume`).
- Colours are CSS variables in `app/globals.css` (`--accent`, `--bg`, …) for both light and dark themes.
- Section order is set in `app/page.tsx`.

## Project structure

```
app/          layout, page, global styles, icon
components/   one component per section + shared UI (Section, Chip, Reveal, ThemeToggle)
data/         portfolio.ts  ← all content
public/       résumé download
```
