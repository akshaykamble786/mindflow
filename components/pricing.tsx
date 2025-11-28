import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { SectionPill } from "./section-pill"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Up to 100 notes", "Basic AI features", "Mobile apps", "Community support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For power users and professionals",
    features: [
      "Unlimited notes",
      "Advanced AI features",
      "Knowledge graph",
      "API access",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/user/month",
    description: "For teams who think together",
    features: [
      "Everything in Pro",
      "Shared workspaces",
      "Team knowledge base",
      "Admin controls",
      "SSO & SAML",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionPill>Pricing</SectionPill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, upgrade when you're ready. No credit card required.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                tier.featured
                  ? "bg-card border-2 border-purple-500/50 shadow-xl shadow-purple-500/10 ring-1 ring-purple-500/20"
                  : "bg-card border border-border hover:border-border/80"
              }`}
            >
              {tier.featured && (
                <div className="absolute -inset-px bg-gradient-to-b from-purple-500/20 via-transparent to-violet-500/20 rounded-2xl -z-10" />
              )}

              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="relative inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-purple-500/30">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 blur-sm opacity-50 -z-10" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.featured ? "text-purple-400" : "text-foreground"}`}>
                  {tier.price}
                </span>
                {tier.period && <span className="text-sm text-muted-foreground">{tier.period}</span>}
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${tier.featured ? "text-purple-400" : "text-accent"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.featured
                    ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold shadow-lg shadow-purple-500/25 border-0"
                    : ""
                }`}
                variant={tier.featured ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
