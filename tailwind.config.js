/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // We intentionally do NOT spread Tailwind's default palette here.
    // Every color used on the site must map to a named brand token below —
    // no default Tailwind blue/gray anywhere.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navy: {
        900: '#0B1F3A', // primary brand color (text, nav, buttons, headlines)
        700: '#16365C', // secondary navy for gradients/depth
      },
      spray: '#4A90D9', // water/motion accent (trail particles, icons, links)
      cloud: '#F6F8FB', // off-white background for alternating sections
      white: '#FFFFFF',
      ignition: '#FF7A33', // the ONE warm accent — primary CTAs + a micro-highlight or two
      slate: {
        600: '#5B6B7F', // body text on light backgrounds
        200: '#E2E8F0', // borders, dividers
      },
    },
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        body: ['"General Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Type scale — mobile values are the defaults; desktop overrides live in CSS utilities.
        'h1-mobile': ['2.75rem', { lineHeight: '1.05', fontWeight: '600' }],
        'h1-desktop': ['4.5rem', { lineHeight: '1.05', fontWeight: '600' }],
        'h2-mobile': ['2rem', { lineHeight: '1.1', fontWeight: '600' }],
        'h2-desktop': ['2.75rem', { lineHeight: '1.1', fontWeight: '600' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3-desktop': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
      },
      letterSpacing: {
        tightest: '-0.02em',
        label: '0.08em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 31, 58, 0.04), 0 4px 12px rgba(11, 31, 58, 0.06)',
        'card-hover': '0 8px 28px rgba(11, 31, 58, 0.12)',
        glow: '0 8px 30px rgba(255, 122, 51, 0.45)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
