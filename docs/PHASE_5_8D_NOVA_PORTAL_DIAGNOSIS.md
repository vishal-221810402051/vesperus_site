# Phase 5.8D NOVA Portal Diagnosis

## Phase Objective

Diagnose how to build `/nova` as the technical credibility portal for NOVA while preserving the Vesperus visual system and strict claim-safety boundaries.

This phase does not implement code, deploy, add images, add fake visuals, or change claims.

## Current NOVA Page State

Current file:

- `src/pages/NovaPage.tsx`

Current behavior:

- Renders a single placeholder panel.
- States that NOVA will become a technical portal.
- Uses the existing dark premium card style.

Current gap:

- The page does not yet explain NOVA B1, NOVA SC, Raspberry Pi gateway, dual ESP32-S3 architecture, telemetry checks, packet integrity, validation status, future expansion, or the non-clinical boundary.

## Related Existing Components Inspected

### `SystemArchitecture.tsx`

Useful for:

- Abstract flow pattern.
- Sensors -> NOVA B1 -> ESP32-S3 -> Raspberry Pi Gateway -> NOVA SC.
- Engineering notes card.

Diagnosis:

Reuse conceptually, but create a NOVA-specific version for `/nova` so the page can include more detail.

### `TechnologyStack.tsx`

Useful for:

- Embedded orchestration.
- Gateway computing.
- Telemetry validation.
- Packet integrity.
- Supervision console.

Diagnosis:

Good source material, but too generic for the NOVA portal. Convert into NOVA-specific Hardware Capabilities and Software/Data Validation Layer sections.

### `CurrentProgress.tsx`

Useful for:

- Conservative progress framing.
- Safety boundary tone.

Diagnosis:

Use its cautious language, but replace generic milestones with NOVA-specific validation status from the uploaded technical context.

### `NovaSection.tsx`

Useful for:

- Current validation-first proof point framing.
- Feature list.
- Non-clinical disclaimer.

Diagnosis:

Use as source copy, but do not reuse directly. The NOVA page needs deeper structure.

### `CurrentStatus.tsx`

Useful for:

- Conservative status badges.
- `Clinical Deployment - Not claimed`.

Diagnosis:

Use status badge style and tone classes, but create a NOVA-specific validation status component.

## Reuse Recommendation

Create new NOVA-specific components rather than reusing the current homepage-era components directly.

Reason:

- The NOVA page has a different purpose: technical credibility.
- Existing components are broad and summary-level.
- NOVA B1 and NOVA SC need deeper, structured descriptions.
- The page must include precise safety boundaries and TRL/prototype context.

Recommended folder:

- `src/components/nova/`

## Recommended Component List

Create:

- `NovaHero.tsx`
- `NovaOverview.tsx`
- `NovaB1Motherboard.tsx`
- `NovaScConsole.tsx`
- `NovaSystemArchitecture.tsx`
- `NovaHardwareCapabilities.tsx`
- `NovaSoftwareValidationLayer.tsx`
- `NovaTelemetryPipeline.tsx`
- `NovaValidationStatus.tsx`
- `NovaFutureExpansion.tsx`
- `NovaSafetyBoundary.tsx`
- `NovaContactCta.tsx`

Modify:

- `src/pages/NovaPage.tsx`
- `README.md`

Create report:

- `docs/PHASE_5_8D_NOVA_PORTAL_REPORT.md`

## Exact Page Structure

Recommended `NovaPage.tsx` order:

```tsx
export default function NovaPage() {
  return (
    <>
      <NovaHero />
      <NovaOverview />
      <NovaB1Motherboard />
      <NovaScConsole />
      <NovaSystemArchitecture />
      <NovaHardwareCapabilities />
      <NovaSoftwareValidationLayer />
      <NovaTelemetryPipeline />
      <NovaValidationStatus />
      <NovaFutureExpansion />
      <NovaSafetyBoundary />
      <NovaContactCta />
    </>
  );
}
```

## Recommended Safe Copy By Section

### 1. NOVA Hero

Purpose:

Position NOVA as the current technical proof point.

Suggested copy:

Title:

- `NOVA`

Message:

- `Validation-first infrastructure for distributed supervision, telemetry checks, and system-state visibility.`

Supporting copy:

- `NOVA is the current hardware/software orchestration platform behind Vesperus. It is presented as research-stage infrastructure, not a deployed clinical system.`

CTA:

- `Contact Vesperus` -> `/contact`
- `View Projects` -> `/projects`

### 2. What NOVA Is

Purpose:

Define NOVA clearly.

Suggested copy:

- `NOVA is a validation-first hardware/software orchestration platform for distributed system supervision. It combines embedded control hardware, gateway integration, telemetry acquisition, packet integrity monitoring, event logging, and supervision software to support future medical automation research.`

Boundary:

- Avoid saying NOVA treats, doses, manufactures, synthesizes, diagnoses, or deploys in patient environments.

### 3. NOVA B1 Motherboard

Purpose:

Explain the hardware foundation.

Reference content to include safely:

- Modular dual-ESP32-S3 control motherboard/backplane.
- Motion-control interfacing.
- Safety signal aggregation.
- Sensor acquisition.
- Servo PWM expansion.
- RTC.
- FRAM.
- Modular expansion.
- Raspberry Pi/external controller interfacing.

Suggested copy:

- `NOVA B1 is the designed hardware foundation for NOVA: a modular dual-ESP32-S3 motherboard/backplane intended for embedded orchestration, sensor acquisition, safety signal aggregation, expansion, and gateway interfacing.`

Safety note:

- `Any motion-control or actuator-facing interfaces should be described as hardware interfacing capability or planned/pending validation unless actuator control is explicitly validated and scoped.`

### 4. NOVA SC Supervision Console

Purpose:

Explain the software/supervision layer.

Suggested copy:

- `NOVA SC is the supervision console direction for telemetry checks, packet integrity, gateway visibility, validation evidence, session/run visibility, and system-state monitoring.`

Safe details:

- Telemetry checks.
- Packet integrity.
- Gateway visibility.
- Event logging.
- Run/session management.
- Replayable traces.
- Validation evidence.

Do not claim:

- Clinical monitoring.
- Patient monitoring.
- Medical device control.

### 5. System Architecture

Purpose:

Show the high-level chain.

Recommended abstract flow:

- Sensors / safety signals
- NOVA B1
- Dual ESP32-S3 embedded layer
- Raspberry Pi gateway
- NOVA SC supervision console
- Validation evidence / replayable traces

Visual:

- Abstract cards and arrows only.
- No fake board render.
- No fake screenshot.

Suggested boundary:

- `This is an abstract implementation model, not a clinical deployment diagram.`

### 6. Hardware Capabilities

Purpose:

Summarize hardware-facing capabilities without overclaiming.

Safe capability list:

- Dual ESP32-S3 architecture.
- Sensor acquisition.
- Safety signal aggregation.
- Servo PWM expansion.
- RTC.
- FRAM.
- Modular expansion.
- Raspberry Pi/external controller interfacing.
- Motion-control interfacing, carefully scoped.

Copy rule:

- Say `capability`, `interface`, `foundation`, `designed for`, or `supports validation workflows`.
- Avoid `enabled actuator control` unless explicitly scoped as pending/planned/future validation.

### 7. Software / Data Validation Layer

Purpose:

Explain software/data side with TRL and validation-first frame.

Reference content:

- TRL 3.
- Validation-first.
- Non-clinical.
- Research-stage.
- Telemetry acquisition.
- Calibration workflows.
- Event logging.
- Run/session management.
- Replayable traces.
- Deterministic validation logic.
- Progressive integration.

Suggested copy:

- `The NOVA software/data layer is framed as TRL 3, validation-first, non-clinical, and research-stage. It focuses on telemetry acquisition, calibration workflows, event logging, run/session management, replayable traces, deterministic validation logic, and progressive integration.`

### 8. Telemetry Pipeline

Purpose:

Make telemetry flow understandable.

Recommended flow:

- Signal intake
- Packet structure
- Gateway forwarding
- Telemetry checks
- Event logging
- Session/run management
- Replayable traces
- Supervision console visibility

Suggested copy:

- `The telemetry pipeline is designed to make system behavior inspectable, replayable, and validation-oriented before any higher-risk use case is considered.`

### 9. Current Validation Status

Purpose:

Show current validated points without exaggeration.

Required status labels:

- NOVA B1: Designed
- Power rails: Operational
- MAIN ESP: Operational
- SUB ESP: Operational
- USB upload: Working
- UART runtime: Operational
- NOVA SC: Telemetry checks validated
- Pi Gateway: Operational prototype
- Clinical Deployment: Not claimed

Suggested grouping:

- Hardware validation
- Software/data validation
- Boundary status

Potential phrasing:

- `validated in prototype context`
- `operational in current development setup`
- `not clinical deployment`

### 10. Future Expansion

Purpose:

Describe forward path safely.

Allowed future areas:

- Expanded telemetry views.
- More calibration workflows.
- More validation modules.
- Improved replay and trace inspection.
- Broader gateway integration.
- Documentation and gallery updates when real assets are available.
- Future M.E.D.I.S. research support.

Avoid:

- Guaranteed clinical deployment.
- Treatment/dosing/synthesis language.
- Certification promises.

### 11. Safety / Non-Clinical Boundary

Purpose:

Make boundaries explicit.

Suggested copy:

- `NOVA is presented as validation-first research infrastructure. It is not presented as a clinically ready system, a regulated medical device, a patient-facing product, an autonomous dosing system, a GMP manufacturing platform, or a medicine synthesis system.`

Note:

- This wording includes prohibited phrases only in negating context. It is safe but should be reviewed after implementation.

### 12. Contact CTA

Purpose:

Give technical reviewers and ecosystem partners a next step.

Suggested copy:

- `For innovation ecosystems, incubators, technical collaborators, and early partners interested in validation-first infrastructure, contact Vesperus.`

CTA:

- `Contact Vesperus` -> `/contact`

## Recommended Status Labels

Use:

- `NOVA B1 - Designed`
- `Power rails - Operational`
- `MAIN ESP - Operational`
- `SUB ESP - Operational`
- `USB upload - Working`
- `UART runtime - Operational`
- `NOVA SC - Telemetry checks validated`
- `Pi Gateway - Operational prototype`
- `Software/Data Layer - TRL 3 research-stage`
- `Clinical Deployment - Not claimed`

Avoid:

- `Clinically validated`
- `Approved`
- `Patient-ready`
- `Manufacturing-ready`
- `Autonomous treatment`

## Future Image And Gallery Placeholder Recommendation

Do not add images yet.

Recommended future placeholders:

- `NOVA B1 image pending`
- `NOVA SC screenshot pending`
- `Architecture diagram pending`
- `Documentation package pending`

Implementation style:

- Use abstract cards only.
- Use icons and technical labels.
- If placeholders are visible, label them clearly as pending real assets.
- Do not use fake board renders.
- Do not use fake dashboard screenshots.
- Do not use stock hospital/doctor imagery.

Optional future section:

- `NovaGalleryPlaceholder.tsx`

Diagnosis:

Do not include a visible gallery in Phase 5.8D unless it is clearly placeholder-based and useful. The required page sections do not require gallery now.

## Visual Rules

Preserve:

- Existing dark premium background.
- Site-wide watermark.
- Existing navbar/footer.
- Existing typography.
- Existing `section-shell`, `panel`, `eyebrow`.
- Existing cyan/teal/violet accents.
- Existing rounded cards.
- Existing button styles.
- Restrained Framer Motion reveals.
- Lucide icons.

Do not add:

- Fake screenshots.
- Fake board renders.
- Stock medical images.
- New global CSS.
- New design theme.
- Heavy animations.

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
- Actuator control enabled unless explicitly scoped as planned, future, pending validation, or interface capability.

Use safe framing:

- Validation-first infrastructure.
- Research-stage.
- Prototype context.
- Supervision console.
- Telemetry checks.
- Packet integrity.
- System-state visibility.
- Designed hardware foundation.
- Operational prototype where scoped.
- TRL 3 for software/data side.
- Non-clinical.

## Files Likely To Create Or Modify

Create:

- `src/components/nova/NovaHero.tsx`
- `src/components/nova/NovaOverview.tsx`
- `src/components/nova/NovaB1Motherboard.tsx`
- `src/components/nova/NovaScConsole.tsx`
- `src/components/nova/NovaSystemArchitecture.tsx`
- `src/components/nova/NovaHardwareCapabilities.tsx`
- `src/components/nova/NovaSoftwareValidationLayer.tsx`
- `src/components/nova/NovaTelemetryPipeline.tsx`
- `src/components/nova/NovaValidationStatus.tsx`
- `src/components/nova/NovaFutureExpansion.tsx`
- `src/components/nova/NovaSafetyBoundary.tsx`
- `src/components/nova/NovaContactCta.tsx`
- `docs/PHASE_5_8D_NOVA_PORTAL_REPORT.md`

Modify:

- `src/pages/NovaPage.tsx`
- `README.md`

Optional later:

- `src/data/nova.ts`

Diagnosis:

For Phase 5.8D implementation, create components directly. Move to `src/data/nova.ts` only if the content starts to duplicate across Projects, Home, and NOVA pages.

## Validation Checklist

- [ ] `/nova` no longer shows placeholder copy.
- [ ] Page includes all 12 required sections.
- [ ] NOVA is framed as validation-first infrastructure.
- [ ] NOVA B1 includes dual-ESP32-S3 motherboard/backplane context.
- [ ] NOVA SC includes supervision, telemetry checks, packet integrity, and validation evidence.
- [ ] Raspberry Pi gateway is included.
- [ ] Dual ESP32-S3 architecture is included.
- [ ] Telemetry pipeline is understandable.
- [ ] Current validation status includes uploaded validation points.
- [ ] Software/data layer is framed as TRL 3, non-clinical, research-stage.
- [ ] Future expansion does not promise clinical use, synthesis, dosing, GMP, or regulatory approval.
- [ ] Safety / Non-Clinical Boundary is visible.
- [ ] No fake images, fake renders, or fake screenshots are added.
- [ ] No stock medical imagery is added.
- [ ] Claim-safety scan passes.
- [ ] Visual system matches the rest of the site.
- [ ] `npm run build` passes.

## Next Step

Phase 5.8D Implementation

