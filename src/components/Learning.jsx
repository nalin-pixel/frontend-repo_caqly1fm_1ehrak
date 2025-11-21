export default function Learning() {
  const now = ['Advanced backend patterns', 'Go', 'Distributed systems', 'AI + trading']
  const radar = ['Event-driven design', 'Time-series databases', 'Realtime infra']

  return (
    <section id="learning" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Currently Learning</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-3">Learning Now</h3>
            <div className="flex flex-wrap gap-2">
              {now.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-cyan-500/20 border border-cyan-400/30 text-cyan-200">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-3">On My Radar</h3>
            <div className="flex flex-wrap gap-2">
              {radar.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-fuchsia-500/20 border border-fuchsia-400/30 text-fuchsia-200">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-slate-300/90 text-sm mt-6 max-w-3xl">
          I believe in compounding through consistent learning. My goal is to build mental models and
          systems that help me ship better products and trade with clarity.
        </p>
      </div>
    </section>
  )
}
