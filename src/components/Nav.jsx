import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { RocketLockup } from './RocketLogo'
import { smsLink } from '../config/business'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#results', label: 'Results' },
  { href: '#contact', label: 'Contact' },
]

// Sticky nav. Transparent over the navy hero, then solidifies to white with a
// subtle border once the user scrolls past the fold.
export default function Nav() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tone = scrolled ? 'dark' : 'light'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-slate-200 bg-white/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-3 md:px-8"
      >
        <a href="#top" className="shrink-0" aria-label="Blast Off Cleaning — home">
          <RocketLockup tone={tone} />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body font-medium transition-colors hover:text-ignition ${
                scrolled ? 'text-navy-900' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href={smsLink()}
            className="btn-primary text-sm"
            whileHover={reduce ? undefined : { scale: 1.03, boxShadow: '0 8px 30px rgba(255,122,51,0.45)' }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`md:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 font-body font-medium text-navy-900 hover:bg-cloud"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href={smsLink()} className="btn-primary w-full" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
