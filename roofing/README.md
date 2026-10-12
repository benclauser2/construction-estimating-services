# Roofing Estimating Costs — static page

Built from the Figma file (Roofing page: desktop 1440, tablet 768, mobile 375).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Styles, mobile-first, tokens in :root
js/main.js            Interactions (vanilla JS, loaded with defer)
```

Open `index.html` directly, or serve the folder (for example `npx serve .`).

## Breakpoints

| Width        | Layout                                                        |
|--------------|---------------------------------------------------------------|
| < 768px      | Mobile: single column, stacked cards and tabs                 |
| 768–1199px   | Tablet: 2-column grids                                        |
| ≥ 1200px     | Desktop: full grids (3 + 2 inclusions, 3 + 3 and 4 + 3 tiles) |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Sections

1. Hero: intro paragraph, second paragraph behind Read More, and the $4.50–$9.00 price card with a roof-pitch drawing (inline SVG).
2. Estimate basics: tabs for Measuring the Roof / Installation, Replacement, or Repair / Labor.
3. What Moves the Number: 6 tiles with tooltips, closing text and the "Request a measured estimate" button.
4. Trust logos and reviews (shared with the other pages).
5. What Is Included: 5 cards (3 + 2 on desktop, `.grid--3-2`).
6. How costs are calculated: per-square-foot steps card and the cost formula.
7. Roofing factors and estimating services: pill tabs with info tooltips.
8. Types of estimates and costs by material: cards with summaries and Read More.
9. Cost per square foot: 7 tiles with tooltips (4 + 3) and the material callout.
10. Accuracy: 2 cards.
11. Roofing Estimating Costs FAQ: lead answer and 6 accordion questions.

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it. `data-reveal="id"` also shows a hidden element. The button only shows when the text is clamped or the extra element is actually hidden. The basics tabs use `.reveal-md`, so their second paragraph is visible on desktop and sits behind Read More on tablet and mobile.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"` (WAI-ARIA pattern with arrow keys, Home and End).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover, focus or tap.
- **Trust logo tooltips**: CSS only, same as the live site.
- **Reviews carousel** and **pill carousels**: arrow buttons and keyboard arrows.
- **FAQ accordion**: native `<details>`/`<summary>`.

## Notes

- Header, mobile drawer and footer are the shared ones from the home page.
- The writer's square brackets around figures (for example [$4.50 and $9.00]) were removed and the numbers kept.
- Anchor links and the "Request a measured estimate" button use `href="#"` until real URLs exist.
- Brief issues to check: "close to 26 square feet of roof surface" (probably squares), "Square footage sets the volume for every other component in the estimate scales" and "A straightforward install with prices lower than one demanding custom flashing…" read garbled.
