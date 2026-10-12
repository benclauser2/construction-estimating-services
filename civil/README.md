# Civil Construction Estimating Costs — static page

Built from the Figma file (Civil page: desktop 1440, tablet 768, mobile 375).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html            Page markup (all copy from the brief lives here)
css/styles.css        Styles, mobile-first, tokens in :root
js/main.js            Interactions (vanilla JS, loaded with defer)
```

Open `index.html` directly, or serve the folder (for example `npx serve .`).

## Breakpoints

| Width        | Layout                                                        |
|--------------|---------------------------------------------------------------|
| < 768px      | Mobile: single column, stacked cards                           |
| 768–1199px   | Tablet: 2-column grids                                        |
| ≥ 1200px     | Desktop: 3/4-column grids, static logo row                    |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it.
  `data-reveal="id"` also shows a hidden element (hero paragraph 2). The button hides itself when the text isn't clamped.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"`. Follows the WAI-ARIA tabs pattern (arrow keys, Home and End keys, roving tabindex).
- **Tooltips**: any element with `data-tooltip="…"`. One shared floating tooltip that opens on hover or focus, toggles on tap, and closes with Escape, on scroll or on an outside click.
- **Trade carousel**: arrow buttons scroll the pill row (`[data-carousel]`).
- **FAQ accordion**: native `<details>`/`<summary>`, so it works without JS.
- **Trust logos**: static centered row matching the home page. Each "i" badge uses the shared tooltip.
- **Calculator form**: validates the selects and dispatches a `calculator:submit` event with the values. Connect it to your backend there.

## Text clamp utilities

`.clamp` plus `.lines-2` to `.lines-6` sets the number of visible lines.
`.clamp-md` clamps only below 1200px (5 lines on mobile, 4 on tablet). It's used for the tab panel paragraphs.

## Notes

- Header, mobile drawer and footer are copied from the home page (same as `commercial/`).
- The header phone ("Add phone number") is a placeholder carried over from the reference site.
- Links marked `href="#"` (anchor-text phrases and legal links) need real URLs.
- Calculator select options are placeholders until the real inputs are defined.

## Industrial page notes

- Hero is a single centered column on tablet/desktop. On mobile the first paragraph clamps to 5 lines and the second paragraph sits behind Read More (`.clamp-sm`, `.hero__more`, `.hero__toggle`).
- The 3 building-type cards show their full text so the anchor texts at the end stay visible.
- Software uses a 5-column grid on desktop (`.grid--5`).
- Copied from the brief as written. These need checking with the writer:
  - The answers to "How accurate are industrial construction estimates?" and "How long does an industrial construction estimate take?" (About tab) are swapped in the brief.
  - The last bullet under "What does an industrial construction estimate include?" is cut off in the brief ("…site work, tem").

## Civil page notes

- Header, mobile drawer and footer are the shared ones from the home page (same markup as the live commercial and industrial pages).
- Hero: two columns (text + topic list card) with a stats row; paragraph 2 sits behind Read More (`.reveal` + `data-reveal`).
- Services: a facts bar (`.facts`) with the 4 service facts and two buttons sits above the cards.
- Cost table rows show their CAT code (`.cost-table__code`).
- Calculator shows the brief's sample values (Project Type, Approx. Area, Region, Estimated Range). The Region list and the range logic are placeholders until the real pricing inputs exist.
- The brief says costs are "grouped into 16 major categories" but lists 15; the page keeps the brief's sentence and the 15 trades.
- Remaining html-validate warnings come from the shared header/footer markup (inline styles, phone number spacing), left as-is so all pages stay identical.
