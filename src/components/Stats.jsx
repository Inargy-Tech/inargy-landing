import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '250W+', label: 'Solar Panels' },
  { value: '0%', label: 'Interest Rate' },
  { value: '24/7', label: 'Clean Energy' },
  { value: '\u20A649k', label: 'Starting Monthly' },
]

export default function Stats() {
  const [ref, isVisible] = useScrollReveal(0.3)

  return (
    <section className="bg-slate-dark border-y border-volt/[0.08]" id="stats" aria-label="Key statistics" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`transition-all duration-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-4xl font-extrabold text-volt tracking-tight" aria-hidden="true">
              {stat.value}
            </div>
            <p className="text-white/55 text-xs font-medium uppercase tracking-widest mt-1">
              <span className="sr-only">{stat.value} </span>{stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
