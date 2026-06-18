import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { RocketIcon } from './RocketLogo'
import { smsLink } from '../config/business'

const ease = [0.22, 1, 0.36, 1]

// Hero — the site's one big "boldness budget" moment.
//
// On load the rocket rests near the bottom; after a short beat it launches up
// a gently curved path, drawing its water-spray trail (animated SVG pathLength)
// with a few droplets breaking off. As it exits the top, the trail hands off
// to the fixed left-edge ScrollProgress bar (rendered in App).
//
// prefers-reduced-motion: no launch, no particles — the rocket sits statically
// and the hero copy simply fades in.
export default function Hero() {
  const reduce = useReducedMotion()
  const [launchDistance, setLaunchDistance] = useState(1000)

  useEffect(() => {
    // Distance the rocket travels: enough to fully clear the top of the screen.
    setLaunchDistance(window.innerHeight * 1.25)
  }, [])

  const content = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: reduce ? 0 : 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 80% at 50% 8%, #16365C 0%, #0B1F3A 55%, #07172B 100%)',
      }}
    >
      {/* Star-field + horizon glow — only the hero gets this treatment. */}
      <StarField reduce={reduce} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            'radial-gradient(80% 70% at 50% 120%, rgba(74,144,217,0.35) 0%, rgba(74,144,217,0) 70%)',
        }}
      />

      {/* Launch trail + rocket layer (decorative) */}
      {!reduce && <LaunchLayer launchDistance={launchDistance} />}

      {/* Static resting rocket for reduced-motion users */}
      {reduce && (
        <RocketIcon
          className="pointer-events-none absolute bottom-10 left-1/2 h-24 w-auto -translate-x-1/2 opacity-90"
          aria-hidden="true"
        />
      )}

      {/* Hero copy */}
      <motion.div
        className="section-inner relative z-10 px-5 md:px-8"
        variants={content}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-2xl">
          <motion.p variants={item} className="eyebrow mb-5 text-spray">
            Now Booking — Fall Season
          </motion.p>
          <motion.h1 variants={item} className="text-h1 text-white">
            Liftoff for your driveway.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-white/80"
            style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
          >
            Blast Off Cleaning is a local pressure washing service for driveways, patios,
            decks, walkways, and fences. We bring the equipment — you bring the water spigot —
            and an hour later it looks brand new.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href={smsLink()}
              className="btn-primary text-base"
              whileHover={reduce ? undefined : { scale: 1.03, boxShadow: '0 8px 30px rgba(255,122,51,0.45)' }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Get a Free Quote
            </motion.a>
            <a
              href="#results"
              className="font-body font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
            >
              See the difference ↓
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Drawn water-spray trail + the rising rocket, coordinated on one timeline.
function LaunchLayer({ launchDistance }) {
  const liftStart = 0.6 // seconds at rest before launch
  const riseDuration = 2.0

  return (
    <>
      {/* The trail: a curved line that draws upward as the rocket climbs.
          viewBox is normalized 0–100 with a non-scaling stroke so it stays a
          clean hairline at any screen size. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M50 100 C 47 78, 41 60, 38 44 S 33 14, 30 -5"
          fill="none"
          stroke="#4A90D9"
          strokeWidth="0.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0.9 }}
          animate={{ pathLength: 1, opacity: [0.9, 0.9, 0.5] }}
          transition={{
            pathLength: { delay: liftStart, duration: riseDuration, ease: 'easeIn' },
            opacity: { delay: liftStart, duration: riseDuration + 0.6 },
          }}
        />
      </svg>

      {/* The rocket: rests, then rises along a gentle left-drifting curve and
          exits the top of the viewport. */}
      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 z-[5]"
        style={{ x: '-50%' }}
        initial={{ y: 0, x: '-50%', rotate: 0 }}
        animate={{
          y: [0, 6, -launchDistance],
          x: ['-50%', '-50%', '-120%'],
          rotate: [0, 0, -10],
        }}
        transition={{
          delay: liftStart - 0.4,
          duration: riseDuration + 0.4,
          times: [0, 0.18, 1],
          ease: ['easeInOut', 'easeIn'],
        }}
      >
        <RocketIcon className="h-24 w-auto drop-shadow-[0_0_24px_rgba(74,144,217,0.5)]" aria-hidden="true" />
      </motion.div>

      {/* Droplets breaking off the trail and fading as the rocket climbs. */}
      {DROPLETS.map((d, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute bottom-16 left-1/2 block rounded-full bg-spray"
          style={{ width: d.size, height: d.size }}
          initial={{ opacity: 0, x: '-50%', y: 0 }}
          animate={{ opacity: [0, 0.9, 0], x: d.x, y: d.y }}
          transition={{
            delay: liftStart + d.delay,
            duration: 1.4,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  )
}

const DROPLETS = [
  { size: 8, x: '-160%', y: -120, delay: 0.1 },
  { size: 6, x: '60%', y: -180, delay: 0.25 },
  { size: 10, x: '-260%', y: -240, delay: 0.4 },
  { size: 5, x: '120%', y: -300, delay: 0.55 },
  { size: 7, x: '-360%', y: -360, delay: 0.7 },
]

// Faint star-field rendered once. Static dots (twinkle is skipped for
// reduced-motion via the global CSS rule + no animation here when reduced).
function StarField({ reduce }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.base }}
          animate={reduce ? undefined : { opacity: [s.base, s.base + 0.35, s.base] }}
          transition={reduce ? undefined : { duration: s.dur, repeat: Infinity, delay: s.delay }}
        />
      ))}
    </div>
  )
}

// Deterministic scattered stars (kept sparse so the hero reads as night sky,
// not noise).
const STARS = Array.from({ length: 36 }, (_, i) => {
  const r = (n) => ((Math.sin(i * 9301 + n * 49297) * 233280) % 1 + 1) % 1
  return {
    left: `${(r(1) * 100).toFixed(2)}%`,
    top: `${(r(2) * 70).toFixed(2)}%`,
    size: `${(r(3) * 2 + 1).toFixed(1)}px`,
    base: 0.3 + r(4) * 0.4,
    dur: 2 + r(5) * 3,
    delay: r(6) * 3,
  }
})
