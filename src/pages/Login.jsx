import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fingerprint, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Login() {
  const nav = useNavigate()
  const [aadhaar, setAadhaar] = useState('')

  const onSubmit = (e) => { e.preventDefault(); nav('/dashboard') }

  return (
    <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="eyebrow mb-3">// Welcome back</p>
        <h1 className="h-huge mb-6">Login as <em className="italic text-saffron">citizen.</em></h1>
        <p className="text-ash text-lg max-w-md mb-8">
          Secure access via Aadhaar OTP or DigiLocker. No passwords. No data stored. Ever.
        </p>
        <div className="flex items-center gap-3 text-sm text-ash">
          <ShieldCheck className="w-5 h-5 text-leaf" />
          <span>End-to-end encrypted · UIDAI-compliant</span>
        </div>
      </div>

      <div className="card shadow-lift">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-saffronL flex items-center justify-center">
            <Fingerprint className="w-6 h-6 text-saffron" />
          </div>
          <div>
            <h2 className="display-serif text-2xl">Aadhaar Sign-in</h2>
            <p className="text-ash text-sm">12-digit Aadhaar or registered email</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Field icon={<Mail className="w-4 h-4" />} label="Aadhaar / Email"
                 value={aadhaar} onChange={e => setAadhaar(e.target.value)}
                 placeholder="XXXX XXXX XXXX" />
          <Field icon={<Lock className="w-4 h-4" />} label="OTP / Password"
                 type="password" placeholder="••••••" />
          <button className="btn-accent w-full justify-center">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-ash">
          <div className="flex-1 h-px bg-line" /> OR <div className="flex-1 h-px bg-line" />
        </div>
        <button className="btn-ghost w-full justify-center">Continue with DigiLocker</button>

        <p className="text-center text-ash text-xs mt-5">
          By continuing you agree to BharatSync's Privacy Policy.
        </p>
      </div>
    </section>
  )
}

function Field({ icon, label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs text-ash font-medium uppercase tracking-wider">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 bg-cream border border-line rounded-2xl px-4 py-3 focus-within:border-ink transition-colors">
        <span className="text-ash">{icon}</span>
        <input {...props}
          className="bg-transparent outline-none w-full text-sm placeholder:text-ash/50" />
      </div>
    </label>
  )
}
