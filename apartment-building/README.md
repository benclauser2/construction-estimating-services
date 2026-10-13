# Apartment Building Construction Costs — static page

Built from the content brief "Apartment Building Construction Costs" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `general-contractors/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; page-only rules at the end ("Apartment building page additions")
js/main.js            Interactions (same as general-contractors/js/main.js)
```

## Sections

1. Hero: intro (second paragraph behind Read More), two buttons, and the navy building-elevation card (shell + site work vs per-unit costs).
2. Trust logos and reviews (shared with the other pages).
3. Cost per square foot: 4 factor cards + accordion (total budget, building materials).
4. Cost to build an apartment complex: 6 steps + accordion (average cost, land).
5. Building types: 5 cards + the relative cost panel from the brief's graphic (moderate → highest).
6. Cost breakdown: hard-cost split bar from the brief's graphic + accordion (material costs, labor costs).
7. Multi-unit buildings: 6 steps, the 8-unit cost question with the quality-level table from the brief's graphic, accordion (building size).
8. Buying an apartment complex: 4 cards + accordion.
9. Main budget expenses: 4 cards + accordion.
10. About apartment building construction costs: 2 tabs (estimate contents, budget planning).
11. Apartment construction cost planning: 2 tabs (cost changes, project decisions).

## Notes

- Anchor texts (yellow in the brief): "Multi-Family Construction Estimating Costs" links to `../multifamily/index.html`. "Building Materials", "Educational…", "Office…", "Single-Family…" and "High-Rise Construction Estimating Costs" use `href="#"` until real URLs exist.
- The relative cost panel, the ~50 / 33 / 17% hard-cost split and the 8-unit table ($120–$400+ per sq ft, $0.9M–$3.2M+, ~8,000 sq ft) come from the brief's design graphics, not its body copy. They are illustrative and should be confirmed by the writer.
- Brief fix: "Early size decisions the final budget." (missing verb) reads "Early size decisions shape the final budget."
- The brief mixes "labor" and "labour"; both are kept as written.
