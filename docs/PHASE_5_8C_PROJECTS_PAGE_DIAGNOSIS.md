# Phase 5.8C Projects Page Diagnosis

## Phase Objective

Diagnose how to build `/projects` as the portfolio overview for Vesperus projects while preserving the current visual identity and claim-safety boundaries.

This phase does not implement code, deploy, change styling, add fake images, or change claims.

## Current Projects Page State

Current file:

- `src/pages/ProjectsPage.tsx`

Current behavior:

- Renders a single placeholder panel.
- Uses existing dark premium styling.
- Mentions NOVA, M.E.D.I.S., and NOVA SC at a high level.

Current gap:

- It does not yet function as a bridge between Home and project detail pages.
- It does not include portfolio cards, connection logic, maturity overview, safety boundary, or contact CTA.

## Relevant Existing Components

Useful reference components:

- `src/components/home/ProjectsSnapshot.tsx`
- `src/components/home/CurrentStatusSnapshot.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/BackgroundWatermark.tsx`

Current data files:

- `src/data/links.ts`

No existing project data file exists yet.

## Reuse Recommendation

Do not directly reuse `ProjectsSnapshot` as the full Projects page.

Reason:

- `ProjectsSnapshot` is intentionally brief for Home.
- The Projects page needs richer descriptions, labels, statuses, and connection context.
- Direct reuse would make `/projects` feel like a duplicate Home section rather than a real portfolio overview.

Recommended approach:

- Create projects-specific components under `src/components/projects/`.
- Optionally create `src/data/projects.ts` and `src/data/status.ts` so Home and Projects can share copy safely later.

## Recommended Page Structure

### 1. Projects Hero

Purpose:

Introduce the page and clarify the portfolio role.

Required title:

- `Projects`

Required message:

- `Vesperus is building validation-first infrastructure for future medical automation systems.`

Visual:

- Use `section-shell`.
- Use a `panel` hero or unframed hero matching current page style.
- Use an abstract Lucide icon such as `FolderKanban`, `Network`, or `Layers3`.

### 2. Project Portfolio Cards

Purpose:

Show NOVA, NOVA SC, and M.E.D.I.S. as related but distinct workstreams.

Visual:

- Three premium dark cards.
- Lucide icons only.
- No screenshots.
- No fake renders.
- Status badge on each card.
- CTA on each card.

#### NOVA Card

Label:

- `Infrastructure Platform`

Title:

- `NOVA`

Description:

- `Validation-first hardware/software orchestration platform for distributed supervision and system-state visibility.`

Status:

- `Current proof point`

Button:

- `Explore NOVA` -> `/nova`

#### NOVA SC Card

Label:

- `Supervision Console`

Title:

- `NOVA SC`

Description:

- `Supervisory software layer for telemetry checks, packet integrity, gateway visibility, and validation evidence.`

Status:

- `Software validation layer`

Button:

- `Explore NOVA` -> `/nova`

#### M.E.D.I.S. Card

Label:

- `Long-Term R&D`

Title:

- `M.E.D.I.S.`

Description:

- `Future healthcare infrastructure direction being developed on top of NOVA.`

Status:

- `R&D-stage vision`

Button:

- `Explore M.E.D.I.S.` -> `/medis`

### 3. How The Projects Connect

Purpose:

Help reviewers understand the hierarchy without needing technical depth.

Required explanation:

- NOVA is the infrastructure platform.
- NOVA SC is the supervision and telemetry validation layer.
- M.E.D.I.S. is the long-term R&D healthcare application vision built on NOVA.

Recommended visual:

- Horizontal or vertical flow:
  - NOVA -> NOVA SC -> M.E.D.I.S.
- Use cards or connected blocks.
- Avoid implying that M.E.D.I.S. is completed.

Suggested wording:

`NOVA provides the validation-first infrastructure foundation. NOVA SC supports supervision, telemetry checks, packet integrity, and validation visibility. M.E.D.I.S. is the long-term R&D healthcare infrastructure vision being developed on top of this foundation.`

### 4. Current Maturity Overview

Purpose:

Make status visible and conservative.

Required items:

- NOVA B1: Designed
- NOVA SC: Telemetry checks validated
- Pi Gateway: Operational prototype
- M.E.D.I.S.: Research & Development
- Clinical Deployment: Not claimed

Reuse recommendation:

- The layout can borrow from `CurrentStatusSnapshot`.
- Prefer a projects-specific `ProjectMaturityOverview.tsx` component so page copy can be tuned without changing Home.

### 5. Safety / Claim Boundary

Purpose:

Keep the portfolio page safe from exaggerated healthcare claims.

Required copy direction:

- `These projects are presented as research-stage validation infrastructure and future-facing R&D, not clinical deployment or regulated medical products.`

Recommended visual:

- A bordered `panel` with teal/cyan subtle treatment.
- Icon: `ShieldCheck` or `ShieldAlert`.

### 6. Contact CTA

Purpose:

Route interested reviewers and ecosystem partners to contact.

Recommended CTA:

- Heading: `Interested in validation-first medical automation infrastructure?`
- Button: `Contact Vesperus` -> `/contact`

## Recommended Components To Create

Recommended folder:

- `src/components/projects/`

Components:

- `ProjectsHero.tsx`
- `ProjectPortfolioCards.tsx`
- `ProjectConnectionMap.tsx`
- `ProjectMaturityOverview.tsx`
- `ProjectSafetyBoundary.tsx`
- `ProjectsContactCta.tsx`

Alternative:

- Build all sections directly in `src/pages/ProjectsPage.tsx` for speed.

Diagnosis:

Create separate components. The page has six clear sections and will likely evolve, so component boundaries will keep it maintainable.

## Recommended Data Files

Optional but recommended:

- `src/data/projects.ts`
- `src/data/status.ts`

`projects.ts` should include:

- label
- title
- description
- status
- route
- CTA text
- icon key or component mapping strategy

`status.ts` should include:

- NOVA B1
- NOVA SC
- Pi Gateway
- M.E.D.I.S.
- Clinical Deployment

Diagnosis:

For Phase 5.8C implementation, data files are helpful but not mandatory. If used, avoid over-engineering icon serialization; keep icons in the component if that is simpler.

## Visual Rules

Preserve:

- Dark premium background.
- Centered watermark.
- Existing navbar/footer.
- Existing `section-shell`, `panel`, and `eyebrow` utilities.
- Cyan/teal/violet accent system.
- Rounded dark cards.
- Restrained Framer Motion reveals.
- Existing typography scale.
- Existing button styling.

Do not add:

- Fake screenshots.
- Stock medical imagery.
- Fake product renders.
- New visual system.
- Page-specific styling that makes Projects look detached from Home.

## Claim-Safety Rules

Do not claim:

- Clinical readiness.
- Regulatory approval.
- Patient deployment.
- Patient use.
- Medicine synthesis working.
- Autonomous dosing.
- GMP manufacturing.
- Fake pilots.
- Fake customers.
- Fake partners.
- Fake investors.
- Approved medical device status.

Required framing:

- NOVA is validation-first infrastructure.
- NOVA SC is a supervision and telemetry validation layer.
- M.E.D.I.S. is long-term R&D.
- Clinical deployment remains not claimed.
- The Projects page is a portfolio overview, not clinical evidence.

## Copy Refinements

Recommended wording to use:

- `validation-first infrastructure`
- `distributed supervision`
- `system-state visibility`
- `telemetry checks`
- `packet integrity`
- `gateway visibility`
- `validation evidence`
- `future healthcare infrastructure direction`
- `R&D-stage vision`
- `not clinical deployment`
- `not regulated medical products`

Avoid:

- `clinical product`
- `patient-ready`
- `treatment`
- `dosing`
- `synthesis`
- `manufacturing`
- `deployed in hospitals`
- `certified`
- `approved`

## Exact Implementation Target

Recommended `ProjectsPage.tsx` order:

```tsx
export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectPortfolioCards />
      <ProjectConnectionMap />
      <ProjectMaturityOverview />
      <ProjectSafetyBoundary />
      <ProjectsContactCta />
    </>
  );
}
```

## Files Likely To Modify Or Create

Create:

- `src/components/projects/ProjectsHero.tsx`
- `src/components/projects/ProjectPortfolioCards.tsx`
- `src/components/projects/ProjectConnectionMap.tsx`
- `src/components/projects/ProjectMaturityOverview.tsx`
- `src/components/projects/ProjectSafetyBoundary.tsx`
- `src/components/projects/ProjectsContactCta.tsx`
- `docs/PHASE_5_8C_PROJECTS_PAGE_REPORT.md`

Modify:

- `src/pages/ProjectsPage.tsx`
- `README.md`

Optional:

- `src/data/projects.ts`
- `src/data/status.ts`

## Validation Checklist

- [ ] `/projects` no longer shows placeholder copy.
- [ ] Projects Hero includes the required title and message.
- [ ] Portfolio cards include NOVA, NOVA SC, and M.E.D.I.S.
- [ ] NOVA card routes to `/nova`.
- [ ] NOVA SC card routes to `/nova`.
- [ ] M.E.D.I.S. card routes to `/medis`.
- [ ] How the projects connect section explains hierarchy clearly.
- [ ] Current maturity overview includes all five required status items.
- [ ] Safety / claim boundary section is visible.
- [ ] Contact CTA routes to `/contact`.
- [ ] No fake images, screenshots, or renders are added.
- [ ] No clinical, regulatory, patient, synthesis, dosing, GMP, fake traction, or approval claims are introduced.
- [ ] Visual system matches Home.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8C Implementation

