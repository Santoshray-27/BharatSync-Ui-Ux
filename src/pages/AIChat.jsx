import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

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
  const [loading, setLoading] = useState(false)
  const scroller = useRef()

  useEffect(() => { scroller.current?.scrollTo(0, scroller.current.scrollHeight) }, [messages, loading])

  const send = async (text) => {
    const q = text || input
    if (!q.trim() || loading) return
    
    setMessages(m => [...m, { role:'user', text:q }])
    setInput('')
    setLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyCMxza8GPAF7My4i-ewhsnnCs3lEPJakOc"
      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are BharatSync AI, a helpful, friendly, and respectful digital assistant for Indian government schemes and citizen services (like Aadhaar, PM-KISAN, DigiLocker, passport services, etc.). Answer queries in the same language as the user (English, Hindi, Marathi, Tamil, etc.). Provide clear, concise, and accurate answers, using bullet points where appropriate."
      })

      // Map chat history excluding greeting
      const history = messages.slice(1).map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }))

      const chat = model.startChat({ history })
      const result = await chat.sendMessage(q)
      const reply = await result.response.text()

      setMessages(m => [...m, { role:'bot', text: reply }])
    } catch (err) {
      console.error(err)
      setMessages(m => [...m, {
        role:'bot',
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment."
      }])
    } finally {
      setLoading(false)
    }
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
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap
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
          {loading && (
            <div className="flex gap-2 justify-start items-center">
              <div className="w-8 h-8 rounded-full bg-saffronL flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-saffron" />
              </div>
              <div className="bg-cream text-ash rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-5 py-3 border-t border-line">
          {SUGGESTIONS.map((s,i) => (
            <button key={i} onClick={() => send(s)} disabled={loading} className="chip hover:border-ink hover:text-ink disabled:opacity-50">
              {s}
            </button>
          ))}
        </div>

        <form onSubmit={(e)=>{e.preventDefault();send()}} className="flex gap-2 p-4 border-t border-line bg-cream">
          <input value={input} onChange={e=>setInput(e.target.value)} disabled={loading}
            placeholder={loading ? "Thinking..." : "Ask in any language..."}
            className="flex-1 bg-paper border border-line rounded-full px-5 py-3 outline-none focus:border-ink text-sm disabled:opacity-50" />
          <button type="submit" disabled={loading} className="btn-accent !px-4 disabled:opacity-50"><Send className="w-4 h-4" /></button>
        </form>
      </div>
    </section>
  )
}
