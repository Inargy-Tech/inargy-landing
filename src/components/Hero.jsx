import { ArrowRight } from 'lucide-react'
import { BrandMark } from '../assets/logo'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Abstract brand mark — the only visual flourish (no imagery) */}
      <div className="relative mb-14 sm:mb-16" aria-hidden="true">
        {/* soft volt halo */}
        <div className="absolute inset-0 -z-10 blur-[70px] opacity-30 bg-volt rounded-full scale-150 animate-pulse-dot" />
        {/* faint orbit ring */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-44 w-44 sm:h-52 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-volt/10 animate-spin-slow" />
        <div className="animate-float text-cream">
          <BrandMark size={104} className="text-cream" />
        </div>
      </div>

      <h1 className="max-w-[16ch] text-[2.25rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.25rem] font-medium tracking-[-0.02em] text-cream">
        Clean technology to power a sustainable Africa.
      </h1>

      <a
        href="#vision"
        className="group mt-8 inline-flex items-center gap-2 py-1.5 text-sm font-medium text-cream/70 hover:text-volt transition-colors"
      >
        Read vision
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </section>
  )
}
