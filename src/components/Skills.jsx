import { Server, LineChart, Rocket, PenTool } from 'lucide-react'

const skills = [
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'APIs, databases, and scalable systems. Comfortable with Node.js, Go, and system design patterns.'
  },
  {
    icon: LineChart,
    title: 'Algo Trading & Market Tools',
    desc: 'Building tools for options data, backtesting, and execution. Focused on risk-aware strategies.'
  },
  {
    icon: Rocket,
    title: 'Product & Growth',
    desc: 'Experimenting with funnels, onboarding, and acquisition loops to turn ideas into products.'
  },
  {
    icon: PenTool,
    title: 'Writing & Sharing',
    desc: 'Notes on trading psychology, backend patterns, and lessons from building in public.'
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">What I Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 text-cyan-300 flex items-center justify-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
