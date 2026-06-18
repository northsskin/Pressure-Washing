import { Reveal, RevealItem } from './Reveal'

const STEPS = [
  {
    marker: 'T-Minus 3',
    title: 'Send a Photo, Get a Price.',
    desc: 'Text a photo of the area and we’ll send back a flat price, usually within the hour. No in-person estimate needed for most jobs.',
  },
  {
    marker: 'T-Minus 2',
    title: 'We Show Up and Clean.',
    desc: 'We bring the pressure washer, surface cleaner, and everything else. All we need from you is access to an outside spigot.',
  },
  {
    marker: 'Liftoff',
    title: 'You Get the Reveal.',
    desc: 'Stains, moss, and grime are gone. We walk the area with you before we leave to make sure you’re happy.',
    liftoff: true,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-cloud">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">The Process</p>
          <h2 className="text-h2 max-w-2xl">Three steps to liftoff.</h2>
        </Reveal>

        <Reveal stagger className="mt-12">
          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {/* Connecting launch rail (desktop) */}
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 md:block"
            />
            {STEPS.map((s, i) => (
              <RevealItem key={s.marker} as="li" className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full font-mono text-sm font-bold ${
                      s.liftoff
                        ? 'bg-ignition text-white'
                        : 'border border-slate-200 bg-white text-navy-900'
                    }`}
                  >
                    {s.liftoff ? '▲' : i + 1}
                  </span>
                  <span
                    className={`font-mono text-sm uppercase tracking-label ${
                      s.liftoff ? 'text-ignition' : 'text-spray'
                    }`}
                  >
                    {s.marker}
                  </span>
                </div>
                <h3 className="text-h3 mt-5">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </RevealItem>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
