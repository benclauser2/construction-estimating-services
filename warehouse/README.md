# Warehouse Construction Cost — static page

Built from the content brief "Warehouse Construction Cost" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `flooring/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; warehouse-only rules at the end ("Warehouse page additions")
js/main.js            Interactions (same as flooring/js/main.js)
```

## Sections

1. Hero: intro, second paragraph behind Read More, jump list to the six cost sections (01–06), and the navy cross-section card (inline SVG: 40'-0" bay width, 32' clear height, dock stair) with the typical range and cost drivers.
2. Trust logos and reviews (shared with the other pages).
3. 01 Estimating services: 4 cards. Summary shows first; Read More reveals the numbered paragraph with its anchor text.
4. 06 Why use professional services: 3 cards, same pattern.
5. How it works: 4 numbered steps, same pattern.
6. 02 Total cost + 03 cost per square foot: intro, average-cost text beside the $65–$140 range card, 11 factor tiles with tooltips.
7. 04 Cost breakdown: 8-row table, calculation card with the two equations, unit-cost callout.
8. 05 Cost by size: 5,000 and 50,000 sq ft side by side, the 50,000 sq ft footprint graphic (10 × 5,000 blocks), size callout.
9. Trade categories: 12-item numbered accordion (summary line + detail paragraph).
10. Projects: 3 cards with floor-plan drawings and Building / Scope priced / Deliverable rows.
11. FAQ: 4 accordion questions.

## Notes

- Anchor texts (yellow in the brief) use `<a class="text-link" href="#">` until real URLs exist: the four service names and "Industrial Warehouse Estimate".
- Bracketed figures in the brief (for example `[$65–$140]`, `[$25]`) are shown without brackets. They were flagged in the brief for verification.
- Brief typo fixed: "building Salesystems" → "building systems" (hero, paragraph 1).
- The 5,000 / 50,000 sq ft paragraphs refer to "the graphic"; the totals and per-square-foot ranges from those graphics appear above each paragraph.
