// RocketLogo — the brand's visual source of truth.
//
// The client will drop a real /public/logo.png (full lockup) in for sharing
// and any raster needs, but the on-page mark is this inline SVG so it stays
// crisp at any size and can be animated in the hero. The concept is straight
// from the brief: a navy rocket whose exhaust is a water spray, not fire.

// Just the rocket glyph — reused in the nav, footer, hero launch sequence,
// and favicon. No text. Sized by the parent via width/height/className.
export function RocketIcon({ className = '', title = 'Blast Off Cleaning rocket', ...props }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      {/* Fins */}
      <path
        d="M22 44c-6 2-10 7-11 14 5-1 9-3 12-6z"
        fill="#16365C"
      />
      <path
        d="M42 44c6 2 10 7 11 14-5-1-9-3-12-6z"
        fill="#16365C"
      />
      {/* Body */}
      <path
        d="M32 4c8 6 13 16 13 28 0 6-1 11-3 16H22c-2-5-3-10-3-16C19 20 24 10 32 4z"
        fill="#0B1F3A"
      />
      {/* Window — spray-blue water accent */}
      <circle cx="32" cy="27" r="6.5" fill="#4A90D9" />
      <circle cx="32" cy="27" r="3" fill="#F6F8FB" />
      {/* Body seam highlight */}
      <path
        d="M32 4c-4 3-7 7-9 12 2 1 4 2 9 2s7-1 9-2c-2-5-5-9-9-12z"
        fill="#16365C"
      />
      {/* Water-spray exhaust — droplets instead of fire */}
      <g fill="#4A90D9">
        <path d="M28 50c-1 3-3 5-3 8s2 4 3 2c1-2 1-7 0-10z" />
        <path d="M36 50c1 3 3 5 3 8s-2 4-3 2c-1-2-1-7 0-10z" opacity="0.85" />
        <circle cx="32" cy="58" r="2.4" />
        <circle cx="25" cy="66" r="1.8" opacity="0.8" />
        <circle cx="39" cy="66" r="1.8" opacity="0.8" />
        <circle cx="32" cy="70" r="1.4" opacity="0.6" />
        <circle cx="30" cy="76" r="1" opacity="0.4" />
        <circle cx="35" cy="74" r="1.1" opacity="0.5" />
      </g>
    </svg>
  )
}

// Full lockup: rocket + "BLAST OFF" / "CLEANING" wordmark. Used in the nav and
// footer. `tone` switches text color for light vs. dark (navy hero/footer)
// surfaces.
export function RocketLockup({ className = '', tone = 'dark' }) {
  const blastColor = tone === 'light' ? '#FFFFFF' : '#0B1F3A'
  const subColor = tone === 'light' ? '#4A90D9' : '#5B6B7F'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <RocketIcon className="h-9 w-auto shrink-0" title="Blast Off Cleaning" aria-hidden="false" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tightest"
          style={{ color: blastColor, fontSize: '1.15rem', lineHeight: 1 }}
        >
          BLAST OFF
        </span>
        <span
          className="font-mono uppercase"
          style={{ color: subColor, fontSize: '0.62rem', letterSpacing: '0.34em' }}
        >
          Cleaning
        </span>
      </span>
    </span>
  )
}
