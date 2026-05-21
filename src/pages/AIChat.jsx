import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const SUGGESTIONS = [
  "How do I apply for PM-KISAN?",
  "Check my scholarship status",
  "Nearest passport seva kendra?",
  "मेरा आधार अपडेट कैसे करें?"
]

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role:'bot', text:"नमस्ते 🙏 I'm BharatSync AI. Ask me anything about government schemes & services." }
  ])
  const [input, setInput] = useState('')
  const scroller = useRef()

  useEffect(() => { scroller.current?.scrollTo(0, scroller.current.scrollHeight) }, [messages])

  const send = (text) => {
    const q = text || input
    if (!q.trim()) return
    setMessages(m => [...m, { role:'user', text:q }])
    setInput('')
    // 🔌 PLUG GEMINI/OPENAI API CALL HERE
    setTimeout(() => {
      setMessages(m => [...m, {
        role:'bot',
        text:`(Demo) You asked: "${q}". Connect Gemini API in src/pages/AIChat.jsx to get real answers.`
      }])
    }, 600)
  }

  return (
    <section className="container-x py-12">
      <div className="text-center mb-8">
        <p className="eyebrow mb-2">// Ask Bharat</p>
        <h1 className="h-huge">Talk to <em className="italic text-saffron">Bharat</em>.</h1>
      </div>

      <div className="card shadow-lift max-w-3xl mx-auto flex flex-col h-[70vh] p-0 overflow-hidden">
        <div className="flex items-center gap-3 p-5 border-b border-line">
          <div className="w-10 h-10 rounded-xl bg-saffronL flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-saffron" />
          </div>
          <div>
            <h2 className="font-semibold">BharatSync Assistant</h2>
            <p className="text-xs text-ash">Multilingual · Powered by Gemini</p>
          </div>
        </div>

        <div ref={scroller} className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2 ${m.role==='user' ? 'justify-end' : 'justify-start'}`}>
              {m.role==='bot' && (
                <div className="w-8 h-8 rounded-full bg-saffronL flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-saffron" />
                </div>
              )}
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm
                ${m.role==='user' ? 'bg-ink text-cream rounded-tr-sm' : 'bg-cream text-ink rounded-tl-sm'}`}>
                {m.text}
              </div>
              {m.role==='user' && (
                <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-cream" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 px-5 py-3 border-t border-line">
          {SUGGESTIONS.map((s,i) => (
            <button key={i} onClick={() => send(s)} className="chip hover:border-ink hover:text-ink">
              {s}
            </button>
          ))}
        </div>

        <form onSubmit={(e)=>{e.preventDefault();send()}} className="flex gap-2 p-4 border-t border-line bg-cream">
          <input value={input} onChange={e=>setInput(e.target.value)}
            placeholder="Ask in any language..."
            className="flex-1 bg-paper border border-line rounded-full px-5 py-3 outline-none focus:border-ink text-sm" />
          <button className="btn-accent !px-4"><Send className="w-4 h-4" /></button>
        </form>
      </div>
    </section>
  )
}
