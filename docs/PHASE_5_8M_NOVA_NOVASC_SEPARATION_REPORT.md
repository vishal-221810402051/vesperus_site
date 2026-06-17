# Phase 5.8M NOVA / NOVA SC Separation Report

## Phase Objective

Separate NOVA and NOVA SC into distinct pages and move content to the correct ownership layer.

Final ownership:

- `/nova` = NOVA Platform, hardware/infrastructure foundation.
- `/nova-sc` = NOVA SC software supervision, validation evidence, telemetry visibility, replay, and future intelligent advisory layer.
- `/medis` = long-term healthcare infrastructure R&D vision.

## Routes Added

Added:

- `/nova-sc`

Updated `src/App.tsx` route set:

- `/`
- `/projects`
- `/nova`
- `/nova-sc`
- `/medis`
- `/founder`
- `/contact`
- `*`

NOVA SC was not added to the top navbar.

## Files Created

- `src/pages/NovaScPage.tsx`
- `src/components/nova-sc/NovaScHero.tsx`
- `src/components/nova-sc/NovaScOverview.tsx`
- `src/components/nova-sc/NovaScCurrentCapabilities.tsx`
- `src/components/nova-sc/NovaScSoftwareValidationLayer.tsx`
- `src/components/nova-sc/NovaScTelemetryPipeline.tsx`
- `src/components/nova-sc/NovaScIntelligentAdvisoryRoadmap.tsx`
- `src/components/nova-sc/NovaScAuthorityModel.tsx`
- `src/components/nova-sc/NovaScValidationStatus.tsx`
- `src/components/nova-sc/NovaScRoadmap.tsx`
- `src/components/nova-sc/NovaScSafetyBoundary.tsx`
- `src/components/nova-sc/NovaScContactCta.tsx`
- `docs/PHASE_5_8M_NOVA_NOVASC_SEPARATION_REPORT.md`

## Files Modified

- `src/App.tsx`
- `src/pages/NovaPage.tsx`
- `src/components/nova/NovaHero.tsx`
- `src/components/nova/NovaOverview.tsx`
- `src/components/nova/NovaWhyExists.tsx`
- `src/components/nova/NovaSystemArchitecture.tsx`
- `src/components/nova/NovaValidationStatus.tsx`
- `src/components/nova/NovaRoadmap.tsx`
- `src/components/projects/ProjectPortfolioCards.tsx`
- `src/components/projects/ProjectConnectionMap.tsx`
- `src/components/home/ProjectsSnapshot.tsx`
- `src/components/founder/FounderProjects.tsx`
- `src/components/medis/MedisNovaRelationship.tsx`

## Content Moved From NOVA To NOVA SC

Removed from `/nova` rendering:

- `NovaSoftwareValidationLayer`
- `NovaTelemetryPipeline`
- `NovaIntelligentAdvisoryRoadmap`
- `NovaAuthorityModel`

Moved into `/nova-sc` ownership:

- Software/data validation layer.
- Telemetry pipeline.
- Packet integrity.
- Event logging.
- Session management.
- Replayable traces.
- Supervision visibility.
- Future Intelligent Advisory Layer.
- Anomaly screening roadmap.
- Drift monitoring roadmap.
- Consistency analysis.
- Confidence-based advisories.
- Authority model.

## NOVA Page Final Ownership

Final `/nova` order:

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

NOVA page now focuses on:

- NOVA Platform.
- NOVA B1 motherboard.
- Dual ESP32-S3 architecture.
- Embedded runtime.
- Raspberry Pi / gateway interface.
- Telemetry transport foundation.
- Sensor/safety signal intake.
- Hardware capabilities.
- Board and hardware validation status.
- Safety foundation.
- NOVA B1 image pending placeholder.
- Hardware architecture diagram pending placeholder.

## NOVA SC Page Final Ownership

Final `/nova-sc` order:

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

NOVA SC page owns:

- Supervision console.
- Telemetry visibility.
- Packet integrity.
- Health monitoring.
- Event logging.
- Validation evidence.
- Replayable traces.
- Session/run visibility.
- Software/data validation layer.
- Telemetry pipeline after data reaches the software layer.
- Future intelligent advisory layer.
- Authority model.
- NOVA SC screenshot placeholder direction.

## Projects/Home/M.E.D.I.S. Link Updates

Projects:

- NOVA card routes to `/nova`.
- NOVA SC card routes to `/nova-sc`.
- M.E.D.I.S. card routes to `/medis`.
- Project connection map now shows:
  - NOVA Platform
  - NOVA SC
  - Future Intelligent Advisory Layer
  - M.E.D.I.S.

Home:

- NOVA SC snapshot routes to `/nova-sc`.
- NOVA SC copy now reads as software supervision and future advisory infrastructure.

Founder:

- NOVA SC project card routes to `/nova-sc`.

M.E.D.I.S.:

- Relationship section now explains:
  - NOVA provides infrastructure foundation.
  - NOVA SC provides supervision, telemetry validation, and engineering review workflows.
  - Future intelligent advisory infrastructure may support advanced validation review as the broader M.E.D.I.S. research direction evolves.

## Claim-Safety Confirmation

No claims were added for:

- AI-powered functionality today.
- Deployed AI.
- Clinical AI.
- AI diagnostics.
- Autonomous decision systems.
- AI control of actuation.
- AI control of dosing.
- Medical decision systems.
- Patient monitoring systems.
- Production medical device status.
- Approval.
- Certification.
- Commercial deployment.

Sensitive terms appear only in negating safety boundary language.

NOVA SC safety boundary states:

`NOVA SC is presented as a research-stage engineering supervision platform. It is not presented as a clinical monitoring system, a medical decision system, an autonomous control layer, or a deployed AI product.`

Deterministic validation and human/operator review remain the stated authority for engineering decisions.

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

## Next Recommended Phase

Phase 5.8N - NOVA / NOVA SC Separation Validation
