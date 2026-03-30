import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'How long does installation take?',
    a: 'Most residential installations are completed within 1–2 business days after your energy assessment. Our team handles everything from mounting the panels to configuring the inverter and batteries.',
  },
  {
    q: 'Do I need to pay upfront for the Monthly Plan?',
    a: 'No! The Monthly Plan requires zero upfront payment. You simply pay a fixed monthly fee over 6, 12, or 24 months — all interest-free. At the end of your term, the system is fully yours.',
  },
  {
    q: 'What happens during cloudy or rainy days?',
    a: 'Your system includes battery storage that stores excess energy generated during sunny hours. This stored energy powers your home during cloudy weather or at night, ensuring uninterrupted power.',
  },
  {
    q: 'What does quarterly maintenance include?',
    a: 'Our technicians will inspect and clean your solar panels, check battery health, verify inverter performance, and ensure all wiring connections are optimal. This keeps your system running at peak efficiency.',
  },
  {
    q: 'Can I upgrade my system later?',
    a: 'Absolutely. Our modular design lets you add more panels, batteries, or a larger inverter as your energy needs grow. We\'ll assess your usage and recommend the right upgrade path.',
  },
  {
    q: 'How does the Battery Cashback program work?',
    a: 'When your batteries reach the end of their lifecycle, we\'ll collect and recycle them responsibly. You receive a cashback credit towards your next battery purchase — good for your wallet and the environment.',
  },
  {
    q: 'What areas do you currently serve?',
    a: 'We currently serve Lagos, Abuja, Ibadan, and Port Harcourt. We\'re rapidly expanding to more cities across Nigeria. Contact us to check availability in your area.',
  },
  {
    q: "What's included in my energy assessment?",
    a: 'A free, no-obligation assessment where our team evaluates your current energy usage, generator costs, roof suitability, and recommends the perfect system size and plan for your needs.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className={`border border-white/[0.06] rounded-xl transition-all duration-300 ${
        isOpen ? 'bg-slate-light border-volt/15' : 'bg-transparent hover:bg-slate-light/50'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className={`text-[0.95rem] font-semibold transition-colors ${isOpen ? 'text-volt' : 'text-white/80'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-volt/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
      >
        <div>
          <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [ref, isVisible] = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-slate-green py-24 px-6" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-volt bg-volt/10 px-4 py-1.5 rounded mb-4">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            Frequently asked <span className="text-volt">questions</span>
          </h2>
          <p className="text-lg text-white/55 max-w-[560px] mx-auto leading-relaxed">
            Everything you need to know about going solar with Inargy.
          </p>
        </div>

        <div
          className={`flex flex-col gap-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
