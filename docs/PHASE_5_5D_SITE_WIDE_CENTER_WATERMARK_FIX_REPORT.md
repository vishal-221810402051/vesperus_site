# Phase 5.5D Site-Wide Center Watermark Fix Report

## Files Created/Modified

- `src/components/BackgroundWatermark.tsx`
- `src/App.tsx`
- `src/components/Hero.tsx`
- `README.md`

## Hero Watermark Removal

The hero-only logo watermark was removed from `src/components/Hero.tsx` to avoid duplicate logos and to make the logo treatment consistent across the full page.

The hero still keeps its original dark grid background and subtle glow effects.

## BackgroundWatermark Component Behavior

Created `src/components/BackgroundWatermark.tsx`.

Behavior:

- Imports the same existing logo file: `assets/images/vesperus-logo.png`
- Uses a fixed viewport layer
- Centers the watermark horizontally and vertically
- Keeps it behind all page content
- Uses `pointer-events-none` and `select-none`
- Uses large responsive sizing: `w-[38rem]`, `lg:w-[48rem]`, `xl:w-[56rem]`
- Uses subtle opacity and blend treatment
- Uses grayscale, brightness, and contrast filtering
- Uses a radial fade overlay to avoid visible rectangular image boundaries
- Hides the watermark on very small screens with `hidden sm:block`

`src/App.tsx` now renders the watermark near the top of the app, while main content and footer remain above it with `relative z-10`.

## Build Result

`npm run build` completed successfully.

The build regenerated `dist/` with the bundled Vesperus logo and founder image assets.

## Next Step

Phase 5.5D Validation
