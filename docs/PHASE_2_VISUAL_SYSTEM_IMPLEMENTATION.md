# Phase 2 Visual System Implementation

## Phase Objective

Implement the visual-system documentation and frontend-stack decision for the Vesperus website.

This phase prepares the project for future UI implementation without creating the actual website, page sections, runtime app, deployment configuration, or installed dependency footprint.

## Selected Frontend Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Vercel deployment later

## Why React + Vite + TypeScript

React is the right foundation for a component-driven startup website with repeated sections, reusable content blocks, future interaction states, and clear expansion paths for NOVA, M.E.D.I.S., Technology, Recognition, Founder, and Contact pages.

Vite keeps the development environment fast, lightweight, and modern without unnecessary framework complexity at this stage.

TypeScript provides stronger implementation safety for future components, content structures, design tokens, and animation variants. This fits Vesperus because the brand must feel precise, technical, and reliable.

## Why Tailwind CSS

Tailwind CSS is appropriate because the visual system depends on exact tokens, consistent spacing, responsive utility patterns, and controlled dark-theme styling.

Tailwind will make it easier to encode the Vesperus palette, section spacing, card treatments, typography rules, and responsive behavior directly into implementation without creating a large custom CSS surface too early.

## Why Framer Motion

Framer Motion supports the restrained motion system required for Vesperus: subtle page load effects, scroll reveal, hover lift, and controlled hero glow animation.

It should be used conservatively. Motion must support credibility and technical polish, not spectacle.

## Why Lucide React

Lucide React provides clean, consistent, technical icons suitable for buttons, proof points, navigation, technology modules, recognition links, and contact actions.

The icon style is precise and minimal, which aligns with Vesperus as a premium medical automation and deep-tech startup.

## Final Color Palette

- Background primary: `#05070D`
- Background secondary: `#0B1020`
- Surface primary: `#111827`
- Surface secondary: `#0F172A`
- Border subtle: `#1E293B`
- Text primary: `#F8FAFC`
- Text secondary: `#CBD5E1`
- Text muted: `#94A3B8`
- Accent cyan: `#00E5FF`
- Accent teal: `#14F1C7`
- Accent violet: `#8B5CF6`
- Warning amber: `#F59E0B`
- Success green: `#22C55E`

Color usage should remain dark, premium, and medical-tech precise. Cyan and teal are primary accents. Violet is a secondary highlight only.

## Typography Rules

- Headings: Inter or system sans-serif
- Body: Inter or system sans-serif
- Technical labels: JetBrains Mono or ui-monospace fallback

Headings should feel confident and restrained. Body copy should prioritize readability and investor scanning. Technical labels should be used sparingly for metadata, proof points, architecture labels, and status markers.

## Spacing Rules

- Max width: `1200px`
- Desktop section padding: `96px 24px`
- Mobile section padding: `64px 20px`
- Base internal spacing: `16px`
- Grouped content spacing: `24px`
- Major content spacing: `48px`
- Hero or major transition spacing: `96px`

Spacing should create authority and breathing room while keeping content dense enough to feel technical and credible.

## Component Style Rules

- Navbar: sticky or fixed, translucent dark surface, subtle border, compact links, clear Contact CTA.
- Hero: dark premium first viewport, strong headline, direct subheading, restrained technical visual layer.
- CTA buttons: pill radius, crisp focus state, cyan/teal primary, graphite secondary.
- Proof bar: compact credibility row or wrapped mobile pills.
- Cards: dark elevated surfaces, thin borders, no nested cards, restrained glow only on interaction.
- Section headers: technical eyebrow, clear heading, concise support copy.
- Timeline: status-oriented, restrained, no overclaiming.
- Recognition card: Aivancity feature presented as external credibility.
- Founder card: founder identity, builder narrative, LinkedIn CTA.
- Footer: minimal, structured, no heavy visual treatment.

## Animation Rules

- Use subtle page load animation.
- Use restrained hero glow animation.
- Use slight card hover lift.
- Use scroll reveal with short duration and low movement.
- Respect reduced-motion preferences.
- Avoid aggressive animation, fast flicker, playful bounces, heavy parallax, and overactive particles.

Motion should make the site feel alive and engineered, not theatrical.

## Accessibility Rules

- Maintain strong text contrast against dark backgrounds.
- Provide visible keyboard focus states.
- Use semantic HTML in future implementation.
- Do not rely on color alone for status or meaning.
- Keep buttons and links clearly distinguishable.
- Preserve readable line lengths.
- Avoid tiny technical labels on mobile.
- Respect `prefers-reduced-motion`.
- Use descriptive link text for external recognition and LinkedIn CTAs.

## Responsive Design Rules

Desktop:

- Use a maximum content width of `1200px`.
- Keep navigation horizontal.
- Use multi-column layouts only where they improve scanning.
- Give the hero and NOVA sections the strongest visual hierarchy.

Tablet:

- Reduce section spacing slightly.
- Collapse complex grids to two columns or stacked layouts.
- Keep proof and technology content easy to scan.

Mobile:

- Use single-column layouts.
- Use `64px 20px` section padding.
- Wrap proof items into compact pills.
- Stack cards consistently.
- Keep CTAs thumb-friendly and readable.
- Prevent overlapping text, decorative layers, or cramped labels.

## Forbidden Design Patterns

- No cartoon visuals.
- No fake doctors, fake patients, or fake clinical scenes.
- No stock hospital cliches.
- No stock-photo-heavy medical look.
- No exaggerated futuristic medical claims.
- No claims of medicine synthesis already working.
- No claims of clinical readiness.
- No claims of regulatory approval.
- No claims of enabled actuator control.
- No claims of patient deployment.
- No childish motion.
- No loud neon cyberpunk styling.
- No heavy orb-heavy background decoration.
- No nested cards.
- No full website UI implementation in this phase.
