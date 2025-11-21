export default function Favorites() {
  const books = ['Atomic Habits', 'The Psychology of Money', 'Deep Work']
  const channels = ['Acquired', 'My First Million', 'Two Minute Papers']
  const tools = ['VS Code', 'Notion', 'Slack', 'GitHub', 'Raycast']

  return (
    <section id="favorites" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Things I Love</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-3">Books</h3>
            <div className="flex flex-wrap gap-2">
              {books.map((b) => (
                <span key={b} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{b}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-3">Podcasts / Channels</h3>
            <div className="flex flex-wrap gap-2">
              {channels.map((c) => (
                <span key={c} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{c}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-white font-semibold mb-3">Tools & Apps</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
