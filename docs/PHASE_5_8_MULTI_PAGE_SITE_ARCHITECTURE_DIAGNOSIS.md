# Phase 5.8 Multi-Page Site Architecture Diagnosis

## Executive Diagnosis

The current Vesperus website is a polished single-page landing site with a strong visual identity, credible claim boundaries, and reusable visual primitives. It is now ready to evolve into a professional multi-page company website.

The recommended direction is to keep the existing design system intact while separating content by reviewer intent:

- Home: short 30-second company overview.
- Projects: portfolio-style overview of what Vesperus is building.
- NOVA: technical portal for validation-first infrastructure.
- M.E.D.I.S.: long-term R&D vision page.
- Founder: founder story and credibility.
- Recognition: external visibility and public article references.
- Contact: partner, ecosystem, investor, and collaborator contact page.

The homepage should become shorter and more strategic. Deep technical sections should move into project-specific pages, especially NOVA.

## Current Project Findings

Current app structure:

- `src/App.tsx` directly renders all homepage sections.
- No `src/pages/` directory exists.
- No React Router dependency is installed.
- Navigation is hash-anchor based.
- Shared styling is centralized in `src/index.css`.
- The visual language is already consistent through `section-shell`, `panel`, `eyebrow`, Tailwind tokens, Framer Motion reveals, and shared background/watermark treatment.

Current reusable components:

- `Navbar.tsx`
- `Footer.tsx`
- `BackgroundWatermark.tsx`
- `Hero.tsx`
- `CurrentStatus.tsx`
- `Recognition.tsx`
- `Problem.tsx`
- `NovaSection.tsx`
- `SystemArchitecture.tsx`
- `MedisSection.tsx`
- `TechnologyStack.tsx`
- `CurrentProgress.tsx`
- `Founder.tsx`
- `Contact.tsx`

Reference document finding:

- The named files `NOVA B1 Motherboard Technical Documentation` and `M.E.D.I.S. NOVA Supervisory Data & Validation Platform Internship Dossier` were not found as local files in `docs/` or `assets/references/`.
- The architecture should leave room to incorporate them later, but Phase 5.8 planning should rely on existing approved copy and conservative technical summaries.

## Recommended Route Architecture

Recommended approach: lightweight path-based rendering without React Router for the first multi-page version.

Why:

- The site is static and small.
- The required pages are known and shallow.
- No nested routes, route loaders, forms, or route-level state are needed yet.
- Avoiding a dependency keeps the build simple and matches the current stack.

Suggested routes:

- `/`
- `/projects`
- `/nova`
- `/medis`
- `/founder`
- `/recognition`
- `/contact`

Implementation concept:

- Create page components in `src/pages/`.
- In `App.tsx`, read `window.location.pathname`.
- Render a matching page component.
- Fallback unknown paths to Home or a lightweight not-found view.
- Keep `Navbar`, `Footer`, and `BackgroundWatermark` outside the page switch so every page has the same shell.

When React Router becomes worth it:

- More than 7-8 pages.
- Nested project pages.
- Route-aware active nav states become complex.
- Scroll restoration becomes difficult.
- Page metadata needs route-level management.
- Future docs/blog/case-study structure expands.

Hash-only routing is not recommended:

- It is weaker for SEO.
- It is less professional for sharing pages.
- It keeps the site feeling like one long page.
- It does not solve direct links like `/nova`.

Deployment note:

- Vercel may require a rewrite so direct refreshes on `/nova`, `/projects`, and other paths serve `index.html`.
- If direct path refresh fails, add a minimal `vercel.json` later during deployment preparation.

## Recommended Page Structure

### Home Page

Purpose:

Give a short 30-second overview of Vesperus.

Recommended sections:

1. Hero
2. What Is Vesperus
3. Mission
4. Projects Snapshot
5. Team Snapshot
6. Founder Snapshot
7. Recognition Preview
8. Contact CTA

Home should keep:

- Brand tagline.
- Positioning statement.
- Short project cards.
- Founder credibility preview.
- Aivancity recognition preview.
- Partner/ecosystem CTA.

Home should remove or shorten:

- Full NOVA technical section.
- Full System Architecture section.
- Full Technology Stack section.
- Full Current Progress section.
- Full M.E.D.I.S. explanation.
- Long technical validation lists.

Home copy boundaries:

- Keep Vesperus as infrastructure and validation-first.
- Keep NOVA as current platform/proof point.
- Keep M.E.D.I.S. as long-term R&D.

### Projects Page

Purpose:

Show what Vesperus is building.

Recommended sections:

1. Projects overview
2. NOVA project card
3. M.E.D.I.S. project card
4. NOVA SC / supervision console card if treated as a sub-product or project layer
5. Contact CTA

Recommended buttons:

- Explore NOVA
- Explore M.E.D.I.S.
- Contact Vesperus

Notes:

- This page should be portfolio-like, not overly technical.
- It should clearly separate platform, application vision, and supervision console layer.

### NOVA Page

Purpose:

Technical portal for NOVA.

Recommended sections:

1. NOVA overview
2. NOVA B1 motherboard
3. NOVA SC supervision console
4. Hardware capabilities
5. Software/data validation layer
6. System architecture
7. Telemetry pipeline
8. Current validation status
9. Roadmap
10. Gallery placeholder
11. Documentation placeholder
12. Safety / non-clinical boundary
13. Contact CTA

Content rules:

- Use the reference documents when they are provided locally.
- Keep NOVA as validation-first infrastructure.
- Use abstract CSS diagrams until real NOVA B1 or NOVA SC assets are available.

### M.E.D.I.S. Page

Purpose:

Long-term R&D vision page.

Recommended sections:

1. What Is M.E.D.I.S.
2. Why It Exists
3. Relationship To NOVA
4. Long-Term Vision
5. Research Status
6. Safety / Non-Clinical Boundary
7. Future Roadmap
8. Contact CTA

Content rules:

- M.E.D.I.S. must remain R&D-stage.
- It must be described as future healthcare infrastructure research built on NOVA.
- It must not be presented as a finished therapeutic, synthesis, patient, or deployment product.

### Founder Page

Purpose:

Dedicated founder story and credibility page.

Recommended sections:

1. Founder hero
2. Vishal Nelaturi profile
3. Aivancity Paris-Cachan
4. Aivancity article
5. UNESCO-related photo context if real and relevant assets are used
6. Technical founder profile
7. Projects built
8. LinkedIn/GitHub
9. Contact CTA

Notes:

- Do not invent other team members.
- If discussing team, use a team snapshot without unprovided names.

### Recognition Page

Purpose:

External credibility and public visibility.

Recommended sections:

1. Aivancity article
2. Future recognitions placeholder
3. Recognition boundary note
4. Contact CTA

Boundary note:

Recognition supports founder/project visibility and public credibility. It is not clinical validation, regulatory approval, product certification, or deployment evidence.

### Contact Page

Purpose:

Partner/ecosystem/investor contact page.

Recommended sections:

1. Contact CTA
2. Email
3. LinkedIn
4. GitHub
5. Location: Paris, France
6. Audience list

Audience:

- Innovation ecosystems
- Incubators
- Technical collaborators
- Early partners
- Investor reviewers

## Component Reuse Plan

### Components That Should Stay Shared

- `Navbar`
- `Footer`
- `BackgroundWatermark`
- Motion reveal patterns
- CTA button classes
- `section-shell`
- `panel`
- `eyebrow`
- Logo handling and fallback behavior
- Footer link style

### Components To Convert Or Move

Move into home-specific components:

- `Hero`
- short recognition preview derived from `Recognition`
- short founder preview derived from `Founder`
- short contact CTA derived from `Contact`

Move into project-specific pages:

- `NovaSection` -> `projects` snapshot and `nova` page content
- `MedisSection` -> `projects` snapshot and `medis` page content
- `SystemArchitecture` -> primarily `nova`
- `TechnologyStack` -> primarily `nova` and/or `projects`
- `CurrentProgress` -> primarily `nova` or `projects`
- `Recognition` -> `recognition` page plus home preview
- `Founder` -> `founder` page plus home preview
- `Contact` -> `contact` page plus CTA snippets

Potentially remove:

- `ProofBar.tsx` if it remains unused after restructuring.

## Recommended New Folder Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  pages/
    HomePage.tsx
    ProjectsPage.tsx
    NovaPage.tsx
    MedisPage.tsx
    FounderPage.tsx
    RecognitionPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      BackgroundWatermark.tsx
      PageShell.tsx
    home/
      HomeHero.tsx
      WhatIsVesperus.tsx
      Mission.tsx
      ProjectsSnapshot.tsx
      TeamSnapshot.tsx
      FounderSnapshot.tsx
      RecognitionPreview.tsx
      HomeContactCta.tsx
    projects/
      ProjectsOverview.tsx
      ProjectCard.tsx
    nova/
      NovaHero.tsx
      NovaOverview.tsx
      NovaB1Motherboard.tsx
      NovaScLayer.tsx
      NovaHardwareCapabilities.tsx
      NovaSystemArchitecture.tsx
      NovaTelemetryPipeline.tsx
      NovaValidationStatus.tsx
      NovaRoadmap.tsx
      NovaSafetyBoundary.tsx
    medis/
      MedisHero.tsx
      MedisOverview.tsx
      MedisNOVAConnection.tsx
      MedisResearchStatus.tsx
      MedisSafetyBoundary.tsx
    founder/
      FounderHero.tsx
      FounderProfile.tsx
      FounderProjects.tsx
    recognition/
      RecognitionArticle.tsx
      RecognitionBoundary.tsx
    contact/
      ContactDetails.tsx
      ContactAudience.tsx
    ui/
      SectionHeader.tsx
      CtaButton.tsx
      StatusBadge.tsx
      FeatureCard.tsx
      ExternalLink.tsx
  data/
    links.ts
    projects.ts
    status.ts
    founder.ts
    team.ts
    navigation.ts
```

## Recommended Shared Data Files

### `src/data/links.ts`

Should contain:

- Domain
- LinkedIn URL
- GitHub URL
- Aivancity article URL
- Contact email
- Location

### `src/data/projects.ts`

Should contain:

- NOVA summary
- M.E.D.I.S. summary
- NOVA SC summary if treated separately
- Claim-safe status labels
- Page routes

### `src/data/status.ts`

Should contain:

- NOVA B1: Designed
- NOVA SC: Telemetry checks validated
- Pi Gateway: Operational prototype
- M.E.D.I.S.: Research & Development
- Clinical Deployment: Not claimed

### `src/data/founder.ts`

Should contain:

- Vishal Nelaturi
- MSc Data Engineering
- Aivancity Paris-Cachan
- Founder of Vesperus
- Builder of NOVA and M.E.D.I.S.
- Aivancity feature wording
- LinkedIn/GitHub links

### `src/data/team.ts`

Should contain only non-invented team positioning:

- Multidisciplinary team
- Based in Paris, France
- Embedded systems
- Software
- Data engineering
- Research/validation

No unnamed people should be described with invented roles or biographies.

### `src/data/navigation.ts`

Should contain:

- Home
- Projects
- Founder
- Recognition
- Contact
- Optional secondary links for NOVA and M.E.D.I.S.

## New Homepage Reduction Plan

Current homepage sections:

- Hero
- CurrentStatus
- Recognition
- Problem
- NovaSection
- SystemArchitecture
- MedisSection
- TechnologyStack
- CurrentProgress
- Founder
- Contact

Recommended future homepage:

1. Hero
2. What Is Vesperus
3. Mission
4. Projects Snapshot
5. Team Snapshot
6. Founder Snapshot
7. Recognition Preview
8. Contact CTA

Move elsewhere:

- Full NOVA details -> NOVA page.
- Full System Architecture -> NOVA page.
- Full Technology Stack -> NOVA page or Projects page.
- Full Current Progress -> NOVA page or Projects page.
- Full M.E.D.I.S. explanation -> M.E.D.I.S. page.
- Full founder detail -> Founder page.
- Full recognition detail -> Recognition page.
- Full contact detail -> Contact page.

## Page-Level SEO Needs

### Home

Title:

- `Vesperus | Engineering the future of autonomous healthcare`

Description:

- `Vesperus builds intelligent orchestration, validation, and automation platforms for next-generation medical systems.`

### Projects

Title:

- `Projects | Vesperus`

Description:

- `Explore Vesperus projects including NOVA, M.E.D.I.S., and validation-first supervision infrastructure.`

### NOVA

Title:

- `NOVA | Vesperus`

Description:

- `NOVA is Vesperus' validation-first hardware/software orchestration platform for telemetry, supervision, and system-state visibility.`

### M.E.D.I.S.

Title:

- `M.E.D.I.S. | Vesperus`

Description:

- `M.E.D.I.S. is a long-term R&D healthcare infrastructure vision being developed on top of NOVA.`

### Founder

Title:

- `Founder | Vesperus`

Description:

- `Meet Vishal Nelaturi, founder of Vesperus, MSc Data Engineering student at Aivancity Paris-Cachan, and builder of NOVA and M.E.D.I.S.`

### Recognition

Title:

- `Recognition | Vesperus`

Description:

- `Vesperus founder Vishal Nelaturi has been featured by Aivancity for a medical innovation vision.`

### Contact

Title:

- `Contact | Vesperus`

Description:

- `Contact Vesperus for innovation ecosystems, incubators, technical collaborators, early partners, and investor inquiries.`

SEO implementation note:

- Without a router library, page title and meta description can be set from a route metadata map in `App.tsx` or a small `usePageMeta` helper.
- Later SEO work should include canonical URLs, Open Graph tags, Twitter card tags, favicon, sitemap.xml, and robots.txt.

## Claim-Safety Rules For All Pages

Do not claim:

- Clinical readiness.
- Clinical deployment.
- Regulatory approval.
- FDA approval.
- CE approval.
- Patient deployment.
- Patient use.
- Patient-ready operation.
- Medicine synthesis currently works.
- Autonomous dosing.
- GMP manufacturing.
- Approved medical device status.
- Fake pilots.
- Fake customers.
- Fake investors.
- Fake partnerships.
- Fake certifications.

Required framing:

- NOVA is validation-first infrastructure.
- NOVA B1 is a designed hardware foundation.
- NOVA SC is a supervision/validation layer.
- Pi Gateway is an operational prototype only if described with that scope.
- M.E.D.I.S. is R&D-stage and future-facing.
- Recognition supports visibility, not clinical validation.
- Abstract diagrams must be labeled as abstract if they might be mistaken for product screenshots.

## Visual Consistency Rules

All pages must retain:

- Dark premium background.
- Centered subtle site-wide watermark.
- Existing grid/glow background language.
- Cyan/teal/violet accents.
- Rounded dark cards.
- Existing navbar style.
- Existing footer style.
- Same typography system.
- Same button system.
- Same spacing scale.
- Same `section-shell`, `panel`, and `eyebrow` classes.
- Same restrained Framer Motion reveal rules.

No page should:

- Look like a separate template.
- Use a light theme.
- Use cartoon visuals.
- Use fake hospital stock imagery.
- Use fake product renders.
- Use visual styles outside the established deep-tech language.

## Navigation Recommendation

Primary navigation:

- Home
- Projects
- Founder
- Recognition
- Contact

Optional secondary links:

- NOVA
- M.E.D.I.S.

Recommended behavior:

- Desktop can include NOVA and M.E.D.I.S. as secondary links or inside a Projects dropdown if a dropdown is implemented later.
- Mobile should keep a flat list unless a simple grouped menu is implemented.
- Navbar logo should route to `/`.
- Contact CTA should route to `/contact`.

Initial no-dropdown version:

- Home
- Projects
- NOVA
- M.E.D.I.S.
- Founder
- Recognition
- Contact

This is slightly longer but simpler and avoids dropdown complexity.

## Implementation Risks

### 1. Broken Internal Links

Current links are hash anchors. Multi-page routing will need real paths such as `/projects`, `/nova`, and `/contact`.

Mitigation:

- Centralize links in `src/data/navigation.ts` and `src/data/links.ts`.

### 2. Vercel Direct Route Refresh Issue

Directly opening `/nova` may return a 404 if Vercel is not configured to serve `index.html`.

Mitigation:

- Add a Vercel rewrite later if needed.
- Validate deployed route refresh before connecting the domain.

### 3. Duplicated Content

Moving from one page to many can duplicate copy across Home, Projects, NOVA, and M.E.D.I.S.

Mitigation:

- Use shared data files for project summaries, links, status labels, and founder data.

### 4. Stale Anchors

Existing nav links like `#technology` may point to removed homepage sections.

Mitigation:

- Replace hash navigation with route navigation.
- Use anchors only inside long pages when needed.

### 5. Inconsistent Navbar Behavior

Navbar links need to work from every route, not only from the homepage.

Mitigation:

- Use path links for top-level pages.
- Avoid homepage-only anchors in primary nav.

### 6. Page Scroll Restoration

Route changes may leave the user scrolled halfway down the previous page.

Mitigation:

- Add a small scroll-to-top behavior on path change during implementation.

### 7. Overlong Homepage

The homepage can remain too long if too much technical content is retained.

Mitigation:

- Limit Home to summary sections and route users to project pages for depth.

### 8. Overclaiming On M.E.D.I.S.

A dedicated M.E.D.I.S. page creates more space, which increases copy risk.

Mitigation:

- Keep explicit R&D-stage and non-clinical boundaries on the page.

### 9. Visual Drift Across Pages

New pages might accidentally use different layouts or spacing.

Mitigation:

- Create shared page/section primitives before building page-specific components.

### 10. Missing Reference Docs

The NOVA technical docs requested for the NOVA page are not currently local project files.

Mitigation:

- Use current approved copy for V1.
- Add a documentation placeholder.
- Integrate the real reference documents only when available in `docs/` or `assets/references/`.

## Validation Checklist

- [ ] `src/pages/` exists with all required page components.
- [ ] `App.tsx` renders pages by route path or uses an explicitly approved router.
- [ ] No new dependency is added unless React Router is deliberately chosen.
- [ ] Navbar works from every page.
- [ ] Footer works from every page.
- [ ] BackgroundWatermark appears consistently on every page.
- [ ] Home page is shortened to a 30-second overview.
- [ ] Projects page summarizes NOVA, M.E.D.I.S., and NOVA SC/supervision where appropriate.
- [ ] NOVA page contains the full technical portal structure.
- [ ] M.E.D.I.S. page remains R&D-stage and non-clinical.
- [ ] Founder page includes verified founder credentials and links.
- [ ] Recognition page links to Aivancity and avoids clinical validation claims.
- [ ] Contact page includes email, LinkedIn, GitHub, location, and audience.
- [ ] All pages preserve the same visual system.
- [ ] No fake medical imagery or fake product renders are added.
- [ ] No clinical, regulatory, patient, dosing, synthesis, GMP, or fake traction claims are added.
- [ ] Direct path navigation is tested locally.
- [ ] Production build passes.
- [ ] Vercel direct-route refresh requirement is documented before deployment.

## Recommended Next Step

Phase 5.8 Implementation

Recommended implementation sequence:

1. Create `src/pages/`.
2. Create shared `src/data/` files.
3. Move `Navbar`, `Footer`, and `BackgroundWatermark` into `src/components/layout/`.
4. Add lightweight path-based page rendering in `App.tsx`.
5. Build the reduced Home page.
6. Build Projects page.
7. Build NOVA page with safe technical content.
8. Build M.E.D.I.S., Founder, Recognition, and Contact pages.
9. Update navigation links.
10. Add Phase 5.8 implementation report.
11. Run `npm run build`.

