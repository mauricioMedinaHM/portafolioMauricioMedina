# Design System Document: The Web3 Terminal

## 1. Overview & Creative North Star

### Creative North Star: "The Sovereign Architect"
This design system is built to bridge the raw, functional power of a Linux kernel with the high-end editorial sophistication of a modern Web3 portfolio. We are moving away from the "template" look of a generic developer site by embracing **The Sovereign Architect** aesthetic: a philosophy that treats code as art and the terminal as a high-contrast canvas.

The system breaks traditional grids through intentional asymmetry and tonal depth. We use the **Deep Purple (#4B0082)** and **Black (#000000)** base to create a sense of infinite space, where terminal windows and code snippets don't just sit on the page—they emerge from it. By leveraging a radical 0px border-radius (the Roundedness Scale), we emphasize precision, technical rigor, and a "brutalist" professional edge.

## 2. Colors

The color palette is rooted in absolute dark mode, utilizing high-contrast primary accents to guide the user's eye through technical data.

*   **Primary Hierarchy:** Use `primary` (#c19cff) for high-signal actions and `primary_dim` (#9146ff) for secondary interactive states. The core brand soul lives in the `on_primary_container` (#300069) transitions.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. We define spatial boundaries solely through background color shifts. A section using `surface_container_low` (#131313) sitting against a `background` (#0e0e0e) provides a sophisticated, silent boundary that feels more premium than a line ever could.
*   **Surface Hierarchy & Nesting:** Depth is achieved by nesting. A "Terminal Window" should use `surface_container_high` (#201f1f) sitting on a `surface` (#0e0e0e) background. This creates a natural stack of importance without visual clutter.
*   **The "Glass & Gradient" Rule:** Floating Web3 elements (like wallet connection modals or protocol icons) should utilize a `backdrop-blur` of 12px-20px combined with a semi-transparent `surface_variant` (#262626 at 60% opacity).
*   **Signature Textures:** For Hero CTA buttons or primary headers, use a subtle linear gradient transitioning from `primary_dim` (#9146ff) to `primary` (#c19cff) at a 135-degree angle. This adds a "glow" that mimics the phosphor of high-end terminal monitors.

## 3. Typography

The system utilizes a dual-font strategy to balance technical utility with editorial elegance.

*   **Display & Headline (Space Grotesk):** This typeface provides the "Modern Web3" feel. Use `display-lg` (3.5rem) for main names or project titles. The wide apertures and geometric forms convey transparency and forward-thinking.
*   **Body & Title (Manrope):** A clean Sans-Serif used for readability. `body-md` (0.875rem) is the workhorse for professional summaries and experience descriptions.
*   **The Terminal Monospace:** For all code snippets, terminal inputs, and technical skills, use a system-level Monospace font (e.g., Fira Code or JetBrains Mono). This must be applied to `label-md` and `label-sm` to give them a "metadata" feel.
*   **Hierarchy:** We use extreme scale. Pair a massive `display-lg` headline with a tiny, monospace `label-sm` tag to create the intentional asymmetry typical of high-end developer portfolios.

## 4. Elevation & Depth

We reject traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Instead of shadows, use the Surface scale. 
    *   *Level 0:* `surface_container_lowest` (#000000) for the absolute background.
    *   *Level 1:* `surface_container` (#1a1919) for content sections.
    *   *Level 2:* `surface_container_highest` (#262626) for active terminal windows.
*   **Ambient Glow:** When a terminal window needs to "pop," use a glow instead of a shadow. Apply a box-shadow with a 40px blur, 0px spread, using `primary` (#c19cff) at 5% opacity. This mimics the ambient light of a monitor in a dark room.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` (#494847) at 20% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use `backdrop-filter: blur(10px)` on any element that floats over text, ensuring the deep purple tones of the background bleed through the dark surfaces.

## 5. Components

### Terminal Windows
The centerpiece of the system.
*   **Header:** `surface_container_highest` background, containing three "window controls" (red/yellow/green) but styled as monochromatic `outline` dots to maintain the dark aesthetic.
*   **Body:** `surface_container_low` background. No padding on the container; use the Spacing Scale (1.75rem / `8`) for internal content padding.

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Sharp 0px corners.
*   **Secondary:** Ghost style. `outline` border (20% opacity) with `primary` text. 
*   **States:** On hover, the primary button should trigger a `primary_fixed_dim` (#ab78ff) glow.

### Chips (Tech Stack Tags)
*   **Style:** Monospace text (`label-sm`).
*   **Container:** `secondary_container` (#474646) with `on_secondary_container` (#d2d0cf) text. No rounded corners.

### Input Fields / Command Line
*   **Prompt:** Always prefix with a `primary` colored `>` or `$`.
*   **Cursor:** A blinking block cursor using the `tertiary` (#9cff93) color to signify Web3 "Go" or "Success" states.

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Layout:** Use vertical whitespace (Spacing Scale `12` or `16`) to separate work experiences. Use a slight background shift (`surface_container_low`) on hover to define the list item hit area.

## 6. Do's and Don'ts

### Do
*   **Do** use `tertiary` (#9cff93) sparingly for "Success" states or active blockchain nodes.
*   **Do** lean into asymmetry. A terminal window can be offset to the right with large `display-md` text overlapping its left edge.
*   **Do** ensure all monospace text maintains high contrast (`on_surface`) for readability against the dark background.

### Don't
*   **Don't** use border-radius. Every element must be a sharp, 90-degree angle to maintain the "Linux Terminal" rigor.
*   **Don't** use pure white (#ffffff) for large blocks of body text. Use `secondary` (#e5e2e1) to reduce eye strain in the dark mode environment.
*   **Don't** use standard icons. Use Web3-inspired glyphs (hexagons, nodes, linked chains) and ensure they are styled with the `primary` or `tertiary` tokens.