# Intent
Dark industrial architecture with dramatic depth, inspired by original CSS Zen Garden. This design evokes a sense of structural sophistication through photographic backgrounds of industrial frameworks, bold typography with extreme scale contrast, and a moody monochromatic palette. The aesthetic combines raw architectural photography with refined modernist typography to create a visually arresting, gallery-like experience.

# Style Rules
- **Background**: Use dark architectural/industrial photography as the foundation layer, with deep blacks and subtle structural details
- **Typography Scale**: Extreme contrast between display headings (massive, bold, uppercase) and body text (small, refined, clean)
- **Color Palette**: Monochromatic scheme dominated by blacks, grays, and pure white for maximum contrast
- **Sectioning**: Content appears as layered geometric frames/panels that float over the photographic background
- **Borders & Frames**: Heavy use of structural framing elements - thick borders, architectural lines, geometric containment
- **Spacing**: Generous padding within content frames, but frames themselves are arranged with intentional density
- **Typography Treatment**: Main headings use condensed/extended display fonts, uppercase, with extreme weight
- **Hierarchy**: Clear visual zones - sidebar navigation on left, main content center-right, fixed sidebars for supplementary info
- **Interactive Elements**: Underlined links, buttons with strong borders, high-contrast hover states
- **Layering**: Multiple z-index layers creating depth - background photo, semi-transparent overlays, content frames, UI elements
- **Navigation**: Vertical list styling with designer names prominently displayed, reverse-aligned text for visual interest
- **Density**: High information density balanced with strategic white space in content areas

# Tokens
- **color.background**: #1a1a1a (deep charcoal)
- **color.surface**: rgba(0, 0, 0, 0.85) (semi-transparent black)
- **color.text.primary**: #ffffff (pure white)
- **color.text.secondary**: #cccccc (light gray)
- **color.accent**: #ffffff (white for links/emphasis)
- **typography.display**: 'Impact', 'Arial Black', sans-serif (condensed, bold)
- **typography.body**: 'Georgia', 'Times New Roman', serif (classic, readable)
- **typography.scale.hero**: 4rem - 6rem (extremely large)
- **typography.scale.heading**: 1.5rem - 2rem
- **typography.scale.body**: 0.875rem - 1rem (relatively small)
- **spacing.frame**: 2rem - 3rem (interior frame padding)
- **spacing.section**: 1rem - 2rem (between sections)
- **border.width**: 1px - 3px (structural lines)
- **border.color**: rgba(255, 255, 255, 0.3) (subtle white borders)
- **radius**: 0px (sharp, architectural corners)
- **shadow**: none (flat layering, no soft shadows)
- **layout.sidebar**: 280px - 320px fixed width
- **layout.content**: fluid with max-width constraints

# Do
- Use dark, moody architectural or industrial photography as the base layer
- Create extreme typographic contrast - massive display text vs. refined body text
- Layer content frames geometrically over the background with clear borders
- Maintain strict monochromatic palette (blacks, grays, whites only)
- Use uppercase for major headings and section titles
- Implement clear visual hierarchy through size, weight, and positioning
- Create depth through layering and semi-transparent overlays
- Keep corners sharp (0 border radius) for architectural feel
- Use subtle borders to define content boundaries
- Ensure high contrast for readability despite dark theme

# Don't
- Don't use colors beyond the monochromatic scheme (no brand colors, no vibrant accents)
- Don't apply rounded corners or soft, organic shapes
- Don't use drop shadows or blur effects (keep it flat and structural)
- Don't make body text too small to read comfortably
- Don't let background photography compete with content - use overlays to ensure separation
- Don't use decorative or playful fonts - keep typography serious and architectural
- Don't create overly minimal designs - embrace the density and layered complexity
- Don't ignore the photographic background - it's central to the aesthetic
- Don't use light or bright backgrounds - maintain the dark, moody atmosphere

# Notes
- The original CSS Zen Garden used full-page architectural photography to create a museum/gallery atmosphere
- This style works best when the background image is carefully chosen to not interfere with content readability
- Consider using fixed positioning for sidebar elements to maintain structure during scroll
- The extreme typographic scale creates drama - headings should feel almost oversized
- White text on dark backgrounds requires careful attention to font weight and size for readability
- Sidebar navigation can use creative text alignment (right-aligned names, left-aligned "by" labels) for visual interest
- Content sections should feel like exhibition panels in a dark gallery space
- Icons and UI elements should maintain the monochromatic, high-contrast aesthetic
- Consider using subtle textures or grain in the background for added depth
- The design should feel sophisticated, artistic, and intentionally dramatic - not corporate or generic
