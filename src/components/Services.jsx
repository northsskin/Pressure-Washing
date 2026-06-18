import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, RevealItem } from './Reveal'
import {
  DrivewayIcon,
  WalkwayIcon,
  PatioIcon,
  DeckIcon,
  FenceIcon,
  TrashCanIcon,
} from './ServiceIcons'

const SERVICES = [
  {
    Icon: DrivewayIcon,
    name: 'Driveways',
    desc: 'Oil stains, tire marks, and years of buildup, lifted in under an hour.',
    price: '$60–$150 depending on size',
  },
  {
    Icon: WalkwayIcon,
    name: 'Walkways & Steps',
    desc: 'The first thing your guests see, finally moss- and grime-free.',
    price: 'From $30',
  },
  {
    Icon: PatioIcon,
    name: 'Patios',
    desc: 'Bring back the surface you actually want to sit on.',
    price: '$60–$100',
  },
  {
    Icon: DeckIcon,
    name: 'Decks',
    desc: 'Wood or composite, cleaned carefully without damaging the finish.',
    price: '$75–$150',
  },
  {
    Icon: FenceIcon,
    name: 'Fences',
    desc: 'Strip away mildew and gray buildup, panel by panel.',
    price: '$1–$2 per linear foot',
  },
  {
    Icon: TrashCanIcon,
    name: 'Trash Cans',
    desc: 'Because nobody wants to open a bin that smells like last August.',
    price: '$10–$15 each',
  },
]

export default function Services() {
  const reduce = useReducedMotion()
  return (
    <section id="services" className="section bg-white">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">What We Clean</p>
          <h2 className="text-h2 max-w-2xl">Pick your surface. We&rsquo;ll handle the rest.</h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, name, desc, price }) => (
            <RevealItem key={name}>
              <motion.article
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-cloud p-7 shadow-card"
                whileHover={reduce ? undefined : { y: -4, boxShadow: '0 8px 28px rgba(11,31,58,0.12)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-spray" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="text-h3 mt-5">{name}</h3>
                <p className="mt-2 flex-1 text-slate-600">{desc}</p>
                <p className="mt-5 font-mono text-sm font-medium text-navy-900">{price}</p>
              </motion.article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
