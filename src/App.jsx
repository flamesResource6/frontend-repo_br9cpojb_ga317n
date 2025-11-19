import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      {/* Main sections */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(236,72,153,0.06),transparent_40%),radial-gradient(700px_circle_at_90%_20%,rgba(59,130,246,0.06),transparent_40%)]"></div>
        <Services />
        <Showcase />
        <Process />
        <CTA />
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Figuring Out Media. All rights reserved.</p>
            <p className="text-white/50">Made for the internet’s favorite generation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
