export default function Values() {
  const quotes = [
    'Build > talk.',
    'Small consistent progress beats random intensity.',
    'Tools should empower, not confuse.',
  ]

  return (
    <section id="values" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Values & Philosophy</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <p className="text-slate-200 text-lg">“{q}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
