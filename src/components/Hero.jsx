import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 pointer-events-none"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {['Backend Developer', 'Algo Trading', 'Startup Builder', 'Learner'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            I build, trade, and learn in public.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            I’m Tushar Wasake — a backend engineer exploring markets, algorithms, and product building. I share what I learn and ship useful tools along the way.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#blog" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:brightness-110 transition">
              Read My Blog
            </a>
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-slate-100 font-medium hover:bg-white/15 transition">
              View My Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
