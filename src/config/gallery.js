// ─────────────────────────────────────────────────────────────────────────
//  Before / After gallery
//
//  IMPORTANT — REAL JOB PHOTOS REQUIRED BEFORE LAUNCH.
//  Blast Off Cleaning does not use stock or stand-in before/after images.
//  The files referenced below are intentionally ABSENT from the repo. As soon
//  as the business has its first completed jobs, drop the real photos into
//  /public/assets/gallery/ using the filenames below (or edit the paths here)
//  and the slider will pick them up automatically.
//
//  Until then the Results slider renders a clearly-labeled "photos coming
//  soon" placeholder for each slot — no fake imagery is shown.
// ─────────────────────────────────────────────────────────────────────────

// Resolve paths against the deploy base (root or subpath) so images load
// wherever the site is hosted.
const base = import.meta.env.BASE_URL

export const GALLERY = [
  {
    id: 'driveway-1',
    label: 'Driveway',
    before: `${base}assets/gallery/driveway-1-before.jpg`,
    after: `${base}assets/gallery/driveway-1-after.jpg`,
  },
  {
    id: 'patio-1',
    label: 'Patio',
    before: `${base}assets/gallery/patio-1-before.jpg`,
    after: `${base}assets/gallery/patio-1-after.jpg`,
  },
  {
    id: 'deck-1',
    label: 'Deck',
    before: `${base}assets/gallery/deck-1-before.jpg`,
    after: `${base}assets/gallery/deck-1-after.jpg`,
  },
]
