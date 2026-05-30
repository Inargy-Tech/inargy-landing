import { useState } from 'react'
import { Button } from '@heroui/react'
import { Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { CONTACT, WHATSAPP_URL } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    content: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: CONTACT.phone,
    href: CONTACT.phoneTel,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Chat with us directly',
    href: WHATSAPP_URL,
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSending(true)
    try {
      // Open WhatsApp with the message as a fallback
      const text = `Hi, I'm ${form.name} (${form.email}).${form.subject ? ` Subject: ${form.subject}.` : ''}\n\n${form.message}`
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank')
      setSubmitted(true)
      setForm(INITIAL_FORM)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="bg-surface py-24 px-6" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-slate-green bg-slate-green/[0.08] px-4 py-1.5 rounded mb-4">
          Contact
        </span>
        <h2 id="contact-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-slate-green leading-tight mb-4">
          Get in touch
        </h2>
        <p className="text-lg text-muted max-w-[560px] leading-relaxed">
          We&apos;re happy to answer any questions you have. Reach out via email or WhatsApp.
        </p>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            {contactItems.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-volt/12 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-slate-green" />
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-slate-green mb-1">{item.title}</h3>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block py-1 text-sm text-muted hover:text-slate-green transition-colors"
                  >
                    {item.content}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="bg-white rounded-2xl p-10 border border-border-light flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle size={48} className="text-volt" />
              <h3 className="text-xl font-bold text-slate-green">Almost there!</h3>
              <p className="text-muted text-sm max-w-[300px]">
                Your message has been prepared in WhatsApp. Please tap &ldquo;Send&rdquo; in the WhatsApp window to complete your enquiry.
              </p>
              <Button
                className="bg-slate-green text-white font-bold rounded-full px-6 mt-2"
                size="sm"
                onPress={() => setSubmitted(false)}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form
              className="bg-white rounded-2xl p-10 border border-border-light"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-green uppercase tracking-wider mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 border rounded-xl text-sm bg-surface focus:border-volt focus:ring-2 focus:ring-volt/15 focus:bg-white outline-none transition-all text-slate-green ${
                      errors.name ? 'border-red-400' : 'border-border'
                    }`}
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-green uppercase tracking-wider mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 border rounded-xl text-sm bg-surface focus:border-volt focus:ring-2 focus:ring-volt/15 focus:bg-white outline-none transition-all text-slate-green ${
                      errors.email ? 'border-red-400' : 'border-border'
                    }`}
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-green uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-border rounded-xl text-sm bg-surface focus:border-volt focus:ring-2 focus:ring-volt/15 focus:bg-white outline-none transition-all text-slate-green"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-green uppercase tracking-wider mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Tell us more..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 border rounded-xl text-sm bg-surface focus:border-volt focus:ring-2 focus:ring-volt/15 focus:bg-white outline-none transition-all resize-y text-slate-green ${
                    errors.message ? 'border-red-400' : 'border-border'
                  }`}
                />
                {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                fullWidth
                isLoading={sending}
                className="bg-slate-green text-white font-bold rounded-full min-h-[48px] py-4 text-base hover:bg-slate-light hover:shadow-lg hover:shadow-slate-green/15 transition-all"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
