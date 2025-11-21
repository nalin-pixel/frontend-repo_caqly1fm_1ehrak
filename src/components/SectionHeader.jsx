import React from 'react'

export default function SectionHeader({ eyebrow, title, subtitle, cta }) {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-cyan-200">
            <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            {eyebrow}
          </div>
        )}
        <h2 className="mt-3 text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-slate-300/90 mt-1">{subtitle}</p>}
      </div>
      {cta}
    </div>
  )
}
