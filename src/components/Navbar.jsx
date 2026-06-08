import { useState, useEffect } from 'react'
import { Logo } from '../assets/logo'

const links = [
  { label: 'Vision', href: '#vision' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 sm:px-8 transition-colors ${scrolled ? 'bg-slate-dark/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto h-[96px] flex items-center justify-between">
        <a href="#top" className="text-cream" aria-label="Inargy — go to top">
          <Logo height={40} className="h-8 md:h-10 w-auto text-cream" />
        </a>

        <div className="flex items-center gap-5 sm:gap-10 md:gap-14">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/70 text-[13px] sm:text-sm font-medium tracking-wide hover:text-volt transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
