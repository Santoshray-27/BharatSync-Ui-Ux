import { CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FEATURE_BULLETS } from '../data/config.js'

export default function Feature() {
  return (
    <section className="container-x py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow mb-3">// Capabilities</p>
        <h1 className="h-huge mb-6">Everything you need to govern <em className="italic text-saffron">smarter.</em></h1>
        <p className="text-ash text-lg">A unified AI layer over India's digital public infrastructure — built to serve a billion.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-3">
          {FEATURE_BULLETS.map((b, i) => (
            <div key={i} className="card card-hover flex items-start gap-4 py-5">
              <span className="w-10 h-10 rounded-xl bg-leafL flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-leaf" />
              </span>
              <div>
                <p className="font-medium">{b}</p>
                <p className="text-sm text-ash mt-1">Available out-of-the-box. No setup required.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="card bg-ink text-cream border-ink">
            <Sparkles className="w-8 h-8 text-saffron mb-4" />
            <h3 className="display-serif text-3xl mb-3">Powered by Gemini + DPI</h3>
            <p className="text-cream/70 mb-6">
              BharatSync sits on top of Aadhaar, UPI, DigiLocker & ONDC — augmented with Google's Gemini AI for natural-language access to every government service.
            </p>
            <ul className="text-sm space-y-2.5 text-cream/80 mb-6">
              <li>· 99.9% uptime SLA</li>
              <li>· Open APIs for state integration</li>
              <li>· MeitY-compliant data handling</li>
            </ul>
            <Link to="/chat" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-saffron text-white font-medium hover:bg-cream hover:text-ink transition-colors">
              Try a live demo <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
