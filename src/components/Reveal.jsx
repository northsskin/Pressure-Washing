import { motion } from 'framer-motion'

// Restrained scroll reveal: fade + 16px slide up as the element enters view.
// Used everywhere except the hero so the page has gentle rhythm without
// constant motion. Children can be staggered via <Reveal stagger> + <RevealItem>.
//
// Framer Motion automatically disables these transforms when the user has
// prefers-reduced-motion set, as long as we use whileInView/animate variants.

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, className = '', delay = 0, stagger = false, as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={
        stagger
          ? { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }
          : {
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease, delay } },
            }
      }
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
    >
      {children}
    </Tag>
  )
}
