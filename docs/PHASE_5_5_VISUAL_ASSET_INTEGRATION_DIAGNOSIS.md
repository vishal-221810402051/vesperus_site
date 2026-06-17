# Phase 5.5 Visual Asset Integration Diagnosis

## Phase Objective

Diagnose how to integrate the real Vesperus logo and founder image already placed in `assets/images/` into the existing React/Vite/TypeScript/Tailwind website.

This phase does not implement UI changes, deploy the site, modify DNS, or add fake images.

## Detected Image Filenames

Found in `assets/images/`:

- `founder-vishal.jpg`
- `vesperus-logo.png`
- `README.md`

## Current Relevant Files Inspected

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Founder.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/components/`

No `src/components/Foundation/` or `Finder` component currently exists. The relevant founder section is `src/components/Founder.tsx`.

## Best Vite Import Strategy

Recommended approach:

- Import image assets directly inside the React components that use them.
- Use relative imports from `src/components/` to `assets/images/`.

Recommended import paths:

```ts
import vesperusLogo from "../../assets/images/vesperus-logo.png";
import founderPhoto from "../../assets/images/founder-vishal.jpg";
```

Why:

- Vite will fingerprint, optimize, and include imported assets in the production build.
- This avoids relying on root-relative `/assets/images/...` URLs, which are not automatically copied to `dist/` unless files are placed in `public/`.
- The existing `assets/` directory can remain as the project’s source asset folder.

Not recommended for this project:

```tsx
<img src="/assets/images/vesperus-logo.png" />
```

Reason:

Root-relative paths point to files served from Vite’s public root. The current `assets/images/` folder is not the Vite `public/` folder, so this can break after production build unless the assets are manually copied.

## Recommended Files To Modify

### Required

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Founder.tsx`

### Optional

- `src/index.css`

Use `src/index.css` only if shared image utility classes or reusable object-position helpers are needed. The integration can be completed with Tailwind classes directly in the components.

### Not Required

- `src/App.tsx`

The homepage order does not need to change.

## Recommended Visual Behavior

### Navbar Logo

Replace the current letter placeholder with the real Vesperus logo.

Recommended behavior:

- Use `vesperus-logo.png`.
- Keep the text wordmark `Vesperus` visible next to the logo unless the logo already includes highly readable text.
- Logo container: `h-9 w-9` or `h-10 w-10`.
- Image sizing: `h-7 w-7 object-contain` inside a circular or softly rounded dark/accent frame.
- Maintain current navbar height of `h-16`.
- Add `alt="Vesperus logo"`.

Recommended style:

- Thin cyan border or subtle dark frame.
- No heavy glow.
- No large logo in the navbar that crowds mobile navigation.

### Hero Background Logo

Add the same logo as a large background mark inside `Hero.tsx`.

Recommended behavior:

- Use an absolutely positioned `<img>` behind the hero content.
- Place it on the right side or center-right of the hero.
- Keep it behind text and cards with `-z-10` or a controlled z-index layer.
- Approximate visual strength: 30–40% opacity if using CSS `opacity`, which corresponds to a visually muted 60–70% transparent effect.
- Add `mix-blend-screen` or `mix-blend-lighten` only if it improves integration with the dark/grid background.
- Add `blur-[0.2px]` or no blur; avoid making it muddy.
- Recommended desktop size: `w-[32rem]` to `w-[46rem]`.
- Recommended mobile size: `w-[18rem]` to `w-[24rem]`.
- Use `pointer-events-none`, `select-none`, and `aria-hidden="true"`.

Suggested Tailwind direction:

```tsx
<img
  src={vesperusLogo}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute right-[-4rem] top-28 -z-10 w-[26rem] select-none opacity-30 mix-blend-screen md:right-[-6rem] md:w-[42rem]"
/>
```

Important:

- The logo must not overpower the hero headline.
- If the logo has a bright or high-contrast background, use an overlay gradient or lower opacity further.
- Keep the existing grid and cyan/violet glow system.

### Founder Photo

Replace the current `UserRound` icon placeholder in `Founder.tsx` with `founder-vishal.jpg`.

Recommended behavior:

- Use a real `<img>` inside the existing premium panel.
- Use a clean crop with `object-cover`.
- Add `alt="Vishal Nelaturi"`.
- Keep the current panel/grid layout.
- Recommended desktop image frame: `min-h-80`, image container `h-72` to `h-80`, full panel width.
- Recommended mobile image frame: `h-72`, full width.
- Use `rounded-3xl` or a large rounded rectangle rather than a small circular crop if the photo is professional and portrait-like.
- Add a subtle border and dark gradient overlay if needed.

Suggested Tailwind direction:

```tsx
<div className="relative h-72 w-full overflow-hidden rounded-3xl border border-accent-cyan/20 bg-surface-secondary md:h-80">
  <img
    src={founderPhoto}
    alt="Vishal Nelaturi"
    className="h-full w-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background-primary/30 to-transparent" />
</div>
```

If the image crop needs adjustment, use:

- `object-center`
- `object-top`
- `object-[50%_35%]`

Choose only after visually inspecting the photo in the page.

## Responsive Behavior

### Desktop

- Navbar logo remains compact.
- Hero background logo can be large and placed right/center-right.
- Founder photo can sit in the left column with the founder content on the right.

### Tablet

- Keep hero logo visible but reduce width and opacity.
- Founder photo and text can stack or remain two-column depending on available width.

### Mobile

- Navbar logo should remain compact and not force nav overflow.
- Hero background logo should be smaller, lower opacity, and possibly shifted behind the visual proof card rather than behind the headline.
- Founder photo should stack above founder text and use a fixed, stable height such as `h-72`.

## Fallback Behavior If Images Fail To Load

### Navbar Logo Fallback

If the logo fails:

- Hide the failed image with `onError`.
- Keep the existing `Vesperus` text wordmark visible.
- Optionally show the current letter `V` fallback in the logo frame.

### Hero Background Logo Fallback

If the background logo fails:

- Hide the image.
- Keep the existing grid, cyan glow, and violet glow.
- The hero should still look complete without the logo.

### Founder Photo Fallback

If the founder photo fails:

- Hide the broken image.
- Show the existing `UserRound` icon placeholder or a text-first founder card.
- Do not use a generic stock portrait or AI-generated person image.

## Claim And Dependency Assessment

### Claim Changes

No claim changes are needed.

The integration is purely visual:

- M.E.D.I.S. remains R&D-stage.
- NOVA remains validation-first infrastructure.
- Clinical deployment remains “Not claimed.”
- No medical, regulatory, deployment, patient, or treatment claims are introduced.

### Dependencies

No new dependencies are needed.

Use:

- Existing React/Vite asset imports.
- Existing Tailwind classes.
- Existing Framer Motion only if subtle animation is already present.

## Risks

- The logo may have a background or contrast level that clashes with the dark hero if opacity/blend mode is not tuned.
- The hero background logo could reduce headline readability if positioned too close to text.
- The founder photo may crop poorly on mobile without object-position adjustment.
- Large image files may increase bundle size if imported directly; current sizes are acceptable for first integration, but later optimization may be useful.
- Referencing `/assets/images/...` directly could fail in production because the folder is not Vite’s `public/` directory.
- Broken images should not leave visible browser broken-image icons.

## Validation Checklist

- [ ] Navbar uses `vesperus-logo.png`
- [ ] Navbar text remains readable on desktop and mobile
- [ ] Hero uses subtle background logo
- [ ] Hero headline remains readable
- [ ] Hero background logo is visually muted
- [ ] Founder section uses `founder-vishal.jpg`
- [ ] Founder photo crop looks professional
- [ ] Mobile layout remains stable
- [ ] Images have appropriate `alt` text or `aria-hidden`
- [ ] Image fallback behavior is present
- [ ] No fake images are added
- [ ] No claim changes are introduced
- [ ] No new dependencies are added
- [ ] `npm run build` passes after implementation

## Recommended Next Step

Phase 5.5 Implementation
