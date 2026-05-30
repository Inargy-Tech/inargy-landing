/**
 * Section eyebrow: a short volt rule + tracked uppercase label.
 * Replaces the generic pill-badge eyebrow with a consistent brand signature.
 * Use `dark` on dark-green sections (volt label) and the default on light sections
 * (slate-green label). The rule is always volt.
 */
export default function SectionLabel({ children, dark = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[2.5px] mb-5 ${
        dark ? 'text-volt' : 'text-slate-green'
      } ${className}`}
    >
      <span className={`h-px w-7 ${dark ? 'bg-volt' : 'bg-volt-dim'}`} aria-hidden="true" />
      {children}
    </span>
  )
}
