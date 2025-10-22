import Hero from '../sections/HeroSection'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'
import CTASection from '../components/CTASection'
import Team from '../sections/Team'
import Testimonials from '../sections/Testimonials'
import Process from '../sections/Process'
import Insights from '../sections/Blog'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Insights />
      <Process />
      <Testimonials />
      <CTASection />
      <Contact />
    </main>
  )
}