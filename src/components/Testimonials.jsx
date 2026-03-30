import { Star, Quote } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Adebayo Ogunlesi',
    location: 'Lekki, Lagos',
    plan: 'Lump Sum',
    rating: 5,
    quote:
      "We used to spend over ₦80k monthly on diesel alone. Since installing Inargy's system, our electricity bill has dropped to virtually zero. The setup was seamless and the team was incredibly professional.",
  },
  {
    name: 'Chioma Nwosu',
    location: 'Abuja, FCT',
    plan: 'Monthly Plan',
    rating: 5,
    quote:
      "The monthly plan made solar accessible for us. No massive upfront cost, no interest — just clean power every day. My kids can finally study at night without generator noise.",
  },
  {
    name: 'Ibrahim Musa',
    location: 'Ibadan, Oyo',
    plan: 'Energy as a Service',
    rating: 5,
    quote:
      "As a small business owner, reliable power is everything. Inargy's EaaS plan keeps my shop running 24/7. The quarterly maintenance gives me peace of mind — I just focus on my business.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-volt fill-volt' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-slate-green py-24 px-6" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-volt bg-volt/10 px-4 py-1.5 rounded mb-4">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            Trusted by homeowners &amp;{' '}
            <span className="text-volt">businesses</span>
          </h2>
          <p className="text-lg text-white/55 max-w-[560px] mx-auto leading-relaxed">
            Real stories from real customers powering their lives with clean energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative bg-slate-light border border-white/[0.06] rounded-2xl p-8 transition-all duration-600 hover:-translate-y-1 hover:border-volt/20 hover:shadow-xl hover:shadow-volt/[0.04] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Decorative quote */}
              <Quote
                size={32}
                className="text-volt/15 absolute top-5 right-5 rotate-180"
              />

              <StarRating rating={t.rating} />

              <p className="text-white/70 text-[0.92rem] leading-relaxed mt-4 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">
                    {t.location}
                  </div>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-volt/60 bg-volt/[0.08] px-2.5 py-1 rounded">
                  {t.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
