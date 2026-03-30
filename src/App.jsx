import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-volt focus:text-slate-green focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Skip to main content
      </a>

      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero />
        <Stats />
        <TrustBar />
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
