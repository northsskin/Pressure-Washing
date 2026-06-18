import { motion, useScroll, useSpring } from 'framer-motion'

// The hero rocket's water trail "settles" into this fixed vertical line on the
// left edge of the page. It fills with ignition-orange as the user scrolls —
// the brand's signature visual doing real UI work, not just decoration.
//
// Under prefers-reduced-motion this still fills (it tracks scroll position,
// which isn't "motion for motion's sake") — Framer's useScroll is fine; we
// just skip the spring smoothing so it's a direct, jitter-free mapping.
export default function ScrollProgress({ reducedMotion = false }) {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const scaleY = reducedMotion ? scrollYProgress : smooth

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-screen w-1 bg-slate-200/60"
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top bg-ignition"
        style={{ height: '100%', scaleY }}
      />
    </div>
  )
}
