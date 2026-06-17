# Phase 5.8B Home Page Reduction Report

## Phase Objective

Transform the Home page into a concise 30-second company overview while preserving the existing Vesperus visual identity.

## Files Created

- `src/components/home/WhatIsVesperus.tsx`
- `src/components/home/ProjectsSnapshot.tsx`
- `src/components/home/CurrentStatusSnapshot.tsx`
- `src/components/home/TeamSnapshot.tsx`
- `src/components/home/FounderSnapshot.tsx`
- `src/components/home/RecognitionPreview.tsx`
- `src/components/home/HomeContactCta.tsx`
- `docs/PHASE_5_8B_HOME_PAGE_REDUCTION_REPORT.md`

## Files Modified

- `src/pages/HomePage.tsx`
- `src/components/Hero.tsx`
- `README.md`

## Home Page Order Implemented

1. Hero
2. WhatIsVesperus
3. Why Vesperus Exists
4. ProjectsSnapshot
5. CurrentStatusSnapshot
6. TeamSnapshot
7. FounderSnapshot
8. RecognitionPreview
9. HomeContactCta

## Removed From Home

The following full-detail sections are no longer rendered on the Home page:

- `NovaSection`
- `MedisSection`
- `SystemArchitecture`
- `TechnologyStack`
- `CurrentProgress`
- full `Founder`
- full `Recognition`
- full `Contact`

These components remain available for dedicated pages and future implementation phases.

## Projects Snapshot

Implemented cards:

- NOVA - Validation-first infrastructure platform - routes to `/nova`
- NOVA SC - Supervision and telemetry validation layer - routes to `/nova`
- M.E.D.I.S. - Long-term healthcare infrastructure R&D - routes to `/medis`

Additional CTA:

- View All Projects - routes to `/projects`

## Current Status Snapshot

Implemented status items:

- NOVA B1 - Designed
- NOVA SC - Telemetry checks validated
- Pi Gateway - Operational prototype
- M.E.D.I.S. - Research & Development
- Clinical Deployment - Not claimed

## Team Snapshot

Implemented copy:

`A multidisciplinary team of five contributors based in Paris, France, spanning embedded systems, software engineering, data engineering, and research/validation.`

No team names, biographies, affiliations, advisors, or unprovided credentials were invented.

## Founder Snapshot

Implemented:

- Founder photo
- Vishal Nelaturi
- MSc Data Engineering
- Aivancity Paris-Cachan
- Founder of Vesperus
- Builder of NOVA and M.E.D.I.S.
- View Founder button to `/founder`
- LinkedIn and GitHub links

## Recognition Preview

Implemented:

- Featured by Aivancity
- Concise recognition preview
- View Recognition button to `/recognition`
- Boundary copy separating recognition from product, clinical, or regulatory validation

## Home Contact CTA

Implemented:

- Short contact section
- Contact Vesperus button to `/contact`

## Hero Route Updates

Updated Hero CTAs:

- Learn about NOVA -> `/nova`
- View recognition -> `/recognition`

## Visual Consistency

Preserved:

- Dark premium background
- Centered watermark
- Existing navbar and footer
- Existing typography
- Existing colors
- Existing card styling
- Existing button language
- Existing Framer Motion reveal style
- Existing `section-shell`, `panel`, and `eyebrow` utilities

## Claim Safety

No new claims were added for:

- Clinical readiness
- Regulatory approval
- Patient deployment
- Patient use
- Medicine synthesis working
- Autonomous dosing
- GMP manufacturing
- Fake traction
- Fake partners
- Fake customers
- Fake investors
- Fake pilots
- Approved medical device status

Claim-safety scan note:

- The only scan match remains the existing full Recognition component disclaimer: `It is not presented as clinical validation or regulatory approval.`
- This is a negating disclaimer and was not introduced by the new Home page sections.

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

## Next Phase

5.8C Projects Page

