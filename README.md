# Ismael Jhon Jalbuna Jr. — Portfolio

Next.js (App Router, static export) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.
Two experiences on one dataset: **Career Mode** (default) and **Gamified Mode** (Ragnarok-inspired). The choice is stored in `localStorage` (`portfolio-mode`).

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static site in ./out
```

## Content lives in `data/`
| File | What it drives |
|---|---|
| `profile.ts` | Name, headline, summary, availability, **contact links** |
| `projects.ts` | Projects (Career cards + Gamified quests) |
| `experience.ts` | Timeline / Adventure Log |
| `skills.ts` | Expertise groups + skill tree |
| `game.ts` | Class, attributes, achievements, optional `characterArt` |

## Information still needed from you (currently shown as placeholders)
- Email, LinkedIn and GitHub URLs (`data/profile.ts`)
- Availability status text / on-off (`data/profile.ts`)
- Real employment history: employers, dates, responsibilities (`data/experience.ts`) — 3 placeholder entries
- Per project: live URL, screenshot (put in `public/images/projects/`, set `image`), and your contribution (`data/projects.ts`)
- Details for the "Migrate Legacy Applications" quest (no project is linked yet)
- Optional: custom character art → `public/images/game/`, then set `characterArt` in `data/game.ts`; swap `public/images/game/town.svg` for a real town background

The Go/Docker "Current Quest", Linux/Docker "Infrastructure" branch, skill-level badges and "Desktop Timesheet" project from the mockup were **not** included because they weren't in your brief. Add them to the data files if they're real.

## Deploy to GitHub Pages
1. Push to a GitHub repo's `main` branch.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. The workflow (`.github/workflows/deploy.yml`) builds and publishes `out/`.
   - Project site (`user.github.io/<repo>`): base path `/<repo>` is set automatically.
   - User site (repo named `<user>.github.io`): base path is empty automatically.
   - Custom domain: set the repo variable `CUSTOM_DOMAIN` (Settings → Variables → Actions) to any value, add the domain under Pages settings, and add a `public/CNAME` file containing the domain.

Local subpath test: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`.
