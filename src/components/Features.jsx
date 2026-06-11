import { Zap, Banknote, Wrench, TrendingUp, Recycle, Home } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'

const features = [
  {
    icon: Zap,
    title: 'Full System Included',
    desc: 'Batteries, solar panels, inverter, and MPPT controller — everything you need in one package.',
  },
  {
    icon: Banknote,
    title: 'Flexible Payments',
    desc: 'Pay upfront, monthly, or lease your energy. Choose 6, 12, or 24-month interest-free plans.',
  },
  {
    icon: Wrench,
    title: 'Quarterly Maintenance',
    desc: 'Regular maintenance included to keep your system running at peak performance year-round.',
  },
  {
    icon: TrendingUp,
    title: 'Upgradable Systems',
    desc: 'Start small and scale up. Our modular systems grow with your energy needs over time.',
  },
  {
    icon: Recycle,
    title: 'Battery Cashback',
    desc: 'Earn cashback when you recycle your old batteries. Good for your wallet and the planet.',
  },
  {
    icon: Home,
    title: 'Full Ownership',
    desc: 'Every plan leads to full ownership of your energy system. No hidden strings attached.',
  },
]

export default function Features() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-surface py-24 px-6" id="features" aria-labelledby="features-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Editorial, left-aligned header: heading and intro side by side */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 items-end mb-16">
          <div>
            <SectionLabel>Why Choose Inargy</SectionLabel>
            <h2 id="features-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-[1.1]">
              Everything you need for clean energy
            </h2>
          </div>
          <p className="text-lg text-muted-dark leading-relaxed md:pb-1">
            Affordable solar solutions built for African homes and businesses, with flexible
            payment options and full lifecycle support.
          </p>
        </div>

        {/* Spec-sheet grid: hairline-ruled cells, inline icon + editorial index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group border-t-2 border-slate-green/10 pt-6 transition-all duration-600 hover:border-volt ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <f.icon size={26} strokeWidth={1.75} className="text-slate-green" />
                <span
                  className="text-2xl font-extrabold text-slate-green/20 tabular-nums"
                  style={{ fontFamily: 'var(--font-display)' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-green mb-2">{f.title}</h3>
              <p className="text-sm text-muted-dark leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
