import React from 'react'

export default function GlowCard({ children, className = '' }) {
  return (
    <div className={`neon-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:border-white/20 transition ${className}`}>
      {children}
    </div>
  )
}
