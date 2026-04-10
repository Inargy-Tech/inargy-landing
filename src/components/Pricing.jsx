import { Card, Button, Chip } from '@heroui/react'
import { Check, ShieldCheck } from 'lucide-react'
import { WHATSAPP_URL } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'

const plans = [
  {
    name: 'Lump Sum',
    desc: 'One-off payment, 0% interest',
    price: '₦749,999',
    period: 'one-time payment',
    powers: 'Lights + Fans + TV + Phone Charging',
    features: [
      '2 Batteries',
      '2 Solar Panels (250W)',
      '1 Inverter (1.5KVa)',
      '1 MPPT Controller',
      'Quarterly maintenance',
      'Upgradable & customizable',
      'Cashback on recycled batteries',
    ],
    cta: 'Order Now',
    href: WHATSAPP_URL,
    featured: false,
  },
  {
    name: 'Monthly Plan',
    desc: 'No upfront cost, interest-free',
    price: '₦49,999',
    period: 'per month · 24-month plan',
    powers: 'Lights + Fans + TV + Fridge + Laptop',
    features: [
      '2 Batteries',
      '4 Solar Panels (250W)',
      '1 Inverter (1.5KVa)',
      '1 MPPT Controller',
      '6, 12, or 24-month options',
      'Quarterly maintenance',
      'Full ownership at end of term',
    ],
    cta: 'Join Waitlist',
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I'm interested in the Monthly Plan. Please add me to the waitlist.")}`,
    featured: true,
  },
  {
    name: 'Energy as a Service',
    desc: 'Metered hybrid energy leasing',
    price: '₦59,999',
    period: 'per month · yearly renewable',
    powers: 'Lights + AC + Fridge + Appliances',
    features: [
      '2 Batteries',
      '4 Solar Panels (250W)',
      '1 Inverter (1.5KVa)',
      '1 MPPT Controller',
      'Yearly maintenance included',
      'Upgradable system',
      'Cashback on recyclable batteries',
    ],
    cta: 'Book Assessment',
    href: WHATSAPP_URL,
    featured: false,
  },
]

export default function Pricing() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6" id="pricing" aria-labelledby="pricing-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-slate-green bg-slate-green/[0.08] px-4 py-1.5 rounded mb-4">
            Pricing
          </span>
          <h2 id="pricing-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-tight mb-4">
            Simple, <span className="text-volt-dim">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted max-w-[560px] mx-auto leading-relaxed">
            Choose the plan that works for you. Every plan includes setup, installation, and energy assessment.
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
              className={`relative transition-all duration-600 ${
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
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-volt text-slate-green text-[0.7rem] font-bold uppercase tracking-wider"
                  size="sm"
                >
                  Most Popular
                </Chip>
              )}
              <Card
                className={`rounded-2xl p-10 relative transition-all hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-slate-green text-white border-slate-green lg:scale-[1.02] hover:shadow-2xl hover:shadow-slate-green/20'
                    : 'bg-white border border-border hover:shadow-xl hover:shadow-slate-green/[0.08]'
                }`}
              >

              <h3 className={`text-lg font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-green'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-white/60' : 'text-muted'}`}>
                {plan.desc}
              </p>

              <div className={`mb-1 ${plan.featured ? 'text-volt' : 'text-slate-green'}`}>
                <span className={`text-sm font-medium ${plan.featured ? 'text-white/50' : 'text-muted'}`}>from </span>
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
              </div>
              <p className={`text-xs mb-4 ${plan.featured ? 'text-white/50' : 'text-muted'}`}>
                {plan.period}
              </p>

              {/* Power capabilities badge */}
              <div className={`text-xs font-semibold px-3 py-2 rounded-lg mb-6 inline-flex items-center gap-1.5 ${
                plan.featured
                  ? 'bg-volt/15 text-volt'
                  : 'bg-slate-green/[0.06] text-slate-green/70'
              }`}>
                ⚡ Powers: {plan.powers}
              </div>

              <ul className="mb-8 space-y-0">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 py-2.5 text-sm border-b ${
                      plan.featured
                        ? 'text-white/75 border-white/[0.08]'
                        : 'text-muted-dark border-border-light'
                    }`}
                  >
                    <Check size={16} className="text-volt mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                className={`rounded-full font-bold text-[0.95rem] py-3 transition-all ${
                  plan.featured
                    ? 'bg-volt text-slate-green hover:shadow-lg hover:shadow-volt/40'
                    : 'bg-transparent border-2 border-slate-green text-slate-green hover:bg-slate-green hover:text-white'
                }`}
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
