# Landscaping Estimating Costs — static page

Built from the content brief "Landscaping Estimating Costs" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `excavation/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; landscaping-only rules at the end ("Landscaping page additions")
js/main.js            Interactions (same as excavation/js/main.js)
```

## Sections

1. Hero: intro (second paragraph behind Read More), two buttons, and the navy yard-plan card (lawn, pavers, beds measured by square foot).
2. Trust logos and reviews (shared with the other pages).
3. How much does landscaping cost: intro + accordion (price factors, cost calculator steps, prices to include), as in the brief's graphic.
4. Cost factors and project types: cards. The brief's bullet summary shows; Read More reveals the numbered paragraph.
5. Rates and pricing: 3 tabs (hourly rates, cost per square foot, labor rates). Rate tiles use the brief's figures; follow-up questions sit in an accordion.
6. Backyard cost: headline range, text, and an accordion (estimate contents, high-impact features, existing landscaping).
7. About landscaping estimating costs: 3 tabs (information needed, budgeting, review before work).
8. Landscaping estimate preparation: 2 tabs (preparing the estimate, final checks).

## Notes

- Anchor texts (yellow in the brief): "Type of Landscaping Work", "New Construction" and "Backyard Landscaping" use `href="#"` until real URLs exist.
- The brief lists "Backyard Landscaping" twice in the project types (items 3 and 5, with different copy). Both cards are kept as written; the writer may want to rename one.
- The quick tip and the hero card caption come from the brief's design graphics.
