# Phase 5.8F Founder Page Report

## Phase Objective

Build `/founder` as the dedicated founder credibility page for Vishal Nelaturi while preserving the Vesperus visual system and avoiding exaggerated claims.

## Files Created

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

## Files Modified

- `src/pages/FounderPage.tsx`
- `README.md`

## Page Structure

Implemented `/founder` page order:

1. `FounderHero`
2. `FounderProfile`
3. `FounderWhyVesperus`
4. `FounderBuilderProfile`
5. `FounderProjects`
6. `FounderRecognition`
7. `FounderTechnicalFocus`
8. `FounderTeamContext`
9. `FounderContactCta`

## Verified Founder Details Used

- Vishal Nelaturi
- Founder of Vesperus
- MSc Data Engineering student at Aivancity Paris-Cachan
- Builder of NOVA and M.E.D.I.S.
- Based in Paris, France
- Featured by Aivancity for a medical innovation vision
- LinkedIn: `https://www.linkedin.com/in/nelaturi-vishal-b672331b9/`
- GitHub: `https://github.com/vishal-221810402051`
- Real founder photo: `assets/images/founder-vishal.jpg`

## Projects Included

- NOVA
- NOVA SC
- M.E.D.I.S.

Each project is framed as current platform, software layer, or long-term R&D vision without clinical or commercial overclaiming.

## Technical Focus Areas

Displayed as focus areas only:

- Embedded systems
- Software engineering
- Data engineering
- Validation infrastructure
- Healthcare automation research

No certified expertise, awards, official titles, or institutional credentials were invented.

## Team Context

Implemented copy:

`Vesperus is supported by a multidisciplinary team of five contributors based in Paris, France, spanning embedded systems, software engineering, data engineering, and research/validation.`

No team member names, roles, employees, advisors, or partners were invented.

## Recognition

Included:

- Featured by Aivancity for a medical innovation vision.
- Article title: `From UNESCO to medical innovation: Aivancity student Vishal Nelaturi develops a vision.`
- Article link from `src/data/links.ts`.

Boundary note:

Recognition reflects founder visibility and innovation direction. It should not be interpreted as product validation, clinical validation, regulatory approval, or commercial adoption.

## Claim-Safety Confirmation

No claims were added for:

- Award winner
- Patent holder
- Funding
- Customers
- Pilots
- Company incorporation
- Clinical deployment
- Regulatory approval
- Medical product success
- Official institutional titles beyond student status
- Employee headcount beyond five contributors
- Advisors
- Existing partners

The word `partners` appears only in the contact CTA phrase `early partners interested in...`, which is an audience invitation, not a claim of existing partnerships.

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

## Next Phase

5.8G Recognition Page

