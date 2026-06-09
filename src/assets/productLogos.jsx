// Faithful reproductions of the fuse. and switch. brand lockups (brandmark +
// wordmark), rebuilt from their live sites (fuse.ng, switch.inargy.co).
// Sizing is em-based so each lockup scales with the parent element's font-size.

const FUSE_AMBER = '#f49e0b'
const SWITCH_ORANGE = '#ed6a2c'
const PULSE_CYAN = '#22d3ee'

export function FuseLogo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: '0.3em' }}
      aria-label="fuse."
    >
      <svg
        viewBox="0 0 869 891"
        aria-hidden="true"
        style={{
          height: '0.92em',
          width: 'auto',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
      >
        <g>
          <path
            d="M405.963,480.109c0.389,-59.249 -0.159,-118.587 0,-177.836c0.159,-62.961 -5.638,-102.802 30.65,-141.706c37.101,-39.789 67.61,-37.88 136.174,-37.862c57.358,0.018 116.801,-1.396 173.894,0.23c7.265,181.99 -174.46,133.487 -305.649,137.782l0.088,120.425c61.972,2.068 140.187,2.935 201.751,-0.088c105.525,-5.179 197.439,-79.894 219.551,-183.616c6.929,-32.523 7.689,-160.814 3.783,-196.625l-332.234,-0.813c-76.819,3.04 -144.711,20.327 -202.228,97.57c-37.455,50.305 -44.119,86.364 -46.982,162.865c-68.671,1.219 -109.608,-1.132 -163.89,29.359c-39.594,22.236 -72.524,55.078 -93.788,96.916c-29.182,57.447 -26.001,96.209 -26.018,167.566c-0,50.465 -5.073,140.894 6.928,184.041c62.909,226.143 401.7,197.049 398.165,-66.903l-120.408,-0.071c-0.654,37.137 -5.833,54.353 -26.496,76.289c-15.059,15.996 -44.525,27.556 -75.334,19.196c-71.869,-19.497 -62.024,-95.025 -62.024,-142.555c0.018,-91.119 -20.628,-200.072 72.842,-235.3c18.895,-7.124 68.016,-11.419 90.624,-6.523l-0.107,97.288l120.673,0.371l0.035,0Z"
            fill="currentColor"
          />
          <path
            d="M600.785,417.289c-6.769,9.28 -10.835,33.16 -20.574,48.892c-38.851,62.766 -123.554,49.209 -203.43,49.156c-72.612,-0.036 -132.162,-7.778 -182.025,36.129c-40.778,35.917 -39.029,61.229 -39.082,123.2c0.036,30.95 9.475,52.639 38.445,53.399c18.577,0.477 28.547,-48.573 43.5,-66.497c24.905,-29.872 54.442,-25.576 99.974,-25.7l103.598,0.283c93.911,-0.389 139.179,-4.773 199.913,-55.608c42.528,-35.599 82.174,-102.838 77.066,-177.836c-11.348,0.23 -39.7,7.848 -53.84,10.906c-21.299,4.613 -41.132,1.697 -63.545,3.676Z"
            fill={FUSE_AMBER}
          />
        </g>
      </svg>
      <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, letterSpacing: '-0.01em' }}>
        fuse<span style={{ color: FUSE_AMBER }}>.</span>
      </span>
    </span>
  )
}

export function SwitchLogo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: '0.34em' }}
      aria-label="switch."
    >
      <svg viewBox="0 0 34 20" aria-hidden="true" style={{ height: '0.62em', width: 'auto', display: 'block' }}>
        <rect x="1" y="1" width="32" height="18" rx="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.45" />
        <circle cx="24" cy="10" r="6" fill={SWITCH_ORANGE} />
      </svg>
      <span style={{ fontFamily: "'Bricolage Grotesque', 'General Sans', var(--font-display)", fontWeight: 700, letterSpacing: '-0.04em' }}>
        switch
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '0.195em',
            height: '0.195em',
            borderRadius: '50%',
            background: SWITCH_ORANGE,
            marginLeft: '0.06em',
          }}
        />
      </span>
    </span>
  )
}

export function PulseLogo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: '0.05em' }}
      aria-label="pulse."
    >
      <svg
        viewBox="0 0 160 160"
        aria-hidden="true"
        style={{
          height: '1.1em',
          width: 'auto',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          display: 'block',
        }}
      >
        <g transform="matrix(1,0,0,1,0,10)">
          <path
            d="M24,90L52,90L70,58L82,76L98,30L110,90L136,90"
            style={{
              fill: 'none',
              fillRule: 'nonzero',
              stroke: PULSE_CYAN,
              strokeWidth: '9px',
            }}
          />
        </g>
      </svg>
      <span style={{ fontFamily: "'Space Grotesk', var(--font-display)", fontWeight: 700, letterSpacing: '-0.03em' }}>
        pulse<span style={{ color: PULSE_CYAN }}>.</span>
      </span>
    </span>
  )
}
