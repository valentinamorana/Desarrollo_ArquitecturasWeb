# Design System Document: High-End Editorial

## 1. Overview & Creative North Star: "The Digital Atelier"
This design system is not a utility; it is a curated experience. Moving away from the rigid, boxy constraints of traditional SaaS, this system adopts the **"Digital Atelier"** North Star. It treats the screen as a high-end editorial spread—think *Vogue* or *Architectural Digest*. 

The goal is to evoke a sense of "lindo" (beauty) through intentional asymmetry, generous whitespace (the "luxury of breath"), and high-contrast typography scales. We bypass the "template" look by layering soft, tonal surfaces and using typography as a structural element rather than just a vehicle for information.

---

## 2. Colors & Tonal Depth
The palette is a sophisticated journey through rose-tinted neutrals, anchored by a commanding charcoal.

### The Palette
- **Primary (`#8a4b5f`) & Primary Container (`#e195ab`):** Used for brand moments and key calls to action. The `primary-container` (Dusty Rose) serves as the "chic" heart of the interface.
- **Secondary (`#795465`):** A muted, mauve-tinted rose used for secondary emphasis and depth.
- **Neutral Surface & Creamy Blush (`#fff8f8`):** The canvas. It is warmer than white, providing a premium, "fine paper" feel.
- **Charcoal (`#1f1a1c`):** Our `on-surface` anchor. It provides the high-fashion contrast necessary to keep the pink tones from feeling juvenile.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established through:
- **Color Shifts:** A `surface-container-low` section sitting against a `surface` background.
- **Tonal Transitions:** Using the hierarchy of `surface-container` tokens (Lowest to Highest) to denote nested importance.

### The Glass & Gradient Rule
To achieve a "signature" feel, floating elements (modals, navigation bars) should utilize **Glassmorphism**. Combine semi-transparent surface tokens with a `backdrop-blur` (e.g., 12px-20px). For Hero CTAs, use a subtle linear gradient from `primary` to `primary-container` at a 135-degree angle to add "soul" and dimension.

---

## 3. Typography: Editorial Authority
The type system relies on the tension between the classic grace of a Serif and the modern efficiency of a Sans-Serif.

- **Display & Headlines (Noto Serif):** These are your "statements." Use `display-lg` and `headline-md` with generous tracking adjustments. Treat these as design elements—don't be afraid of intentional asymmetry, such as a headline overlapping a photo or a container.
- **Body & Titles (Manrope):** A clean, geometric sans-serif that ensures readability. It provides the "modern" balance to the "classic" serif.
- **Labels:** Always in `manrope`. Use `label-md` for high-end utility, often in uppercase with slight letter-spacing (0.05em) for a boutique feel.

---

## 4. Elevation & Depth: The Layering Principle
We reject the standard "drop shadow" in favor of **Tonal Layering**.

- **Surface Nesting:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, soft lift.
- **Ambient Shadows:** When a physical lift is required (e.g., a floating menu), use a shadow color tinted with the `on-surface` hue (`#1f1a1c` at 5% opacity) with a massive blur (40px+) and 0 offset. It should feel like a soft glow, not a shadow.
- **The "Ghost Border":** If a boundary is strictly required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.
- **Glassmorphism:** Use `surface-container-highest` at 70% opacity with a blur to create "Frosted Glass" layers, allowing colors to bleed through and soften the layout.

---

## 5. Components

### Buttons
- **Primary:** Filled with `primary` (`#8a4b5f`), text in `on-primary` (`#ffffff`). Corner radius: `DEFAULT` (0.5rem). 
- **Secondary:** A "Glass" button using `surface-container-highest` with a backdrop blur.
- **Tertiary:** Text-only in `primary`, using `label-md` uppercase styling.

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Implementation:** Separate list items using vertical white space or subtle background shifts between `surface-container-low` and `surface-container-lowest`. 
- **Cards:** Use `xl` (1.5rem) padding to ensure the content feels "expensive" and uncrowded.

### Input Fields
- **Styling:** No bottom-border-only look. Use a subtle `surface-container-high` fill with a `Ghost Border`. When focused, the border shifts to `primary` at 40% opacity.

### Signature Component: The Editorial Carousel
Large-scale image cards that bleed off the edge of the grid, paired with `display-sm` typography that overlaps the image container using a Glassmorphism text-backing.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align a headline to the left but place the body text in a narrower column to the right.
- **Use "White Space" as a Color:** Allow large areas of `surface` to remain empty to emphasize the content that *is* there.
- **Tint your Neutrals:** Always ensure your "greys" are actually charcoal-roses (`on-surface-variant`). Pure grey is forbidden.

### Don’t:
- **Don't use 1px Dividers:** They break the "editorial" flow. Use space or tone instead.
- **Don't use Harsh Shadows:** If a shadow looks like a shadow, it’s too dark. It should look like "depth."
- **Don't Crowd the Corners:** Keep the `ROUND_EIGHT` (0.5rem) consistent but allow `xl` (1.5rem) for large containers to maintain a soft, approachable "lindo" vibe.
- **Don't use standard Pink:** Always lean toward the "Dusty" and "Blush" tokens provided to ensure the system feels adult and premium rather than "bubblegum."