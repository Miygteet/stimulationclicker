import Hero from '../components/Hero'
import About from '../components/About'
import HowToPlay from '../components/HowToPlay'
import Features from '../components/Features'
import OverstimulationElements from '../components/OverstimulationElements'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowToPlay />
      <Features />
      <OverstimulationElements />
      <Testimonials />
      <FAQ />
    </main>
  )
}

