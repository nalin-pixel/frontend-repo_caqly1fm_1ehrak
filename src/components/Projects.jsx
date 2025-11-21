import { ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader'
import GlowCard from './GlowCard'

const projects = [
  {
    name: 'Options Flow Explorer',
    problem: 'Make options activity readable and actionable for retail traders.',
    features: ['Realtime stream', 'Strategy tagging', 'Smart filters', 'Heatmap views'],
    stack: ['Node.js', 'Go', 'React', 'MongoDB'],
  },
  {
    name: 'Backtest Studio',
    problem: 'Prototype strategies quickly with readable config and fast runs.',
    features: ['CSV + APIs', 'Vectorized engine', 'Risk metrics', 'Report exports'],
    stack: ['Python', 'Pandas', 'Plotly'],
  },
  {
    name: 'Inbox to User',
    problem: 'Tiny growth kit to turn responses into product signups.',
    features: ['Email parsing', 'Auto-tagging', 'Webhook actions'],
    stack: ['Node.js', 'MongoDB', 'Cloud Functions'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Builds & Case Studies"
          title="My Projects"
          subtitle="Small, sharp tools shipped fast. Focus on clarity, performance, and outcomes."
          cta={<a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm inline-flex items-center gap-2">View all <ExternalLink size={16} /></a>}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <GlowCard key={p.name} className="group p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{p.problem}</p>
                </div>
                <a href="#" className="shrink-0 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-white/10 text-cyan-200 text-xs">Case Study</a>
              </div>

              <ul className="mt-4 space-y-1 text-sm text-slate-300/90 list-disc list-inside">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
