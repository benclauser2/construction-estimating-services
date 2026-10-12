# Flooring Estimating Costs — static page

Built from the Figma file (Flooring page: desktop 1440, tablet 768, mobile 375).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Styles, mobile-first, tokens in :root (page additions at the end)
js/main.js            Interactions (vanilla JS, loaded with defer)
```

Open `index.html` directly, or serve the folder (for example `npx serve .`).

## Breakpoints

| Width        | Layout                                                        |
|--------------|---------------------------------------------------------------|
| < 768px      | Mobile: single column, stacked cards and tiles                |
| 768–1199px   | Tablet: 2-column grids                                        |
| ≥ 1200px     | Desktop: 3 + 2 cards (included, materials), 4 types, 4 + 3 tiles |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Sections

1. Hero: intro, second paragraph behind Read More, two buttons, and the floor layers card (inline SVG with Material, Labor & installation, Removal & prep, Project size labels, plus the caption).
2. Trust logos and reviews (shared with the other pages).
3. What is included: 5 cards (`.grid--3-2`).
4. How flooring cost is calculated: two-paragraph intro, the 4-step per-square-foot card with the material-only note, and the cost formula.
5. Factors: 5 pill tabs with info tooltips.
6. Estimate types: 4 cards. Summary and detail open together with one Read More.
7. Costs by material: 5 cards (`.grid--3-2`).
8. Estimating services: 8 pill tabs with info tooltips.
9. Cost per square foot: intro, factors subhead, 7 tiles with tooltips, material callout.
10. Accuracy: intro and 2 cards (how long, how much).
11. FAQ: lead question and 6 accordion questions (the "information needed" answer has its 7-item list).

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it. `data-reveal="id"` also shows a hidden element. A `.clamp-group` wrapper expands every `.clamp` inside it at once (used for the cost calculation intro and the estimate type cards).
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"` (WAI-ARIA pattern with arrow keys, Home and End).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover, focus or tap.
- **Trust logo tooltips**: CSS only, same as the live site.
- **Reviews carousel** and **pill carousels**: arrow buttons and keyboard arrows.
- **FAQ accordion**: native `<details>`/`<summary>`.

## Notes

- Header, mobile drawer and footer are the shared ones from the home page.
- "Request an estimate" and anchor links use `href="#"` until real URLs exist. "See what shapes the cost" jumps to the factors section.
- The formula labels (for example "quantity × flooring price") are UI wording built from the brief's basic calculation sentence.
