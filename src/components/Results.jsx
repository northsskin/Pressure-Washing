import { useState } from 'react'
import { Reveal } from './Reveal'
import BeforeAfterSlider from './BeforeAfterSlider'
import { GALLERY } from '../config/gallery'

export default function Results() {
  const [active, setActive] = useState(0)
  const item = GALLERY[active]

  return (
    <section id="results" className="section bg-cloud">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">See It For Yourself</p>
          <h2 className="text-h2 max-w-2xl">Before &amp; after.</h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Drag the slider to compare. Photos are from real jobs — we&rsquo;ll be adding
            the first ones here as soon as the work&rsquo;s done.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {/* Tabs to switch between the wired-up gallery slots */}
          <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Choose a job to compare">
            {GALLERY.map((g, i) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                  i === active
                    ? 'bg-navy-900 text-white'
                    : 'border border-slate-200 bg-white text-navy-900 hover:border-spray'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <BeforeAfterSlider before={item.before} after={item.after} label={item.label} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
