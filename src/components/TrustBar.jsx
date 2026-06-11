import { useScrollReveal } from '../hooks/useScrollReveal'

const partners = [
  { name: 'TechCabal', style: 'font-bold tracking-tight' },
  { name: 'Disrupt Africa', style: 'font-bold italic' },
  { name: 'Norrsken', style: 'font-light tracking-[3px] uppercase' },
  { name: 'SON Certified', style: 'font-bold tracking-wider uppercase text-[0.85em]' },
  { name: 'Techpoint Africa', style: 'font-semibold' },
  { name: 'Ventures Platform', style: 'font-light tracking-wider' },
]

export default function TrustBar() {
  const [ref, isVisible] = useScrollReveal(0.3)

  return (
    <section
      className="bg-slate-green border-y border-volt/[0.06] py-10 overflow-hidden"
      id="partners"
      aria-label="Trusted partners and media"
      ref={ref}
    >
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[3px] text-white/55 mb-8">
          Featured In &amp; Trusted By
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-green to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-green to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center px-10 shrink-0"
              >
                <span
                  className={`text-white/50 text-xl select-none whitespace-nowrap hover:text-white/40 transition-colors ${partner.style}`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
