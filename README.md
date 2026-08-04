# Dong Feng — Technical Product Manager

Static portfolio and résumé for GitHub Pages. No build step, no framework.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio — hero, proof band, selected products, work history, toolkit, principles |
| `resume.html` | Printable résumé. "Save as PDF" uses the browser print dialog |
| `styles.css` | Portfolio styles + design tokens |
| `resume.css` | Résumé sheet styles, including the print rules |
| `script.js` | Scroll reveal, scroll-progress bar, print trigger (shared by both pages) |
| `404.html` | Unchanged |
| `.nojekyll` | Unchanged |

## Publish

Publishes from `main` at <https://dongfeng2015.github.io/>.

## Exporting the résumé PDF

Open `/resume.html` → **Save as PDF** → in the print dialog choose **Letter**,
**Background graphics on**, margins **Default**. Targets two pages.

## Design notes

- Two typefaces: **Inter** for voice, **IBM Plex Mono** for anything acting as a
  label, index, status, or measurement. Loaded from Google Fonts with system
  fallbacks.
- All text/background pairs verified at **WCAG AA** (lowest measured ratio 5.03:1).
- `prefers-reduced-motion` disables reveals, hover transforms, and smooth scroll.
- Print stylesheet on `index.html` produces a readable document, but `resume.html`
  is the page meant for PDF export.

## Not included on purpose

Phone number is omitted from both public pages — add it to `resume.html`'s
`.contact-block` if you want it on the PDF version you send out.
