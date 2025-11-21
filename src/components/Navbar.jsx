import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Blog', href: '#blog' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trading', href: '#trading' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'About', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Tushar</span>
              <span className="text-white/80">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-xl text-slate-200/90 bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
