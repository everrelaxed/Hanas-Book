---
name: Luminous Keepsake
colors:
  surface: '#fdf9f3'
  surface-dim: '#ddd9d4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#4c463d'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#7e766c'
  outline-variant: '#cfc5b9'
  surface-tint: '#6c5c44'
  primary: '#6c5c44'
  on-primary: '#ffffff'
  primary-container: '#d8c3a5'
  on-primary-container: '#5f5038'
  inverse-primary: '#d9c4a5'
  secondary: '#685c51'
  on-secondary: '#ffffff'
  secondary-container: '#edddce'
  on-secondary-container: '#6c6155'
  tertiary: '#635e51'
  on-tertiary: '#ffffff'
  tertiary-container: '#ccc5b5'
  on-tertiary-container: '#565245'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f6dfc0'
  primary-fixed-dim: '#d9c4a5'
  on-primary-fixed: '#251a07'
  on-primary-fixed-variant: '#53452e'
  secondary-fixed: '#f0e0d1'
  secondary-fixed-dim: '#d3c4b5'
  on-secondary-fixed: '#221a11'
  on-secondary-fixed-variant: '#4f453a'
  tertiary-fixed: '#eae2d1'
  tertiary-fixed-dim: '#cdc6b6'
  on-tertiary-fixed: '#1e1b11'
  on-tertiary-fixed-variant: '#4b473a'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-main:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Source Serif 4
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  personal-note:
    fontFamily: Literata
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Playfair Display
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  page-margin-desktop: 80px
  page-margin-mobile: 24px
  stack-gap: 2rem
  element-gap: 1rem
  photo-padding: 12px
---

## Brand & Style
The design system is crafted to evoke the feeling of a cherished, physical heirloom—a digital sanctuary for memory and reflection. The target audience is family and close friends participating in a collaborative storytelling experience. The emotional response is one of warmth, nostalgia, and quiet elegance.

The design style is a blend of **Soft Minimalism** and **Tactile Skeuomorphism**. It avoids the sterility of modern corporate interfaces in favor of "digital stationery." The UI leverages high-quality whitespace, delicate organic motifs (butterflies, floral line art), and subtle paper textures to mimic the experience of flipping through a high-end, handcrafted scrapbook. Every interaction should feel intentional and gentle, prioritizing emotional storytelling over utility.

## Colors
The palette is rooted in organic, sun-bleached tones that provide a "low-contrast" visual comfort. 
- **Ivory & Soft White:** Used for the primary canvas and page surfaces to create an airy, breathable environment.
- **Warm Cream & Blush Beige:** Used for layered elements like polaroid backing, note cards, and secondary containers.
- **Champagne Gold:** Reserved for accents, interactive states, and decorative flourishes like digital "washi tape" or metallic foil typography.
- **Ink (Text):** Instead of pure black, a deep, warm charcoal-brown (#4A443F) is used to maintain the vintage journal aesthetic and ensure soft legibility.

## Typography
Typography is the cornerstone of this design system's narrative power. 
- **Playfair Display:** Used for major headings and titles. It brings an authoritative yet graceful presence. Italic styles should be used frequently for emphasis and sub-headers to enhance the "editorial" feel.
- **Source Serif 4:** A clean, legible serif used for longer blocks of text and descriptions. It provides a grounded, literary quality that balances the more decorative fonts.
- **Literata (Italic):** While the system avoids overly decorative scripts to maintain premium legibility, Literata in its italic form serves as the "handwritten" surrogate for personal notes, providing a warm, bookish intimacy.
- **Labeling:** Small-caps are used for metadata (dates, locations) to provide a sophisticated, archival appearance.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the physical boundaries of a book or album, while transitioning to a fluid stack on mobile. 

- **Asymmetry:** Content should rarely be perfectly centered. Slight offsets in image placement and text blocks create a "tossed" look common in scrapbooking.
- **Generous Margins:** Wide gutters and margins are essential to evoke a feeling of luxury and "breathing room."
- **Layering:** Elements are encouraged to overlap slightly—for example, a caption card might slightly cover the corner of a photo.
- **Mobile Reflow:** On mobile, the multi-column layout collapses into a single vertical scroll, but retains the wide horizontal margins (24px) to keep the "page" feel.

## Elevation & Depth
The design system utilizes **Tonal Layering** and **Soft Ambient Shadows** to create a 3.5D physical effect.
- **Surface Levels:** The background is the lowest level (`#FFFDF8`). Content "pages" sit on top with a subtle, very large-radius shadow (Blur: 40px, Opacity: 3%, Color: #4A443F).
- **Polaroid/Card Elevation:** Photos and notes sit higher than the page. Use a dual-shadow technique: one sharp, low-opacity shadow for the edge, and one soft, diffused shadow for the lift.
- **Backdrop Blurs:** Used sparingly behind modal overlays to create a "glassine" paper effect, allowing the colors of the scrapbook below to bleed through softly.
- **No Heavy Borders:** Depth is defined by color shifts and shadows rather than hard lines.

## Shapes
The shape language is understated and "Soft." 
- **Cards & Photos:** Use `0.25rem` (4px) corner radius. This is enough to remove the harshness of a digital edge but sharp enough to feel like cut paper or a printed photograph.
- **Buttons:** Use a higher roundedness (Pill-shaped) to distinguish interactive elements from content pieces.
- **Decorative Elements:** Circular motifs for butterfly icons or fairy light containers should be perfectly round to contrast with the rectangular nature of the "pages."

## Components
- **Polaroid Frames:** The primary container for images. A thick bottom margin (`photo-padding` * 4) allows for a `label-caps` caption or a "handwritten" note.
- **Washi Tape:** A decorative component used to "anchor" cards or photos. It uses a semi-transparent `secondary_color_hex` with a slight rotation (-2 to 2 degrees) and a jagged-edge mask.
- **Soft Buttons:** High-contrast text on a `primary_color_hex` background. No borders; use a subtle "press" animation that scales the element down to 98%.
- **Memory Cards:** Soft-colored containers (`#F6EEDD`) used for long-form quotes or birthday wishes, featuring a subtle vertical line on the left as a margin marker.
- **Input Fields:** Minimalist design with only a bottom border in `primary_color_hex`. Labels float above in `label-caps` style.
- **Fairy Light Divider:** A decorative horizontal rule consisting of small, glowing circular nodes connected by a thin, curved line in Champagne Gold.
- **Butterfly Progress Indicator:** A small butterfly icon that "flutters" (subtle opacity pulse) to indicate loading or transition states.