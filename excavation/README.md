# Excavation Estimating Costs — static page

Built from the content brief "Excavation Estimating Costs" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `warehouse/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; excavation-only rules at the end ("Excavation page additions")
js/main.js            Interactions (same as warehouse/js/main.js)
```

## Sections

1. Hero: intro (6 lines, rest behind Read More), the three feature points from the brief, two buttons, and the navy dig cross-section card (topsoil / clay / rock, depth, cut volume, haul).
2. Trust logos and reviews (shared with the other pages).
3. Cost factors, estimate types, project types: cards. The brief's bullet summary shows; Read More reveals the numbered paragraph.
4. Excavator cost: $100–$250 per hour headline, three machine-size rate tiles, hourly-rate factors, equipment-type callout.
5. Calculation: one section with 4 tabs (calculation steps, cost per cubic yard, cost per cubic foot, land excavation figures).
6. Contracts and materials: one section with 2 tabs.
7. Planning, budgeting and accuracy: one section with 6 tabs (information needed, budgeting, planning, budget preparation, accuracy, review before bidding).
   Each tab shows the topic's main list (`.terms` cards or `.steps--grid`); the brief's follow-up questions and yes/no answers sit in an accordion below it (`.acc__steps` for numbered steps).

## Notes

- Anchor texts (yellow in the brief): "Civil and Infrastructure Projects", "Renovation and Remodeling Projects" and "Multifamily Projects" link to the matching subpages. "Square Footage Estimation", "New Construction Projects", "Developers and Property Owners" and "Excavators Charge Per Hour" use `href="#"` until real URLs exist.
- Bracketed figures in the brief (for example `[$100 to $250]`, `[5 to 15]`) are shown without brackets. They were flagged in the brief for verification.
- The brief's section labels ("About Excavation Estimating Costs", "Excavation Estimating Cost Planning", "Excavation Estimating Cost Accuracy") are used as the eyebrow above the following section heading.
