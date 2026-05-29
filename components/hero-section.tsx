"use client";

import { ArrowUpRight, Moon, Sun, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Website Development
              <br />
              & Designing{" "}
              <span className="inline-flex items-center gap-2">
                <span className="rounded-full bg-accent px-2 py-1 text-accent-foreground">
                  for
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground">
                  <Moon className="h-5 w-5" />
                  <Sun className="h-3 w-3" />
                </span>
              </span>
              <br />
              <span className="text-accent-foreground bg-accent px-2">
                Business Growth
              </span>
            </h1>

            <p className="mt-6 max-w-md text-muted-foreground">
              Embrace AI chatbot technology in a GPT-4-supported communication
              tool to help your customers, empower your team, and reduce your
              workload.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl bg-[#f5f0e0] p-4">
                <h3 className="font-semibold text-foreground">
                  Guide: The Rotar AI
                </h3>
                <h4 className="font-semibold text-foreground">
                  Tutorial Hand Book
                </h4>
                <p className="mt-2 text-sm text-accent">
                  Everything you need to know
                </p>
                <p className="text-sm text-accent">
                  about the first steps in chatbots.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-card p-4 shadow-sm">
                  <span className="text-3xl font-bold text-foreground">
                    + 500
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Big companies use Rotar AI for
                  </p>
                  <p className="text-sm text-muted-foreground">their services</p>
                </div>

                <div className="rounded-xl bg-primary p-4">
                  <div className="flex gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                  </div>
                  <p className="mt-2 font-semibold text-primary-foreground">
                    AI-driven
                  </p>
                  <p className="text-lg font-bold text-accent">
                    customer service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-6 font-medium text-accent">
                You can start with just one click.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border-border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm text-muted-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border-border"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-muted-foreground">
                      Phone No
                    </label>
                    <Input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full rounded-lg border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Service
                  </label>
                  <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground">
                    <option>Service</option>
                    <option>Web Development</option>
                    <option>AI Integration</option>
                    <option>Customer Service</option>
                  </select>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
