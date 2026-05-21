// Custom count-up hook — animates a number from 0 to target when in view.
// Handles strings like "1.4B+", "248", "22", "99.9%" — preserves prefix/suffix.

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Parses "1.42 Cr", "248", "99.9%" into { num, prefix, suffix, decimals }
 */
function parse(raw) {
  const match = String(raw).match(/^([^\d.-]*)([\d.]+)(.*)$/)
  if (!match) return { num: 0, prefix: '', suffix: raw, decimals: 0 }
  const [, prefix, numStr, suffix] = match
  const decimals = (numStr.split('.')[1] || '').length
  return { num: parseFloat(numStr), prefix, suffix, decimals }
}

export function useCountUp(target, { duration = 1400, start = true } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)
  const { num, prefix, suffix, decimals } = parse(target)

  useEffect(() => {
    if (!start || !inView) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      // ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(num * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, num, duration, start])

  const display = `${prefix}${value.toFixed(decimals)}${suffix}`
  return [ref, display]
}
