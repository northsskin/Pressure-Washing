import { Reveal, RevealItem } from './Reveal'

const POINTS = [
  {
    title: 'You talk to the person doing the work.',
    desc: 'No call center, no subcontractors — just direct texts and calls with the person actually cleaning your property.',
  },
  {
    title: 'Pricing before we start.',
    desc: 'You’ll know the price upfront. No surprise add-ons once the job is done.',
  },
  {
    title: 'Flexible scheduling.',
    desc: 'Evening and weekend appointments built around your week, not ours.',
  },
  {
    title: 'We don’t leave until you’re happy.',
    desc: 'If something’s not right, tell us before we pack up and we’ll fix it on the spot.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="section bg-white">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">Why Blast Off</p>
          <h2 className="text-h2 max-w-2xl">A new local business, run the right way.</h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {POINTS.map((p) => (
            <RevealItem key={p.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-spray/15 text-spray"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <h3 className="text-h3">{p.title}</h3>
                <p className="mt-1.5 text-slate-600">{p.desc}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
