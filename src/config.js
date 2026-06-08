// Centralized configuration — update once, applies everywhere
export const WHATSAPP_NUMBER = '2348135964676'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const CONTACT = {
  email: 'hello@inargy.tech',
  phone: '+234 (0) 813 596 4676',
  phoneTel: 'tel:+2348135964676',
  whatsapp: WHATSAPP_URL,
}

export const SITE = {
  name: 'Inargy',
  url: 'https://inargy.tech',
  tagline: 'Clean technology for a sustainable Africa',
}

export const SOCIAL = {
  twitter: 'https://twitter.com/inargyhub',
  instagram: 'https://instagram.com/inargyhub',
  linkedin: 'https://linkedin.com/company/inargyhub',
}

// The Inargy product portfolio. Each entry renders one row in the Products section.
// `id` selects the brand lockup logo (see src/assets/productLogos.jsx); entries
// without a matching logo fall back to the `name` text.
// `status: 'live'` shows website/LinkedIn links; `status: 'soon'` marks it upcoming.
export const PRODUCTS = [
  {
    id: 'fuse',
    name: 'fuse.',
    sector: 'Payments',
    blurb:
      'Everything connected. Pay for airtime, data, cable TV and electricity tokens — instantly, from one place.',
    website: 'https://fuse.ng',
    linkedin: 'https://linkedin.com/company/fuseng',
    status: 'live',
  },
  {
    id: 'switch',
    name: 'switch.',
    sector: 'Solar',
    blurb:
      'Switch on the sun. Genuine panels, inverters, batteries and smart monitoring — shipped nationwide and paid your way.',
    website: 'https://switch.inargy.co',
    linkedin: 'https://linkedin.com/company/inargyhub',
    status: 'live',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    sector: 'Smart IoT',
    blurb:
      'The connected home. Live production, battery health and automatic load-shedding — every watt in one app.',
    website: null,
    linkedin: null,
    status: 'soon',
  },
]
