"use client";

import { ArrowUpRight, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Testimonial Card */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Client Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Client testimonial"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h4 className="text-xl font-bold text-accent">Mbida Messi</h4>
              <p className="text-sm text-accent">
                Founder ERC Music Market Store
              </p>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="rounded-2xl bg-accent p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2">
              <Quote className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">
                Client Testimonial
              </span>
            </div>

            <p className="text-xl font-medium leading-relaxed text-accent-foreground md:text-2xl">
              I was amazed by the level of assistance I received from the AI
              Chatbot provided by ROTAR AI. It quickly understood my questions
              and provided accurate and helpful responses.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-accent-foreground/20 pt-6">
              <span className="text-sm text-accent-foreground">1 / 4</span>
              <Button
                variant="outline"
                className="border-accent-foreground bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              >
                See more testimonials
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 rounded-2xl bg-accent p-8 md:p-12">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Take control of your productivity
            <br />
            with a GPT-4 chatbot now
          </h2>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm text-muted-foreground">
              Transform your Customer Service with Rotar&apos;s AI and GPT-4
              Powered Chatbot Solution. Try it free now.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-foreground bg-transparent text-foreground hover:bg-foreground/10"
              >
                Contact Us
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
