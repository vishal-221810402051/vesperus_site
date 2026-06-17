# Phase 5.8A Architecture Migration Report

## Phase Objective

Migrate the current single-page Vesperus site into a clean multi-page React Router structure while preserving the existing visual identity and homepage content.

## React Router Installed

Installed:

- `react-router-dom`

Installed version recorded in `package.json`:

- `^7.18.0`

Install note:

- The first sandboxed install attempt failed due registry/network permission restrictions.
- The install succeeded through the approved `npm.cmd` command path.
- npm reported 3 high-severity audit warnings already present in the dependency tree; no force fixes were run.

## Pages Created

Created:

- `src/pages/HomePage.tsx`
- `src/pages/ProjectsPage.tsx`
- `src/pages/NovaPage.tsx`
- `src/pages/MedisPage.tsx`
- `src/pages/FounderPage.tsx`
- `src/pages/RecognitionPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/NotFoundPage.tsx`

Phase 5.8A behavior:

- `HomePage` renders the existing homepage content in the same order.
- Other pages use simple dark premium placeholder sections for the next phase.
- No full page redesign was performed.
- No NOVA images or screenshots were added.

## Layout Components Moved

Moved/recreated layout components under:

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/BackgroundWatermark.tsx`

Created:

- `src/components/layout/ScrollToTop.tsx`

Removed old top-level copies:

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/BackgroundWatermark.tsx`

## Routes Added

`src/App.tsx` now uses `BrowserRouter`, `Routes`, and `Route`.

Routes:

- `/`
- `/projects`
- `/nova`
- `/medis`
- `/founder`
- `/recognition`
- `/contact`
- `*`

Shared layout:

- `BackgroundWatermark`
- `ScrollToTop`
- `Navbar`
- `Routes`
- `Footer`

## Navbar Updated

Primary navigation now uses route paths instead of homepage-only hash anchors:

- Home -> `/`
- Projects -> `/projects`
- Founder -> `/founder`
- Recognition -> `/recognition`
- Contact -> `/contact`

Project detail routes remain available, but are not top-level navbar links:

- `/nova`
- `/medis`

Logo behavior:

- Routes to `/`.

Contact CTA:

- Routes to `/contact`.

## Data Folder Created

Created:

- `src/data/links.ts`

This centralizes current public links:

- Domain
- Email
- GitHub
- LinkedIn
- Aivancity article
- Location

## Vercel Rewrite Added

Created:

- `vercel.json`

Rewrite:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Purpose:

- Support direct route refreshes such as `/nova`, `/projects`, and `/contact` in a single-page Vite deployment.

## Claim Safety

No new claims were introduced for:

- Clinical readiness
- Regulatory approval
- Patient deployment
- Medicine synthesis working
- Autonomous dosing
- GMP manufacturing
- Fake traction
- Fake partners

The only claim-safety scan match remains the existing Recognition disclaimer:

- `It is not presented as clinical validation or regulatory approval.`

This is a negating disclaimer, not an affirmative claim.

## Build Result

PASS

Command:

```bash
npm run build
```

Executed through:

```bash
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Result:

- TypeScript build passed.
- Vite production build passed.
- `dist/` was regenerated.

Build output included:

- `dist/index.html`
- bundled logo asset
- bundled founder image asset
- CSS bundle
- JavaScript bundle

## Files Created Or Modified

Created:

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/BackgroundWatermark.tsx`
- `src/components/layout/ScrollToTop.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/ProjectsPage.tsx`
- `src/pages/NovaPage.tsx`
- `src/pages/MedisPage.tsx`
- `src/pages/FounderPage.tsx`
- `src/pages/RecognitionPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/NotFoundPage.tsx`
- `src/data/links.ts`
- `vercel.json`
- `docs/PHASE_5_8A_ARCHITECTURE_MIGRATION_REPORT.md`

Modified:

- `src/App.tsx`
- `package.json`
- `package-lock.json`
- `README.md`

Removed:

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/BackgroundWatermark.tsx`

## Known Limitations

- The new non-home pages are placeholders only.
- The homepage is still long and has not yet been reduced.
- NOVA, M.E.D.I.S., Projects, Founder, Recognition, and Contact pages still need full content passes.
- Page-level SEO metadata has not yet been added.
- Image optimization remains pending.

## Next Step

Phase 5.8B Home Page Reduction
