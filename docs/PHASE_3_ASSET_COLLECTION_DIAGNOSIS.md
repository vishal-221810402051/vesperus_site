# Phase 3 Asset Collection Diagnosis

## Phase Objective

Diagnose the visual, credibility, and reference assets needed before building the Vesperus website.

This phase does not create the React app, install packages, build UI sections, or deploy the site. It defines what assets are required, what is currently missing, what can be used as a fallback, and what should be requested from the founder before Phase 3 implementation.

## Current Asset Folder Status

- `assets/images/`: empty
- `assets/references/`: empty

The website can proceed to implementation with abstract CSS visuals and structured content blocks, but V1 credibility will be stronger if founder, NOVA, and reference assets are provided before UI buildout.

## Required Assets By Website Section

### Hero

Required assets:

- Vesperus wordmark or text-based brand treatment
- Abstract AI/telemetry/system orchestration background
- Optional startup logo mark

Purpose:

The hero must immediately communicate Vesperus as a premium deep-tech company engineering autonomous healthcare infrastructure.

Fallback:

Use a restrained CSS-based technical background with grid lines, telemetry paths, subtle cyan/teal glow, and no stock imagery.

### NOVA

Required assets:

- NOVA SC dashboard screenshot
- NOVA B1 motherboard photo, render, or screenshot
- Optional NOVA architecture diagram

Purpose:

NOVA is the current validated proof point. Real NOVA visuals are the most important product credibility assets for V1.

Fallback:

Use clean technical cards and diagrams that describe the dual ESP32-S3 architecture, Raspberry Pi gateway integration, telemetry validation, packet integrity monitoring, and safety-first architecture. Do not invent fake device renders.

### M.E.D.I.S.

Required assets:

- Optional M.E.D.I.S. concept diagram
- Optional decentralized healthcare infrastructure visual

Purpose:

M.E.D.I.S. should be presented as a long-term R&D application built on NOVA, not as a completed medical product.

Fallback:

Use a clearly labeled concept diagram or abstract infrastructure card system. Label all visuals as concept or R&D direction.

### Technology

Required assets:

- NOVA architecture diagram
- Technical validation badge visuals
- Telemetry or packet integrity visual
- Optional embedded/gateway system diagram

Purpose:

The technology section should make the system architecture feel real, precise, and credible.

Fallback:

Use CSS/HTML diagram blocks, icon-supported cards, and structured technical labels instead of fake lab or hospital photography.

### Current Progress

Required assets:

- Product roadmap graphic
- Validation status markers
- Optional milestone timeline visual

Purpose:

Current Progress should clarify what exists today and what remains in R&D while avoiding exaggerated claims.

Fallback:

Use a restrained timeline component with text status markers such as Architecture Defined, Gateway Integrated, Telemetry Validated, Safety Boundaries Documented, and Future R&D.

### Recognition

Required assets:

- Aivancity article link
- Optional article reference markdown
- Optional Aivancity logo only if permitted

Purpose:

Recognition provides third-party credibility without implying clinical validation.

Fallback:

Use a clean recognition card with the article title, source, and external link. Do not use logos without permission.

### Founder

Required assets:

- Professional founder photo of Vishal Nelaturi
- LinkedIn profile link
- Optional GitHub profile or organization link

Purpose:

The founder section should connect Vesperus to a credible builder narrative and make the company feel real.

Fallback:

Use a text-first founder card with strong typography and LinkedIn CTA. Avoid generic avatar illustrations.

### Contact

Required assets:

- Contact email
- LinkedIn profile link
- Optional GitHub profile or organization link

Purpose:

Contact should give investors, collaborators, and research partners a clear next step.

Fallback:

Use a simple contact CTA and LinkedIn link until a domain-based email is available.

## Minimum Viable Assets For V1

- Founder photo
- NOVA SC dashboard screenshot
- NOVA B1 motherboard photo, render, or screenshot
- Aivancity article link
- LinkedIn profile link
- GitHub profile or organization link
- Contact email

## Optional Premium Assets

- Abstract AI/telemetry background
- NOVA architecture diagram
- M.E.D.I.S. concept diagram
- Product roadmap graphic
- Technical validation badge visuals
- Startup logo mark

## Fallback Rules

If an asset is missing:

- Use clean abstract CSS visuals instead of fake stock photos.
- Use cards and diagrams instead of misleading medical imagery.
- Avoid fake device renders.
- Avoid fake hospital, doctor, patient, or clinical imagery.
- Clearly label R&D concepts as concepts.
- Do not imply clinical readiness, regulatory approval, patient deployment, active treatment, enabled actuator control, or completed medicine synthesis.
- Prefer text-first credibility over invented visuals.
- Use Lucide icons and technical labels for structure, not as fake proof.

## Recommended File Naming Convention

- `assets/images/founder-vishal.jpg`
- `assets/images/nova-sc-dashboard.png`
- `assets/images/nova-b1-board.png`
- `assets/images/nova-architecture.png`
- `assets/images/medis-concept.png`
- `assets/references/aivancity-article.md`

## Asset Readiness Table

| Asset | Required for V1? | Current status | Recommended source | Usage section | Risk if missing |
|---|---:|---|---|---|---|
| Founder photo | Yes | Missing | Founder-provided professional photo | Founder | Founder section feels less personal and less investor-ready |
| NOVA SC dashboard screenshot | Yes | Missing | Founder-provided screenshot from NOVA SC | NOVA, Technology | Weakens proof that NOVA exists as a current platform |
| NOVA B1 motherboard image | Yes | Missing | Founder-provided board photo, render, or screenshot | NOVA | Reduces hardware credibility and product specificity |
| Aivancity article link | Yes | Available in content docs, not saved as reference file | Existing public article URL | Recognition, Proof Bar | Recognition can still link out, but local reference documentation is incomplete |
| LinkedIn profile link | Yes | Available in content docs | Founder LinkedIn URL | Founder, Contact, Footer | Contact credibility is weaker without professional profile link |
| GitHub profile or organization link | Yes | Missing | Founder-provided GitHub profile or organization URL | Contact, Footer, optional Technology | Reduces technical credibility for builders and collaborators |
| Contact email | Yes | Missing | Founder-provided domain or preferred email | Contact, Footer | Users lack a direct conversion path |
| Abstract AI/telemetry background | No | Missing | CSS-generated visual or custom asset | Hero | Hero may rely on simpler CSS visual system |
| NOVA architecture diagram | No | Missing | Founder-provided diagram or implementation-created diagram | NOVA, Technology | Architecture explanation becomes more text-heavy |
| M.E.D.I.S. concept diagram | No | Missing | Founder-provided concept or implementation-created concept diagram | M.E.D.I.S. | Long-term vision may feel less concrete |
| Product roadmap graphic | No | Missing | Founder-provided roadmap or implementation-created timeline | Current Progress | Current progress section relies on text timeline |
| Technical validation badges | No | Missing | Implementation-created badge visuals | Proof Bar, Technology, Current Progress | Proof points may feel less visually distinct |
| Startup logo mark | No | Missing | Founder-provided logo or future brand design | Navbar, Hero, Footer | Site can use text wordmark until logo exists |

## Exact Files To Request From The Founder

Required:

- Professional founder photo
- NOVA SC screenshot
- NOVA B1 board image or render
- GitHub profile or organization link
- Contact email

Optional:

- M.E.D.I.S. concept image
- Project logo or startup logo mark if any
- NOVA architecture diagram
- Product roadmap graphic
- Any approved Aivancity logo or article preview asset

## Reference Asset To Create In Phase 3 Implementation

Create a local reference file for the Aivancity article:

- `assets/references/aivancity-article.md`

Recommended contents:

- Article title
- Source name
- URL
- Short note explaining that the article is credibility recognition, not clinical validation

## Validation Checklist For Phase 3

- [x] Required assets identified
- [x] Missing assets listed
- [x] Fallback strategy defined
- [x] No fake credibility assets planned
- [x] Site can proceed to implementation with or without images

## Phase 3 Readiness

Phase 3 can proceed to implementation by creating reference placeholders, documenting missing assets, and preparing asset intake conventions.

The actual website implementation should not depend on unavailable visual assets. If real founder or product assets are not available before UI buildout, the V1 site should use text-first credibility, structured cards, technical diagrams, and restrained abstract CSS visuals.
