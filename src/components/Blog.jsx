import { useState } from 'react'

const posts = [
  { title: 'The invisible edge is discipline', tag: 'Mindset', read: '5 min', excerpt: 'Most edge is lost in execution. Here are simple guardrails that save me from myself.' },
  { title: 'Clean architecture for backend services', tag: 'Backend', read: '7 min', excerpt: 'How I think about module boundaries, testing seams, and fast iteration in production.' },
  { title: 'Risk-first trading notes', tag: 'Trading', read: '6 min', excerpt: 'Collecting ideas on risk budgeting, scaling, and avoiding ruin.' },
  { title: 'Build loops: from zero to first 100 users', tag: 'Startups', read: '8 min', excerpt: 'Tiny, repeatable actions that turn curiosity into a product feedback engine.' },
]

const tabs = ['All', 'Tech', 'Trading', 'Startups', 'Life & Thoughts']

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter(p => {
    if (active === 'Tech') return p.tag === 'Backend'
    if (active === 'Trading') return p.tag === 'Trading'
    if (active === 'Startups') return p.tag === 'Startups'
    if (active === 'Life & Thoughts') return p.tag === 'Mindset'
    return true
  })

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Writing & Blog</h2>
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} className={`px-3 py-1 rounded-xl text-xs border transition ${active===t ? 'bg-white/15 border-white/20 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a key={p.title} href="#" className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition shadow-lg">
              <div className="flex items-start justify-between">
                <span className="px-2 py-1 rounded-lg text-xs bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-white/10 text-cyan-200">{p.tag}</span>
                <span className="text-slate-400 text-xs">{p.read} read</span>
              </div>
              <h3 className="text-white font-semibold mt-3">{p.title}</h3>
              <p className="text-slate-300/90 text-sm mt-2">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
