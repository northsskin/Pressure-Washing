// ─────────────────────────────────────────────────────────────────────────
//  BLAST OFF CLEANING — business config
//
//  This is the ONE place to edit business-specific values. Everything below
//  is imported throughout the site, so the owner never has to hunt through
//  components to change a phone number or town.
//
//  The bracketed values are deliberate placeholders — replace the text
//  *inside* the brackets (and drop the brackets) with the real values before
//  launch. These are the only placeholders allowed anywhere in the project.
// ─────────────────────────────────────────────────────────────────────────

// Digits only is fine for display; the tel:/sms: links are normalized below.
export const PHONE_NUMBER = '[914-640-9773]'

// Town / region shown in the footer and hero copy.
export const SERVICE_AREA = '[Scarsdale]'

// Social — handle is shown to users; the URL is what the icon links to.
export const INSTAGRAM_HANDLE = '[@blastoffcleaning]'
export const INSTAGRAM_URL = '[https://instagram.com/blastoffcleaning]'
export const FACEBOOK_URL = '[https://facebook.com/blastoffcleaning]'

// Formspree (https://formspree.io) — create a free form and paste the form ID
// here, e.g. "xeqyabcd". The contact form POSTs to https://formspree.io/f/<id>.
// Until this is filled in, the form falls back to an sms: handoff so no lead
// is ever lost.
export const FORMSPREE_ENDPOINT = '[your-formspree-id]'

// Used in the footer copyright line.
export const CURRENT_YEAR = '[2026]'

// ── Derived helpers ────────────────────────────────────────────────────────

// Strip brackets/spaces/dashes so tel: and sms: links are always valid even
// while the value is still a placeholder.
const digits = (val) => (val || '').replace(/[^\d+]/g, '')

export const PHONE_DIGITS = digits(PHONE_NUMBER)

// Pre-filled text the hero CTA and "text us" links open the messaging app with.
export const QUOTE_SMS_BODY =
  "Hi, I'd like a quote for pressure washing at "

// Build an sms: deep link with a pre-filled body. The `?&body=` form is the
// most broadly compatible across iOS and Android.
export const smsLink = (body = QUOTE_SMS_BODY) =>
  `sms:${PHONE_DIGITS}?&body=${encodeURIComponent(body)}`

export const telLink = () => `tel:${PHONE_DIGITS}`

export const FORMSPREE_URL = `https://formspree.io/f/${(FORMSPREE_ENDPOINT || '').replace(/[[\]]/g, '')}`
