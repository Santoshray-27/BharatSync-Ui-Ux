import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  APP, CTA, MARQUEE, TRUSTED, HERO_STATS,
  FEATURES, STEPS, TESTIMONIALS, FAQ
} from '../data/config.js'
import {
  container, containerFast, fadeUp, wordContainer, word,
  bentoCard, stepPop, slideLeft, slideRight, accordion,
  viewportOnce, EASE
} from '../utils/motionVariants.js'
import { useCountUp } from '../utils/useCountUp.js'

export default function Landing() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trusted />
      <Bento />
      <Steps />
      <Showcase />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

/* ════════════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════════════ */
function Hero() {
  const headline = ['AI', 'that', 'speaks']
  const headline2 = ['Built', 'for', 'a', 'billion.']

  return (
    <section className="relative overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bs-dot-grid pointer-events-none" />

      {/* Floating particle blobs — drift via CSS */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-saffron blur-3xl opacity-10 bs-drift-a pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[380px] h-[380px] rounded-full bg-ashoka blur-3xl opacity-10 bs-drift-b pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-leaf blur-3xl opacity-10 bs-drift-c pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] rounded-full bg-lemon blur-3xl opacity-10 bs-drift-d pointer-events-none" />

      <div className="container-x relative pt-16 lg:pt-24 pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="chip">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
            Live at HackXcelerate 2K26
          </span>
          <span className="hidden sm:inline text-xs text-ash">BharatSync v1.0 → AI in Central Government Systems</span>
        </motion.div>

        {/* Word-by-word stagger headline */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="h-mega"
        >
          {headline.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.25em]" style={{ willChange: 'transform' }}>
              {w}
            </motion.span>
          ))}
          <motion.em variants={word} className="inline-block italic text-saffron mr-[0.25em]" style={{ willChange: 'transform' }}>
            Bharat.
          </motion.em>
          <br />
          {headline2.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-ash" style={{ willChange: 'transform' }}>
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <div className="grid lg:grid-cols-12 gap-10 mt-12 items-end">
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            className="lg:col-span-7"
          >
            <p className="text-lg sm:text-xl text-ash max-w-2xl leading-relaxed">
              {APP.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={CTA.primary.to} className="btn-accent group">
                {CTA.primary.label}
                <Icons.ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link to={CTA.ghost.to} className="btn-ghost">
                <Icons.Bot className="w-4 h-4" /> {CTA.ghost.label}
              </Link>
            </div>
          </motion.div>

          {/* Glassmorphism stat cards with count-up */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            transition={{ delayChildren: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3">
              {HERO_STATS.map((s, i) => (
                <StatCard key={i} target={s.k} label={s.v} />
              ))}
            </div>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function StatCard({ target, label }) {
  const [ref, value] = useCountUp(target)
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 p-6 shadow-soft"
      style={{ willChange: 'transform' }}
    >
      <p ref={ref} className="display-serif text-4xl text-ink">{value}</p>
      <p className="text-sm text-ash mt-1">{label}</p>
    </motion.div>
  )
}

function HeroVisual() {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" animate="show"
      transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
      className="relative mt-20"
    >
      <div className="bs-float-chat relative rounded-[2rem] bg-paper border border-line shadow-lift overflow-hidden">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 text-xs text-ash font-mono">bharatsync.gov.in/chat</span>
        </div>
        <div className="grid md:grid-cols-5">
          <div className="hidden md:block md:col-span-1 border-r border-line p-5 bg-cream">
            <p className="eyebrow mb-4">Services</p>
            {['PM-KISAN','Aadhaar','Passport','PAN','Scholarship','RTI'].map((s,i) => (
              <div key={i} className={`px-3 py-2 rounded-lg text-sm mb-1 ${i===0?'bg-ink text-cream':'text-ash hover:bg-paper'}`}>{s}</div>
            ))}
          </div>
          <div className="md:col-span-4 p-6 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-saffronL flex items-center justify-center shrink-0">
                <Icons.User className="w-4 h-4 text-saffron" />
              </div>
              <div className="bg-cream rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-md">
                नमस्ते! मुझे PM-KISAN के लिए apply करना है, मैं eligible हूँ?
              </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center shrink-0">
                <Icons.Sparkles className="w-4 h-4 text-cream" />
              </div>
              <div className="bg-ink text-cream rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-md">
                <p>हाँ रमेश जी ✓ आप eligible हैं। 3 details चाहिए:</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="bg-cream/10 rounded-lg p-2 text-xs">Aadhaar ✓</div>
                  <div className="bg-cream/10 rounded-lg p-2 text-xs">Land Record ✓</div>
                  <div className="bg-saffron/30 rounded-lg p-2 text-xs">Bank ⏵</div>
                </div>
              </div>
            </div>
            {/* Typing indicator */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-saffronL flex items-center justify-center shrink-0">
                <Icons.User className="w-4 h-4 text-saffron" />
              </div>
              <div className="bg-cream rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-ash">
                <span className="bs-typing-dot" />
                <span className="bs-typing-dot" />
                <span className="bs-typing-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges with individual speeds */}
      <div className="hidden md:flex bs-float-1 absolute -top-6 -left-6 card shadow-lift items-center gap-2 px-4 py-2.5">
        <Icons.ShieldCheck className="w-4 h-4 text-leaf" />
        <span className="text-sm font-medium">Aadhaar Verified</span>
      </div>
      <div className="hidden md:flex bs-float-2 absolute -bottom-6 right-10 card shadow-lift items-center gap-2 px-4 py-2.5">
        <Icons.Zap className="w-4 h-4 text-saffron" />
        <span className="text-sm font-medium">2.3s avg response</span>
      </div>
      <div className="hidden md:flex bs-float-3 absolute top-1/2 -right-4 card shadow-lift items-center gap-2 px-4 py-2.5">
        <Icons.Languages className="w-4 h-4 text-ashoka" />
        <span className="text-sm font-medium">22 भाषाएँ</span>
      </div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════════
   MARQUEE (pure CSS, pausable on hover)
   ════════════════════════════════════════════════════════════════ */
function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <section className="py-10 border-y border-line bg-paper overflow-hidden bs-marquee-wrap">
      <div className="bs-marquee-track">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-6 shrink-0">
            <span className="display-serif text-3xl sm:text-5xl text-ink whitespace-nowrap">{t}</span>
            <span className="display-serif text-3xl sm:text-5xl text-saffron">·</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   TRUSTED
   ════════════════════════════════════════════════════════════════ */
function Trusted() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="section"
    >
      <div className="container-x text-center">
        <motion.p variants={fadeUp} className="eyebrow mb-8">
          Built on India's Digital Public Infrastructure
        </motion.p>
        <motion.div variants={containerFast} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TRUSTED.map((t, i) => (
            <motion.span
              key={i} variants={fadeUp}
              className="display-serif text-2xl text-ash hover:text-ink transition-colors cursor-default"
              style={{ willChange: 'transform' }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

/* ════════════════════════════════════════════════════════════════
   BENTO GRID (named CSS grid areas, asymmetric)
   ════════════════════════════════════════════════════════════════ */
function Bento() {
  const areas = ['a','b','c','d','e','f']
  const tags  = FEATURES // assumes 6 items
  return (
    <motion.section
      variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
      className="section"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-6 mb-12 items-end">
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <p className="eyebrow mb-3">// What we built</p>
            <h2 className="h-huge">Governance, <em className="italic text-saffron">reimagined.</em></h2>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="text-ash text-lg">
              Six modules. One platform. Built so every Indian — from a farmer in Vidarbha to a coder in Bengaluru — can access government like Gen-Z accesses Instagram.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric bento using named template areas */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateAreas: `
              "a a a b b b"
              "a a a c c d"
              "e e f f d d"
            `,
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: 'minmax(140px, auto)'
          }}
        >
          {tags.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Star
            const isLarge = i === 0
            const isAccent = i === 3
            return (
              <motion.div
                key={i}
                variants={bentoCard}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3, ease: EASE } }}
                className={`relative rounded-3xl p-7 transition-shadow shadow-soft hover:shadow-lift overflow-hidden
                  ${isLarge ? 'bs-conic-border bg-paper' :
                    isAccent ? 'bg-ink text-cream border border-ink' :
                    'bg-paper border border-line'}`}
                style={{ gridArea: areas[i], willChange: 'transform' }}
              >
                {isLarge && <div className="absolute inset-0 card-pattern opacity-40 pointer-events-none" />}
                <div className="relative flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                    ${isAccent ? 'bg-cream/10 text-saffron' : 'bg-cream border border-line text-ink'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={isAccent ? 'chip-dark' : 'chip'}>{f.tag}</span>
                </div>
                <h3 className={`display-serif relative mb-2 ${isLarge ? 'text-3xl' : 'text-2xl'}`}>{f.title}</h3>
                <p className={`relative ${isAccent ? 'text-cream/70' : 'text-ash'}`}>{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

/* ════════════════════════════════════════════════════════════════
   STEPS (dark bg, big numbers, animated connector)
   ════════════════════════════════════════════════════════════════ */
function Steps() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="section bg-ink text-cream relative overflow-hidden">
      <div className="container-x relative">
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="eyebrow text-cream/50 mb-3">// How it works</motion.p>
          <motion.h2 variants={fadeUp} className="h-huge">
            Three steps. <em className="italic text-saffron">Zero queues.</em>
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Animated horizontal connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
            className="hidden md:block absolute top-[88px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent origin-left"
          />

          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-6 relative"
          >
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-3xl bg-cream/5 border border-cream/10 p-8 hover:bg-cream/10 transition-colors"
              >
                <div className="absolute inset-0 bs-spotlight rounded-3xl pointer-events-none" />
                <motion.p
                  variants={stepPop}
                  className="display-serif text-saffron relative"
                  style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1, willChange: 'transform' }}
                >
                  {s.n}
                </motion.p>
                <h3 className="display-serif text-3xl mt-4 mb-3 relative">{s.t}</h3>
                <p className="text-cream/70 relative">{s.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   SHOWCASE
   ════════════════════════════════════════════════════════════════ */
function Showcase() {
  return (
    <motion.section
      variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
      className="section"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideLeft}>
            <p className="eyebrow mb-3">// A platform, not an app</p>
            <h2 className="h-huge mb-6">One screen. <em className="italic text-saffron">Every service.</em></h2>
            <p className="text-ash text-lg mb-8">
              From applying for a passport to filing an RTI, from checking PM-KISAN status to booking a Seva Kendra slot — BharatSync collapses 100+ government portals into a single, intuitive interface.
            </p>
            <ul className="space-y-3">
              {['No more 14 different portals','No more "server down" at 9am','No more forms in English-only'].map((x,i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icons.Check className="w-5 h-5 text-leaf shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/dashboard" className="btn-primary mt-8">
              See the dashboard <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={slideRight} className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-saffronL via-cream to-leafL p-8 ring-glow">
              <div className="bg-paper rounded-2xl p-6 shadow-lift">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-medium">Today's Activity</p>
                  <span className="chip">Live</span>
                </div>
                {[
                  ['PM-KISAN application', '✓ Approved', 'text-leaf'],
                  ['Passport renewal',     'Processing', 'text-saffron'],
                  ['Aadhaar address update','Verified',  'text-ashoka'],
                  ['RTI #2891',            'Routed',    'text-ash']
                ].map(([t, s, c], i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-line last:border-0">
                    <span className="text-sm">{t}</span>
                    <span className={`text-xs font-medium ${c}`}>{s}</span>
                  </div>
                ))}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[24,42,18].map((h,i) => (
                    <div key={i} className="bg-cream rounded-lg p-3">
                      <div className="h-12 flex items-end gap-1">
                        {[40,65,30,80,55,h].map((v,j) => (
                          <div key={j} className="flex-1 bg-ink rounded-sm" style={{height:`${v}%`}} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 card shadow-lift max-w-[200px] bs-float-2">
              <p className="display-serif text-3xl">+340%</p>
              <p className="text-sm text-ash">Faster than legacy portals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

/* ════════════════════════════════════════════════════════════════
   TESTIMONIALS (alternating slide-in + mouse-tilt)
   ════════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="section bg-paper border-y border-line">
      <div className="container-x">
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">// Voices of Bharat</motion.p>
          <motion.h2 variants={fadeUp} className="h-huge">
            Loved by <em className="italic text-saffron">citizens</em> & <em className="italic text-leaf">ministries.</em>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TiltCard key={i} t={t} dir={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ t, dir }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [rot, setRot] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const cx = e.clientX - r.left - r.width / 2
    const cy = e.clientY - r.top - r.height / 2
    const max = 6
    setRot({
      x: -((cy / (r.height / 2)) * max),
      y:  ((cx / (r.width  / 2)) * max)
    })
  }
  const onLeave = () => setRot({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      initial={dir === 'left' ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 800,
        transform: `perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
        willChange: 'transform'
      }}
      className="relative card card-hover overflow-hidden"
    >
      {/* Huge quote mark */}
      <span
        aria-hidden
        className="display-serif text-saffron absolute -top-6 -left-2 select-none pointer-events-none"
        style={{ fontSize: '8rem', lineHeight: 1, opacity: 0.10 }}
      >
        “
      </span>
      <Icons.Quote className="w-8 h-8 text-saffron mb-4 relative" />
      <p className="display-serif text-2xl leading-snug mb-6 relative">{t.q}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-line relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-lemon" />
        <div>
          <p className="text-sm font-medium">{t.a}</p>
          <p className="text-xs text-ash">{t.r}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════════
   FAQ (smooth height accordion)
   ════════════════════════════════════════════════════════════════ */
function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <motion.section
      variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
      className="section"
    >
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <motion.div variants={slideLeft} className="lg:col-span-4">
          <p className="eyebrow mb-3">// FAQ</p>
          <h2 className="h-huge">Questions, <em className="italic text-saffron">answered.</em></h2>
          <p className="text-ash mt-6">
            Can't find what you're looking for? <a href="#" className="link-u text-ink font-medium">Talk to the team →</a>
          </p>
        </motion.div>

        <motion.div variants={containerFast} className="lg:col-span-8 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`relative rounded-3xl border cursor-pointer overflow-hidden transition-colors duration-300
                  ${isOpen ? 'bg-ink text-cream border-ink' : 'bg-paper border-line hover:border-ink/30'}`}
              >
                {/* Saffron left border when open */}
                {isOpen && (
                  <motion.span
                    layoutId={`faq-bar-${i}`}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-saffron"
                  />
                )}
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="display-serif text-2xl">{f.q}</p>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
                        ${isOpen ? 'bg-saffron text-white' : 'bg-cream text-ink'}`}
                    >
                      <Icons.ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        variants={accordion}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-cream/80">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

/* ════════════════════════════════════════════════════════════════
   FINAL CTA
   ════════════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <motion.section
      variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}
      className="section"
    >
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          className="bs-gradient-shift relative rounded-[2.5rem] p-10 lg:p-20 overflow-hidden"
        >
          {/* Grain overlay */}
          <div className="bs-grain" />

          {/* Soft white blur */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/20 blur-2xl pointer-events-none" />

          {/* Spinning ring */}
          <div className="bs-spin-slow absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/30" />
          <div className="bs-spin-slow absolute bottom-10 right-32 w-20 h-20 rounded-full border border-white/40" style={{ animationDuration: '12s' }} />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-white/80 mb-4">// Ready when you are</p>
            <h2 className="h-huge text-white">
              Let's build <em className="italic">Bharat 2.0</em> — together.
            </h2>
            <p className="text-white/90 text-lg mt-6 mb-8 max-w-xl">
              Whether you're a citizen, a coder, or a ministry — there's a seat for you at this table.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-ink text-cream hover:bg-white hover:text-ink transition-colors">
                Launch Dashboard <Icons.ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/chat" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-white/40 text-white hover:bg-white hover:text-ink transition-colors">
                Talk to AI <Icons.Bot className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
