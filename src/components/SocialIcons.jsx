import { INSTAGRAM_URL, FACEBOOK_URL, INSTAGRAM_HANDLE } from '../config/business'

// Small social icons used in the contact section and footer. Links pull from
// the business config — the bracketed values are placeholders until the owner
// fills them in.
const strip = (v) => (v || '').replace(/[[\]]/g, '')

export default function SocialIcons({ className = '', tone = 'dark' }) {
  const color = tone === 'light' ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-ignition'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={strip(INSTAGRAM_URL)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
        className={`transition-colors ${color}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={strip(FACEBOOK_URL)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Facebook"
        className={`transition-colors ${color}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
        </svg>
      </a>
    </div>
  )
}
