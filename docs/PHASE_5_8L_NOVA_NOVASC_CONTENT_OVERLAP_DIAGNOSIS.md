# Phase 5.8L NOVA / NOVA SC Content Overlap Diagnosis

## Executive Summary

Validation result: PARTIAL SEPARATION, OVERLAP STILL PRESENT

The current architecture is directionally correct after Phase 5.8J and 5.8K: NOVA is increasingly positioned as the validation-first infrastructure platform, while NOVA SC is visible as the supervision / validation / future advisory layer.

However, the `/nova` page still carries substantial NOVA SC-owned content:

- Supervision.
- Telemetry checks.
- Packet integrity.
- Validation evidence.
- Replayable traces.
- Future Intelligent Advisory Layer.
- Confidence-based advisories.
- Engineering review support.

This makes `/nova` feel like a mixed NOVA + NOVA SC technical page rather than a pure NOVA Platform page.

Main verdict:

- NOVA identity: 7 / 10
- NOVA SC identity: 5.5 / 10
- Reviewer clarity: 6 / 10

A reviewer can understand that NOVA is the foundation and NOVA SC is the supervision layer, but the distinction is not clean enough yet because NOVA SC content lives inside the NOVA page.

## Current-State Assessment

### Missing / Changed File Note

The audit request included:

- `src/components/nova/NovaScConsole`

Current state:

- `NovaScConsole.tsx` no longer exists after Phase 5.8J.
- NOVA SC content now appears through Projects, Home, Contact, Founder project cards, and several sections inside `/nova`.

This is an improvement for separation, but the NOVA page still includes NOVA SC concepts through architecture, software validation, advisory roadmap, authority model, telemetry pipeline, and roadmap.

## Section Audit

| Section | Primary purpose | Core message | Unique value | Belongs to | Overlap score |
|---|---|---|---|---|---:|
| `NovaPage.tsx` | Compose full NOVA portal | NOVA includes platform, software validation, telemetry, advisory roadmap, safety | Full technical credibility page | Shared | 7 |
| `NovaHero` | Introduce NOVA | Validation-first infrastructure for distributed supervision, telemetry checks, system-state visibility | Clear technical positioning | Shared leaning NOVA SC | 6 |
| `NovaOverview` | Define NOVA | Hardware/software orchestration, gateway, telemetry, packet integrity, event logging | Good platform definition | Shared | 6 |
| `NovaWhyExists` | Explain need | Visibility, validation, telemetry, traceability, supervision before higher-risk automation | Strong rationale | Shared | 7 |
| `NovaB1Motherboard` | Explain hardware | NOVA B1 as dual ESP32-S3 hardware foundation | Hardware-specific and concrete | NOVA | 1 |
| `NovaSystemArchitecture` | Show chain | Sensors -> NOVA B1 -> ESP32 -> Pi -> NOVA SC -> future advisory | Best current hierarchy, but includes NOVA SC/advisory on NOVA page | Shared | 8 |
| `NovaHardwareCapabilities` | List hardware interfaces | ESP32, sensors, safety signals, PWM, RTC, FRAM, Pi integration | Hardware-specific capability list | NOVA | 1 |
| `NovaSoftwareValidationLayer` | Explain software/data layer | Telemetry, calibration, event logging, sessions, replay, deterministic validation | Mostly NOVA SC software concepts | NOVA SC | 8 |
| `NovaIntelligentAdvisoryRoadmap` | Future advisory roadmap | NOVA SC future intelligent monitoring/advisory analytics | Distinct future NOVA SC story | NOVA SC | 9 |
| `NovaAuthorityModel` | Boundary model | Rules primary, telemetry evidence, advisory intelligence supports review | Important safety framing | NOVA SC / Shared safety | 7 |
| `NovaTelemetryPipeline` | Explain telemetry flow | Signal intake, packet structure, forwarding, checks, logging, sessions, replay, supervision visibility | Strong NOVA SC pipeline content | NOVA SC | 8 |
| `NovaValidationStatus` | Current status | Hardware, communications, software validation | Mixed but status-scoped | Shared | 5 |
| `NovaRoadmap` | Future work | Telemetry views, calibration, replay, analytics, advisory research, M.E.D.I.S. support | Mostly NOVA SC future work | NOVA SC | 8 |
| `NovaSafetyBoundary` | Scope safety | NOVA is research infrastructure, not clinical/medical product | Safety boundary | Shared | 3 |
| `ProjectPortfolioCards` | Portfolio cards | NOVA, NOVA SC, M.E.D.I.S. as project layers | Best top-level separation | Shared | 3 |
| `ProjectConnectionMap` | Project hierarchy | NOVA foundation -> NOVA SC -> M.E.D.I.S. | Good conceptual separation | Shared | 2 |
| `ProjectsSnapshot` | Home preview | Short NOVA/NOVA SC/M.E.D.I.S. cards | Lightweight separation | Shared | 2 |
| `CurrentStatusSnapshot` | Home maturity | NOVA B1, NOVA SC, Pi Gateway, M.E.D.I.S. | Useful maturity scan | Shared | 4 |
| `ProjectMaturityOverview` | Projects maturity | Same status items as Home | Duplicates Home status | Shared | 6 |
| `MedisNovaRelationship` | Explain M.E.D.I.S. dependency | NOVA foundation and future advisory infrastructure support M.E.D.I.S. | Good bridge | M.E.D.I.S. / Shared | 5 |

## Duplication Map

| Section A | Section B | Repeated Topic | Severity |
|---|---|---|---:|
| `NovaHero` | `NovaOverview` | NOVA as validation-first infrastructure with supervision/telemetry | 6/10 |
| `NovaOverview` | `NovaWhyExists` | Visibility, telemetry, packet integrity, event logging, supervision | 7/10 |
| `NovaWhyExists` | `NovaTelemetryPipeline` | Telemetry, packet integrity, visibility, validation-oriented behavior | 7/10 |
| `NovaOverview` | `NovaSoftwareValidationLayer` | Telemetry acquisition, validation software, event logging | 7/10 |
| `NovaSoftwareValidationLayer` | `NovaTelemetryPipeline` | Telemetry acquisition, session/run behavior, replayable traces | 8/10 |
| `NovaTelemetryPipeline` | `NovaValidationStatus` | Telemetry checks and software validation | 6/10 |
| `NovaIntelligentAdvisoryRoadmap` | `NovaRoadmap` | Advisory anomaly screening, drift/analytics, confidence-based review | 8/10 |
| `NovaAuthorityModel` | `NovaSafetyBoundary` | Boundary / authority / non-control framing | 5/10 |
| `NovaAuthorityModel` | `NovaIntelligentAdvisoryRoadmap` | Advisory layer for engineering review, not control authority | 7/10 |
| `NovaSystemArchitecture` | `NovaIntelligentAdvisoryRoadmap` | Future Intelligent Advisory Layer | 7/10 |
| `NovaSystemArchitecture` | `NovaTelemetryPipeline` | Telemetry validation and supervision path | 7/10 |
| `ProjectPortfolioCards` | `ProjectsSnapshot` | NOVA/NOVA SC/M.E.D.I.S. card descriptions | 5/10 |
| `ProjectMaturityOverview` | `CurrentStatusSnapshot` | Identical maturity statuses | 8/10 |
| `ProjectConnectionMap` | `MedisNovaRelationship` | NOVA foundation -> validation evidence -> M.E.D.I.S. | 6/10 |
| `ProjectConnectionMap` | `ProjectPortfolioCards` | NOVA/NOVA SC/M.E.D.I.S. hierarchy | 4/10 |
| `NovaRoadmap` | `MedisNovaRelationship` | Future M.E.D.I.S. support via validation/advisory infrastructure | 5/10 |

## Ownership Map

| Concept | Owner | Reason |
|---|---|---|
| Hardware | NOVA | Physical platform and motherboard foundation. |
| NOVA B1 motherboard | NOVA | Specific board/backplane asset. |
| Firmware | NOVA | ESP32 runtime and embedded behavior. |
| ESP32 architecture | NOVA | Embedded runtime infrastructure. |
| Gateway | NOVA | Raspberry Pi / external controller bridge belongs to system infrastructure. |
| Telemetry transport | NOVA | Data movement from embedded platform to software layer. |
| Telemetry visibility | NOVA SC | Visibility and review happen in supervision software. |
| Telemetry checks | NOVA SC | Checks are validation/supervision layer behavior. |
| Validation | Shared | NOVA provides foundations; NOVA SC exposes evidence and review. |
| Packet integrity | NOVA SC | Best framed as supervision/software validation concern. |
| Monitoring | NOVA SC | Monitoring is observation/supervision software. |
| Health checks | NOVA SC | Status/health view belongs to software supervision. |
| Advisory intelligence | NOVA SC | Future Intelligent Advisory Layer. |
| Drift detection | NOVA SC | Future advisory roadmap. |
| Anomaly detection/screening | NOVA SC | Future advisory roadmap; use "screening" not current detection. |
| Replay | NOVA SC | Session analysis and evidence review. |
| Evidence | NOVA SC | Validation evidence is a supervision output. |
| Architecture | Shared | Full chain spans hardware, gateway, SC, advisory, M.E.D.I.S. |
| Safety boundaries | Shared | Applies to NOVA, NOVA SC, M.E.D.I.S. |
| M.E.D.I.S. relationship | M.E.D.I.S. | Long-term R&D vision built on top of the foundation. |

## NOVA Page Audit

Question:

Does `NovaPage` currently feel like:

A. Hardware platform  
B. Software platform  
C. Mixed/confusing  
D. Repeated

Verdict:

C. Mixed/confusing, with some repeated content.

Why:

- The hardware sections are strong and unique:
  - `NovaB1Motherboard`
  - `NovaHardwareCapabilities`
  - hardware items in `NovaValidationStatus`
- But the page also includes multiple NOVA SC-owned sections:
  - `NovaSoftwareValidationLayer`
  - `NovaTelemetryPipeline`
  - `NovaIntelligentAdvisoryRoadmap`
  - `NovaAuthorityModel`
  - parts of `NovaSystemArchitecture`
  - parts of `NovaRoadmap`
- The result is not wrong, but it weakens product clarity. `/nova` currently behaves like "NOVA Platform + NOVA SC technical portal."

## NOVA SC Identity Audit

Question:

Can a reviewer clearly explain "What is NOVA?" and "What is NOVA SC?" after 60 seconds?

Answer:

PARTIALLY

What is clear:

- NOVA is the validation-first infrastructure foundation.
- NOVA B1 is the hardware motherboard/backplane.
- NOVA SC is a supervision layer.
- NOVA SC supports telemetry validation and future advisory infrastructure.

What remains unclear:

- NOVA SC does not have a dedicated page.
- NOVA SC's best content lives inside `/nova`, so reviewers may think NOVA includes all supervision/advisory functionality directly.
- The CTA `Explore NOVA SC` still routes to `/nova`, reinforcing the blur.
- Telemetry, validation, evidence, replay, packet integrity, and supervision are repeated across NOVA sections without a clean ownership distinction.

## Investor Review Test

Prompt:

What is the difference between NOVA and NOVA SC, using only visible site information?

Likely reviewer answer:

NOVA is the validation-first infrastructure platform and hardware foundation. NOVA B1, ESP32 runtime, Pi gateway, and hardware capabilities belong to NOVA. NOVA SC is a supervision and validation layer for telemetry visibility, validation evidence, packet integrity, and future intelligent advisory analytics.

Clarity issue:

This answer is possible, but the reviewer has to infer it. The site does not yet enforce the distinction structurally because the NOVA page hosts both platform and SC content.

Reviewer clarity score:

6 / 10

## Identity Scores

| Identity | Score | Reason |
|---|---:|---|
| NOVA | 7 / 10 | Hardware/platform story is strong, but NOVA SC content dilutes the page. |
| NOVA SC | 5.5 / 10 | Good positioning exists, but no dedicated route/page and too much content sits under NOVA. |
| M.E.D.I.S. | 8 / 10 | Long-term R&D framing remains clear and separated. |
| Overall reviewer clarity | 6 / 10 | Conceptual hierarchy is visible but not structurally enforced. |

## Recommended Separation Strategy

### Option A: Minimal Changes

Description:

Keep one `/nova` page but label NOVA SC sections more explicitly as "NOVA SC roadmap" or "NOVA SC layer."

Actions:

- Rename `NovaSoftwareValidationLayer` section heading to include NOVA SC.
- Rename `NovaTelemetryPipeline` section as "NOVA SC Telemetry Pipeline."
- Keep `NovaIntelligentAdvisoryRoadmap` where it is.
- Add a short note near top: "This page covers NOVA Platform and its NOVA SC supervision layer."

Pros:

- Fast.
- Low code churn.
- No routing changes.

Cons:

- Still blends NOVA and NOVA SC.
- Does not solve `Explore NOVA SC -> /nova` confusion.
- Less investor-clean.

### Option B: Moderate Changes

Description:

Keep `/nova` as platform page and create a distinct NOVA SC section block within Projects or `/nova`, but make ownership explicit.

Actions:

- Move advisory roadmap and authority model lower under a clearly marked "NOVA SC Roadmap" group.
- Reduce NOVA page duplication:
  - Merge `NovaSoftwareValidationLayer` and `NovaTelemetryPipeline`.
  - Move packet integrity/evidence/replay into that NOVA SC group.
- Keep CTA routing to `/nova` until a route exists, but add anchor-like section labeling.

Pros:

- Cleaner without creating a new route.
- Reduces repetition quickly.
- Preserves current architecture.

Cons:

- Still not as clear as a dedicated NOVA SC page.
- `/nova` remains a hybrid page.

### Option C: Strong Separation

Description:

Create a dedicated NOVA SC page later.

Recommended future architecture:

```text
/nova
  NOVA Platform
  NOVA B1
  Embedded Runtime
  Gateway Architecture
  Telemetry Transport
  Hardware Validation
  Safety Foundation

/nova-sc
  NOVA SC Supervision Platform
  Telemetry Visibility
  Validation Evidence
  Packet Integrity
  Session Analysis / Replay
  Health Monitoring
  Future Intelligent Advisory Layer
  Authority Model
  Safety Boundary
```

Pros:

- Clearest investor/product architecture.
- Makes `Explore NOVA SC` a real destination.
- Lets NOVA stay hardware/platform-focused.
- Lets NOVA SC tell the software/advisory story fully.

Cons:

- More implementation work.
- Requires new route, nav decision, page components, and documentation update.
- Needs careful claim-safety review.

Recommendation:

Option C is the best strategic direction, but Option B is a reasonable intermediate step if the site should stay smaller before asset integration.

## Top 10 Corrections

1. Create a dedicated `/nova-sc` page in a future phase.
2. Route `Explore NOVA SC` to `/nova-sc` once the page exists.
3. Move `NovaIntelligentAdvisoryRoadmap` from `/nova` to `/nova-sc`.
4. Move `NovaAuthorityModel` from `/nova` to `/nova-sc`.
5. Move most of `NovaTelemetryPipeline` to `/nova-sc`, leaving only telemetry transport on `/nova`.
6. Move packet integrity, replayable traces, session management, and validation evidence ownership to NOVA SC content.
7. Keep `/nova` focused on NOVA B1, ESP32 runtime, gateway architecture, telemetry transport, hardware validation, and safety foundation.
8. Merge duplicated telemetry/validation language between `NovaOverview`, `NovaWhyExists`, `NovaSoftwareValidationLayer`, and `NovaTelemetryPipeline`.
9. Reduce duplication between `CurrentStatusSnapshot` and `ProjectMaturityOverview` or make one more summary-level and one more detailed.
10. Update `MedisNovaRelationship` after NOVA SC separation to show `NOVA -> NOVA SC -> Intelligent Advisory Layer -> M.E.D.I.S.`

## Final Recommendation

Proceed with asset integration only if the assets are clearly assigned:

- NOVA B1 board images belong on `/nova`.
- NOVA SC dashboard screenshots belong on a future `/nova-sc` page or a clearly marked NOVA SC section.

Before adding NOVA SC screenshots to `/nova`, decide whether to implement Option B or Option C. Otherwise, visual assets may deepen the current content blur.

Best next phase:

Phase 5.8M - NOVA / NOVA SC Separation Diagnosis or Implementation, depending on whether the team wants to create `/nova-sc` now.
