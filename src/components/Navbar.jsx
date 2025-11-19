import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 shadow-lg shadow-fuchsia-500/30"></div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-widest text-white/70">Figuring Out Media</p>
                <p className="-mt-1 text-xs text-white/50">with Nimesh Chavda</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:brightness-110 transition"
              >
                Talk to us
              </a>
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white md:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Talk to us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
