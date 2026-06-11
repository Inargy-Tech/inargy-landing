import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FAQS } from '../config'
import SectionLabel from './SectionLabel'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        isOpen ? 'bg-slate-green/[0.04] border-slate-green/20' : 'border-border hover:bg-slate-green/[0.02] hover:border-slate-green/15'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className={`text-[0.95rem] font-semibold transition-colors ${isOpen ? 'text-slate-green' : 'text-slate-green/80'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-green/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
      >
        <div>
          <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
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
    <section className="bg-white py-24 px-6" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            id="faq-heading"
            className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-tight mb-4"
          >
            Frequently asked <span className="text-volt-dim">questions</span>
          </h2>
          <p className="text-lg text-muted max-w-[560px] mx-auto leading-relaxed">
            Everything you need to know about going solar with Inargy.
          </p>
        </div>

        <div
          className={`flex flex-col gap-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FAQS.map((faq, i) => (
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
