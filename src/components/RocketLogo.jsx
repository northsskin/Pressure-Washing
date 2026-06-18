// Brand lockup, built from the real logo art.
//
// The client's logo (/public/logo.png) is a vertically-stacked lockup, which
// reads small in a horizontal nav — so on-page we pair the authentic rocket
// mark (cropped + background-removed from that file into /public/rocket-*.png)
// with an HTML wordmark. This keeps the real art as the source of truth while
// staying legible at nav sizes and tone-adaptive over light/dark surfaces.

// The rocket mark on its own. `tone="light"` uses the white-recolored mark for
// dark (navy) surfaces; `tone="dark"` uses the original navy mark. Also reused
// as the hero's launching rocket.
export function RocketMark({ tone = 'dark', className = '', alt = 'Blast Off Cleaning rocket', ...props }) {
  const src = tone === 'light' ? '/rocket-white.png' : '/rocket-navy.png'
  return <img src={src} alt={alt} className={className} {...props} />
}

// Full lockup: rocket mark + "BLAST OFF" / "CLEANING" wordmark. Used in the nav
// and footer; `tone` switches colors for light vs. dark surfaces.
export function RocketLockup({ className = '', tone = 'dark' }) {
  const blastColor = tone === 'light' ? '#FFFFFF' : '#0B1F3A'
  const subColor = tone === 'light' ? '#4A90D9' : '#5B6B7F'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <RocketMark tone={tone} alt="" aria-hidden="true" className="h-10 w-auto shrink-0" />
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
