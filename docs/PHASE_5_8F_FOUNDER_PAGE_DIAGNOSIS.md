# Phase 5.8F Founder Page Diagnosis

## Phase Objective

Diagnose how to build `/founder` as the dedicated founder credibility page for Vishal Nelaturi while preserving the Vesperus visual system and avoiding exaggerated claims.

This phase does not implement code, deploy, add fake achievements, invent team members, or add unverified credentials.

## Current Founder Page State

Current file:

- `src/pages/FounderPage.tsx`

Current behavior:

- Renders the existing `Founder` component inside a `pt-20` wrapper.
- Shows real founder photo.
- Lists verified founder basics.
- Links to LinkedIn and GitHub.

Current gap:

- The page is not yet a dedicated credibility/story page.
- It does not include a founder hero, fuller profile, why Vesperus exists from founder perspective, builder profile, projects built/building, recognition detail, technical focus areas, team context, or contact CTA.

## Existing Founder Components Inspected

### `src/components/Founder.tsx`

Useful for:

- Real founder photo integration.
- Photo fallback with `UserRound`.
- Vishal Nelaturi.
- MSc Data Engineering.
- Aivancity Paris-Cachan.
- Featured by Aivancity for a medical innovation vision.
- Founder of Vesperus.
- Builder of NOVA and M.E.D.I.S.
- LinkedIn and GitHub links.

Diagnosis:

Use as source material, but do not reuse as the full page. It is a compact section, not a dedicated founder story.

### `src/components/home/FounderSnapshot.tsx`

Useful for:

- Short homepage preview.
- Compact portrait card.
- Route button to `/founder`.
- LinkedIn/GitHub link style.

Diagnosis:

Use as visual and content reference, not as the full founder page.

## Asset Inspection

Real founder photo exists:

- `assets/images/founder-vishal.jpg`

Observed size:

- 1,000,403 bytes

Diagnosis:

The Founder page should use the real founder photo. Future polish should optimize the image, but image optimization is not required for the diagnosis phase.

## Verified Founder Details

Use only:

- Name: Vishal Nelaturi
- Founder of Vesperus
- MSc Data Engineering student at Aivancity Paris-Cachan
- Builder of NOVA and M.E.D.I.S.
- LinkedIn: `https://www.linkedin.com/in/nelaturi-vishal-b672331b9/`
- GitHub: `https://github.com/vishal-221810402051`
- Featured by Aivancity for a medical innovation vision
- Based in Paris, France
- Real founder photo: `assets/images/founder-vishal.jpg`

Do not add:

- Awards unless verified.
- Patents unless verified.
- Funding unless verified.
- Customers.
- Pilots.
- Incorporation details unless verified.
- Official roles or institutional titles not explicitly provided.

## Reuse Recommendation

Create:

- `src/components/founder/`

Reason:

- The founder page needs a richer credibility narrative than the reusable compact `Founder` component.
- Dedicated components make it easier to keep claims audited.
- The page can reuse visual patterns, photo handling, link treatment, and card language without duplicating an entire old section.

## Recommended Component List

Create:

- `FounderHero.tsx`
- `FounderProfile.tsx`
- `FounderWhyVesperus.tsx`
- `FounderBuilderProfile.tsx`
- `FounderProjects.tsx`
- `FounderRecognition.tsx`
- `FounderTechnicalFocus.tsx`
- `FounderTeamContext.tsx`
- `FounderContactCta.tsx`

Modify:

- `src/pages/FounderPage.tsx`
- `README.md`

Create implementation report later:

- `docs/PHASE_5_8F_FOUNDER_PAGE_REPORT.md`

## Exact Page Structure

Recommended `FounderPage.tsx` order:

```tsx
export default function FounderPage() {
  return (
    <>
      <FounderHero />
      <FounderProfile />
      <FounderWhyVesperus />
      <FounderBuilderProfile />
      <FounderProjects />
      <FounderRecognition />
      <FounderTechnicalFocus />
      <FounderTeamContext />
      <FounderContactCta />
    </>
  );
}
```

## Recommended Safe Copy By Section

### 1. Founder Hero

Purpose:

Immediately identify the founder and establish credibility.

Recommended content:

- `Vishal Nelaturi`
- `Founder of Vesperus`
- `MSc Data Engineering student at Aivancity Paris-Cachan`
- `Builder of NOVA and M.E.D.I.S.`
- `Based in Paris, France`

Buttons:

- `Connect on LinkedIn` -> LinkedIn
- `View GitHub` -> GitHub
- `Contact Vesperus` -> `/contact`

Visual:

- Real founder photo.
- Premium portrait frame.
- Existing crop approach from current founder components.

### 2. Founder Profile

Purpose:

Explain who Vishal is without overclaiming.

Recommended copy:

- `Vishal Nelaturi is the founder of Vesperus, an MSc Data Engineering student at Aivancity Paris-Cachan, and the builder behind NOVA and M.E.D.I.S. His work is focused on validation-first infrastructure for future medical automation systems.`

Avoid:

- Ranking language.
- Genius/visionary claims.
- Award-winning language.
- Institutional role claims beyond student status.

### 3. Why Vesperus

Purpose:

Connect founder motivation to the company mission.

Recommended copy:

- `Vesperus was created to explore the infrastructure layer required before higher-risk medical automation can be responsibly developed: orchestration, telemetry validation, supervision, traceability, and safety boundaries.`

Boundary:

- Keep this about infrastructure and research, not clinical deployment.

### 4. Builder Profile

Purpose:

Show practical technical credibility.

Safe focus:

- Embedded systems.
- Software engineering.
- Data engineering.
- Validation infrastructure.
- Telemetry and supervision.
- Research-stage healthcare automation infrastructure.

Recommended copy:

- `The builder profile behind Vesperus combines embedded systems, software engineering, data engineering, and validation infrastructure, with a focus on making system behavior observable, traceable, and testable.`

### 5. Projects Built / Building

Required projects:

- NOVA
- NOVA SC
- M.E.D.I.S.

Safe card framing:

- NOVA: validation-first hardware/software orchestration platform.
- NOVA SC: supervision and telemetry validation layer.
- M.E.D.I.S.: long-term R&D healthcare infrastructure vision built on NOVA.

CTAs:

- `Explore NOVA` -> `/nova`
- `Explore M.E.D.I.S.` -> `/medis`
- `View Projects` -> `/projects`

### 6. Recognition

Purpose:

Show external visibility.

Required content:

- `Featured by Aivancity for a medical innovation vision`
- Article title:
  - `From UNESCO to medical innovation: Aivancity student Vishal Nelaturi develops a vision.`
- Link to article.

Boundary:

- Recognition supports founder/project visibility, not clinical validation, regulatory approval, product certification, or customer traction.

### 7. Technical Focus Areas

Required areas:

- Embedded systems.
- Software engineering.
- Data engineering.
- Validation infrastructure.
- Healthcare automation research.

Recommended visual:

- Five dark cards with Lucide icons.

Safe wording:

- Use `focus areas`, not `certified expertise` or `official specialization` unless verified.

### 8. Team Context

Required content:

- Multidisciplinary team of five contributors.
- Based in Paris, France.
- Do not invent names.

Recommended copy:

- `Vesperus is supported by a multidisciplinary team of five contributors based in Paris, France, spanning embedded systems, software engineering, data engineering, and research/validation.`

Avoid:

- Naming people.
- Assigning unverified roles.
- Claiming advisors, partners, employees, or institutional backing.

### 9. Links / Contact CTA

Purpose:

Give reviewers next actions.

Links:

- LinkedIn
- GitHub
- Contact page

Recommended copy:

- `For innovation ecosystems, incubators, technical collaborators, and early partners interested in validation-first medical automation infrastructure, contact Vesperus.`

## Visual Layout Recommendation

Use:

- Existing dark premium background.
- Existing site-wide watermark.
- Existing navbar/footer.
- Existing `section-shell`, `panel`, and `eyebrow`.
- Existing founder photo treatment.
- Existing rounded cards.
- Existing cyan/teal/violet accents.
- Existing restrained Framer Motion reveal.
- Lucide icons.

Do not add:

- New global styling.
- Stock imagery.
- Fake achievement badges.
- Fake logo walls.
- Fake partner/customer/investor cards.
- Award seals unless verified.

Recommended page rhythm:

- Hero with portrait and key identity.
- Profile/mission text sections.
- Project cards.
- Recognition panel.
- Technical focus grid.
- Team context.
- Contact CTA.

## Claim-Safety Rules

Do not claim:

- Award winner unless verified.
- Patent holder unless verified.
- Funded unless verified.
- Customers.
- Pilots.
- Company incorporation unless verified.
- Clinical deployment.
- Regulatory approval.
- Medical product success.
- Exact official titles from institutions unless verified.
- Employee headcount beyond `five contributors`.
- Advisors or partners unless verified.

Use:

- `Founder`
- `MSc Data Engineering student`
- `Builder of NOVA and M.E.D.I.S.`
- `Featured by Aivancity for a medical innovation vision`
- `Based in Paris, France`
- `Multidisciplinary team of five contributors`
- `Focus areas`
- `Research-stage`
- `Validation-first infrastructure`

## Recommended Links Source

Use existing `src/data/links.ts` for:

- LinkedIn.
- GitHub.
- Aivancity article.
- Contact email if needed.
- Location.

Current note:

- `assets/references/links.md` may still say GitHub is pending from earlier phases. The app-level source `src/data/links.ts` is current and includes the real GitHub URL.

## Files Likely To Create Or Modify

Create:

- `src/components/founder/FounderHero.tsx`
- `src/components/founder/FounderProfile.tsx`
- `src/components/founder/FounderWhyVesperus.tsx`
- `src/components/founder/FounderBuilderProfile.tsx`
- `src/components/founder/FounderProjects.tsx`
- `src/components/founder/FounderRecognition.tsx`
- `src/components/founder/FounderTechnicalFocus.tsx`
- `src/components/founder/FounderTeamContext.tsx`
- `src/components/founder/FounderContactCta.tsx`
- `docs/PHASE_5_8F_FOUNDER_PAGE_REPORT.md`

Modify:

- `src/pages/FounderPage.tsx`
- `README.md`

Optional later:

- `src/data/founder.ts`

Diagnosis:

Create dedicated components directly first. Extract to `src/data/founder.ts` later only if the same founder fields start repeating across multiple pages.

## Validation Checklist

- [ ] `/founder` no longer renders only the old compact `Founder` section.
- [ ] Founder Hero uses real founder photo.
- [ ] Founder Hero identifies Vishal Nelaturi clearly.
- [ ] Page includes all verified founder details.
- [ ] LinkedIn and GitHub links are present and correct.
- [ ] Aivancity recognition is included with article link.
- [ ] Projects built/building include NOVA, NOVA SC, and M.E.D.I.S.
- [ ] Technical focus areas are shown without claiming unverified credentials.
- [ ] Team context says five contributors and does not invent names.
- [ ] No awards, patents, funding, pilots, customers, partners, incorporation, or clinical/regulatory claims are introduced.
- [ ] Visual system matches Home, Projects, NOVA, and M.E.D.I.S.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8F Implementation

