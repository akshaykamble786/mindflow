"use client"

import { useEffect, useRef, useState } from "react"
import { SectionPill } from "./section-pill"

const testimonialsRow1 = [
  {
    content:
      "Mindflow's AI understands context like no other tool. It connects my ideas in ways I never thought possible.",
    author: "Sarah Chen",
    role: "Product Designer",
    company: "Figma",
    initials: "SC",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    content:
      "I capture fleeting thoughts instantly and Mindflow organizes them into a knowledge base that grows smarter every day.",
    author: "Marcus Johnson",
    role: "Startup Founder",
    company: "TechVentures",
    initials: "MJ",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    content:
      "As a researcher, organizing knowledge is everything. Mindflow has become my second brain for all my projects.",
    author: "Dr. Emily Rodriguez",
    role: "Research Lead",
    company: "MIT Media Lab",
    initials: "ER",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    content:
      "The speed at which I can find and connect information has 10x'd my productivity. Absolutely game-changing.",
    author: "David Park",
    role: "Engineering Manager",
    company: "Stripe",
    initials: "DP",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    content: "Finally, a note-taking app that thinks the way I do. The AI suggestions are eerily accurate.",
    author: "Lisa Thompson",
    role: "Content Strategist",
    company: "Notion",
    initials: "LT",
    gradient: "from-pink-500 to-rose-600",
  },
]

const testimonialsRow2 = [
  {
    content:
      "I've tried every knowledge management tool out there. Mindflow is the only one that stuck. It just works.",
    author: "Alex Rivera",
    role: "Product Manager",
    company: "Linear",
    initials: "AR",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    content:
      "The way Mindflow surfaces relevant notes exactly when I need them feels like magic. Pure productivity boost.",
    author: "Nina Patel",
    role: "UX Researcher",
    company: "Vercel",
    initials: "NP",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    content: "My lecture notes, research papers, and project ideas - all connected. Mindflow sees patterns I miss.",
    author: "James Wilson",
    role: "PhD Candidate",
    company: "Stanford",
    initials: "JW",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    content:
      "As a writer, capturing ideas quickly is crucial. Mindflow's instant capture has saved countless brilliant moments.",
    author: "Sophia Martinez",
    role: "Author & Journalist",
    company: "The Verge",
    initials: "SM",
    gradient: "from-rose-500 to-red-600",
  },
  {
    content:
      "The AI-powered linking is incredible. It found connections between notes from 2 years ago that changed my project.",
    author: "Michael Chang",
    role: "Creative Director",
    company: "Spotify",
    initials: "MC",
    gradient: "from-blue-500 to-cyan-600",
  },
]

function TestimonialCard({
  testimonial,
  isVisible,
  delay,
}: {
  testimonial: (typeof testimonialsRow1)[0]
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`group relative flex-shrink-0 w-[350px] md:w-[400px] mx-3 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glassmorphism card */}
      <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08]">
        {/* Animated bottom border on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mb-6">
          <p className="text-foreground/90 leading-relaxed text-[15px]">"{testimonial.content}"</p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          {/* Gradient avatar with initials */}
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 lg:py-24 overflow-hidden relative">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionPill>Testimonials</SectionPill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Loved by knowledge workers
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Join thousands of thinkers who transformed how they capture and connect ideas.
          </p>
        </div>

        <div className="space-y-6 overflow-x-clip">
          {/* Row 1 - scrolls left to right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                  isVisible={isVisible}
                  delay={(index % testimonialsRow1.length) * 100}
                />
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right to left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                  isVisible={isVisible}
                  delay={(index % testimonialsRow2.length) * 100}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Join 50,000+ thinkers</span>
          </button>
        </div>
      </div>
    </section>
  )
}
