import SectionLabel from './SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Vision() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="vision" className="px-6 sm:px-8 py-28 sm:py-40">
      <div
        ref={ref}
        className={`max-w-[1280px] mx-auto grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <SectionLabel dark>Vision</SectionLabel>

        <div className="max-w-[24ch] lg:max-w-none">
          <p className="text-[1.6rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.25] font-display font-medium tracking-[-0.015em] text-cream text-balance">
            Inargy builds clean technology for Africa — using software and smart
            hardware to make energy and everyday utilities affordable, reliable
            and sustainable.
          </p>
          <p className="mt-8 max-w-[52ch] text-base sm:text-lg leading-relaxed text-cream/55">
            We back focused teams that solve one hard problem each: paying for
            essential services, owning clean power, and understanding every watt
            you use. One mission, many products.
          </p>
        </div>
      </div>
    </section>
  )
}
