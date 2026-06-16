# Phase 2 Visual System Diagnosis

## Phase Objective

Define the professional visual system for the Vesperus website before creating any website implementation files.

This phase translates the Phase 1 content architecture into a visual direction, design token foundation, component style guide, animation rules, responsive strategy, credibility rules, and validation checklist for Phase 2 implementation.

No `index.html`, CSS, JavaScript, framework, or deployment files are created in this phase.

## Brand Direction Confirmation

Company: Vesperus

Tagline: Engineering the future of autonomous healthcare.

Positioning: Vesperus builds intelligent orchestration, validation, and automation platforms for next-generation medical systems.

Confirmed brand direction:

- Premium deep-tech
- Medical automation
- Safety-first
- Technically credible
- Investor-ready
- Precise, restrained, and high-trust

The visual system should feel like a serious autonomous healthcare infrastructure company, not a consumer wellness brand, science fiction concept page, or generic AI startup.

## Recommended Visual Identity

The recommended identity is a dark premium medical-tech system with high contrast, precise spacing, restrained lighting, and subtle technical depth.

Core direction:

- Dark premium theme
- Deep space black background
- Graphite and navy panels
- Cyan and teal accents
- Subtle violet highlights
- Clean medical-tech precision

The interface should use light and contrast intentionally. Accent colors should guide attention toward proof points, system architecture, validation concepts, and calls to action. The design should avoid visual noise, cartoon elements, and overused futuristic effects.

## Design Tokens

### Background Colors

- `--color-bg-primary: #05070D`  
  Deep space black for the page background.

- `--color-bg-secondary: #0B1020`  
  Dark navy for section depth and large background bands.

- `--color-bg-technical: #0F172A`  
  Blue-black for technical areas such as NOVA and technology stack sections.

- `--color-bg-elevated: #111827`  
  Raised panel background for cards and grouped content.

### Surface Colors

- `--color-surface-panel: #111827`
- `--color-surface-panel-soft: #0F172A`
- `--color-surface-glass: rgba(12, 24, 38, 0.72)`
- `--color-surface-accent: rgba(28, 211, 202, 0.08)`

Surfaces should remain dark, quiet, and precise. Panels should support readability without turning the page into stacked cards.

### Border Colors

- `--color-border-subtle: #1E293B`
- `--color-border-technical: rgba(91, 233, 216, 0.18)`
- `--color-border-strong: rgba(160, 174, 192, 0.22)`

Borders should be thin and low-contrast by default. Use technical accent borders only for active states, proof points, or system diagrams.

### Accent Colors

- `--color-accent-cyan: #00E5FF`
- `--color-accent-teal: #14F1C7`
- `--color-accent-violet: #8B5CF6`
- `--color-accent-blue: #4EA1FF`
- `--color-accent-status: #8AF5C5`

Cyan and teal should be the primary accents. Violet should appear sparingly as a highlight, not as the dominant brand color.

### Text Colors

- `--color-text-primary: #F8FAFC`
- `--color-text-secondary: #CBD5E1`
- `--color-text-muted: #94A3B8`
- `--color-text-accent: #A7FFF3`
- `--color-text-inverse: #031016`

Primary text should be crisp and highly readable. Secondary copy should remain clear enough for investor scanning and mobile reading.

### Typography Choices

Recommended type system:

- Headings: `Inter` or system sans-serif
- Body: `Inter` or system sans-serif
- Technical labels: `JetBrains Mono` or ui-monospace fallback

Usage:

- Hero headline: geometric, controlled, high-confidence.
- Body copy: highly readable, neutral, and professional.
- Technical labels: monospace only for small labels, telemetry-style metadata, proof points, and system annotations.

Avoid overly decorative typefaces, sci-fi display fonts, and medical cliché typography.

### Spacing Scale

Recommended spacing scale:

- `4px` micro spacing
- `8px` compact spacing
- `12px` tight component spacing
- `16px` base component spacing
- `24px` grouped content spacing
- `32px` section inner spacing
- `48px` section spacing
- `72px` large section spacing
- `96px` hero and major transition spacing

The layout should feel precise and breathable. Use whitespace to create authority, not emptiness.

### Border Radius

- Buttons: `999px`
- Cards and panels: `24px`
- Pills and labels: `999px`
- Large containers: `24px` maximum only when the design needs softness

Avoid overly rounded, playful, or consumer-app styling.

### Shadow And Glow Rules

Shadows:

- Use soft black shadows for depth: `0 24px 80px rgba(0, 0, 0, 0.32)`
- Keep card shadows subtle and secondary to borders.
- Avoid heavy floating UI effects.

Glows:

- Use cyan or teal glow only around active CTAs, hero visual accents, and selected technical elements.
- Violet glow may be used as a restrained background highlight.
- Do not use large decorative orb-heavy backgrounds.

## Component Styles

### Navigation Bar

The navigation should be fixed or sticky, compact, and glass-like over the dark background.

Style:

- Dark translucent surface
- Thin bottom border
- Vesperus wordmark on the left
- Navigation links aligned right on desktop
- Contact CTA as a restrained outlined or filled button
- Mobile menu should remain simple and professional

### Hero Section

The hero should be the strongest visual moment on the page.

Style:

- Full-width dark premium section
- Large headline with controlled line length
- Subheading directly beneath
- Primary CTA for NOVA
- Secondary link for recognition or contact if needed
- Abstract technical background using restrained grid, telemetry lines, or system-node visual

The hero must communicate Vesperus immediately. The brand and tagline should be visible in the first viewport.

### Buttons

Primary button:

- Cyan or teal fill
- Dark text
- Subtle glow on hover
- Clear active and focus states

Secondary button:

- Transparent or graphite background
- Thin cyan/teal border
- Light text
- Slight surface lift on hover

Buttons should feel engineered and precise, not playful.

### Proof Bar

The proof bar should provide quick credibility directly after the hero.

Style:

- Compact horizontal row on desktop
- Stacked or wrapped pills on mobile
- Use small labels and separators
- Include proof points such as validated orchestration architecture, safety-first telemetry, Aivancity recognition, and decentralized healthcare infrastructure vision

### Cards

Cards should be used for repeated items, proof points, technology modules, recognition, and founder content.

Style:

- Dark elevated surface
- Thin border
- Minimal shadow
- Optional small accent line or corner indicator
- No nested cards
- No large decorative gradients inside every card

### Section Headers

Section headers should provide hierarchy without excessive marketing tone.

Style:

- Small technical eyebrow label
- Clear heading
- One short supporting paragraph
- Left-aligned for technical credibility
- Center alignment allowed only for summary sections

### Timeline

The current progress section should use a restrained technical timeline.

Style:

- Vertical timeline on mobile and tablet
- Horizontal or split timeline on desktop
- Small status markers
- No overclaiming status labels
- Suggested labels: Architecture Defined, Gateway Integrated, Telemetry Validated, Safety Boundaries Documented, Future R&D

### Founder Card

The founder card should feel personal but still premium and technical.

Style:

- Founder name prominent
- Role and affiliation concise
- Short builder narrative
- LinkedIn CTA
- Portrait area optional if a real founder image is available
- Avoid generic avatar illustrations

### Recognition Card

The recognition card should highlight the Aivancity feature.

Style:

- Publication/source label
- Article title
- Short credibility line
- External link CTA
- Logo only if permitted or safely available

### Contact Block

The contact block should act as the closing conversion section.

Style:

- Dark technical band
- Clear heading for investors, collaborators, and research partners
- One concise paragraph
- Primary contact CTA
- Optional secondary LinkedIn link

### Footer

The footer should be minimal and structured.

Style:

- Vesperus wordmark
- Domain reference: vesperus.systems
- Navigation links
- Founder or LinkedIn link if appropriate
- Small disclaimer-like line keeping claims conservative if needed

## Animation Rules

Animation should be subtle only.

Allowed:

- Gentle hover state transitions
- Soft button glow on hover
- Slight card lift or border accent on hover
- Scroll reveal with low distance and short duration
- Slow technical background movement
- Restrained animated gradient or orb background only when subtle and non-distracting

Avoid:

- Childish motion
- Bouncy animations
- Excessive parallax
- Fast neon flicker
- Overactive particle systems
- Animations that imply clinical functionality or active medical synthesis

Animation should create confidence and technical depth, not spectacle.

## Responsive Strategy

### Desktop

Desktop should emphasize authority, spacing, and technical structure.

Recommended layout:

- Max content width around `1120px` to `1240px`
- Hero uses two-column or layered composition if assets are available
- Navigation remains horizontal
- Proof bar is horizontal
- Technology and NOVA sections may use grids
- Timeline can use horizontal or split layout

### Tablet

Tablet should preserve the premium feel while simplifying grids.

Recommended layout:

- Two-column grids collapse where needed
- Navigation may move to a compact menu
- Hero should keep strong first-viewport hierarchy
- Cards become two-column or stacked depending on content length
- Section spacing slightly reduced

### Mobile

Mobile should prioritize readability, clean stacking, and fast scanning.

Recommended layout:

- Single-column content
- Sticky or compact navigation
- Hero headline remains strong but not oversized
- Proof bar wraps into compact pills
- Cards stack with consistent spacing
- Timeline becomes vertical
- CTAs use full-width or near-full-width layout when helpful

Mobile must avoid text overlap, tiny labels, and decorative effects that reduce legibility.

## Credibility Rules

The website must look like a real deep-tech startup.

Required:

- Use restrained premium visuals
- Use real product visuals when available
- Use abstract system visuals only when they communicate architecture or validation
- Maintain safety-first messaging
- Keep NOVA framed as the current validated platform
- Keep M.E.D.I.S. framed as long-term R&D
- Preserve technical credibility for investor and partner audiences

Avoid:

- Cartoon visuals
- Fake medical imagery
- Stock hospital clichés
- Stock-photo-heavy medical look
- Fake doctors, fake patients, or staged clinical scenes
- Exaggerated futuristic claims
- Claims of clinical readiness, regulatory approval, medicine synthesis, enabled actuator control, or patient deployment
- Overly glossy AI startup tropes that weaken trust

## Phase 2 Validation Checklist

- [x] Brand direction is confirmed
- [x] Visual identity is aligned with premium deep-tech and medical automation
- [x] Dark premium theme is defined
- [x] Deep space black, graphite/navy, cyan/teal, and subtle violet palette is specified
- [x] Design tokens are documented
- [x] Component styles are documented
- [x] Animation rules are conservative and professional
- [x] Responsive strategy is defined for desktop, tablet, and mobile
- [x] Credibility rules prevent cartoon, fake medical, and exaggerated futuristic visuals
- [x] No website implementation files were created
- [x] Diagnosis is ready for Phase 2 implementation
