export default function Trading() {
  const focuses = ['Options strategies', 'Execution algos', 'Risk management', 'Psychology notes']
  const journal = [
    { title: 'Scaling into winners', tag: 'Psychology', read: '4 min' },
    { title: 'IV crush post-earnings', tag: 'Trading', read: '6 min' },
    { title: 'Managing risk in trending days', tag: 'Risk', read: '5 min' },
  ]

  return (
    <section id="trading" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Trading & Markets</h2>
        <p className="text-slate-300/90 mt-2">Where code meets markets.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-2">How it started</h3>
            <p className="text-slate-300/90 text-sm leading-relaxed">
              Started tracking markets to understand cause–effect. Built tools to answer my own questions—then shared them.
              Today, I focus on repeatable setups, risk-first thinking, and fast feedback loops.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focuses.map((f) => (
                <span key={f} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{f}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Trading Journal</h3>
              <a href="#blog" className="text-cyan-300 text-sm">View all</a>
            </div>
            <div className="mt-4 grid gap-3">
              {journal.map((j) => (
                <a key={j.title} href="#blog" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{j.title}</p>
                      <p className="text-slate-400 text-xs mt-1">{j.tag} • {j.read} read</p>
                    </div>
                    <span className="text-cyan-300 text-xs opacity-0 group-hover:opacity-100 transition">Read</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
