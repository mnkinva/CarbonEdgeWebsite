# Quiet Current LLC - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from wellness-focused platforms like Calm, Headspace, and modern SaaS landing pages like Linear and Stripe, combined with the established dark aesthetic. The design emphasizes tranquility, professionalism, and approachability through subtle gradients, generous spacing, and thoughtful typography.

## Core Design Principles
- **Gentle sophistication**: Dark, calming aesthetic that feels premium but approachable
- **Clarity over complexity**: Clean information hierarchy with breathing room
- **Warmth through color**: Teal/cyan accents provide energy against deep backgrounds
- **Trust through polish**: Glassmorphic effects and soft shadows create depth

## Typography System
**Font Stack**: System UI fonts (system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI")

**Hierarchy**:
- H1 (Company name): 2.4rem (desktop), 1.9rem (mobile), letter-spacing 0.03em
- H2 (Section headers): 1.2rem, uppercase, letter-spacing 0.04em, teal accent color
- H3 (App cards): 1.02rem, normal weight
- Body: 0.95-0.98rem, line-height 1.6
- Tagline: 1rem, muted color
- Footer: 0.8rem, reduced opacity

## Layout System
**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 28 for consistent rhythm

**Container**: Max-width 900px, centered, horizontal padding 1.5rem (desktop), 1.15rem (mobile)

**Vertical Rhythm**: 
- Between major sections: 2rem
- Within sections: 1.75rem for cards grid
- Component padding: 1.5-1.75rem

## Component Library

### Header (Glassmorphic Hero)
- Rounded (18px) with gradient overlay (teal accent to dark)
- Border: 1px solid rgba(91, 192, 190, 0.35)
- Backdrop blur effect for depth
- Contains: Company name, tagline (muted), mission summary (max-width 34rem)
- Large drop shadow for prominence

### Section Cards
- Background: Soft dark (#111d21)
- Border radius: 16px
- Subtle border and deep shadow
- Padding: 1.5rem horizontal, 1.75rem vertical
- Section headers in teal, uppercase

### App Cards (Nested within What We Build)
- Darker radial gradient background
- Border radius: 12px
- Minimal border for subtle definition
- Grid layout with 1.1rem gap
- Each card: App name (H3), description paragraph in muted color

### Values List
- Unstyled list with custom formatting
- Label in bold teal-muted color, followed by explanation
- Vertical spacing: 0.25rem between items

### Contact Section
- Simple text-based layout
- Teal hyperlinks with underline on hover
- Clean, professional presentation

### Footer
- Center-aligned, muted text
- Reduced opacity (0.85)
- Dynamic year display
- 2rem top margin

## Background Treatment
- Radial gradient from darker teal (#14232a) at top to deep dark (#0b1517)
- Creates depth and draws eye to header
- Consistent throughout entire page

## Color Palette (Reference Only)
The implementation uses a sophisticated dark palette with teal accents. Main colors include deep dark backgrounds, soft dark cards, vibrant teal accent, muted teal secondary, bright white text, and muted gray text.

## Images
**No hero image required** - The glassmorphic header serves as the visual anchor. This is a text-focused, professional landing page where the gradient background and card treatments provide sufficient visual interest. The minimalist approach aligns with the "quiet" brand positioning.

## Responsive Behavior
- Single-column layout throughout (no multi-column grids)
- Breakpoint at 600px for mobile adjustments
- Reduce padding on mobile (1.25rem sections, 1.15rem container)
- Typography scales using clamp() for fluid sizing
- All cards stack vertically on all screen sizes

## Interaction States
- Links: Teal color, underline on hover
- Maintain simplicity - no complex animations
- Focus on readability and accessibility

## Special Effects
- Glassmorphism: Header uses backdrop-filter blur (14px)
- Gradients: Radial on body background, linear on header, radial on app cards
- Shadows: Deep, soft shadows (0 12-18px, 30-40px spread) for floating effect
- Borders: Subtle, semi-transparent for layered depth