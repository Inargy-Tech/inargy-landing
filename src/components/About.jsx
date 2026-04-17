import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImage from '../assets/african-solar-team-unbranded.png'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-slate-green py-24 px-6" id="about" aria-labelledby="about-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-volt bg-volt/10 px-4 py-1.5 rounded mb-4">
          About Inargy
        </span>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Visual — photo with overlay badges */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src={aboutImage}
              alt="Inargy solar installation team at work on a residential rooftop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={560}
              height={420}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-green/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 id="about-heading" className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold tracking-tight leading-tight mb-5 text-white">
              We are a <span className="text-volt">clean tech</span> startup on a mission
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-4">
              Our goal is to democratise energy in Africa by providing homes and businesses
              affordable and sustainable solutions to improve lives, sustain operations,
              and protect the environment.
            </p>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              We&apos;ve partnered with industry professionals to deliver reliable solar energy
              systems that make a real difference in everyday life.
            </p>
            <blockquote className="bg-volt/5 border-l-[3px] border-volt rounded-r-xl p-6 text-white/55 text-[0.95rem] leading-relaxed italic">
              &ldquo;The world is reaching the tipping point beyond which climate change may
              become irreversible. If this happens, we risk denying present and future
              generations the right to a healthy and sustainable planet &mdash; the whole
              of humanity stands to lose.&rdquo;
              <footer className="mt-3 text-white/55 text-xs font-semibold not-italic uppercase tracking-wider">
                — Kofi Annan, Former UN Secretary-General
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
