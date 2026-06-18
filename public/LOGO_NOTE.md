# Logo assets

The site renders the rocket mark as an inline SVG (`src/components/RocketLogo.jsx`)
so it stays crisp and can be animated in the hero. For sharing/raster needs:

- **`/public/logo.png`** — drop the real full-lockup PNG (navy rocket + "BLAST
  OFF" / "CLEANING", transparent background) here. It's referenced by the
  Open Graph / social-share meta tags in `index.html`. Until it's added,
  `logo.svg` is the on-disk fallback.
- **`/public/favicon.png`** — optional square icon-only crop. A vector
  `favicon.svg` is already in place and used first; add the PNG only if you
  need raster fallback for older browsers.

Replacing these two files requires no code changes.
