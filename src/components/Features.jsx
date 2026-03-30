import { Card } from '@heroui/react'
import { Zap, Banknote, Wrench, TrendingUp, Recycle, Home } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: Zap,
    title: 'Full System Included',
    desc: 'Batteries, solar panels, inverter, and MPPT controller \u2014 everything you need in one package.',
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
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-slate-green bg-slate-green/[0.08] px-4 py-1.5 rounded mb-4">
            Why Choose Inargy
          </span>
          <h2 id="features-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-tight mb-4">
            Everything you need for clean energy
          </h2>
          <p className="text-lg text-muted max-w-[560px] mx-auto leading-relaxed">
            Affordable solar solutions built for African homes and businesses, with flexible
            payment options and full lifecycle support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={f.title}
              className={`bg-white border border-border-light rounded-2xl p-9 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-green/[0.08] hover:border-transparent group relative overflow-hidden duration-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-volt scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-13 h-13 rounded-xl bg-volt/12 flex items-center justify-center mb-5">
                <f.icon size={24} className="text-slate-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-green mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
