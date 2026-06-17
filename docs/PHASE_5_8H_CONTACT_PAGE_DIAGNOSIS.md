# Phase 5.8H Contact Page Diagnosis

## Phase Objective

Diagnose how to build `/contact` as the professional contact page for Vesperus while preserving the visual system and avoiding fake traction.

This phase does not implement code, deploy, add fake partners, add fake investors, add a fake office address, add a fake phone number, or add a working form without backend/email handling.

## Current Contact Page State

Current file:

- `src/pages/ContactPage.tsx`

Current behavior:

- Renders the existing compact `Contact` component inside a `pt-20` wrapper.
- Shows a short partner/ecosystem contact message.
- Uses `mailto:founder@vesperus.systems`.
- Uses the existing dark premium panel style.

Current gap:

- The page is not yet a dedicated professional contact page.
- It does not show all verified contact methods from `src/data/links.ts`.
- It does not clarify who should reach out.
- It does not define collaboration areas.
- It does not include a status/response note.
- It does not explicitly avoid implying existing traction, partnerships, customers, pilots, investment, clinical deployment, or commercial adoption.

## Existing Contact Components Inspected

### `src/components/Contact.tsx`

Useful for:

- Existing contact CTA copy.
- Existing email CTA styling.
- Existing `panel`, `eyebrow`, and centered section pattern.

Diagnosis:

Use as source language, but replace it on `/contact` with a fuller page-specific component structure.

### `src/components/home/HomeContactCta.tsx`

Useful for:

- Route-based CTA from Home to `/contact`.
- Short ecosystem/collaborator copy.
- Existing button style.

Diagnosis:

Keep Home as a short CTA and make `/contact` the detail page.

### Other Page CTAs

Inspected:

- `ProjectsContactCta.tsx`
- `NovaContactCta.tsx`
- `MedisContactCta.tsx`
- `RecognitionContactCta.tsx`

Diagnosis:

All point to `/contact` with consistent language for innovation ecosystems, incubators, technical collaborators, and early partners. The Contact page should serve as the shared destination for those CTAs.

## Links Inspection

Current file:

- `src/data/links.ts`

Available verified details:

- Domain: `https://vesperus.systems`
- Email: `founder@vesperus.systems`
- GitHub: `https://github.com/vishal-221810402051`
- LinkedIn: `https://www.linkedin.com/in/nelaturi-vishal-b672331b9/`
- Location: `Paris, France`

Diagnosis:

Use `src/data/links.ts` as the source of truth for contact URLs and verified location.

The email is present and should be used as the primary contact CTA if it is intended to receive inquiries. No phone number or full office address should be added unless provided later.

## Recommended Folder Structure

Create:

- `src/components/contact/`

Reason:

- Keeps the dedicated Contact page separate from compact CTA components.
- Makes contact boundaries and verified methods easy to audit.
- Avoids overloading the old single-section `Contact.tsx`.

## Recommended Component List

Create:

- `ContactHero.tsx`
- `ContactMethods.tsx`
- `WhoShouldReachOut.tsx`
- `CollaborationAreas.tsx`
- `ContactStatusNote.tsx`
- `ContactBoundary.tsx`

Modify:

- `src/pages/ContactPage.tsx`
- `README.md`

Create implementation report later:

- `docs/PHASE_5_8H_CONTACT_PAGE_REPORT.md`

## Exact Page Structure

Recommended `ContactPage.tsx` order:

```tsx
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <WhoShouldReachOut />
      <CollaborationAreas />
      <ContactStatusNote />
      <ContactBoundary />
    </>
  );
}
```

## Recommended Safe Copy By Section

### 1. Contact Hero

Purpose:

Introduce the page as the professional contact path for Vesperus.

Suggested copy:

Title:

- `Contact`

Subtitle:

- `Connect with Vesperus.`

Supporting text:

- `For innovation ecosystems, incubators, technical collaborators, early partners, investor reviewers, and research or engineering collaborators interested in validation-first medical automation infrastructure, contact Vesperus.`

CTA:

- `Email Vesperus` -> `mailto:${links.email}`

### 2. Contact Methods

Purpose:

List verified contact methods only.

Recommended methods:

- Email: `links.email`
- LinkedIn: `links.linkedIn`
- GitHub: `links.github`
- Domain: `links.domain`
- Location: `links.location`

Rules:

- Do not add phone unless provided.
- Do not add office address beyond `Paris, France`.
- Do not add a working form unless backend/email handling exists.

Visual:

- Premium card grid.
- Use Lucide icons such as `Mail`, `Linkedin`, `Github`, `Globe`, and `MapPin` if available.
- Use normal anchor links for email and external links.

### 3. Who Should Reach Out

Purpose:

Clarify the intended audience without implying existing partnerships.

Required audience groups:

- Innovation ecosystems
- Incubators
- Technical collaborators
- Early partners
- Investor reviewers
- Research/engineering collaborators

Suggested copy:

- `Vesperus welcomes relevant conversations from ecosystems, incubators, technical collaborators, early partners, investor reviewers, and research or engineering collaborators evaluating validation-first medical automation infrastructure.`

Boundary:

- This is an invitation to discuss, not a claim of existing partnerships or investment.

### 4. Collaboration Areas

Purpose:

Show what conversations are relevant.

Required areas:

- Validation-first medical automation infrastructure
- NOVA technical development
- NOVA SC supervision layer
- M.E.D.I.S. long-term R&D direction
- Ecosystem and incubation discussions

Suggested visual:

- Compact cards or badges.
- Use abstract icons only.

### 5. Response / Status Note

Purpose:

Set expectations without pretending there is a formal support organization.

Suggested copy:

- `Vesperus is in an early public launch stage. Inquiry handling is founder-led, and response timing may vary based on project and academic commitments.`

Notes:

- This is honest and avoids fake operational maturity.
- Do not promise response times unless they are real.

### 6. Contact Boundary

Purpose:

Prevent contact language from implying traction or regulated status.

Required boundary:

- `This contact page does not imply existing partnerships, customers, investment, pilots, clinical deployment, regulatory approval, or commercial adoption. It is provided as a professional inquiry path for verified contact with Vesperus.`

## Static Contact Card Recommendation

Use a static contact card instead of a form.

Recommended:

- Primary email CTA using `mailto:${links.email}`.
- Secondary external buttons for LinkedIn and GitHub.
- Domain and location displayed as verified metadata.

Do not add:

- A fake form.
- A nonfunctional form.
- A phone number.
- A full office address.
- CRM or newsletter language.
- Support desk language.

Reason:

- There is no backend or email handling currently implemented.
- A static contact card is transparent, reliable, and aligned with the current launch stage.

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
- Lucide icon usage only.

Do not add:

- Stock office imagery.
- Fake team or partner logos.
- Fake investor logos.
- Fake ecosystem badges.
- New global CSS.
- New visual theme.

## Claim-Safety Rules

Do not imply:

- Existing partnerships.
- Existing investors.
- Existing pilots.
- Existing customers.
- Clinical deployment.
- Regulatory approval.
- Commercial adoption.
- Certified product status.
- Large office or operational footprint.
- Formal support organization.

Use:

- `contact path`
- `inquiry`
- `conversation`
- `early public launch stage`
- `founder-led`
- `Paris, France`
- `innovation ecosystems`
- `incubators`
- `technical collaborators`
- `early partners`
- `investor reviewers`
- `research or engineering collaborators`

## Files Likely To Create Or Modify

Create:

- `src/components/contact/ContactHero.tsx`
- `src/components/contact/ContactMethods.tsx`
- `src/components/contact/WhoShouldReachOut.tsx`
- `src/components/contact/CollaborationAreas.tsx`
- `src/components/contact/ContactStatusNote.tsx`
- `src/components/contact/ContactBoundary.tsx`
- `docs/PHASE_5_8H_CONTACT_PAGE_REPORT.md`

Modify:

- `src/pages/ContactPage.tsx`
- `README.md`

Optional later:

- `src/data/contact.ts`

Diagnosis:

Do not create a separate contact data file yet. `src/data/links.ts` already contains the verified links needed for this page.

## Validation Checklist

- [ ] `/contact` no longer renders only the old compact `Contact` component.
- [ ] Page includes all six required sections.
- [ ] Email is sourced from `src/data/links.ts`.
- [ ] LinkedIn is sourced from `src/data/links.ts`.
- [ ] GitHub is sourced from `src/data/links.ts`.
- [ ] Domain is sourced from `src/data/links.ts`.
- [ ] Location uses only `Paris, France`.
- [ ] No phone number is added.
- [ ] No fake office address is added.
- [ ] No fake contact form is added.
- [ ] Who Should Reach Out includes all required audiences.
- [ ] Collaboration Areas includes all required topics.
- [ ] Response/status note reflects early public launch honestly.
- [ ] Contact boundary avoids implying partnerships, customers, investment, pilots, clinical deployment, regulatory approval, or commercial adoption.
- [ ] Visual system matches Home, Projects, NOVA, M.E.D.I.S., Founder, and Recognition.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8H Implementation
