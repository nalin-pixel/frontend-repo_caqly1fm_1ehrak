export default function Timeline() {
  const items = [
    { title: 'Early interest in markets', desc: 'Learning patterns, journaling trades, asking questions.' },
    { title: 'Growth & marketing experience', desc: 'Understanding users, experiments, and acquisition loops.' },
    { title: 'Learning to code', desc: 'Fell in love with backend systems and clean abstractions.' },
    { title: 'Building trading tools & platforms', desc: 'Turning curiosity into products that help decisions.' },
    { title: 'Future goals', desc: 'Expand projects, collaborate, build serious products.' },
  ]

  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Timeline / Journey</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"/>
          <div className="space-y-6">
            {items.map((it, idx) => (
              <div key={it.title} className="relative pl-12 sm:pl-16">
                <div className="absolute left-2.5 sm:left-4 top-3 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]"/>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                  <div className="text-slate-400 text-xs">Step {idx + 1}</div>
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
