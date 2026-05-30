import { Card, Button, Chip } from '@heroui/react'
import { Check, ShieldCheck } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { WHATSAPP_URL } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'

const plans = [
  {
    name: 'Imani',
    type: 'LUMP SUM',
    tagline: 'Own your power. Forever.',
    desc: 'Pay once and own your solar system outright. No obligations, no renewals, just clean, reliable energy that belongs entirely to you from day 0.',
    price: '₦749,999',
    period: 'one-time payment',
    powers: 'Lights + Appliances + More',
    features: [
      'One-time investment',
      'Full system ownership',
      'Highest long-term value',
    ],
    cta: 'Order Now',
    href: WHATSAPP_URL,
    // Pantone mint green (sampled from PDF)
    bg: '#D0EBE2',
    accent: '#1E6E52',
    featured: false,
  },
  {
    name: 'Imole',
    type: 'ENERGY FINANCING',
    tagline: 'Your light is coming into focus.',
    desc: 'Spread your investment over 3–12 months and own your system at the end. Your energy future is already emerging, one payment at a time.',
    price: '₦49,999',
    period: 'per month · 3–12 month plan',
    powers: 'Lights + Appliances + More',
    features: [
      '3–12 month terms',
      'Ownership at completion',
      'Flexible entry point',
    ],
    cta: 'Join Waitlist',
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I'm interested in the Imole Energy Financing plan. Please add me to the waitlist.")}`,
    // Pantone warm peach/sand (sampled from PDF)
    bg: '#F2E5D3',
    accent: '#8A4A1C',
    featured: true,
  },
  {
    name: 'Imara',
    type: 'ENERGY AS A SERVICE',
    tagline: 'Steady power, every single day.',
    desc: 'Access a fully installed solar system with zero upfront cost. Renew annually and enjoy consistent power supply with maintenance included.',
    price: '₦59,999',
    period: 'per month · yearly renewable',
    powers: 'Lights + Appliances + More',
    features: [
      'Zero upfront cost',
      'Annual renewal',
      'Maintenance included',
    ],
    cta: 'Book Assessment',
    href: WHATSAPP_URL,
    // Pantone steel blue (sampled from PDF)
    bg: '#D4E1EE',
    accent: '#2E5C8A',
    featured: false,
  },
]

export default function Pricing() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6" id="pricing" aria-labelledby="pricing-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <SectionLabel>Pricing</SectionLabel>
          <h2 id="pricing-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-tight mb-4">
            Three paths to <span className="text-volt-dim">energy independence.</span>
          </h2>
          <p className="text-lg text-muted max-w-[560px] mx-auto leading-relaxed">
            Every household and business has a different starting point. Inargy meets you exactly where you are — with a plan built for your reality.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-slate-green/60 bg-volt/10 px-4 py-2 rounded-full">
            <ShieldCheck size={14} className="text-volt-dim" />
            No hidden fees · Full price transparency
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-[440px] md:max-w-none mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative transition-all duration-600 hover:-translate-y-1 ${
                i === plans.length - 1 ? 'md:col-span-2 md:justify-self-center md:max-w-[440px] lg:col-span-1 lg:max-w-none' : ''
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {plan.featured && (
                <Chip
                  className="absolute -top-1 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-[0.7rem] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: plan.accent, color: '#fff' }}
                  size="lg"
                >
                  Most Popular
                </Chip>
              )}
              <Card
                className={`rounded-2xl p-10 relative transition-all border-0 ${
                  plan.featured
                    ? 'lg:scale-[1.02] hover:shadow-2xl'
                    : 'hover:shadow-xl'
                }`}
                style={{
                  backgroundColor: plan.bg,
                  boxShadow: plan.featured ? `0 8px 40px ${plan.bg}99` : undefined,
                }}
              >
                {/* Accent bar */}
                <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: plan.accent }} />

                {/* Plan name */}
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: plan.accent }}>
                  {plan.name}
                </h3>

                {/* Type badge */}
                <span
                  className="inline-block text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-4"
                  style={{ backgroundColor: `${plan.accent}18`, color: plan.accent }}
                >
                  {plan.type}
                </span>

                {/* Tagline */}
                <p className="text-sm italic font-semibold mb-2 text-slate-green">
                  {plan.tagline}
                </p>

                {/* Description */}
                <p className="text-sm mb-6 leading-relaxed text-muted-dark">
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-sm font-medium text-muted-dark">from </span>
                  <span className="text-4xl font-extrabold tracking-tight text-slate-green tabular-nums">{plan.price}</span>
                </div>
                <p className="text-xs mb-4 text-muted-dark">
                  {plan.period}
                </p>

                {/* Powers badge */}
                <div
                  className="text-xs font-semibold px-3 py-2 rounded-lg mb-6 inline-flex items-center gap-1.5"
                  style={{ backgroundColor: `${plan.accent}14`, color: plan.accent }}
                >
                  ⚡ Powers: {plan.powers}
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-0">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 py-2.5 text-sm text-muted-dark border-b"
                      style={{ borderColor: `${plan.accent}22` }}
                    >
                      <Check size={16} className="mt-0.5 shrink-0" style={{ color: plan.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  as="a"
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  className="rounded-full font-bold text-[1.14rem] py-5 px-8 transition-all border-2 hover:opacity-90"
                  style={{
                    backgroundColor: plan.accent,
                    borderColor: plan.accent,
                    color: '#fff',
                  }}
                >
                  {plan.cta}
                </Button>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-muted">
          All plans include setup/installation fee and energy assessment. Contact us for custom enterprise solutions.
        </p>
      </div>
    </section>
  )
}
