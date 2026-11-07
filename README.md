# InspireMe

InspireMe is a recurring membership product under the `myeportal` portfolio.

## What it is
- cinematic weekly inspirational shorts
- a low-friction paid membership
- a member creator system
- a community board for discovery and featured stories
- a foundation for watch → create → share growth loops

## Brand direction
InspireMe should feel:
- hopeful
- cinematic
- emotionally intelligent
- faith-friendly
- premium
- human

Core message:
**You’re not alone.**

## Current status
This repo now contains the active InspireMe Next.js application used for the Vercel project:
- GitHub: `myeportal/Inspire`
- Vercel project: `inspireme`
- Production URL: `https://inspireme-sable.vercel.app`

## Local development
```bash
pnpm install
cp .env.example .env
pnpm dev
```

Optional local database:
```bash
docker compose up -d
```

Default local database URL:
```bash
postgres://postgres:postgres@localhost:5432/inspireme
```

## Product priorities
1. premium public landing experience
2. protected member watch experience
3. upload / create flow
4. community board
5. featured-member workflow
6. moderation + admin tooling
7. email and analytics systems

## Notes
- The app still uses parts of a strong starter foundation for auth/billing structure.
- Branding, UX, and product behavior are being actively converted into the InspireMe experience.
