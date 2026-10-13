# Plumbing Estimating Costs — static page

Built from the content brief "Plumbing Estimating Costs" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `apartment-building/`).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; page-only rules at the end ("Plumbing page additions")
js/main.js            Interactions (same as apartment-building/js/main.js)
```

## Sections

1. Hero: intro (second paragraph behind Read More), two buttons, and the navy riser-diagram card (supply, drain, vent, fixtures). The card caption paraphrases the brief's hero graphic.
2. Trust logos and reviews (shared with the other pages).
3. How do you estimate plumbing costs: 7 steps, the factors question with 4 cards, accordion (material quantities).
4. Repair cost calculator: lead, 5 steps, accordion (labor costs).
5. Related trade estimates: 5 cards (bullet summary shows; Read More reveals the numbered paragraph).
6. Installation cost calculator: 5 steps, the costs-to-include question with 4 cards, accordion (fixture costs).
7. Plumbing rates: 4 cards + accordion (labor price list steps, rate variation).
8. Service cost: 6 steps, average cost with 2 rate tiles ($175–$450 per job, $45–$200 per hour), accordion.
9. New construction: 6 steps, commercial cost per square foot with a rate tile ($4–$16 per sq ft), accordion.
10. Project cost: 7 steps + accordion (costs to include, material and labor changes).
11. Online estimates: lead, 4 steps, accordion (accuracy).
12. About plumbing estimating costs: 3 tabs (information needed, project budgeting, review before work).
13. Plumbing estimate preparation: 2 tabs (detailed estimate, final checks).

## Notes

- Anchor texts (yellow in the brief): "roofing estimating costs" links to `../roofing/index.html`, "excavation estimating costs" to `../excavation/index.html`, and "construction estimating costs" to the home page. "electrical estimating costs", "mechanical estimating costs" and "Installation Estimate" use `href="#"` until real URLs exist.
- Bracketed figures in the brief ([$50 to $100], [$175 to $450], [$45 to $200], [$4 to $16]) are shown without brackets.
- Brief fix: "Labor isthe largest variable" reads "Labor is the largest variable".
