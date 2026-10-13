# Cost to Build a House in Alabama — blog page

Built from the content brief "Cost to Build a House in Alabama" (HSD content sprint, September 2026), using the components of the other subpages (shell copied from `plumbing/`). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Shared subpage styles; page-only rules at the end ("Alabama blog page additions")
js/main.js            Interactions (same as plumbing/js/main.js)
```

## Sections

1. Hero: "Blog · Alabama cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy house-elevation card ($230K–$330K for 2,000 sq ft, $115–$165 per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead + rate tile.
4. How to estimate: 8 steps, the information-needed question with 8 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 8 cards, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, follow-up paragraph, accordion (final building cost).
7. Cost per square foot: lead, 3 rate tiles, the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, 2 rate tiles, accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (bullet summary shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design), each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question.

## Notes

- Navigation: listed under the separate "Blog" dropdown in the header and the Blog group in the mobile drawer (not under Services).
- Anchor texts (yellow in the brief):
  - "Construction Estimating Services" links to the home page.
  - "Residential Construction Estimate" and "Residential Construction Estimating Costs" link to `../../residential-construction/index.html`.
  - Trade anchors link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- The brief highlights the heading "Can a House Construction Cost Calculator Provide a Final Building Cost?" in yellow with no link text. It is kept as a plain accordion question; confirm whether it should link somewhere.
- The brief repeats three blocks (estimate contents, sitework/subcontractor question, calculator question). Each appears once on the page:
  - Estimate contents: first intro (with its anchor) plus the second list (whose last item carries the second anchor).
  - Sitework/subcontractor question: first answer.
  - Calculator question: first answer.
- Bracketed figures in the brief are shown without brackets.
- Brief fixes:
  - "The factors depend on Home size, materials, …" reads "Home size, materials, … directly affect the cost per square foot."
  - "Specialty fixtures, higher electrical capacity increase material, and installation requirements." reads "Specialty fixtures and higher electrical capacity increase material and installation requirements."
  - "Brick, concrete block, stone, mortar, reinforcement, related components" gains "and".
  - "depend on surface area, finishing requirements" reads "depend on surface area and finishing requirements".
- The 3,000 sq ft section cites HomeGuide as in the brief; the writer should confirm the source figures.
