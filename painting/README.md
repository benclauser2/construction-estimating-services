# Paint Estimating Costs — static page

Built from the Figma file (Paint page, desktop 1440). Tablet (768) and mobile (375) follow the layout rules of the other pages (Flooring, Roofing).
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
| < 768px      | Mobile: single column, stacked cards, tiles and stats         |
| 768–1199px   | Tablet: 2-column grids, stats in 3 columns                    |
| ≥ 1200px     | Desktop: 3 + 2 cards, 3 + 2 and 3 × 3 tiles                   |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Sections

1. Hero: intro (6 lines + Read More on mobile), topic chips, and the wall elevation card (inline SVG with the paint quantity formula).
2. Stats band: 350 sq ft, $1-$2.50/sq ft, 2 coats.
3. Trust logos and reviews (shared with the other pages).
4. What is included: 5 cards (`.grid--3-2`).
5. Paint quantity: intro, 5-step paint area card, quantity formula, and 2 Q&A cards (coverage, paint per square foot).
6. Factors: 5 pill tabs with info tooltips.
7. Cost per square foot: intro, components subhead, 5 tiles with tooltips (`.factors--3-2`), labor rate callout.
8. Estimate types: 5 cards (`.grid--3-2`).
9. House painting cost: intro and 2 cards.
10. Room paint: intro and 2 cards.
11. Exterior painting: intro and a callout.
12. Estimating services: 5 pill tabs with info tooltips.
13. Accuracy and inputs: intro, information subhead, 9 tiles with tooltips (`.factors--9`), surface measurement callout.
14. FAQ: lead question and 5 accordion questions.

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it, and hides itself when nothing is clamped.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"` (WAI-ARIA pattern with arrow keys, Home and End).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover, focus or tap.
- **Trust logo tooltips**: CSS only, same as the live site.
- **Reviews carousel** and **pill carousels**: arrow buttons and keyboard arrows.
- **FAQ accordion**: native `<details>`/`<summary>`.

## Notes

- Header, mobile drawer and footer are the shared ones from the home page.
- The writer's square brackets around figures were removed and the numbers kept.
- The wall drawing labels (Width, Height, Door, Window) and the formula line are UI wording built from the brief.
