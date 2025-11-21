import React from 'react'

// Aesthetic background layers: animated grid + floating neon orbs
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Animated neon grid */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(55%_55%_at_50%_40%,black,transparent)]">
        <div className="w-full h-full bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] animate-drift" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -top-24 left-10 size-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.6),rgba(59,130,246,0.15)_45%,transparent_60%)] blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-10 size-[420px] rounded-full bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.55),rgba(56,189,248,0.2)_50%,transparent_60%)] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 size-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.5),rgba(59,130,246,0.18)_50%,transparent_60%)] blur-3xl animate-float-fast" />

      {/* Soft vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,transparent,rgba(2,6,23,0.65))]" />
    </div>
  )
}
