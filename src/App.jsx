import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TrustBar from './components/TrustBar'
import BackToTop from './components/BackToTop'
import { FAQS } from './config'

const About = lazy(() => import('./components/About'))
const Features = lazy(() => import('./components/Features'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const CtaBanner = lazy(() => import('./components/CtaBanner'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function FaqJsonLd() {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-jsonld'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => document.getElementById('faq-jsonld')?.remove()
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-volt focus:text-slate-green focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Skip to main content
      </a>

      <FaqJsonLd />

      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero />
        <Stats />
        <TrustBar />
        <Suspense fallback={null}>
          <About />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CtaBanner />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <BackToTop />
    </>
  )
}
