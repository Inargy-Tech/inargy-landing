import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../assets/logo'
import { CONTACT, SOCIAL } from '../config'

const socials = [
  {
    name: 'X',
    href: SOCIAL.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: SOCIAL.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: SOCIAL.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="px-6 sm:px-8 pb-12">
      <div className="max-w-[1280px] mx-auto border-t border-cream/10 pt-12">
        {/* Contact prompt */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pb-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2px] text-volt mb-4">
              Get in touch
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-display font-medium tracking-[-0.02em] text-cream hover:text-volt transition-colors"
            >
              {CONTACT.email}
              <ArrowUpRight
                size={22}
                className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Inargy on ${s.name}`}
                className="w-11 h-11 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-volt hover:border-volt/30 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/55">
          <a href="#top" aria-label="Inargy — back to top">
            <Logo height={20} className="text-cream/70 hover:text-cream transition-colors" />
          </a>
          <p className="tabular-nums">
            © {new Date().getFullYear()} Inargy Technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
