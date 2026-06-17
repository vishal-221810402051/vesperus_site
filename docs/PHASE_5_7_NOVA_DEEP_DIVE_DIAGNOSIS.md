# Phase 5.7 NOVA Deep Dive Diagnosis

## Phase Objective

Diagnose how to add a dedicated NOVA Deep Dive experience to the Vesperus website without implementing it yet.

This phase does not deploy, change claims, add fake images, or modify the website UI.

## Current Routing And Navigation Structure

Current app structure:

- `src/App.tsx` renders a single-page landing page.
- Navigation uses hash anchors such as `#home`, `#nova`, `#technology`, and `#contact`.
- No React Router dependency is installed.
- No route files or page-level components exist yet.
- `src/components/NovaSection.tsx` is currently a homepage section, not a dedicated page.

Current homepage NOVA section:

- Presents NOVA as the current validation-first proof point.
- Lists NOVA B1 motherboard, dual ESP32-S3 architecture, Raspberry Pi gateway integration, NOVA SC supervision console, telemetry validation, packet integrity, and safety-first architecture.
- Includes a non-clinical disclaimer.
- Does not yet include an `Explore NOVA Deep Dive` button.

## Reference Document Availability

Requested reference documents:

- NOVA B1 Motherboard Technical Documentation
- M.E.D.I.S. NOVA Supervisory Data & Validation Platform Internship Dossier

Current inspection result:

- These documents were not found in `assets/references/`.
- These documents were not found in `docs/`.

Available supporting material:

- `docs/CONTENT_COPY_DRAFT.md`
- `docs/BRAND_POSITIONING.md`
- `docs/SITE_MAP.md`
- `docs/ASSET_INVENTORY.md`
- `docs/PHASE_3_ASSET_COLLECTION_DIAGNOSIS.md`
- `docs/PHASE_5_PROFESSIONAL_CREDIBILITY_DIAGNOSIS.md`
- Current source components for NOVA, System Architecture, Current Status, Technology Stack, and Current Progress.

Diagnosis:

The first NOVA Deep Dive implementation can proceed from existing approved content and conservative architecture descriptions. Technical depth should remain bounded until the missing NOVA B1 and NOVA SC reference documents are provided.

## Implementation Option Comparison

### Option A - Same-Page Expandable Deep Dive Section

Description:

Add a long expandable section below the homepage NOVA block.

Pros:

- No routing complexity.
- No new dependency.
- Keeps all content on one page.

Cons:

- Makes the homepage much longer.
- Reduces landing-page clarity.
- Harder to share directly with reviewers.
- Less professional for technical/investor review than a dedicated page.

Diagnosis:

Not recommended as the primary approach.

### Option B - Separate `/nova` Route

Description:

Add a dedicated NOVA page reachable from the homepage button `Explore NOVA Deep Dive`.

Pros:

- Best for technical credibility.
- Directly shareable URL.
- Keeps homepage concise.
- Allows a fuller engineering narrative.
- Better SEO target for NOVA-specific searches.

Cons:

- Requires lightweight routing.
- Requires careful navigation behavior for `/` vs `/nova`.

Diagnosis:

Recommended.

### Option C - Modal Overlay

Description:

Open a full-screen or large modal from the NOVA homepage section.

Pros:

- No new page structure.
- Quick interaction.

Cons:

- Poor for SEO.
- Poor for sharing.
- Less comfortable for long technical content.
- Can feel like marketing rather than documentation.

Diagnosis:

Not recommended.

## Routing Recommendation

Recommended approach: separate `/nova` route without adding React Router.

Reason:

The site currently needs only two views:

- `/` - landing page
- `/nova` - NOVA Deep Dive page

Adding React Router for a two-page static site is not necessary yet. A lightweight path-based switch inside `App.tsx` is sufficient:

- Read `window.location.pathname`.
- Render `HomePage` for `/`.
- Render `NovaDeepDivePage` for `/nova`.
- Keep hash anchors for homepage section navigation.

Suggested structure:

- `src/pages/HomePage.tsx`
- `src/pages/NovaDeepDivePage.tsx`
- `src/components/NovaDeepDive/` for section components if the page becomes large.

Vercel note:

If direct navigation to `/nova` is required on Vercel, the deployment may need a rewrite so `/nova` serves `index.html`. This can be handled later with `vercel.json` if needed.

When React Router would be justified:

- More than 3-4 pages.
- Nested routes.
- Active route state.
- Scroll restoration needs.
- Route-level metadata handling.

Current diagnosis:

Avoid React Router for now.

## Recommended NOVA Deep Dive Page Sections

### 1. Hero: NOVA Deep Dive

Purpose:

Establish NOVA as the current technical proof point behind Vesperus.

Key message:

NOVA is a validation-first hardware/software orchestration platform for distributed supervision, telemetry validation, and system-state visibility.

CTA:

- Return to Home
- Contact Vesperus

Assets:

- Abstract CSS system diagram for V1.
- No fake product render.

### 2. What NOVA Is

Purpose:

Clarify that NOVA is the platform layer, not the long-term healthcare application.

Key message:

NOVA is the current infrastructure platform that supports orchestration, telemetry validation, gateway supervision, and safety-first system boundaries.

Boundary:

Do not describe NOVA as a deployed clinical product or regulated medical device.

### 3. NOVA B1 Motherboard

Purpose:

Explain the hardware foundation.

Suggested content themes:

- Board-level orchestration layer.
- Embedded signal coordination.
- Designed hardware foundation for the NOVA platform.
- Interface layer for sensor and safety signal intake.

Assets:

- `assets/images/nova-b1-board.png` pending.
- Use CSS card/diagram fallback until real asset is available.

### 4. System Architecture

Purpose:

Show the chain from signals to supervision.

Suggested visual flow:

Sensors -> NOVA B1 -> ESP32-S3 Control Layer -> Raspberry Pi Gateway -> NOVA SC Supervision Console

Side notes:

- Sensor and safety signal intake.
- Embedded orchestration.
- Gateway supervision.
- Telemetry validation.
- System-state visibility.

### 5. Hardware Capabilities

Purpose:

Summarize hardware-facing capabilities without implying actuator control or clinical use.

Allowed content:

- Dual ESP32-S3 architecture.
- Raspberry Pi gateway integration.
- Sensor/signal intake model.
- Board-level orchestration.
- Structured telemetry paths.
- Safety boundary design.

Do not claim:

- Actuator control enabled.
- Autonomous dosing.
- Patient use.
- Clinical deployment.

### 6. NOVA SC / Software Validation Layer

Purpose:

Explain the supervision console direction and software validation role.

Allowed content:

- Supervision console.
- Telemetry checks.
- Packet integrity monitoring.
- System-state visibility.
- Observability layer.

Assets:

- `assets/images/nova-sc-dashboard.png` pending.
- Use abstract console-style CSS blocks until real screenshot exists.

### 7. Data And Telemetry Pipeline

Purpose:

Explain how telemetry moves through the platform at a high level.

Suggested flow:

Signal intake -> packet structure -> gateway forwarding -> validation checks -> supervision display -> state logging.

Boundary:

Keep this as architecture and validation language, not treatment or patient decisioning language.

### 8. Current Validation Status

Purpose:

Show maturity clearly and conservatively.

Suggested status labels:

- NOVA B1: Designed
- NOVA SC: Telemetry checks validated
- Pi Gateway: Operational prototype
- M.E.D.I.S.: Research & Development
- Clinical Deployment: Not claimed

### 9. Future Expansion

Purpose:

Describe where NOVA may expand without claiming finished capabilities.

Allowed content:

- More validation modules.
- Expanded telemetry views.
- Improved system observability.
- Better architecture diagrams.
- Future M.E.D.I.S. research support.

Boundary:

Avoid "will treat", "will synthesize", "will dose", or guaranteed healthcare outcomes.

### 10. Safety / Non-Clinical Boundary

Purpose:

Make the claim boundary unmissable.

Suggested copy:

NOVA is presented as validation-first infrastructure and research-stage system architecture. It is not presented as a deployed clinical system, a regulated medical device, a patient-facing product, or an autonomous treatment platform.

### 11. Return To Home / Contact CTA

Purpose:

Give reviewers a clean next step.

CTA:

- Return to Vesperus Home
- Contact Vesperus

Audience:

- Incubators
- Innovation ecosystems
- Technical collaborators
- Early partners

## Exact Content Boundaries

The NOVA Deep Dive must not claim:

- Clinical deployment.
- Regulated medical device status.
- Autonomous dosing.
- Medicine synthesis working.
- GMP manufacturing.
- Patient use.
- Patient-ready operation.
- FDA approval.
- CE approval.
- Clinical readiness.
- Live healthcare deployment.
- Replacement of clinicians, pharmaceutical companies, or regulated medical workflows.

Safe language:

- Validation-first.
- Research-stage.
- Infrastructure.
- Supervision.
- Telemetry validation.
- Packet integrity.
- System-state visibility.
- Operational prototype, if scoped to gateway/prototype context.
- Designed, documented, or in development where appropriate.

## Assets Needed

| Asset | Status | Recommended Use | Fallback |
|---|---|---|---|
| NOVA B1 image/render | Pending | NOVA B1 Motherboard section | CSS board-style diagram |
| NOVA SC dashboard screenshot | Pending | NOVA SC / Software Validation Layer section | CSS supervision console mock block clearly labeled as abstract |
| NOVA architecture diagram | Can be CSS-based for V1 | System Architecture and Telemetry Pipeline | CSS flow blocks |
| Technical reference docs | Not found in current project | Copy source for deeper specifications | Use current approved docs and conservative wording |

Asset rules:

- Do not use fake device renders.
- Do not use fake hospital imagery.
- Do not use misleading dashboard screenshots.
- Clearly label abstract diagrams as abstract implementation models.

## Files Likely To Modify Or Create

Recommended new files:

- `src/pages/HomePage.tsx`
- `src/pages/NovaDeepDivePage.tsx`
- `docs/PHASE_5_7_NOVA_DEEP_DIVE_IMPLEMENTATION_REPORT.md`

Potential optional new component files:

- `src/components/NovaDeepDive/NovaDeepDiveHero.tsx`
- `src/components/NovaDeepDive/NovaOverview.tsx`
- `src/components/NovaDeepDive/NovaB1Motherboard.tsx`
- `src/components/NovaDeepDive/NovaDeepDiveArchitecture.tsx`
- `src/components/NovaDeepDive/NovaTelemetryPipeline.tsx`
- `src/components/NovaDeepDive/NovaValidationStatus.tsx`
- `src/components/NovaDeepDive/NovaSafetyBoundary.tsx`

Likely existing files to modify:

- `src/App.tsx`
- `src/components/NovaSection.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `README.md`

Optional deployment file later:

- `vercel.json` only if direct `/nova` refresh fails on Vercel or if static rewrites are needed.

## Homepage Button Recommendation

Add a button in `src/components/NovaSection.tsx`:

Text:

- `Explore NOVA Deep Dive`

Target:

- `/nova`

Behavior:

- Standard link, not modal.
- Should be styled consistently with existing rounded CTA buttons.
- Should not replace the existing safety disclaimer.

## Navigation Recommendation

Navbar:

- Keep `NOVA` as homepage anchor `/#nova` or `#nova` depending on route.
- Optional: add no separate navbar item for `NOVA Deep Dive` yet to avoid crowding.

On `/nova`:

- Logo should link to `/`.
- Main nav anchors should route back to homepage sections, e.g. `/#technology`, `/#contact`.
- Include a visible `Return to Home` link or button inside the page.

## Claim-Safety Requirements For Implementation

Before Phase 5.7 implementation is considered complete:

- Search source for forbidden phrases.
- Confirm M.E.D.I.S. remains R&D-stage.
- Confirm NOVA remains validation-first infrastructure.
- Confirm no actuator-control, dosing, synthesis, clinical, regulatory, GMP, or patient-use claims are introduced.
- Confirm abstract diagrams are not presented as real screenshots.

## Validation Checklist

- [ ] NOVA homepage section includes `Explore NOVA Deep Dive`.
- [ ] `/nova` page or equivalent route loads from the browser URL.
- [ ] No React Router dependency added unless explicitly justified.
- [ ] NOVA page includes all planned sections.
- [ ] NOVA B1 and NOVA SC are explained without fake images.
- [ ] Assets are labeled pending where real assets are unavailable.
- [ ] Safety / Non-Clinical Boundary section is visible.
- [ ] No clinical, regulatory, dosing, medicine synthesis, GMP, or patient-use claims are added.
- [ ] Build passes.
- [ ] Direct navigation behavior for `/nova` is considered before deployment.

## Diagnosis Decision

Recommended implementation path:

Create a dedicated `/nova` route using lightweight path-based rendering in `App.tsx`, without adding React Router.

Rationale:

This gives Vesperus a professional, shareable technical page for NOVA while keeping the homepage concise and avoiding a new dependency for a two-view site.

## Next Step

Phase 5.7 Implementation

