# Cost to Build a House in Iowa — blog page

Built from the content brief "Cost to Build a House in Iowa" (HSD content sprint, September 2026), with the same layout and components as the other blog posts (shell copied from `blog/cost-to-build-a-house-in-arkansas/`). Lives in `blog/`, so links to the rest of the site start `../../`.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

This brief uses a different template from the earlier posts: list items are two sentences, steps are sentence case, and most lists have only a "listed below" line instead of an intro paragraph. Where a subheading is followed directly by the "listed below" line, that line picks up the existing `.section-sub + p` centered style, so no CSS changes were needed.

## Sections

1. Hero: "Blog · Iowa cost guide" eyebrow, intro (second paragraph behind Read More), two buttons, and the navy house card (standard ≈ $116 and mid-range ≈ $163 per sq ft).
2. Trust logos and reviews (shared with the other pages).
3. Average cost: lead + 3 tiles ($350,000–$800,000; ≈ $116 and ≈ $163 per sq ft).
4. How to estimate: 8 steps, the information-needed question with 8 cards, accordion (estimating without plans).
5. Estimating services: lead, the estimate-contents question with 8 cards, accordion (sitework and subcontractor costs).
6. Cost calculator: lead, accordion (final building cost).
7. Cost per square foot: lead, 2 tiles ($116–$163; 2,000 sq ft at $163 ≈ $326,000), the factors question with 7 cards, accordion (land costs).
8. 3,000 sq ft homes: lead, 3 tiles (standard ≈ $348,000; builder-grade $525,000–$660,000; custom $660,000–$1,200,000), accordion (fixed cost).
9. Trade-by-trade costs: 12 cards (the brief's two-sentence bullet shows; Read More reveals the numbered paragraph).
10. Cost factors: 4 tabs (main factors, materials and labor, lot and location, home design), each follow-up question in an accordion.
11. Additional costs: 7 cards, then the closing "What Determines the Final Cost" question.

## Notes

- Navigation: fourteenth item in the "Blog" dropdown and the drawer's Blog group (posts are alphabetical by state).
- Anchor texts (yellow in the brief):
  - "construction estimating services" (lowercase, last sentence of the services lead) links to the home page.
  - "residential construction estimate" (lowercase, Other Project Expenses card) links to `../../residential-construction/index.html`.
  - Trade anchors (lowercase, kept as written) link to existing pages where one exists: Plumbing, Roofing, Painting.
  - Structural Steel, Concrete, Masonry, Electrical, HVAC, Mechanical, Drywall, Sitework and Earthwork use `href="#"` until real URLs exist.
- Bracketed figures in the brief are shown without brackets.
- Brief fixes:
  - Home Size factor: "determinesthe" → "determines the".
  - Step 6: "Add permits and utilities:" → period, like the other steps.
  - Missing final periods added (3,000 sq ft lead; Materials and Labor paragraph).
  - Without-plans answer: "assumptions that detailed documents will later be replaced with a measurable scope" → "assumptions that detailed documents later replace with a measurable scope".
- Figures to confirm with the writer: standard/mid-range rates ($116–$163 per sq ft) and the 3,000 sq ft builder-grade ($175–$220) and custom ($220–$400+) rates come from different sources; the $350,000–$800,000 average range also doesn't follow from the $116–$163 rates.
- Permits and Professional Services cards start with sentence fragments ("Regulatory approval for…", "Support planning…"); kept as written.
