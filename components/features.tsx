'use client'
import { Brain, Sparkles, Link2, Search, Zap, Shield } from "lucide-react"
import { SectionPill } from "./section-pill"
import { useEffect, useRef, useState } from "react";

const features = [
  {
    name: "AI-Powered Insights",
    description:
      "Our AI analyzes your notes and surfaces relevant connections, helping you discover hidden patterns in your thinking.",
    icon: Brain,
    color: "from-primary to-chart-2",
    delay: 0,
  },
  {
    name: "Smart Linking",
    description:
      "Automatically create bidirectional links between related notes. Build your personal knowledge graph effortlessly.",
    icon: Link2,
    color: "from-chart-2 to-accent",
    delay: 100,
  },
  {
    name: "Instant Search",
    description: "Find anything in milliseconds with semantic search that understands context, not just keywords.",
    icon: Search,
    color: "from-accent to-chart-4",
    delay: 200,
  },
  {
    name: "Lightning Fast",
    description: "Built for speed with local-first architecture. Your notes are always available, online or offline.",
    icon: Zap,
    color: "from-chart-4 to-primary",
    delay: 300,
  },
  {
    name: "AI Writing Assistant",
    description:
      "Generate ideas or expand on thoughts with an AI assistant that knows your style.",
    icon: Sparkles,
    color: "from-primary to-chart-2",
    delay: 400,
  },
  {
    name: "Private & Secure",
    description: "End-to-end encryption keeps your thoughts private. Your data is yours.",
    icon: Shield,
    color: "from-chart-2 to-accent",
    delay: 500,
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), feature.delay)
        }
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [feature.delay])

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group cursor-pointer border rounded-2xl
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {/* Glow effect on hover */}
      <div
        className={`
          absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl
          transition-opacity duration-500
          ${isHovered ? "opacity-30" : "opacity-0"}
        `}
      />

      {/* Card */}
      <div className="relative glass rounded-2xl p-8 h-full overflow-hidden">
        {/* Animated border */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-r ${feature.color}
            transition-opacity duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
          style={{ padding: "1px" }}
        >
          <div className="w-full h-full bg-card rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animated background */}
          <div className="relative w-14 h-14 mb-6">
            <div
              className={`
                absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl
                transition-all duration-500
                ${isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"}
              `}
            />
            <div className="absolute inset-0.5 bg-card rounded-[10px] flex items-center justify-center">
              <feature.icon
                className={`
                  w-6 h-6 transition-all duration-500
                  ${isHovered ? "text-primary scale-110" : "text-muted-foreground"}
                `}
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{feature.name}</h3>

          <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>

          {/* Animated line */}
          <div className="mt-6 h-px bg-border overflow-hidden">
            <div
              className={`
                h-full bg-gradient-to-r ${feature.color}
                transition-all duration-700 ease-out
                ${isHovered ? "w-full" : "w-0"}
              `}
            />
          </div>
        </div>

        {/* Corner decoration */}
        <div
          className={`
            absolute -top-20 -right-20 w-40 h-40
            bg-gradient-to-br ${feature.color} rounded-full blur-3xl
            transition-opacity duration-500
            ${isHovered ? "opacity-20" : "opacity-0"}
          `}
        />
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionPill>Features</SectionPill>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to think clearly
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
