import { useCallback, useEffect, useRef, useState } from 'react'

// Draggable before/after comparison slider.
//
// The real job photos are intentionally not in the repo yet (see
// src/config/gallery.js). When an image is missing, the panel shows a clearly
// labeled "photo coming soon" state instead of any stock/stand-in image — the
// drag interaction still works so the component is demonstrable pre-launch.
export default function BeforeAfterSlider({ before, after, label }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50) // % from left that the "after" reveal extends to
  const [dragging, setDragging] = useState(false)

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(clientX)
    }
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [dragging, setFromClientX])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-slate-200 bg-cloud"
    >
      {/* AFTER (base layer) */}
      <Panel src={after} label={label} state="After" />

      {/* BEFORE (clipped overlay revealed from the left) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Panel src={before} label={label} state="Before" tint />
      </div>

      {/* Corner state badges */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 font-mono text-xs uppercase tracking-label text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-spray/90 px-3 py-1 font-mono text-xs uppercase tracking-label text-white">
        After
      </span>

      {/* Divider + droplet handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_0_1px_rgba(11,31,58,0.15)]" />
        <button
          type="button"
          aria-label={`${label} before and after comparison slider`}
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize"
        >
          {/* Water-droplet shaped handle */}
          <span className="grid h-11 w-11 place-items-center rounded-full rounded-tr-none bg-white shadow-card ring-1 ring-slate-200 rotate-45">
            <svg className="-rotate-45" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l-3 6 3 6M15 6l3 6-3 6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

// One side of the comparison. Tries to load the real photo; if it's absent
// (the current pre-launch state) it renders a labeled placeholder rather than
// any fake imagery.
function Panel({ src, label, state, tint }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center ${
          tint ? 'bg-navy-900' : 'bg-navy-700'
        }`}
      >
        <span className="font-mono text-xs uppercase tracking-label text-spray">
          {state} — {label}
        </span>
        <span className="font-body text-sm text-white/70">Real job photo coming soon</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`${label} — ${state.toLowerCase()} pressure washing`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
      draggable={false}
    />
  )
}
