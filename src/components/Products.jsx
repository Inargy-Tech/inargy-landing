import { ArrowUpRight } from 'lucide-react'
import { PRODUCTS } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FuseLogo, SwitchLogo } from '../assets/productLogos'

const LOGOS = { fuse: FuseLogo, switch: SwitchLogo }

function ProductRow({ product, index }) {
  const [ref, isVisible] = useScrollReveal(0.2)
  const { id, name, sector, blurb, website, status } = product
  const Brand = LOGOS[id]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`group border-t border-cream/10 py-10 sm:py-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 lg:items-start">
        {/* Index + brand + sector */}
        <div className="lg:col-span-4 flex items-baseline gap-4">
          <span className="text-xs font-medium text-cream/50 tabular-nums pt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-3xl sm:text-4xl font-display font-medium tracking-[-0.02em] text-cream leading-none">
              {Brand ? <Brand /> : name}
            </h3>
            <span className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[2px] text-volt">
              {sector}
            </span>
          </div>
        </div>

        {/* Blurb */}
        <p className="lg:col-span-5 max-w-[46ch] text-base sm:text-lg leading-relaxed text-cream/60">
          {blurb}
        </p>

        {/* Links */}
        <div className="lg:col-span-3 flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-end">
          {status === 'soon' ? (
            <span className="text-sm font-medium text-cream/55">Coming soon</span>
          ) : (
            <>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} website (opens in new tab)`}
                  className="inline-flex items-center gap-1 py-1.5 text-sm font-medium text-cream hover:text-volt transition-colors"
                >
                  Website
                  <ArrowUpRight size={14} className="opacity-60" />
                </a>
              )}

            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="px-6 sm:px-8 pb-28 sm:pb-40">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end gap-2 mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-[-0.02em] text-cream">
            Products
          </h2>
          <span className="text-sm sm:text-base font-medium text-cream/50 tabular-nums mb-1.5">
            {String(PRODUCTS.length).padStart(2, '0')}
          </span>
        </div>

        <div className="border-b border-cream/10">
          {PRODUCTS.map((product, i) => (
            <ProductRow key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
