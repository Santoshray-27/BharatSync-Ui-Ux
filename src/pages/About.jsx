import { APP } from '../data/config.js'
import { Target, Eye, Code2 } from 'lucide-react'

export default function About() {
  return (
    <section className="container-x py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow mb-3">// About</p>
        <h1 className="h-huge mb-6">{APP.name} — <em className="italic text-saffron">our story.</em></h1>
        <p className="text-ash text-lg">Built in 7 hours at HackXcelerate 2K26 — with the heart of a billion citizens.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          { i: Target, t:"Mission", d:"Make every government service one tap away for every Indian." },
          { i: Eye,    t:"Vision",  d:"A digitally empowered Bharat where governance feels human." },
          { i: Code2,  t:"Stack",   d:"React · Tailwind · Gemini AI · Firebase · Aadhaar APIs" }
        ].map((x,i) => (
          <div key={i} className="card card-hover">
            <div className="w-12 h-12 rounded-xl bg-cream border border-line flex items-center justify-center mb-5">
              <x.i className="w-5 h-5 text-ink" />
            </div>
            <h3 className="display-serif text-2xl mb-2">{x.t}</h3>
            <p className="text-ash">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="card bg-saffronL border-saffron/30 max-w-4xl">
        <p className="chip mb-3 border-saffron/40">🎯 Problem Statement</p>
        <p className="display-serif text-2xl text-ink">{APP.problemStatement}</p>
        <p className="text-ash text-xs mt-4">→ Edit in <code className="font-mono bg-paper px-2 py-0.5 rounded">src/data/config.js</code></p>
      </div>
    </section>
  )
}
