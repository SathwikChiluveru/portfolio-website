# Premium with playful surprises

## Visual intent

A composed fintech identity with the energy of a personal workshop. Use a midnight foundation, precise typography, restrained electric blue, and generous space. The Lab can introduce richer visual experiments while sharing the same navigation and typography.

## Reference interpretation

The [Apple Design System](https://github.com/tekgnosis-net/apple-design-marketplace/blob/main/skills/apple-design/SKILL.md), its [tokens](https://github.com/tekgnosis-net/apple-design-marketplace/blob/main/skills/apple-design/references/tokens.md), [dark-mode guidance](https://github.com/tekgnosis-net/apple-design-marketplace/blob/main/skills/apple-design/references/dark-mode.md), and [responsive guidance](https://github.com/tekgnosis-net/apple-design-marketplace/blob/main/skills/apple-design/references/responsive.md) inform the implementation. Apply their principles of clarity, hierarchy, and depth; adapt them to this personal brand rather than copying a product page.

## Foundations

Use near-white primary type and sufficiently bright muted text against dark surfaces. Electric blue is the action color; mint can mark live or active status. Status always includes text. Define shared CSS variables for background, surface, border, type, accent, radius, and easing.

Headings carry the hierarchy. Large, tightly spaced display type contrasts with readable body copy and small monospace metadata. Keep paragraphs left aligned and comfortable in width. Use a consistent spacing rhythm based on multiples of 4 and 8 pixels. Let section boundaries breathe instead of enclosing every sentence in a card.

Cards need three cues: a surface above their surroundings, a subtle visible border, and a restrained shadow. Their artwork should communicate the project, using honest illustrative previews where real screenshots do not exist. Keep labels such as Concept and Cooking legible alongside artwork.

## Interaction

Use short opacity, color, and transform transitions on relevant components. Reserve larger gestures for intentional Lab interactions. Hover can enhance cards, but all information and actions must remain available on touch and keyboard. A command palette supplements visible navigation. Random project selection must open a real detail page.

Honor `prefers-reduced-motion`, provide visible focus states, use semantic buttons and links, and size touch targets to at least 44 pixels where practical. Dialogs should support Escape and focus management. Avoid global transitions on every element.

## Responsive behavior

Start with a single-column phone layout. Scale headings fluidly and progressively introduce columns when the content fits. Keep navigation available on small screens and prevent wide project artwork or long technical labels from causing horizontal overflow. Desktop whitespace should condense into useful phone spacing rather than tiny text.

## Voice

Direct, warm, and technically credible. Professional copy explains systems and responsibilities. Lab copy permits dry humor and unfinished ideas. Beyond the Screen supplies a little personality without taking over the site.

## Landing page refinement

The landing page leads with Sathwik as a person: casual introduction, things being made, and open-ended curiosity. The hero illustration is a personal open-tabs sketch rather than a financial system monitor. Career information stays in a compact secondary strip. Preserve the existing navigation, footer, icon style, and midnight/blue palette.
