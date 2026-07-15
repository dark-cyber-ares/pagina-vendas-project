---
name: Kinetic Onyx
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#f8f5f5'
  on-tertiary: '#303030'
  tertiary-container: '#dbd9d8'
  on-tertiary-container: '#5f5e5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The brand personality is **authoritative, high-performance, and sophisticated**. It targets a demographic that values both technological precision and lifestyle aesthetics—individuals who view their wearable not just as a tool, but as a statement of intent. The UI must evoke a sense of "quiet power."

The chosen style is **Tech-Minimalism with Glassmorphism**. This approach utilizes deep, obsidian-like backgrounds to make hardware photography pop, while using translucent, frosted layers to organize data without breaking the immersive dark environment. The visual language is inspired by professional athletic instrumentation and luxury timepiece interfaces, favoring precise lines over decorative flourishes.

## Colors

The palette is strictly **dark-mode centric** to mirror the hardware's premium materials (brushed metal, sapphire glass, silicone).

- **Primary (Electric Cyan):** Used sparingly for critical CTAs, active states, and primary navigation highlights. It represents connectivity and digital intelligence.
- **Accent (Neon Green):** Reserved exclusively for health and kinetic metrics (heart rate, steps, calorie burn), signaling vitality and "go" energy.
- **Backgrounds:** A tiered system of `neutral` (#0A0A0A) for the base, `secondary` (#1A1A1A) for large containers, and `tertiary` (#2D2D2D) for interactive surface elements.
- **Typography:** Pure white (#FFFFFF) for headlines to ensure maximum impact, and muted silver (#A0A0A0) for secondary body text to maintain visual hierarchy.

## Typography

The typography system balances **editorial impact** with **technical clarity**.

- **Headlines (Montserrat):** Used in heavy weights (Bold/ExtraBold). The geometric nature of Montserrat complements the round watch face and structured hardware. Large display sizes should use negative letter spacing to feel "tighter" and more premium.
- **Body (Inter):** Chosen for its exceptional legibility at small scales, particularly when displaying dense technical specifications or notification previews.
- **Data Labels (JetBrains Mono):** A monospaced font is introduced for numerical data and technical labels (e.g., GPS coordinates, timestamps, sensor readings). This reinforces the "precision tool" aspect of the product.

## Layout & Spacing

The system uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Breathing Room:** High-end products require significant whitespace (or "darkspace"). Sections should be separated by large vertical gaps (80px-120px) to allow the hardware imagery to feel heroic.
- **Asymmetric Balance:** Use offset layouts where text describes hardware features. For example, a large watch render on the left spanning 7 columns, with technical specs floating on the right in a glassmorphic card.
- **Mobile Reflow:** On mobile, all glassmorphic cards should transition to full-width containers with a subtle 1px border to define edge boundaries against the deep black background.

## Elevation & Depth

Depth is achieved through **optical layering** rather than traditional heavy shadows.

1.  **The Void (Base):** The primary background is #0A0A0A.
2.  **Glass Layers:** Use backdrop-blur (12px - 20px) on containers with a 10% white fill and a 0.5px white inner-stroke. This creates a "frosted glass" effect that feels like the watch face itself.
3.  **Glow Shadows:** Instead of black shadows, use "Electric Cyan" or "Neon Green" ambient glows for active components. These should be very diffused (30px-50px blur) and low opacity (15%) to simulate a glowing screen reflecting on a dark surface.

## Shapes

The shape language is **"Squircle" dominant**. Since the watch hardware features a perfect circular face but a structured body, the UI should reflect this hybrid.

- **Cards/Buttons:** Use a 0.5rem (8px) base radius. This is soft enough to feel modern but sharp enough to feel professional.
- **Feature Icons:** Encased in circular glass containers to mimic the watch's physical form factor.
- **Visual Dividers:** Use ultra-thin (0.5px) lines with a linear gradient (transparent to #2D2D2D to transparent) to create subtle section breaks.

## Components

- **Primary CTA Button:** High-contrast Electric Cyan background with black text. Use a slight outer glow on hover. Shape should be a "squircle" (8px radius).
- **Glassmorphic Cards:** Used for feature blocks. Requires a 1px border at 10% opacity white. Background is #FFFFFF at 5% opacity with a 16px backdrop blur.
- **Metric Chips:** Small, pill-shaped indicators for "Water Resistant," "40h Battery," etc. Use JetBrains Mono for the text within these chips.
- **Input Fields:** Dark gray background (#1A1A1A) with a 1px border that glows Electric Cyan upon focus.
- **Precise Line Icons:** Use a consistent 1.5px stroke weight. Icons should be minimalist and geometric—avoiding filled versions unless they represent an active "on" state.
- **Data Visualization:** Use thin circular rings for health metrics (rings that fill up) to mirror the watch UI directly on the sales page.