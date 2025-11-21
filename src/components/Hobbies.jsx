export default function Hobbies() {
  const enjoy = ['Deep work sessions', 'Learning new tools', 'Exploring cities', 'Long walks', 'Reading', 'Watching markets']
  const icons = [
    { icon: '🎧', label: 'Listening to music' },
    { icon: '📚', label: 'Reading non-fiction' },
    { icon: '🎥', label: 'Movies / series' },
    { icon: '✈️', label: 'Occasional travel' },
    { icon: '🍜', label: 'Trying new food' },
  ]
  const day = ['Morning routines', 'Work & code', 'Markets', 'Learning & side projects', 'Late-night thinking']

  return (
    <section id="hobbies" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Hobbies & Personal Life</h2>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-2">Things I Enjoy Doing</h3>
            <div className="flex flex-wrap gap-2">
              {enjoy.map((e) => (
                <span key={e} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{e}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-4">When I’m Not Working</h3>
            <div className="grid grid-cols-2 gap-3">
              {icons.map((i) => (
                <div key={i.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl">{i.icon}</div>
                  <div className="text-slate-300 text-sm mt-1">{i.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-2">Day In My Life</h3>
            <div className="flex flex-wrap gap-2">
              {day.map((d, idx) => (
                <div key={d} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm flex items-center gap-2">
                  <span className="text-xs text-slate-400">{idx + 1}</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
