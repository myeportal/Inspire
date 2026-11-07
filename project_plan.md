# INSPIRE — I2C Project Plan

## Current state
- GitHub repo exists: `myeportal/Inspire`
- Local repo bootstrapped at `/data/.openclaw/workspace/Inspire`
- Current repo is effectively empty aside from `README.md`
- Provided Vercel URL `https://inspireme-sable.vercel.app` currently returns 404

## Product definition
INSPIRE is a membership-driven inspirational video platform with four core loops:
1. Watch original weekly cinematic shorts
2. Subscribe at low-friction pricing ($1 / $6 / $12)
3. Create and upload member-made inspirational shorts
4. Feature selected member creations to amplify distribution

Core loop:
**WATCH → FEEL → CREATE → SHARE → INSPIRE → REPEAT**

## Recommended V1 scope
### Public
- Landing page
- Flagship video section for "YOU'RE NOT ALONE"
- Pricing section
- CTA to join
- Prelaunch/waitlist capture option
- Basic SEO pages

### Member app
- Auth
- Billing/subscription status
- Member dashboard
- Video library
- Video detail/watch experience
- Submission form + upload flow
- Community board
- Featured section
- Profile / My Inspire

### Admin / ops
- Moderate submissions
- Feature/unfeature content
- Track creators/submissions
- Basic analytics dashboard

## Recommended technical direction
Use a **Next.js app with built-in auth + Stripe foundation**, then adapt it for video/community workflows.

### Recommended bootstrap base
- Start from the workspace starter: `11_ai-saas-starter-next16`

### Why this starter
- Auth already solved
- Stripe subscriptions already solved
- Account/settings patterns already solved
- Better base for protected member areas than a marketing-only starter

### Major custom modules to build
- Video library + protected playback
- Creator upload/submission pipeline
- Moderation queue
- Community board
- Featured promotion workflow
- Email/content announcement flows
- Metrics tuned for watch/create/share behavior

## Proposed architecture
- **Frontend:** Next.js 16 + React + Tailwind
- **Auth:** Better Auth
- **Billing:** Stripe subscriptions
- **DB:** Postgres + Drizzle
- **Storage:** protected object storage for uploads/video assets
- **Video delivery:** signed/protected playback URLs via a secure provider/CDN
- **Email:** transactional + weekly content emails
- **Analytics:** product events + funnel metrics

## Route map (initial)
### Public
- `/`
- `/pricing`
- `/watch/latest`
- `/about`
- `/guidelines`
- `/terms`
- `/privacy`
- `/copyright`

### Authenticated
- `/app`
- `/app/watch`
- `/app/watch/[slug]`
- `/app/create`
- `/app/community`
- `/app/featured`
- `/app/my-inspire`
- `/app/profile`
- `/app/subscription`

### Admin
- `/admin`
- `/admin/submissions`
- `/admin/videos`
- `/admin/featured`
- `/admin/analytics`

## V1 phases
### Phase 1 — Foundation
- Bootstrap app
- Configure auth
- Configure Stripe plans ($1 / $6 / $12)
- Create public landing page
- Create gated member shell

### Phase 2 — Watch experience
- Add original INSPIRE content model
- Add flagship video support
- Add latest/library UI
- Protect member video access

### Phase 3 — Create + community
- Add upload/submission pipeline
- Add moderation review states
- Add community board browsing
- Add featured creator workflow

### Phase 4 — Launch systems
- Add email flows
- Add analytics instrumentation
- Add legal/policy pages
- Add beta + prelaunch flow

## Highest-risk decisions
1. Video hosting/protection provider choice
2. Member upload storage/moderation workflow
3. Whether V1 launches with full member uploads or a reviewed/manual submission pipeline first
4. How much of the social promotion system is manual in V1 vs automated

## Recommended V1 simplifications
- Manual featuring workflow first
- Minimal categories first
- No overbuilt social feed behavior
- Start with weekly originals + several seed videos
- Start with simple moderation states: pending / approved / rejected / featured

## Immediate next build actions
1. Replace the empty repo contents with the SaaS starter foundation
2. Rebrand starter plans/content around INSPIRE
3. Strip AI-credit features not needed for V1
4. Implement landing page + pricing + gated app shell
5. Build video/content schema and dashboard skeleton
6. Build submission pipeline and moderation queue

## Launch-readiness test
A new user must be able to:
- Understand the offer in seconds
- Join for $1, $6, or $12 plan
- Access protected member content
- Watch the latest short
- Understand how to create and submit
- Submit a video for review
- Browse community creations
- Understand how featuring/promotion works
- Manage subscription cleanly
