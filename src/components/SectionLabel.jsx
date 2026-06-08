/**
 * Section eyebrow: a short volt rule + tracked uppercase label.
 * Replaces the generic pill-badge eyebrow with a consistent brand signature.
 * The site is dark-only, so the label and rule are always volt.
 */
export default function SectionLabel({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[2.5px] mb-5 text-volt ${className}`}
    >
      <span className="h-px w-7 bg-volt" aria-hidden="true" />
      {children}
    </span>
  )
}
