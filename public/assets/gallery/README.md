# Before / After job photos go here

These files are intentionally **absent**. Blast Off Cleaning does not use stock
or stand-in before/after images — only real job photos.

The Results slider (`src/config/gallery.js`) is already wired to these paths.
As soon as you have real photos, drop them in with these exact filenames and
the slider will show them automatically:

```
driveway-1-before.jpg   driveway-1-after.jpg
patio-1-before.jpg      patio-1-after.jpg
deck-1-before.jpg       deck-1-after.jpg
```

Tips:
- Shoot before/after from the same spot, same framing.
- Export at ~1600px on the long edge; WebP or optimized JPG keeps the page fast.
- Add more pairs by editing `src/config/gallery.js`.

Until these exist, each slot shows a clearly labeled "Real job photo coming
soon" placeholder — no fake imagery is ever displayed.
