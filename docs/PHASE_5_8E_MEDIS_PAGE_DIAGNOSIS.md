# Phase 5.8E M.E.D.I.S. Page Diagnosis

## Phase Objective

Diagnose how to build `/medis` as the long-term R&D vision page for M.E.D.I.S. while preserving the Vesperus visual system and strict claim-safety boundaries.

This phase does not implement code, deploy, add fake images, add real images, or add clinical/medical claims.

## Current M.E.D.I.S. Page State

Current file:

- `src/pages/MedisPage.tsx`

Current behavior:

- Renders a single placeholder panel.
- Frames M.E.D.I.S. as a long-term R&D healthcare infrastructure vision built on NOVA.
- Uses the existing `section-shell`, `panel`, dark premium styling, and Framer Motion reveal.

Current gap:

- The page does not yet explain what M.E.D.I.S. is, why it exists, how it relates to NOVA, its long-term vision, research status, roadmap, safety boundary, or contact pathway.

## Existing Components Inspected

### `MedisSection.tsx`

Useful for:

- Existing safe framing.
- M.E.D.I.S. as long-term R&D.
- Built on NOVA validation layers.
- Distributed resilience.
- R&D-stage healthcare infrastructure concept.

Diagnosis:

Use this as source language, but create a dedicated `/medis` component set for a fuller page.

### `ProjectsSnapshot.tsx`

Useful for:

- Short Home card copy: `Long-term healthcare infrastructure R&D.`

Diagnosis:

Good summary copy, but too short for the dedicated M.E.D.I.S. page.

### `ProjectPortfolioCards.tsx`

Useful for:

- Portfolio framing: `Future healthcare infrastructure direction being developed on top of NOVA.`
- Status: `R&D-stage vision`.

Diagnosis:

Reuse copy concepts, not the component.

### `NovaSafetyBoundary.tsx`

Useful for:

- Safety boundary style.
- Teal-accented panel.
- Shield icon.
- Explicit non-clinical negating language.

Diagnosis:

Use as style reference, but write a M.E.D.I.S.-specific boundary.

## Reuse Recommendation

Create a dedicated folder:

- `src/components/medis/`

Reason:

- M.E.D.I.S. needs its own page narrative.
- It must be more expansive than the Home/Projects preview.
- Dedicated components reduce copy duplication and keep claim boundaries easier to audit.

Do not directly reuse `MedisSection.tsx` as the page. It is still useful as a compact section pattern, but the page requires more structure.

## Recommended Component List

Create:

- `MedisHero.tsx`
- `MedisOverview.tsx`
- `MedisWhyExists.tsx`
- `MedisNovaRelationship.tsx`
- `MedisLongTermVision.tsx`
- `MedisResearchStatus.tsx`
- `MedisRoadmap.tsx`
- `MedisSafetyBoundary.tsx`
- `MedisContactCta.tsx`

Modify:

- `src/pages/MedisPage.tsx`
- `README.md`

Create report in implementation:

- `docs/PHASE_5_8E_MEDIS_PAGE_REPORT.md`

## Exact Page Structure

Recommended `MedisPage.tsx` order:

```tsx
export default function MedisPage() {
  return (
    <>
      <MedisHero />
      <MedisOverview />
      <MedisWhyExists />
      <MedisNovaRelationship />
      <MedisLongTermVision />
      <MedisResearchStatus />
      <MedisRoadmap />
      <MedisSafetyBoundary />
      <MedisContactCta />
    </>
  );
}
```

## Recommended Safe Copy By Section

### 1. M.E.D.I.S. Hero

Title:

- `M.E.D.I.S.`

Subtitle:

- `A long-term R&D vision for resilient, decentralized healthcare infrastructure.`

Supporting text:

- `M.E.D.I.S. is a future-facing healthcare infrastructure concept being explored by Vesperus on top of the NOVA validation-first platform.`

Buttons:

- `Explore NOVA` -> `/nova`
- `Contact Vesperus` -> `/contact`

### 2. What M.E.D.I.S. Is

Purpose:

Define the concept without implying completion.

Recommended copy:

- `M.E.D.I.S. is a long-term research direction focused on future medical automation infrastructure, supervision, validation, and resilience. It is being explored as a future application direction built on top of NOVA.`

Boundary:

- Do not claim current medicine synthesis.
- Do not describe it as a working treatment, deployed system, or clinical product.

### 3. Why It Exists

Purpose:

Explain the problem space conceptually.

Required ideas:

- Supply-chain disruption.
- Remote access limitations.
- Infrastructure fragility.
- Delayed availability of critical resources.
- Future validation-first automation infrastructure.
- Resilient healthcare systems.

Recommended copy:

- `Healthcare systems can face supply-chain disruption, remote access limitations, infrastructure fragility, and delayed availability of critical resources. M.E.D.I.S. explores how future validation-first automation infrastructure could support more resilient healthcare systems.`

### 4. Relationship To NOVA

Purpose:

Clarify hierarchy.

Required explanation:

- NOVA provides the validation-first foundation.
- NOVA includes telemetry, supervision, event logging, replayable traces, packet integrity, gateway visibility, and system-state monitoring.
- M.E.D.I.S. is a future application direction built on top of that foundation.

Suggested copy:

- `NOVA provides the validation-first foundation: telemetry, supervision, event logging, replayable traces, packet integrity, gateway visibility, and system-state monitoring. M.E.D.I.S. is a future application direction built on top of that foundation.`

Visual:

- Abstract card flow:
  - NOVA foundation
  - Validation evidence
  - M.E.D.I.S. R&D direction

### 5. Long-Term Vision

Purpose:

Show ambition while staying safe.

Themes:

- Resilient healthcare infrastructure.
- Remote and resource-constrained settings.
- Supervised automation.
- Validation evidence.
- Traceability.
- System-state visibility.
- Future research platform.

Recommended visual:

- Grid of six or seven cards with Lucide icons.

### 6. Research Status

Purpose:

Make status explicit and safe.

Required labels:

- Concept: Active R&D direction
- Infrastructure foundation: NOVA
- Software/data validation: TRL 3 research-stage
- Clinical deployment: Not claimed
- Regulatory approval: Not claimed
- Medicine synthesis: Not claimed

Visual:

- Compact status cards or badges.
- Similar to NOVA validation status style, but less hardware-specific.

### 7. Future Roadmap

Purpose:

Show next steps without overpromising.

Safe roadmap items:

- Refine research framing.
- Expand validation infrastructure.
- Integrate real NOVA evidence.
- Develop simulation and telemetry models.
- Build documentation.
- Explore partnerships with innovation ecosystems and technical collaborators.

Avoid:

- Clinical trials.
- Manufacturing claims.
- Treatment claims.
- Deployment promises.
- Certification promises.

### 8. Safety / Non-Clinical Boundary

Purpose:

Make the boundary impossible to miss.

Required copy:

- `M.E.D.I.S. is presented as a long-term R&D healthcare infrastructure vision. It is not presented as a clinically ready system, regulated medical device, patient-facing product, autonomous dosing system, GMP manufacturing platform, or working medicine synthesis system.`

Note:

- This includes sensitive terms only in explicit negating context. It is safe if implemented exactly and not softened into an affirmative implication.

### 9. Contact CTA

Purpose:

Give interested ecosystems and collaborators a next step.

Required copy:

- `For innovation ecosystems, incubators, technical collaborators, and early partners interested in future healthcare infrastructure research, contact Vesperus.`

CTA:

- `Contact Vesperus` -> `/contact`

## Recommended Status Labels

Use:

- `Concept - Active R&D direction`
- `Infrastructure foundation - NOVA`
- `Software/data validation - TRL 3 research-stage`
- `Clinical deployment - Not claimed`
- `Regulatory approval - Not claimed`
- `Medicine synthesis - Not claimed`

Avoid:

- `Medicine synthesis active`
- `Clinical validation`
- `Patient-ready`
- `Deployment-ready`
- `Approved`
- `Manufacturing-ready`

## Placeholder Strategy

Do not add real images yet.

Do not add:

- Fake medical imagery.
- Fake hospital imagery.
- Fake device renders.
- Fake product screenshots.
- Fake M.E.D.I.S. UI.

Recommended visual approach:

- Abstract cards.
- Lucide icons.
- Flow diagrams made from cards.
- Clear status badges.
- Optional placeholder panel only if useful, labeled as concept/diagram pending.

Diagnosis:

The M.E.D.I.S. page can be effective without any image placeholder in this phase. Use abstract cards and flows.

## Visual Rules

Preserve:

- Existing dark premium background.
- Site-wide watermark.
- Existing navbar/footer.
- Existing typography.
- Existing button style.
- Existing card system.
- Existing `section-shell`, `panel`, and `eyebrow` utilities.
- Existing restrained Framer Motion reveal behavior.
- Lucide icons.

Do not add:

- New global CSS.
- New visual theme.
- Stock medical images.
- Fake diagrams that look like real deployments.
- Heavy animations.

## Claim-Safety Rules

Do not claim:

- Medicine synthesis currently works.
- Clinical readiness.
- Regulatory approval.
- Patient deployment.
- Patient use.
- Autonomous dosing.
- GMP manufacturing.
- Fake customers.
- Fake pilots.
- Fake partners.
- Fake investors.
- Approved medical device status.

Required framing:

- M.E.D.I.S. is long-term R&D.
- M.E.D.I.S. is future-facing.
- M.E.D.I.S. is conceptual infrastructure research.
- NOVA is the validation-first foundation.
- Clinical deployment is not claimed.
- Regulatory approval is not claimed.
- Medicine synthesis is not claimed.

## Files Likely To Create Or Modify

Create:

- `src/components/medis/MedisHero.tsx`
- `src/components/medis/MedisOverview.tsx`
- `src/components/medis/MedisWhyExists.tsx`
- `src/components/medis/MedisNovaRelationship.tsx`
- `src/components/medis/MedisLongTermVision.tsx`
- `src/components/medis/MedisResearchStatus.tsx`
- `src/components/medis/MedisRoadmap.tsx`
- `src/components/medis/MedisSafetyBoundary.tsx`
- `src/components/medis/MedisContactCta.tsx`
- `docs/PHASE_5_8E_MEDIS_PAGE_REPORT.md`

Modify:

- `src/pages/MedisPage.tsx`
- `README.md`

Optional later:

- `src/data/medis.ts`

Diagnosis:

Create dedicated components directly. Add data extraction later only if the M.E.D.I.S. content needs reuse across Home, Projects, and future documentation pages.

## Validation Checklist

- [ ] `/medis` no longer shows placeholder copy.
- [ ] Page includes all nine required sections.
- [ ] Hero includes required title, subtitle, supporting text, and route buttons.
- [ ] What M.E.D.I.S. Is section frames it as long-term research direction.
- [ ] Why It Exists section is conceptual and infrastructure-focused.
- [ ] Relationship to NOVA section explains NOVA as foundation.
- [ ] Long-Term Vision section uses safe future-oriented themes.
- [ ] Research Status includes all required status labels.
- [ ] Future Roadmap avoids clinical trials, manufacturing claims, treatment claims, deployment promises, and certification promises.
- [ ] Safety / Non-Clinical Boundary is visible and explicit.
- [ ] Contact CTA routes to `/contact`.
- [ ] No fake images, fake medical visuals, fake hospital visuals, or fake device renders are added.
- [ ] No clinical, regulatory, patient, dosing, GMP, synthesis-working, fake traction, or approval claims are introduced.
- [ ] Visual system matches Home, Projects, and NOVA.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8E Implementation

