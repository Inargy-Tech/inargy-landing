import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Products from './components/Products'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
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
        <Vision />
        <Products />
      </main>

      <Footer />
    </>
  )
}
