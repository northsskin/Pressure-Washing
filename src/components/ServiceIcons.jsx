// Simple line-icons for the service cards — drawn, not photographed.
// All use currentColor so the card controls the stroke color (spray-blue).

const base = {
  width: 40,
  height: 40,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function DrivewayIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 6h16l6 36H10z" />
      <path d="M24 6v36" strokeDasharray="3 5" />
    </svg>
  )
}

export function WalkwayIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 40h12v-8h10v-8h8v-8" />
      <path d="M10 40v-6h6" />
      <path d="M22 32v-6h6" />
      <path d="M32 24v-6h6" />
    </svg>
  )
}

export function PatioIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="10" width="32" height="28" rx="2" />
      <path d="M8 20h32M8 30h32M19 10v28M30 10v28" />
    </svg>
  )
}

export function DeckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 14h34M7 22h34M7 30h34M7 38h34" />
      <path d="M12 14v24M36 14v24" />
    </svg>
  )
}

export function FenceIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 16l4-4 4 4v24h-8zM28 16l4-4 4 4v24h-8z" />
      <path d="M6 22h36M6 30h36" />
    </svg>
  )
}

export function TrashCanIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 14h28" />
      <path d="M18 14V9h12v5" />
      <path d="M13 14l2 28h18l2-28" />
      <path d="M21 22v12M27 22v12" />
    </svg>
  )
}
