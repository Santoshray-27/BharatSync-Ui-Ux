import { Link } from 'react-router-dom'
import { Github, ArrowUpRight, Twitter, Linkedin } from 'lucide-react'
import { APP } from '../data/config.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      {/* huge wordmark */}
      <div className="container-x pt-20 pb-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <p className="eyebrow text-cream/50 mb-3">Building for</p>
            <p className="display-serif text-3xl">A smarter, fairer,<br/> faster Bharat.</p>
          </div>

          <div>
            <p className="eyebrow text-cream/50 mb-4">Product</p>
            <ul className="space-y-2.5 text-cream/80">
              <li><Link to="/dashboard" className="link-u">Dashboard</Link></li>
              <li><Link to="/feature"   className="link-u">Features</Link></li>
              <li><Link to="/chat"      className="link-u">AI Chat</Link></li>
              <li><Link to="/about"     className="link-u">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/50 mb-4">Connect</p>
            <ul className="space-y-2.5 text-cream/80">
              <li><a href="#" className="inline-flex items-center gap-2 link-u">GitHub <Github className="w-3.5 h-3.5"/></a></li>
              <li><a href="#" className="inline-flex items-center gap-2 link-u">Twitter <Twitter className="w-3.5 h-3.5"/></a></li>
              <li><a href="#" className="inline-flex items-center gap-2 link-u">LinkedIn <Linkedin className="w-3.5 h-3.5"/></a></li>
              <li><a href="#" className="inline-flex items-center gap-2 link-u">hello@bharatsync.in <ArrowUpRight className="w-3.5 h-3.5"/></a></li>
            </ul>
          </div>
        </div>

        {/* MEGA wordmark */}
        <div className="overflow-hidden">
          <p className="display-serif leading-none text-[clamp(4rem,18vw,16rem)] tracking-tighter text-cream/95 select-none">
            {APP.name}
          </p>
        </div>

        <div className="divider border-cream/10 mt-8 pt-6 flex flex-wrap justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {APP.name} — Built at HackXcelerate 2K26 by {APP.team}</p>
          <p>{APP.location} · v1.0</p>
        </div>
      </div>
    </footer>
  )
}
