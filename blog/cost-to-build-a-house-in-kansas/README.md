# Cost to Build a House in Kansas — blog page

Built from the content brief "Cost to Build a House in Kansas" (HSD content sprint, September 2026), with the same layout and components as the other blog posts (shell copied from `blog/cost-to-build-a-house-in-arkansas/`; the brief follows the same template as the Idaho post). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Sections

1. Hero: "Blog · Kansas cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy house card (statewide $150–$350 and standard build $175–$225 per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead + 2 tiles ($180,000–$450,000; ≈ $312,000 for 2,000 sq ft at $156).
4. How to estimate: 9 steps, the information-needed question with 8 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 7 cards, closing sentence as `.after-note`, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, accordion (final building cost).
7. Cost per square foot: lead, 2 tiles ($150–$350; $175–$225 standard build), the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, 2 tiles (lower end $450,000; upper end $1,050,000), accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (bullet summary shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design), each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question.

## Notes

- Navigation: fifteenth item in the "Blog" dropdown and the drawer's Blog group (posts are alphabetical by state).
- Anchor texts (yellow in the brief):
  - "Construction Estimating Services" links to the home page.
  - "Residential Construction Estimate" (closing sentence after the estimate-contents list) links to `../../residential-construction/index.html`.
  - Trade anchors link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- Bracketed figures in the brief are shown without brackets (including "$[110] to $[160]" in the calculator lead).
- 3,000 sq ft tiles split the brief's $450,000–$1,050,000 range into its two ends, using the brief's own region and finish examples.
- Brief fixes:
  - Construction Specifications card: "…story count, and shape engineering needs" → "…story count, shape engineering needs".
  - Labor factor: "Regional wage differences and labor portion the per-square-foot figure" → "Regional wage differences affect the labor portion of the per-square-foot figure".
  - Calculator lead: quotation marks around "cost to build a house calculator" dropped.
- For the writer:
  - Rates don't line up: the average uses $156 per sq ft, the standard build is $175–$225, and the calculator base is $110–$160.
  - The per-square-foot lead says rural counties post higher rates than the metro corridors, while the factors tab says Kansas City and Wichita command higher labor pay.
  - "Labor: Costs are costed by hour…" in the estimate-contents list kept as written.
