import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import SocialIcons from './SocialIcons'
import {
  PHONE_NUMBER,
  FORMSPREE_ENDPOINT,
  FORMSPREE_URL,
  smsLink,
} from '../config/business'

const SERVICE_TYPES = ['Driveway', 'Walkway', 'Patio', 'Deck', 'Fence', 'Trash Cans', 'Other']

const labelCls = 'mb-1.5 block font-body text-sm font-medium text-navy-900'
const fieldCls =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-body text-navy-900 placeholder:text-slate-600/60 focus:border-spray'

// Formspree is configured once it has a real ID (not the bracketed placeholder).
const formspreeReady = !/[[\]]/.test(FORMSPREE_ENDPOINT) && FORMSPREE_ENDPOINT.length > 0

export default function Contact() {
  const reduce = useReducedMotion()
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Until Formspree is wired up, hand the lead off to SMS so nothing is lost.
    if (!formspreeReady) {
      const name = data.get('name') || ''
      const service = data.get('service') || ''
      const notes = data.get('notes') || ''
      const body = `Hi, I'd like a quote for pressure washing. Name: ${name}. Service: ${service}. ${notes}`
      window.location.href = smsLink(body)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="section-inner grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-3">Ready for Liftoff?</p>
          <h2 className="text-h2 max-w-md">Get a free quote, usually within the hour.</h2>

          <p className="mt-6 text-slate-600">
            Prefer to text?{' '}
            <a href={smsLink()} className="font-semibold text-spray underline-offset-4 hover:underline">
              {PHONE_NUMBER}
            </a>{' '}
            — photos welcome.
          </p>
          <SocialIcons className="mt-5" />
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'ok' ? (
            <div className="rounded-2xl border border-slate-200 bg-cloud p-8 text-center">
              <p className="font-display text-h3 text-navy-900">Message sent — you&rsquo;re on the launchpad.</p>
              <p className="mt-2 text-slate-600">
                We&rsquo;ll get back to you with a price shortly, usually within the hour.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={fieldCls} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone</label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldCls} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelCls}>
                  Email <span className="font-normal text-slate-600">(optional)</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email" className={fieldCls} />
              </div>

              <div>
                <label htmlFor="service" className={labelCls}>Service Type</label>
                <select id="service" name="service" defaultValue="" className={fieldCls} required>
                  <option value="" disabled>Choose a surface…</option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="notes" className={labelCls}>Notes</label>
                <textarea id="notes" name="notes" rows={4} className={fieldCls} placeholder="Anything we should know about the job?" />
              </div>

              <div>
                <label htmlFor="photo" className={labelCls}>
                  Photo <span className="font-normal text-slate-600">(optional)</span>
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="w-full font-body text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-cloud file:px-4 file:py-2 file:font-body file:text-sm file:font-medium file:text-navy-900"
                />
              </div>

              {status === 'error' && (
                <p className="font-body text-sm text-ignition">
                  Something went wrong sending that. Please text us at {PHONE_NUMBER} instead.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-1 w-full text-base disabled:opacity-70"
                whileHover={reduce ? undefined : { scale: 1.03, boxShadow: '0 8px 30px rgba(255,122,51,0.45)' }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                {status === 'sending' ? 'Sending…' : 'Send It'}
              </motion.button>

              {!formspreeReady && (
                // Dev note (not user-facing copy): see src/config/business.js
                <p className="font-body text-xs text-slate-600">
                  Tip: this form opens your texting app until the Formspree ID is added in the config.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
