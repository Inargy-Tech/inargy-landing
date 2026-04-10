import { Button } from '@heroui/react'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CtaBanner() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-volt py-24 px-6 text-center relative overflow-hidden" id="cta" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.18),transparent)] pointer-events-none" />
      <div
        ref={ref}
        className={`relative max-w-[640px] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 id="cta-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-slate-green tracking-tight mb-4">
          Ready to go solar?
        </h2>
        <p className="text-slate-green/70 text-lg mb-9 leading-relaxed">
          Join the clean energy movement. Get a free energy assessment and find out
          which plan is right for your home or business.
        </p>
        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-green text-white font-bold rounded-full px-8 py-6 text-base hover:bg-slate-dark hover:shadow-xl hover:shadow-slate-green/30 hover:-translate-y-0.5 transition-all"
          size="lg"
        >
          Message Us on WhatsApp
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  )
}
