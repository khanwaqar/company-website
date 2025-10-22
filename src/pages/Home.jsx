import Hero from '../sections/HeroSection'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CTASection />
      <Contact />
    </main>
  )
}