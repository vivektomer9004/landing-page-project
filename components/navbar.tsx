"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[100vw] bg-background px-4 py-6">
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center">
        {/* Nav Links Pill - Centered */}
        <div className="flex items-center gap-8 rounded-full bg-inherit px-6 py-2 shadow-sm ring-1 ring-black/5">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Book a Demo Button - Outside pill, at the end */}
        <Button
          size="sm"
          className="hidden rounded-full bg-[#00ff6a] px-5 py-2 text-sm font-medium text-black hover:bg-[#00e65f] md:flex"
        >
          Book a demo
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-2 max-w-xs rounded-2xl bg-inherit p-4 shadow-sm ring-1 ring-black/5 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <Button
              size="sm"
              className="w-full rounded-full bg-[#00ff6a] text-sm font-medium text-black hover:bg-[#00e65f]"
            >
              Book a demo
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
