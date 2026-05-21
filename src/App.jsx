import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'   // landing eager — first paint
import Login from './pages/Login.jsx'

// 🚀 Code-split heavy pages for faster initial load
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const AIChat    = lazy(() => import('./pages/AIChat.jsx'))
const Feature   = lazy(() => import('./pages/Feature.jsx'))
const About     = lazy(() => import('./pages/About.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="container-x py-32 flex justify-center">
      <div className="flex items-center gap-2 text-ash">
        <span className="bs-typing-dot text-saffron" />
        <span className="bs-typing-dot text-saffron" />
        <span className="bs-typing-dot text-saffron" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <div className="tricolor-strip" />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"          element={<Landing />} />
            <Route path="/login"     element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feature"   element={<Feature />} />
            <Route path="/chat"      element={<AIChat />} />
            <Route path="/about"     element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
