# Phase 5.8N NOVA / NOVA SC Separation Validation Report

## Overall Result

PASS

NOVA and NOVA SC are now clearly separated at the routing and page-ownership level.

- `/nova` now functions as the NOVA Platform page.
- `/nova-sc` now functions as the NOVA SC software supervision page.
- Projects, Home, Founder, and NOVA cross-links route NOVA SC traffic to `/nova-sc`.
- M.E.D.I.S. now describes the layered relationship from NOVA Platform to NOVA SC to Future Intelligent Advisory Layer to M.E.D.I.S.

No blockers found.

## Route Validation Result

PASS

Routes confirmed in `src/App.tsx`:

- `/`
- `/projects`
- `/nova`
- `/nova-sc`
- `/medis`
- `/founder`
- `/contact`
- `*`

Validation:

- `/nova` renders `NovaPage`.
- `/nova-sc` renders `NovaScPage`.
- `/projects` NOVA SC card routes to `/nova-sc`.
- Home NOVA SC card routes to `/nova-sc`.
- Founder NOVA SC card routes to `/nova-sc`.
- NOVA page cross-links route to `/nova-sc`.
- Unknown routes still fall through to `NotFoundPage`.

## NOVA Ownership Result

PASS

`/nova` renders:

1. `NovaHero`
2. `NovaOverview`
3. `NovaWhyExists`
4. `NovaB1Motherboard`
5. `NovaSystemArchitecture`
6. `NovaHardwareCapabilities`
7. `NovaValidationStatus`
8. `NovaRoadmap`
9. `NovaSafetyBoundary`
10. `NovaContactCta`

Confirmed `/nova` focuses on:

- NOVA Platform.
- NOVA B1.
- Dual ESP32-S3 architecture.
- Embedded runtime.
- Pi/gateway interface.
- Telemetry transport foundation.
- Sensor/safety signal intake.
- Hardware capabilities.
- Hardware validation status.
- Safety foundation.

Confirmed `/nova` no longer renders:

- Software/data validation layer.
- Telemetry pipeline after software intake.
- Future Intelligent Advisory roadmap.
- Authority model.
- Confidence-based advisories.
- Anomaly screening.
- Drift monitoring.

Note:

- Old components such as `NovaSoftwareValidationLayer`, `NovaTelemetryPipeline`, `NovaIntelligentAdvisoryRoadmap`, and `NovaAuthorityModel` still exist in `src/components/nova/`, but they are not imported or rendered by `NovaPage`.

## NOVA SC Ownership Result

PASS

`/nova-sc` renders:

1. `NovaScHero`
2. `NovaScOverview`
3. `NovaScCurrentCapabilities`
4. `NovaScSoftwareValidationLayer`
5. `NovaScTelemetryPipeline`
6. `NovaScIntelligentAdvisoryRoadmap`
7. `NovaScAuthorityModel`
8. `NovaScValidationStatus`
9. `NovaScRoadmap`
10. `NovaScSafetyBoundary`
11. `NovaScContactCta`

Confirmed `/nova-sc` includes:

- Supervision console / supervision layer positioning.
- Telemetry visibility.
- Packet integrity.
- Event logging.
- Validation evidence.
- Replayable traces.
- Session/run visibility.
- Health monitoring.
- Software/data validation layer.
- Telemetry pipeline.
- Future Intelligent Advisory Layer.
- Authority model.
- Safety boundary.

## Copy Clarity Validation

### What Is NOVA?

NOVA is the validation-first infrastructure platform behind Vesperus. It owns the NOVA B1 hardware foundation, embedded runtime layers, gateway interface, telemetry transport foundation, sensor/safety signal intake, hardware capabilities, and infrastructure validation status.

### What Is NOVA SC?

NOVA SC is the software supervision layer above NOVA Platform. It owns telemetry visibility, packet integrity, health monitoring, validation evidence, event/session review, replayable traces, and the future Intelligent Advisory Layer roadmap.

### What Is The Difference?

NOVA is the hardware/infrastructure foundation. NOVA SC is the software supervision and engineering review layer built on top of that foundation.

### Is This Clear Within 60 Seconds?

YES

The dedicated `/nova` and `/nova-sc` routes now make the distinction structurally visible. Home and Projects still summarize the relationship, and the individual pages reinforce ownership.

## Identity Scores

- NOVA identity score: 9 / 10
- NOVA SC identity score: 8.5 / 10
- Reviewer clarity score: 8.5 / 10

Score rationale:

- NOVA is now strongly infrastructure/hardware focused.
- NOVA SC has its own route and complete page narrative.
- Reviewer clarity improved substantially because `Explore NOVA SC` now routes to `/nova-sc`.
- Remaining deduction is only for unused legacy NOVA components that still exist in the codebase and could confuse maintainers, though not visitors.

## Claim-Safety Result

PASS

Risky phrases scanned:

- AI-powered today
- AI-powered
- deployed AI
- clinical AI
- AI diagnostics
- autonomous decision
- AI control
- controls dosing
- patient monitoring
- approved
- certified
- commercial deployment
- medical decision system
- autonomous control layer
- deployed AI product

Findings:

| Phrase | Location | Classification | Reason |
|---|---|---:|---|
| `medical decision system` | `NovaScSafetyBoundary.tsx` | SAFE_NEGATION | Appears only in `not presented as...` boundary copy. |
| `autonomous control layer` | `NovaScSafetyBoundary.tsx` | SAFE_NEGATION | Appears only in negating safety boundary. |
| `deployed AI product` | `NovaScSafetyBoundary.tsx` | SAFE_NEGATION | Appears only in negating safety boundary. |

No RISKY current AI implementation, diagnostic, patient-monitoring, dosing, approval, certification, or commercial deployment claims were found.

## Navigation Validation Result

PASS

- NOVA SC is not in the top navbar.
- Navbar remains:
  - Home
  - Projects
  - Founder
  - Contact
- Navbar items use consistent rounded pill styling.
- NOVA SC is accessible from:
  - Home project snapshot.
  - Projects portfolio card.
  - Founder projects card.
  - NOVA hero.
  - NOVA architecture cross-link.
- No broken route references were found for active NOVA SC entry points.

## Visual Consistency Result

PASS

Confirmed by code inspection:

- `/nova` and `/nova-sc` use the same visual system.
- Both use `section-shell`, `panel`, dark premium surfaces, rounded cards, cyan/teal/violet accents, Lucide icons, and restrained Framer Motion reveals.
- Shared layout still provides the same navbar, footer, and watermark.
- `/nova-sc` does not introduce a separate template.
- No fake images, screenshots, product renders, stock medical images, or hospital imagery were added.

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

## Issues Found

### BLOCKER

None.

### HIGH

None for separation.

### MEDIUM

| Issue | Impact | Recommended fix |
|---|---|---|
| Old NOVA-owned files still contain moved concepts but are not rendered | Could confuse future maintainers during later edits. | In a cleanup phase, remove or archive unused `NovaSoftwareValidationLayer`, `NovaTelemetryPipeline`, `NovaIntelligentAdvisoryRoadmap`, and `NovaAuthorityModel` from `src/components/nova/` after confirming no imports remain. |

### LOW

| Issue | Impact | Recommended fix |
|---|---|---|
| `CurrentStatusSnapshot` and `ProjectMaturityOverview` still repeat the same maturity labels | Mild content repetition, not a separation blocker. | Differentiate Home as compact snapshot and Projects as fuller maturity overview later. |

### POLISH

| Issue | Impact | Recommended fix |
|---|---|---|
| NOVA SC screenshots are still absent | Page is structurally clear but visually abstract. | Add real NOVA SC screenshots only when available. |

## Required Fixes

Required before image integration:

- None blocking.

Recommended before image integration:

- Add NOVA B1 assets only to `/nova`.
- Add NOVA SC screenshots only to `/nova-sc`.
- Keep all images real and clearly labeled.

Required before deployment:

- Prior deployment hygiene blockers still apply from Phase 5.8I:
  - Add `.gitignore`.
  - Remove tracked `node_modules/`.
  - Remove tracked `dist/` unless intentionally deploying build artifacts.

## Final Recommendation

The NOVA / NOVA SC separation is successful.

The site is ready for NOVA B1 and NOVA SC asset integration, with clear ownership:

- NOVA B1 and hardware architecture assets belong on `/nova`.
- NOVA SC dashboard, supervision, telemetry, evidence, and advisory roadmap assets belong on `/nova-sc`.

Next recommended phase:

Phase 5.8O - NOVA B1 / NOVA SC Asset Integration Diagnosis
