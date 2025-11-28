"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Typewriter } from "@/components/typewriter"

export function Hero() {
  const rotatingWords = ["smarter", "clearer", "effortlessly", "brilliantly"]

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground/20 transition-all">
              <span className="font-medium text-accent">New:</span> AI-powered knowledge graphs{" "}
              <a href="#" className="font-semibold text-foreground">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">Think faster,</span>
            <span className="block mt-1 sm:mt-2">
              <span className="text-muted-foreground">write </span>
              <Typewriter
                words={rotatingWords}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2500}
                className="text-accent"
              />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mindflow is the AI-powered workspace that helps you capture ideas, organize knowledge, and discover
            connections you never knew existed.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-medium rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Start for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium rounded-full bg-transparent">
              Watch demo
            </Button>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-accent/5">
              <div className="rounded-xl bg-secondary/50 overflow-hidden">
                <img
                  src="/modern-minimal-note-taking-app-dashboard-with-ai-f.jpg"
                  alt="Mindflow app dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -right-4 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
