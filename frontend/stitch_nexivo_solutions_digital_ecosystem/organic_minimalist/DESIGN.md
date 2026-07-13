---
name: Organic Minimalist
colors:
  surface: '#fbf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f4ed'
  surface-container: '#f0eee7'
  surface-container-high: '#eae8e1'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#414942'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1ea'
  outline: '#717972'
  outline-variant: '#c1c9c0'
  surface-tint: '#3b684b'
  primary: '#386549'
  on-primary: '#ffffff'
  primary-container: '#517e60'
  on-primary-container: '#f6fff5'
  inverse-primary: '#a1d2af'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#834c53'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f646b'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdeeca'
  primary-fixed-dim: '#a1d2af'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#234f35'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#fbb4bb'
  on-tertiary-fixed: '#360d15'
  on-tertiary-fixed-variant: '#6a383e'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
  warm-bg: '#F7F5EE'
  ink-black: '#1A1A1A'
  botanical-green: '#618F70'
  border-muted: rgba(26, 26, 26, 0.1)
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  mobile-margin: 20px
---

## Brand & Style

This design system is built on a foundation of "Humanist Technicality." It balances the precision of AI and software solutions with the warmth of organic, hand-crafted elements. The aesthetic is primarily **Minimalist**, utilizing generous whitespace and a restricted palette to ensure clarity.

The personality is sophisticated yet approachable, characterized by:
- **Warmth:** Eschewing cold "tech-blue" for earthy, organic tones.
- **Editorial Polish:** High-contrast typography and structured layouts that feel like a premium journal.
- **Wink of Creativity:** Integrating "hand-drawn" scribble accents to break the digital grid, suggesting human intuition behind the technology.
- **Professionalism:** Using dark charcoal instead of pure black for a softer, more premium readability experience.

## Colors

The palette is anchored by **Warm Beige** (`#F7F5EE`), which serves as the primary canvas, providing a softer alternative to stark white. 

- **Primary (Botanical Green):** Used exclusively for key action triggers, primary buttons, and successful states. It represents growth and intelligence.
- **Secondary (Ink Black):** Used for primary headings and dense text to ensure maximum legibility against the beige backdrop.
- **Neutral:** All backgrounds utilize the warm-bg. For card surfaces that require subtle separation, use the same color with a low-opacity charcoal border rather than a different fill color.

## Typography

The system utilizes a dual-sans-serif approach to maintain a modern, clean look.

- **Plus Jakarta Sans** is the voice of the brand, used for all headlines and UI labels. Its geometric nature provides a structured, "built" feeling. Use tight letter-spacing for large displays.
- **Inter** is the workhorse for body copy and long-form descriptions. Its high x-height ensures readability against the low-contrast background.
- **The Scribble Accent:** While not a primary font for UI elements, "Caveat" or similar handwriting styles should be used sparingly for annotations and decorative flourishes to reinforce the organic brand narrative.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop and a **Fluid** model for mobile.

- **Desktop:** A 12-column grid with a 1200px max-width. Content is centered with significant vertical breathing room between sections (80px+).
- **Mobile:** A 4-column grid with 20px side margins.
- **Rhythm:** Spacing follows an 8px base unit. Component internal padding should favor "airy" vertical space (e.g., buttons with 12px top/bottom and 24px left/right).
- **Reflow:** Cards in the "Previous Work" or "Services" sections should stack vertically on mobile while maintaining their defined aspect ratios.

## Elevation & Depth

To maintain a minimalist and tactile aesthetic, this system avoids traditional drop shadows.

- **Low-Contrast Outlines:** Depth is created using 1px solid borders in `ink-black` at 10% opacity. This defines card boundaries without breaking the flat, sophisticated plane.
- **Tonal Layering:** Instead of raising elements via shadows, secondary information is housed in containers with a slightly lighter or darker stroke than the parent background.
- **Interaction:** On hover, elements may gain a subtle 2px solid border in the primary green or move slightly (2-4px) upwards to indicate interactivity.

## Shapes

The shape language is "Soft-Modern." 

- **Radius:** Standard components (cards, inputs) use a 0.25rem (4px) corner radius. This is enough to soften the edges without looking "bubbly," maintaining the professional, editorial feel.
- **Buttons:** Buttons follow a slightly more rounded 8px radius to make them distinct as touch targets.
- **Organic Elements:** Decorative lines and "scribbles" should be intentionally irregular and hand-drawn, contrasting with the rigid geometric boxes of the UI.

## Components

### Buttons
- **Primary:** Fill color `botanical-green`, text color `warm-bg`. No border.
- **Secondary:** Transparent fill, 1px border of `ink-black` (30% opacity), text `ink-black`.
- **Tertiary:** Text link with a 2px underline that animates on hover.

### Cards
- **Style:** Background same as page or 100% white. 1px stroke of `border-muted`. No shadow.
- **Layout:** Vertical stack for mobile, horizontal "row" layout for large case studies.

### Input Fields
- **Style:** 1px bottom border only (editorial style) or a light 4px rounded box with a subtle grey stroke.
- **Focus State:** Stroke changes to `botanical-green`.

### Chips / Tags
- **Style:** Small caps typography, very subtle background fill (5% opacity charcoal), 4px radius.

### Scribbles
- **Usage:** Use as "annotations" near buttons (e.g., an arrow pointing to "Start Your Project") or as background patterns behind headings. These should always be in `botanical-green` or a slightly lighter tint.