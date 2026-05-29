import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-t-3xl bg-accent p-8 md:p-12">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-3xl bg-card/20" />
          <div className="absolute bottom-0 right-32 h-16 w-16 rounded-t-3xl bg-card/20" />

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

        {/* Footer Content */}
        <div className="rounded-b-3xl bg-primary p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h4 className="font-bold text-primary-foreground">Company</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    About Rotar AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-primary-foreground">Resources</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Tool Library
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-primary-foreground">Legal</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm text-primary-foreground/70">
                We are at the forefront of AI chatbot development,
                revolutionizing the way businesses engage with their customers.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Twitter
              </a>
              <a
                href="#"
                className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Github
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary-foreground">
                <span className="text-xs font-bold text-primary-foreground">
                  R
                </span>
              </div>
              <span className="text-sm text-primary-foreground">
                Rotar AI. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
