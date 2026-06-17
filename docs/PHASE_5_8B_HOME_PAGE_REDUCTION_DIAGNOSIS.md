# Phase 5.8B Home Page Reduction Diagnosis

## Phase Objective

Diagnose how to reduce the current Home page into a short 30-second company overview while preserving the exact existing Vesperus visual style.

This phase does not implement code, change styling, deploy, or alter claim boundaries.

## Current Home Page Problems

Current `src/pages/HomePage.tsx` renders the full original long-form landing page:

1. Hero
2. CurrentStatus
3. Recognition
4. Problem
5. NovaSection
6. SystemArchitecture
7. MedisSection
8. TechnologyStack
9. CurrentProgress
10. Founder
11. Contact

Problems:

- Home is too long for a 30-second company overview.
- Full NOVA technical content remains on Home even though `/nova` now exists.
- Full M.E.D.I.S. content remains on Home even though `/medis` now exists.
- System architecture, technology stack, and current progress are too detailed for the new homepage role.
- Founder, recognition, and contact sections are full-detail versions instead of previews.
- The current order makes Home behave like a complete one-page site instead of the entry point to a multi-page company website.
- Projects are not presented as a snapshot/portfolio layer.
- Team snapshot is missing.
- The homepage does not yet communicate that the team has 5 people total including the founder.

## Recommended Reduced Home Page Structure

Target Home page:

1. Hero
2. What Is Vesperus
3. Why Vesperus Exists
4. Projects Snapshot
5. Current Status Snapshot
6. Team Snapshot
7. Founder Snapshot
8. Recognition Preview
9. Contact CTA

Target user experience:

- A reviewer should understand Vesperus in 30 seconds.
- The page should answer: what it is, why it matters, what is being built, who is behind it, what proof exists, and how to contact.
- Deep technical detail should be available through routes, not forced onto the Home page.

## Components To Keep On Home

### Keep And Reuse Directly

- `Hero`
- `Problem`, but rename/reposition conceptually as `Why Vesperus Exists` if implementation creates a home-specific version.

### Keep As Shortened Preview Variants

- `CurrentStatus` -> convert or replace with `HomeStatusSnapshot`.
- `Founder` -> convert or replace with `FounderSnapshot`.
- `Recognition` -> convert or replace with `RecognitionPreview`.
- `Contact` -> convert or replace with `HomeContactCta`.

## Components To Remove From Home

Remove full-detail sections from Home:

- `NovaSection`
- `MedisSection`
- `SystemArchitecture`
- `TechnologyStack`
- `CurrentProgress`
- full `Founder`
- full `Recognition`
- full `Contact`

Move destinations:

- Full NOVA details -> `/nova`
- Full M.E.D.I.S. details -> `/medis`
- Full System Architecture -> `/nova`
- Full Technology Stack -> `/nova` or `/projects`
- Full Current Progress -> `/nova` or `/projects`
- Full Founder detail -> `/founder`
- Full Recognition detail -> `/recognition`
- Full Contact detail -> `/contact`

## New Components To Create

Recommended folder:

- `src/components/home/`

Recommended components:

- `WhatIsVesperus.tsx`
- `HomeMission.tsx` or merge into `WhatIsVesperus.tsx`
- `ProjectsSnapshot.tsx`
- `CurrentStatusSnapshot.tsx`
- `TeamSnapshot.tsx`
- `FounderSnapshot.tsx`
- `RecognitionPreview.tsx`
- `HomeContactCta.tsx`

Optional shared component:

- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/FeatureCard.tsx`
- `src/components/ui/CtaButton.tsx`

Diagnosis:

For Phase 5.8B implementation, create home-specific components first and avoid broad shared UI abstractions unless repeated markup becomes noisy.

## Recommended Section Details

### 1. Hero

Use existing `Hero` with minimal change.

Potential implementation adjustment:

- CTA `Learn about NOVA` should route to `/nova`, not `#nova`.
- CTA `View recognition` should route to `/recognition`, not `#recognition`.

No copy changes required unless route links are updated.

### 2. What Is Vesperus

Purpose:

Explain the company in plain terms.

Suggested key message:

Vesperus builds validation-first orchestration, supervision, and automation infrastructure for next-generation medical systems.

Visual:

- Full-width section.
- 2-3 dark cards.
- Use existing `panel`, `eyebrow`, `section-shell`.

CTA:

- Optional link to `/projects`.

### 3. Why Vesperus Exists

Purpose:

Keep the strongest existing problem framing from `Problem.tsx`.

Recommended content:

- Keep the core paragraph about reliable orchestration, telemetry validation, supervision, and safety boundaries.
- Keep three concise cards if space permits.

Visual:

- Existing `Problem` styling can be reused or lightly refactored into a home-specific component.

### 4. Projects Snapshot

Purpose:

Show what Vesperus is building without full technical depth.

Cards:

- NOVA
- M.E.D.I.S.
- NOVA SC / Supervision Console

Required card framing:

- NOVA: current validation-first platform/proof point.
- M.E.D.I.S.: long-term R&D healthcare infrastructure vision.
- NOVA SC: supervision and telemetry validation layer.

Buttons:

- Explore NOVA -> `/nova`
- Explore M.E.D.I.S. -> `/medis`
- View Projects -> `/projects`

No real product images required yet.

### 5. Current Status Snapshot

Purpose:

Keep maturity visible without taking over the page.

Recommended status chips:

- NOVA B1: Designed
- NOVA SC: Telemetry checks validated
- Pi Gateway: Operational prototype
- M.E.D.I.S.: Research & Development
- Clinical Deployment: Not claimed

Visual:

- Compact badge row or 2-column card layout.
- Avoid five large cards on Home if the page feels heavy.

### 6. Team Snapshot

Purpose:

Introduce that Vesperus is more than a solo portfolio page while not inventing names.

Required facts:

- Multidisciplinary team.
- 5 people total including founder.
- Based in Paris, France.
- Embedded systems.
- Software.
- Data engineering.
- Research/validation.

Do not:

- Invent names.
- Invent roles beyond the provided capability areas.
- Invent affiliations, advisors, partners, or employers.

Suggested copy:

`Vesperus is built by a 5-person multidisciplinary team based in Paris, France, spanning embedded systems, software, data engineering, and research/validation.`

### 7. Founder Snapshot

Purpose:

Show founder credibility without full detail.

Keep:

- Vishal Nelaturi.
- MSc Data Engineering.
- Aivancity Paris-Cachan.
- Founder of Vesperus.
- Builder of NOVA and M.E.D.I.S.
- LinkedIn/GitHub links.

CTA:

- View Founder -> `/founder`

Visual:

- Use founder photo or compact card.
- Do not repeat the full founder page content.

### 8. Recognition Preview

Purpose:

Surface the Aivancity article without using the full recognition section.

Keep:

- Featured by Aivancity.
- Article title.
- Link to `/recognition` or direct article.
- Boundary note that recognition supports visibility, not clinical validation.

CTA:

- View Recognition -> `/recognition`

### 9. Contact CTA

Purpose:

Short final action.

Recommended copy:

For innovation ecosystems, incubators, technical collaborators, and early partners interested in validation-first medical automation infrastructure, contact Vesperus.

CTA:

- Contact Vesperus -> `/contact`

## Copy-Safety Rules

Do not add:

- Clinical readiness.
- Regulatory approval.
- Patient deployment.
- Patient use.
- Medicine synthesis working.
- Autonomous dosing.
- GMP manufacturing.
- Fake traction.
- Fake partners.
- Fake customers.
- Fake investors.
- Fake pilots.
- Approved medical device claims.

Required framing:

- NOVA is validation-first infrastructure.
- M.E.D.I.S. is R&D-stage.
- NOVA SC is a supervision and telemetry validation layer.
- Clinical deployment remains not claimed.
- Recognition supports visibility, not clinical validation.

Team rules:

- Mention 5 people total including founder.
- Mention capability areas only.
- Do not invent names, titles, biographies, or credentials.

## Visual Consistency Rules

Preserve:

- Dark premium background.
- Centered subtle watermark.
- Existing grid/glow background.
- Cyan/teal/violet accent system.
- Rounded dark cards.
- Same navbar/footer style.
- Same typography.
- Same button language.
- Same `section-shell`, `panel`, and `eyebrow` utilities.
- Same restrained Framer Motion reveals.

Do not:

- Introduce a new layout theme.
- Use stock medical photos.
- Use fake device renders.
- Make the home page feel like a marketing template.
- Add decorative styles that conflict with the current deep-tech system.

## Recommended Future `HomePage.tsx` Order

```tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVesperus />
      <Problem />
      <ProjectsSnapshot />
      <CurrentStatusSnapshot />
      <TeamSnapshot />
      <FounderSnapshot />
      <RecognitionPreview />
      <HomeContactCta />
    </>
  );
}
```

## Files Likely To Modify Or Create In Implementation

Create:

- `src/components/home/WhatIsVesperus.tsx`
- `src/components/home/ProjectsSnapshot.tsx`
- `src/components/home/CurrentStatusSnapshot.tsx`
- `src/components/home/TeamSnapshot.tsx`
- `src/components/home/FounderSnapshot.tsx`
- `src/components/home/RecognitionPreview.tsx`
- `src/components/home/HomeContactCta.tsx`
- `docs/PHASE_5_8B_HOME_PAGE_REDUCTION_REPORT.md`

Modify:

- `src/pages/HomePage.tsx`
- `src/components/Hero.tsx` for route CTA links, if needed.
- `README.md`

Optional:

- `src/data/projects.ts`
- `src/data/status.ts`
- `src/data/founder.ts`
- `src/data/team.ts`

## Validation Checklist

- [ ] Home contains exactly the intended high-level overview sections.
- [ ] Home no longer renders full NOVA details.
- [ ] Home no longer renders full M.E.D.I.S. details.
- [ ] Home no longer renders full System Architecture.
- [ ] Home no longer renders full Technology Stack.
- [ ] Home no longer renders full Current Progress.
- [ ] Home uses a compact Founder Snapshot, not full founder detail.
- [ ] Home uses a compact Recognition Preview, not full recognition detail.
- [ ] Home uses a compact Contact CTA, not full contact page detail.
- [ ] Projects Snapshot includes NOVA, M.E.D.I.S., and NOVA SC / Supervision Console.
- [ ] Team Snapshot states 5 people total including founder and does not invent names.
- [ ] CTAs route to `/projects`, `/nova`, `/medis`, `/founder`, `/recognition`, and `/contact` where appropriate.
- [ ] Existing visual identity is preserved.
- [ ] No fake images are added.
- [ ] No clinical, regulatory, patient deployment, synthesis, dosing, GMP, or fake traction claims are introduced.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8B Implementation

