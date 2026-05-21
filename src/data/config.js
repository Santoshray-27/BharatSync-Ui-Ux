// 🔧 EDIT THIS FILE FIRST — sab text ek jagah se control hota hai
// Kal problem statement aane ke baad bas yahan values change kar

export const APP = {
  name: "BharatSync",
  wordmark: "Bharat / Sync",
  tagline: "AI that speaks Bharat.",
  description:
    "A unified intelligence layer for India's central government — turning paperwork into conversations, queues into clicks, and citizens into participants.",
  team: "Team CodeBharat",
  problemStatement: "PROBLEM STATEMENT GOES HERE (replace after reveal)",
  year: "2026",
  location: "Pune, India"
}

export const CTA = {
  primary: { label: "Launch Dashboard",   to: "/dashboard" },
  ghost:   { label: "Try the AI",         to: "/chat" }
}

// Marquee words (top of hero)
export const MARQUEE = [
  "Aadhaar-grade Security",
  "12 Indian Languages",
  "Powered by Gemini",
  "Built for Digital India",
  "100% MeitY Compliant",
  "Open Source"
]

// Trusted by (logos row)
export const TRUSTED = [
  "Digital India", "MyGov", "DigiLocker", "ONDC", "Aadhaar", "UPI"
]

// Hero stat strip
export const HERO_STATS = [
  { k: "1.4B+", v: "Citizens" },
  { k: "248",   v: "Schemes" },
  { k: "22",    v: "Languages" },
  { k: "99.9%", v: "Uptime" }
]

// Feature cards — bento style
export const FEATURES = [
  {
    icon: "MessageSquareText",
    title: "Conversational Governance",
    desc: "Citizens ask in Hindi, Marathi, Tamil — AI replies with the right form, scheme, or office.",
    tag: "AI"
  },
  {
    icon: "ShieldCheck",
    title: "Aadhaar-grade Trust",
    desc: "End-to-end encryption, on-chain audit trails, zero data leaks — by design.",
    tag: "Security"
  },
  {
    icon: "Sparkles",
    title: "Predictive Schemes",
    desc: "Tell us your story; we tell you every scheme you're eligible for. Auto-apply included.",
    tag: "Smart"
  },
  {
    icon: "Languages",
    title: "True Multilingual",
    desc: "22 official languages, dialect-aware. Speak how you speak — we understand.",
    tag: "Bharat"
  },
  {
    icon: "Activity",
    title: "Real-time Insights",
    desc: "Live dashboards for ministries — see what citizens are asking, today, this hour.",
    tag: "Data"
  },
  {
    icon: "Workflow",
    title: "Auto-routed Grievances",
    desc: "NLP reads your complaint and routes it to the exact officer responsible.",
    tag: "Workflow"
  }
]

// How it works steps
export const STEPS = [
  { n: "01", t: "Ask anything",      d: "Type or speak in any Indian language. No forms, no jargon." },
  { n: "02", t: "AI understands",     d: "Gemini parses intent, checks eligibility, fetches the right service." },
  { n: "03", t: "Get it done",        d: "Apply, track, resolve — all in one screen, end-to-end." }
]

// Testimonials
export const TESTIMONIALS = [
  { q: "Pehli baar lagta hai government ne hum citizens ke baare mein socha hai.", a: "Ramesh K.", r: "Farmer, Maharashtra" },
  { q: "Filed 3 RTIs in 4 minutes. This is the future of Bharat.", a: "Anjali D.", r: "Journalist, Delhi" },
  { q: "Our ministry's response time dropped by 60%. Numbers don't lie.", a: "Dr. Iyer", r: "Joint Secretary, GoI" }
]

// FAQ
export const FAQ = [
  { q: "Is my Aadhaar data safe?", a: "We never store Aadhaar numbers. All auth is via UIDAI's official OTP flow with end-to-end encryption." },
  { q: "Which languages are supported?", a: "All 22 scheduled languages of India, with dialect detection for Hindi, Tamil, Telugu, Bengali, and Marathi." },
  { q: "Can other states/ministries integrate?", a: "Yes. We expose open REST + GraphQL APIs. Plug in via a single token." },
  { q: "Who built this?", a: "Built in 7 hours at HackXcelerate 2K26 by Team CodeBharat — for Bharat, by Bharat." }
]

// Dashboard data
export const STATS = [
  { label: "Citizens Served", value: "1.42 Cr", trend: "+12%" },
  { label: "Schemes Active",  value: "248",     trend: "+5%"  },
  { label: "Avg. Response",   value: "2.3 hrs", trend: "-18%" },
  { label: "Satisfaction",    value: "94%",     trend: "+3%"  }
]

export const CHART_DATA = [
  { month: "Jan", citizens: 4200, requests: 2400 },
  { month: "Feb", citizens: 5100, requests: 2800 },
  { month: "Mar", citizens: 6300, requests: 3200 },
  { month: "Apr", citizens: 7800, requests: 4100 },
  { month: "May", citizens: 9200, requests: 4900 },
  { month: "Jun", citizens: 11200,requests: 5600 }
]

export const FEATURE_BULLETS = [
  "Aadhaar-linked secure login",
  "AI chatbot in 12 Indian languages",
  "Real-time scheme eligibility checker",
  "DigiLocker integration",
  "Grievance auto-routing using NLP",
  "Predictive analytics dashboard"
]
