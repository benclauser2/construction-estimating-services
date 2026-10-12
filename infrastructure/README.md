# Infrastructure Construction Estimating Costs — static page

Built from the Figma file (Infrastructure page: desktop 1440, tablet 768, mobile 375).
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
| < 768px      | Mobile: single column, stacked cards, trust logos 2 per row   |
| 768–1199px   | Tablet: 2-column grids, trust logos 4 + 2                     |
| ≥ 1200px     | Desktop: 3/4/5-column grids, trust logos in one row           |
| > 1250px     | Full header nav (below this, the menu button opens a drawer)  |

## Interactions (js/main.js)

- **Read More**: any `button[data-read-more]` expands the `.clamp` text right before it. The button hides itself when the text isn't clamped.
- **Tabs**: any `[data-tabs]` wrapper with a `role="tablist"`. Follows the WAI-ARIA tabs pattern (arrow keys, Home and End keys, roving tabindex).
- **Tooltips**: any element with `data-tooltip="…"` (cost factors and trade tabs). One shared floating tooltip that opens on hover or focus, toggles on tap, and closes with Escape, on scroll or on an outside click.
- **Trust logo tooltips**: CSS only, same as the live site. Hover or keyboard focus turns a logo navy and shows "Trusted by teams at …" above it. The logos are inline SVGs.
- **Reviews carousel**: arrow buttons and keyboard arrows scroll one card at a time (`initReviews()`).
- **Trade carousel**: arrow buttons scroll the pill row (`[data-carousel]`).
- **FAQ accordion**: native `<details>`/`<summary>`, so it works without JS.
- **Calculator form**: validates the selects and dispatches a `calculator:submit` event with the values. Connect it to your backend there.

## Text clamp utilities

`.clamp` plus `.lines-2` to `.lines-6` sets the number of visible lines.
`.clamp-md` clamps only below 1200px (5 lines on mobile, 4 on tablet). It's used for the hero paragraph and the tab panel paragraphs.

## Infrastructure page notes

- Header, mobile drawer and footer are the shared ones from the home page.
- Hero: one paragraph, two buttons ("Get an Infrastructure Estimate", "See what's covered ↓") and the "What this page covers / 06 SECTIONS" topic card.
- Process cards show the short step text from the brief, then the longer detail behind Read More.
- Cost factors: 11 tiles in a 4 + 4 + 3 grid on desktop (`.factors--11`), 2 columns on tablet, 1 on mobile.
- Trades: 14 tabs (Structural Steel through Landscaping, including Drainage, Roadwork and Paving).
- Software: 5 cards (`.grid--5`).
- Cost categories (6) come from the breakdown paragraph. The formula rows come from the "How are costs calculated" paragraph.
- Calculator dropdowns (Project type, Size, Location) have no options yet. Add them when the pricing inputs are ready.
- Anchor links and legal links use `href="#"` until real URLs exist.
- The header phone ("Add phone number") is a placeholder carried over from the reference site.
- Strikethrough text from the brief has not been removed yet. The shared PDF had no strikethrough in it.
