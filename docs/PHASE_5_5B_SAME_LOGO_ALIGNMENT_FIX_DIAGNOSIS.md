# Phase 5.5B Same-Logo Alignment Fix Diagnosis

## Phase Objective

Diagnose fixes for the current logo and founder image integration using the same updated logo file already placed in `assets/images/`.

This phase does not implement UI changes, deploy the site, modify DNS, add new images, or change claims.

## Detected Image Assets

Found in `assets/images/`:

- `vesperus-logo.png`
- `founder-vishal.jpg`
- `README.md`

## Exact Logo Filename Currently Used

The current logo file used by both the navbar and hero is:

- `assets/images/vesperus-logo.png`

Current imports:

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`

Both files import:

```ts
import vesperusLogo from "../../assets/images/vesperus-logo.png";
```

## Current Integration Diagnosis

### Navbar

The navbar correctly uses the real logo and keeps the `Vesperus` text visible. The size is compact and mobile-safe.

Potential issue:

- If the logo itself has internal padding or a rectangular background, the circular frame may make it feel cramped or visually inconsistent.

### Hero

The hero currently uses the same logo as a large background image with:

- `opacity-25`
- `mix-blend-screen`
- right-side absolute positioning

Problem:

The hero background logo still reads like a pasted rectangular image. This usually happens when the source logo has a non-transparent rectangular canvas, a strong image boundary, or insufficient masking/overlay treatment.

### Founder

The founder photo is integrated as a real image using:

- `object-cover`
- `object-top`
- fixed height frame

Problem:

The crop is poor and the face/head alignment needs adjustment. `object-top` may be too aggressive if it pins the image too high or clips the face/head composition awkwardly.

## Same Logo Usage Recommendation

Use the same `vesperus-logo.png` for both:

- Navbar mark
- Hero background watermark

Do not create or request a separate hero logo file.

Do not duplicate the file.

Keep Vite imports in both components:

```ts
import vesperusLogo from "../../assets/images/vesperus-logo.png";
```

## Removing The Pasted-Image Look

Recommended hero treatment:

1. Wrap the hero logo image in an absolutely positioned container.
2. Apply opacity to the wrapper and/or image at a lower level than the current `opacity-25`.
3. Use blend mode and filters to integrate it into the background.
4. Add a radial mask or gradient fade so rectangular edges disappear.
5. Add a soft dark overlay layer above the image if the image canvas remains visible.
6. Keep it behind all hero content.

Recommended class direction:

```tsx
<div className="pointer-events-none absolute right-[-8rem] top-20 -z-10 hidden h-[42rem] w-[42rem] select-none overflow-hidden rounded-full opacity-20 mix-blend-screen blur-[0.2px] md:block">
  <img
    src={vesperusLogo}
    alt=""
    aria-hidden="true"
    className="h-full w-full object-contain opacity-70 grayscale contrast-125 brightness-125"
  />
  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_28%,rgba(5,7,13,0.72)_72%)]" />
</div>
```

Recommended refinements:

- Lower wrapper opacity to `opacity-10`, `opacity-15`, or `opacity-20`.
- Keep image opacity around `opacity-60` to `opacity-75` inside the wrapper.
- Use `grayscale`, `brightness-125`, and `contrast-125` if the logo colors fight the dark theme.
- Use `mix-blend-screen`, `mix-blend-lighten`, or `mix-blend-soft-light`; choose the one that hides the rectangular boundary best.
- Use `rounded-full overflow-hidden` on the wrapper to eliminate rectangular canvas edges.
- Add radial overlay to fade the outer boundary into `#05070D`.

If the rectangular image still appears:

- Reduce opacity further.
- Increase the radial overlay strength.
- Move the logo farther right so only part of it is visible.
- Use `opacity-10` and keep it as atmospheric texture rather than an identifiable foreground mark.

## Hero Placement Recommendation

Desktop:

- Large logo watermark, right or center-right.
- Suggested position: `right-[-8rem] top-20`.
- Suggested size: `h-[40rem] w-[40rem]` to `h-[46rem] w-[46rem]`.
- Keep it behind the proof card and away from the main headline.

Tablet:

- Reduce size to around `w-[30rem]`.
- Shift farther right.
- Reduce opacity if the content feels crowded.

Mobile:

- Either hide the hero watermark or reduce it drastically.
- Recommended mobile behavior: `hidden md:block`.
- If visible on mobile, use `right-[-10rem] top-28 w-[24rem] opacity-10`.

Best recommendation:

Hide the large hero watermark on mobile for readability and use the existing grid/glow background there.

## Navbar Logo Recommendation

Continue using the same `vesperus-logo.png`.

Recommended navbar behavior:

- Keep current frame size: `h-10 w-10`.
- Keep image size: `h-8 w-8 object-contain`.
- Keep text `Vesperus` beside it.
- If the logo has too much internal padding, consider `h-9 w-9` for the image inside the same frame.
- Maintain fallback to the letter `V` if loading fails.

No major navbar changes are required.

## Founder Photo Crop Fix

Current crop:

```tsx
className="h-full w-full object-cover object-top"
```

Diagnosis:

`object-top` may over-prioritize the top of the image. A more controlled object position should align the face/head better while keeping a professional portrait crop.

Recommended first adjustment:

```tsx
className="h-full w-full object-cover object-[50%_28%]"
```

If the face is still too high:

```tsx
object-[50%_35%]
```

If the face is too low:

```tsx
object-[50%_20%]
```

Recommended container behavior:

- Desktop: `h-80` or `h-[22rem]`
- Mobile: `h-72`
- Keep `rounded-3xl`
- Keep subtle border
- Keep dark gradient overlay, but ensure it does not cover the face

Recommended implementation direction:

```tsx
<div className="relative h-72 w-full overflow-hidden rounded-3xl border border-accent-cyan/20 bg-surface-secondary md:h-[22rem]">
  <img
    src={founderPhoto}
    alt="Vishal Nelaturi"
    className="h-full w-full object-cover object-[50%_28%]"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background-primary/35 via-transparent to-transparent" />
</div>
```

## Exact Files To Modify

Required:

- `src/components/Hero.tsx`
- `src/components/Founder.tsx`

Optional:

- `src/components/Navbar.tsx`

Only adjust the navbar if the logo frame needs minor sizing after checking the hero/founder fixes.

Not required:

- `src/App.tsx`
- `src/index.css`

`src/index.css` is not required unless the implementation chooses to create reusable mask utility classes. Inline Tailwind arbitrary values are enough.

## Dependency Assessment

No new dependencies are needed.

Use:

- Existing image imports
- Tailwind utility classes
- Existing React state fallbacks
- Existing Framer Motion behavior

## Claim And Copy Assessment

No claim or copy changes are needed.

This is a visual alignment fix only.

Preserve:

- M.E.D.I.S. as R&D-stage
- NOVA as validation-first infrastructure
- Clinical Deployment as “Not claimed”

Do not add:

- Clinical readiness
- Regulatory approval
- Patient deployment
- Medicine synthesis working
- Fake traction
- Fake partnerships

## Risks

- If the source logo has a solid background, blend modes alone may not fully remove the rectangle.
- Overusing opacity can make the watermark disappear entirely.
- A strong grayscale/contrast filter may alter the brand feel too much.
- A too-large watermark can reduce hero readability.
- Founder photo object-position may need a second visual adjustment after checking in-browser.
- Mobile hero layout can feel crowded if the watermark is not hidden or heavily muted.

## Validation Checklist

- [ ] Same `vesperus-logo.png` is used for navbar and hero
- [ ] No separate hero logo file is created
- [ ] Hero logo no longer reads as a pasted rectangle
- [ ] Hero logo is subtle and behind content
- [ ] Hero headline remains readable
- [ ] Hero watermark is mobile-safe
- [ ] Navbar logo remains compact and professional
- [ ] Founder photo face/head crop is improved
- [ ] Founder photo remains professional on mobile
- [ ] No fake images are added
- [ ] No new dependencies are added
- [ ] No claim/copy changes are introduced
- [ ] `npm run build` passes after implementation

## Recommended Next Step

Phase 5.5B Implementation
