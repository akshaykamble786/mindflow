"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SectionPill } from "./section-pill"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "Mindflow has completely transformed how I capture and organize my research. The AI connections feature alone has saved me countless hours.",
    author: {
      name: "Sarah Chen",
      role: "PhD Researcher",
      image: "/professional-woman-researcher.png",
    },
  },
  {
    content:
      "As a product manager, I need to keep track of hundreds of conversations. Mindflow's smart linking makes it easy to never lose context.",
    author: {
      name: "Marcus Johnson",
      role: "Product Manager at Figma",
      image: "/professional-man-product-manager-portrait.jpg",
    },
  },
  {
    content:
      "The speed is incredible. I switched from Notion and the difference is night and day. Everything just feels instant.",
    author: {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      image: "/professional-woman-software-engineer.png",
    },
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionPill>Testimonials</SectionPill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Loved by knowledge workers
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Background decorative card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500" />

              {/* Main card */}
              <div className="relative flex flex-col rounded-2xl bg-card p-8 border border-border group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-500/5 group-hover:-translate-y-1">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="flex-1">
                  <p className="text-foreground leading-relaxed text-[15px]">"{testimonial.content}"</p>
                </blockquote>

                {/* Author section with gradient line separator */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                      <Avatar className="relative h-12 w-12 border-2 border-background">
                        <AvatarImage
                          src={testimonial.author.image || "/placeholder.svg"}
                          alt={testimonial.author.name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-violet-600 text-white font-semibold">
                          {testimonial.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-purple-400 transition-colors duration-300">
                        {testimonial.author.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
