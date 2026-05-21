import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { APP } from '../data/config.js'

const links = [
  { to: "/",          label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/feature",   label: "Features" },
  { to: "/chat",      label: "AI Chat" },
  { to: "/about",     label: "About" }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-cream/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative w-10 h-10 rounded-xl bg-ink flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-saffron to-lemon opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative display-serif text-cream text-2xl leading-none">B</span>
          </span>
          <span className="display-serif text-2xl tracking-tight">{APP.name}</span>
        </Link>

        {/* Center pill nav — animated shrink on scroll */}
        <motion.nav
          animate={{ scale: scrolled ? 0.96 : 1 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all
            ${scrolled ? 'bg-paper/90 backdrop-blur-xl border border-line shadow-soft' : 'bg-paper border border-line shadow-soft'}`}
          style={{ willChange: 'transform' }}
        >
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) =>
                `bs-nav-link px-4 py-2 rounded-full text-sm font-medium transition-colors
                 ${isActive ? 'text-ink is-active' : 'text-ash hover:text-ink'}`}>
              {l.label}
            </NavLink>
          ))}
        </motion.nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-ash hover:text-ink link-u">Login</Link>
          <Link to="/dashboard" className="btn-primary text-sm">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile — morphing hamburger */}
        <button
          className={`md:hidden p-2 ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`bs-burger inline-block ${open ? 'is-open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          className="md:hidden bg-cream border-t border-line overflow-hidden"
        >
          <div className="px-5 py-4 space-y-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-paper">{l.label}</NavLink>
            ))}
            <Link to="/dashboard" onClick={() => setOpen(false)} className="btn-primary w-full justify-center mt-3">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
