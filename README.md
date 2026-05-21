# 🇮🇳 BharatSync — HackXcelerate 2K26 Frontend Boilerplate

> Pre-built frontend so you can focus on the **problem statement logic** during the 7-hour hackathon.
> Theme: **BharatSync — AI in Central Government Systems**

---

## ⚡ Quick Start (2 minutes)

```bash
cd bharatsync-hack
npm install
npm run dev
```

Open → http://localhost:5173

---

## 🎯 Strategy for Hackathon Day (7 hours)

| Hour | Task |
|------|------|
| 0:00 – 0:30 | Read PS carefully → decide which page is "the demo screen" |
| 0:30 – 1:00 | Update `src/data/config.js` (name, tagline, features, stats) |
| 1:00 – 3:00 | Build the **core feature** (the "wow" thing judges will see) |
| 3:00 – 5:00 | Wire AI (Gemini API key → `src/pages/AIChat.jsx`) |
| 5:00 – 6:00 | Add 1-2 unique pages/features specific to PS |
| 6:00 – 6:30 | Polish: spacing, mobile check, fix console errors |
| 6:30 – 7:00 | Prepare 2-min demo + PPT |

---

## 📁 What's Already Built

| File | Purpose |
|------|---------|
| `src/data/config.js`        | **EDIT THIS FIRST** — all text in one place |
| `src/App.jsx`               | Routing for 6 pages |
| `src/components/Navbar.jsx` | Sticky navbar with mobile menu |
| `src/components/Footer.jsx` | Tricolor footer |
| `src/pages/Landing.jsx`     | Hero + Features + CTA (judge's first impression) |
| `src/pages/Login.jsx`       | Aadhaar/DigiLocker style login |
| `src/pages/Dashboard.jsx`   | Stats + Recharts (line + bar) + activity feed |
| `src/pages/Feature.jsx`     | Feature bullets + tech stack card |
| `src/pages/AIChat.jsx`      | Chat UI — **plug Gemini API here** |
| `src/pages/About.jsx`       | Mission/Vision + Problem Statement display |

---

## 🎨 Theme System

Already set up in `tailwind.config.js`:

```
saffron  #FF9933   ← Indian flag top
ivory    #FFFFFF
leaf     #138808   ← Indian flag bottom
navy     #0A1F44   ← primary brand
navyDark #050E25   ← bg
ashoka   #0B3D91   ← Ashoka chakra blue
cyber    #00E5FF   ← AI accent (buttons, highlights)
```

Use in components: `bg-saffron`, `text-cyber`, `border-leaf`, etc.

### Reusable classes (defined in `src/index.css`)
- `.btn-primary` `.btn-ghost` — buttons
- `.card` — glass-morphism card
- `.chip` — small pill label
- `.grad-text` — tricolor gradient text
- `.container-x` — max-width container
- `.section-title` `.section-sub` — section headers

---

## 🔌 Plug Gemini API (Hour 3-5)

In `src/pages/AIChat.jsx`, replace the `setTimeout` block:

```js
const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_KEY', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ contents: [{ parts: [{ text: q }] }] })
})
const data = await res.json()
const reply = data.candidates[0].content.parts[0].text
setMessages(m => [...m, { role:'bot', text: reply }])
```

---

## 💡 BharatSync Project Ideas (depending on PS)

Be ready to pivot quickly:

1. **AI Grievance Routing** — citizen submits complaint → NLP routes to correct ministry
2. **Scheme Recommender** — Aadhaar + family income → AI suggests eligible schemes
3. **Multilingual Doc Translator** — upload gov circular → translate to 22 Indian languages
4. **Fraud Detector** — detect duplicate/fake PAN/Aadhaar applications
5. **Citizen Sentiment Dashboard** — analyze Twitter/X for policy feedback
6. **Smart RTI Filer** — AI helps draft RTI applications correctly
7. **PMO Q&A Bot** — citizens ask questions in Hindi about any scheme
8. **Predictive Disaster Aid** — predict relief fund requirements per district

---

## ✅ Pre-Hackathon Checklist (do TODAY)

- [ ] `npm install` works
- [ ] `npm run dev` runs, all 6 pages open
- [ ] Get Gemini API key → https://aistudio.google.com/app/apikey
- [ ] Decide team roles (1 frontend, 1 backend/AI, 1 PPT/demo)
- [ ] Bring laptop charger + mobile hotspot 🔋
- [ ] Pre-install: VS Code, Node 18+, Chrome, Git

**Good luck bhai! Jeet ke aana 🏆🇮🇳**
