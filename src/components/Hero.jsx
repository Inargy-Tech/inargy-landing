import { useState } from 'react'
import { Button } from '@heroui/react'
import { ArrowRight, Zap, ChevronRight } from 'lucide-react'
import { WHATSAPP_URL } from '../config'
import heroImage from '../assets/hero-solar-home.webp'

function SavingsCalculator({ className = '', spend, setSpend, showResult, setShowResult, monthlySpend, savings, yearlySavings, handleCalculate, formatNaira }) {
  return (
    <div className={`bg-slate-light/80 backdrop-blur-xl border border-volt/10 rounded-2xl p-5 ${className}`}>
      <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
        <Zap size={12} className="text-volt" />
        Savings Calculator
      </div>
      <form onSubmit={handleCalculate} className="flex gap-3">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm font-bold">₦</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Monthly fuel/gen spend"
            value={spend}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, '')
              const formatted = raw ? parseInt(raw, 10).toLocaleString() : ''
              setSpend(formatted)
              setShowResult(false)
            }}
            className="w-full bg-slate-green/60 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-volt/40 focus:ring-1 focus:ring-volt/20 outline-none transition-all"
            aria-label="Monthly generator or fuel spend in Naira"
          />
        </div>
        <button
          type="submit"
          className="bg-volt text-slate-green font-bold text-sm px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-volt/30 transition-all shrink-0 flex items-center gap-1 cursor-pointer"
        >
          Calculate
          <ChevronRight size={14} />
        </button>
      </form>

      {showResult && monthlySpend > 0 && (
        <div className="mt-3 bg-volt/[0.08] border border-volt/15 rounded-xl p-4 animate-fade-up">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white/50 text-xs">Est. monthly savings</div>
              <div className="text-volt font-extrabold text-xl">{formatNaira(savings)}</div>
            </div>
            <div className="text-right">
              <div className="text-white/50 text-xs">Per year</div>
              <div className="text-white font-bold text-lg">{formatNaira(yearlySavings)}</div>
            </div>
          </div>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I currently spend about ${formatNaira(monthlySpend)}/month on fuel/generator. I'd like to learn about switching to solar.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full bg-volt text-slate-green text-center font-bold text-sm py-2.5 rounded-lg block hover:shadow-lg hover:shadow-volt/30 transition-all"
          >
            Get Your Free Assessment →
          </a>
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const [spend, setSpend] = useState('')
  const [showResult, setShowResult] = useState(false)

  // Simple savings estimate: solar typically saves 60-80% of generator costs
  const monthlySpend = parseInt(spend.replace(/,/g, ''), 10) || 0
  const savings = Math.round(monthlySpend * 0.7)
  const yearlySavings = savings * 12

  const handleCalculate = (e) => {
    e.preventDefault()
    if (monthlySpend > 0) setShowResult(true)
  }

  const formatNaira = (n) => '₦' + n.toLocaleString()

  return (
    <section className="relative min-h-screen flex items-center bg-slate-green overflow-hidden" id="home">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(212,237,49,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_20%_80%,rgba(212,237,49,0.04)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,237,49,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,237,49,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-volt/10 border border-volt/20 px-4 py-1.5 rounded-full text-xs font-semibold text-volt uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-volt rounded-full animate-pulse-dot" />
            Clean Energy for Africa
          </div>

          <h1 className="text-[clamp(2.8rem,5.5vw,4.2rem)] font-black text-white leading-[1.08] tracking-tight mb-6">
            Democratise{' '}
            <span className="text-volt">energy</span>{' '}
            across Africa
          </h1>

          <p className="text-lg text-white/65 max-w-[500px] mb-8 leading-relaxed mx-auto lg:mx-0">
            Leading homes and businesses towards affordable, sustainable solar solutions
            &mdash; improving quality of lives and saving the world for future generations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-volt text-slate-green font-bold rounded-full px-8 py-6 text-base hover:shadow-lg hover:shadow-volt/35 hover:-translate-y-0.5 transition-all"
              size="lg"
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-8 py-6 text-base text-white border border-white/20 hover:border-volt hover:text-volt transition-all bg-transparent"
              size="lg"
              onPress={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Pricing
            </Button>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-white/35 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-volt rounded-full" />
              500+ Homes Powered
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-volt rounded-full" />
              0% Interest
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-volt rounded-full" />
              Free Installation
            </span>
          </div>

          {/* Mobile/Tablet calculator (hidden on desktop where it appears in the right column) */}
          <div className="lg:hidden mt-10">
            <SavingsCalculator
              spend={spend}
              setSpend={setSpend}
              showResult={showResult}
              setShowResult={setShowResult}
              monthlySpend={monthlySpend}
              savings={savings}
              yearlySavings={yearlySavings}
              handleCalculate={handleCalculate}
              formatNaira={formatNaira}
            />
          </div>
        </div>

        {/* Hero visual — lifestyle image with savings calculator overlay (desktop only) */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          {/* Orbit rings behind image */}
          <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-volt/[0.06] animate-spin-slow" />
          <div className="absolute w-[540px] h-[540px] rounded-full border border-dashed border-volt/[0.06] animate-spin-slow-reverse" />

          {/* Main image */}
          <div className="relative w-[440px] h-[440px] rounded-[2rem] overflow-hidden border-2 border-volt/15 shadow-2xl shadow-black/30">
            <img
              src={heroImage}
              alt="Modern African home powered by solar energy at sunset"
              className="w-full h-full object-cover"
              width={440}
              height={440}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-green/60 via-transparent to-transparent" />

            {/* Floating stat badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-green/80 backdrop-blur-xl rounded-xl p-4 border border-volt/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-volt/20 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-volt" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Transparent Pricing</div>
                  <div className="text-white/50 text-xs">Starting at ₦49,999/mo · 0% interest</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop savings calculator */}
          <SavingsCalculator
            className="mt-6 w-[440px]"
            spend={spend}
            setSpend={setSpend}
            showResult={showResult}
            setShowResult={setShowResult}
            monthlySpend={monthlySpend}
            savings={savings}
            yearlySavings={yearlySavings}
            handleCalculate={handleCalculate}
            formatNaira={formatNaira}
          />
        </div>
      </div>
    </section>
  )
}
