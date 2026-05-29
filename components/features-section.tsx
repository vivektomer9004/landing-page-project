import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Top Row - Description and Headline */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description */}
          <div>
            <p className="mb-6 max-w-sm text-muted-foreground leading-relaxed">
              Throughout your customer&apos;s entire buying journey, Rotar AI
              allow you to delight them at every step of the way, from their
              first visit to the final purchase.
            </p>

            <Button className="rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right - Headline */}
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              <span className="bg-[#00ff6a] px-2 py-1 text-foreground">
                Redefining
              </span>{" "}
              Conversations and{" "}
              <span className="bg-[#00ff6a] px-2 py-1 text-foreground">
                Enhancing
              </span>{" "}
              User experience{" "}
              <span className="ml-2 inline-flex items-center gap-2 rounded-full border-2 border-foreground px-3 py-1 align-middle">
                <Eye className="h-5 w-5" />
                <ArrowRight className="h-4 w-4" />
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom Row - Feature Cards and Device Mockups */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left - Feature Cards */}
          <div className="space-y-4">
            <div className="rounded-xl bg-[#f5f0e0] p-6">
              <h3 className="text-lg font-bold text-foreground">Engage</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Reach out to visitors proactively using personalized chatbot
                greetings. Turn website visits into sales opportunities.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground">Nurture</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lead customers to a sale through recommended purchases and
                tailored offerings.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground">Qualify</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Generate and qualify prospects automatically. Transfer
                high-intent leads to your sales reps in real time to shorten
                the sales cycle.
              </p>
            </div>
          </div>

          {/* Right - Device Mockups */}
          <div className="relative flex items-end justify-center">
            {/* Mint green background blob */}
            <div className="absolute bottom-0 right-0 h-64 w-80 rounded-tl-[100px] bg-[#00ff6a]/30" />

            {/* Phone Mockup */}
            <div className="relative z-10 -mr-16 mb-8">
              <div className="h-72 w-36 rounded-[2.5rem] border-[6px] border-foreground bg-foreground shadow-2xl">
                {/* Notch */}
                <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-foreground" />
                {/* Screen */}
                <div className="mx-1 mt-1 h-[calc(100%-2rem)] rounded-[2rem] bg-zinc-900" />
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="relative z-20">
              <div className="h-44 w-72 rounded-t-xl border-[6px] border-foreground bg-foreground">
                {/* Screen */}
                <div className="h-full w-full rounded-t-lg bg-zinc-900 p-2">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs text-zinc-600">MacBook</span>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-3 w-80 -ml-4 rounded-b-xl bg-zinc-300">
                <div className="mx-auto h-full w-16 rounded-t-sm bg-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
