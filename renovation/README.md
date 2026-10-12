# Renovation and Remodeling Estimating Costs — static page

Built from the Figma file (Renovation and Remodeling page: desktop 1440, tablet 768, mobile 375).
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
| < 768px      | Mobile: single column, stacked cards, trust logos 2 per row   |
| 768–1199px   | Tablet: 2-column grids                                        |
| ≥ 1200px     | Desktop: 4-column cards (3 for Why and Projects), 4 + 4 + 3 factors |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Sections

1. Hero: both intro paragraphs, the "What goes into an estimate" card (01–04).
2. Trust logos and reviews (shared with the other pages).
3. Estimating services: 4 cards.
4. Why use professional estimating: 3 cards.
5. How it works: 4 numbered steps.
6. What is included: 4 cards.
7. Factors: 11 tiles with tooltips.
8. Renovation costs: 7 tabs in a scrolling pill row, with tooltips.
9. Project types: 4 cards.
10. Projects: 3 example cards.
11. FAQ: two tabs. "About…" has Accuracy, How Long and How Much. The second tab has the 3 FAQ questions.

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it. A `.clamp-group` wrapper expands every `.clamp` inside it at once. The hero uses this: paragraph 1 is clamped to 6 lines on mobile only, paragraph 2 is hidden on mobile and clamped to 3 lines from tablet up, and one Read More opens both.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"` (WAI-ARIA pattern with arrow keys, Home and End).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover, focus or tap.
- **Trust logo tooltips**: CSS only, same as the live site.
- **Reviews carousel** and **cost category carousel**: arrow buttons and keyboard arrows.
- **FAQ accordion**: native `<details>`/`<summary>`.

## Notes

- Header, mobile drawer and footer are the shared ones from the home page.
- Anchor links and the "Get a Renovation Estimate" button use `href="#"` until real URLs exist.
- The header phone ("Add phone number") is a placeholder carried over from the reference site.
