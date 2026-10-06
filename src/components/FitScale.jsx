'use client'

import { useEffect } from 'react'

const DESIGN_W = 1592
const MOBILE_MAX = 700

// Keep in sync with the inline script in app/layout.jsx (runs before first paint).
export function applyFit() {
  const root = document.documentElement
  const w = root.clientWidth
  const fit = w <= MOBILE_MAX ? 1 : Math.min(1, w / DESIGN_W)
  const heroH = Math.min(1100, Math.max(560, window.innerHeight / fit))
  root.style.setProperty('--fit', String(fit))
  root.style.setProperty('--hero-h', `${heroH}px`)
}

export const fitInlineScript = `(function(){var r=document.documentElement,w=r.clientWidth,f=w<=${MOBILE_MAX}?1:Math.min(1,w/${DESIGN_W}),h=Math.min(1100,Math.max(560,innerHeight/f));r.style.setProperty('--fit',String(f));r.style.setProperty('--hero-h',h+'px')})()`

export default function FitScale() {
  useEffect(() => {
    applyFit()
    window.addEventListener('resize', applyFit)
    return () => window.removeEventListener('resize', applyFit)
  }, [])
  return null
}
