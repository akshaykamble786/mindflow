import { Brain, Sparkles, Link2, Search, Zap, Shield } from "lucide-react"
import { SectionPill } from "./section-pill"

const features = [
  {
    name: "AI-Powered Insights",
    description:
      "Our AI analyzes your notes and surfaces relevant connections, helping you discover hidden patterns in your thinking.",
    icon: Brain,
  },
  {
    name: "Smart Linking",
    description:
      "Automatically create bidirectional links between related notes. Build your personal knowledge graph effortlessly.",
    icon: Link2,
  },
  {
    name: "Instant Search",
    description: "Find anything in milliseconds with semantic search that understands context, not just keywords.",
    icon: Search,
  },
  {
    name: "Lightning Fast",
    description: "Built for speed with local-first architecture. Your notes are always available, online or offline.",
    icon: Zap,
  },
  {
    name: "AI Writing Assistant",
    description:
      "Generate ideas, expand on thoughts, or refine your writing with an AI assistant that knows your style.",
    icon: Sparkles,
  },
  {
    name: "Private & Secure",
    description: "End-to-end encryption keeps your thoughts private. Your data is yours—we never use it for training.",
    icon: Shield,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionPill>Features</SectionPill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to think better
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful features that adapt to your workflow and help you focus on what matters most.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
