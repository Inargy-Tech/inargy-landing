import { useState, useEffect, useRef } from 'react'
import { Button } from '@heroui/react'
import { Menu, X } from 'lucide-react'
import { Logo, BrandMark } from '../assets/logo'
import { WHATSAPP_URL } from '../config'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all border-b border-volt/10 ${
        scrolled
          ? 'bg-slate-green/95 backdrop-blur-xl shadow-lg shadow-black/15'
          : 'bg-slate-green/95 backdrop-blur-xl'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <a href="#home" className="text-white" aria-label="Inargy — go to homepage">
          <Logo height={40} className="hidden sm:block text-white" />
          <BrandMark size={44} className="sm:hidden text-white" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 text-sm font-medium hover:text-volt transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-volt text-slate-green font-bold rounded-full px-6 min-h-[44px] hover:shadow-lg hover:shadow-volt/30 hover:-translate-y-0.5 transition-all"
            size="md"
          >
            Get Started
          </Button>
        </div>

        <button
          ref={toggleRef}
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        inert={!menuOpen || undefined}
        className={`lg:hidden border-t border-volt/10 overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out grid ${
          menuOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-4 bg-slate-green min-h-[calc(100dvh-80px)]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 text-base font-medium py-2.5 hover:text-volt transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-volt text-slate-green font-bold rounded-full min-h-[48px] hover:shadow-lg hover:shadow-volt/30 transition-all w-full"
              size="md"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
