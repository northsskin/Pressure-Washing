import { useReducedMotion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const reduce = useReducedMotion()
  return (
    <>
      {/* The hero rocket's trail "settles" into this fixed left-edge progress bar. */}
      <ScrollProgress reducedMotion={!!reduce} />
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
