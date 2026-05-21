// Reusable Framer Motion variants for BharatSync
// All entrance animations share consistent timing for a unified feel.

export const EASE = [0.2, 0.7, 0.2, 1] // pleasing cubic-bezier

// ─── Container (orchestrates stagger) ───
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
}

export const containerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

// ─── Fade-up (default entrance) ───
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE }
  }
}

// ─── Word stagger (for hero headline) ───
export const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}
export const word = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE }
  }
}

// ─── Bento card (subtle scale + fade) ───
export const bentoCard = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: EASE }
  }
}

// ─── Step number (big scale pop then settle) ───
export const stepPop = {
  hidden: { opacity: 0, scale: 1.4 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 0.7, ease: EASE }
  }
}

// ─── Testimonial slide alternating ───
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}
export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}

// ─── FAQ accordion ───
export const accordion = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: 'auto', opacity: 1,
    transition: { height: { duration: 0.35, ease: EASE }, opacity: { duration: 0.25, delay: 0.05 } }
  }
}

// ─── Common viewport config (use once, fire once) ───
export const viewportOnce = { once: true, amount: 0.2 }

// ─── Hover lift for cards ───
export const liftHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 1px 2px rgba(14,17,22,0.04), 0 8px 24px rgba(14,17,22,0.06)' },
  hover: {
    y: -6, scale: 1.02,
    boxShadow: '0 4px 12px rgba(14,17,22,0.06), 0 24px 48px rgba(14,17,22,0.12)',
    transition: { duration: 0.3, ease: EASE }
  }
}
