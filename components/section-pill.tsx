import type React from "react"

export function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/40">
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 blur-md opacity-60 -z-10" />
      {children}
    </span>
  )
}
