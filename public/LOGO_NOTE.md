# Logo assets

The client's real logo is in place: **`/public/logo.png`** (full lockup, navy
rocket with water-spray trail + "BLAST OFF / CLEANING"). It's used for the
Open Graph / social-share preview in `index.html`.

The on-page mark is derived from that file so it can be tone-adaptive and
animated:

- **`rocket-navy.png`** / **`rocket-white.png`** — the rocket mark with its
  background removed, in navy (for light surfaces) and white (for dark navy
  surfaces). Used in the nav, footer, and the hero launch animation.
- **`favicon.png`** — square browser-tab icon, cropped from the same mark.

These derived files were generated from `logo.png`. If the logo is ever
replaced, regenerate them (background-key + recolor + crop) or hand-export
equivalents at similar dimensions — no code changes needed as long as the
filenames stay the same.
