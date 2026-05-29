"use client";

import { MessageCircle } from "lucide-react";

export function BentoGridSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Company Logos Row */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 border-t border-b border-border/30 py-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-base font-medium text-muted-foreground/50"
            >
              Company
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column - Title & Integrations */}
          <div className="space-y-6 lg:col-span-4">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Deliver a high-
              <br />
              quality{" "}
              <span className="bg-accent px-2 text-accent-foreground">
                customer
              </span>
              <br />
              <span className="inline-flex items-center gap-2">
                <span className="bg-accent px-2 text-accent-foreground">
                  experience
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border-2 border-foreground px-3 py-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                  </svg>
                  <span className="text-sm font-medium">{"))"}</span>
                </span>
              </span>
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Embrace AI chatbot technology in a GPT-4-supported communication
              tool to help your customers, empower your team, and reduce your
              workload.
            </p>

            {/* Integration Icons Card */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>
              
              <div className="relative">
                <div className="flex flex-wrap gap-3 mb-6">
                  {/* Notion */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="text-xl font-bold text-black">N</span>
                  </div>
                  {/* Google Meet */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FBBC05"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" fill="#34A853"/>
                      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10" fill="#4285F4"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12" fill="#EA4335"/>
                      <circle cx="12" cy="12" r="4" fill="white"/>
                    </svg>
                  </div>
                  {/* Slack */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
                    </svg>
                  </div>
                  {/* Microsoft Teams */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6264A7] shadow-md">
                    <span className="text-lg font-bold text-white">T</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  Automate your workflow with our integrations
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Connect Rotar AI with your customer service, sales, marketing,
                  and recruitment tools using our user-friendly API, webhooks,
                  or Zapier integration.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Chat Demo & Centralize */}
          <div className="space-y-6 lg:col-span-4">
            {/* Chat Demo Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              {/* User message */}
              <div className="flex items-center justify-end gap-2 mb-3">
                <span className="text-sm font-medium text-foreground">
                  James Kokolomei
                </span>
                <div className="h-8 w-8 rounded-full bg-gray-300" />
              </div>

              <div className="flex justify-end mb-4">
                <div className="rounded-lg bg-accent px-4 py-2">
                  <span className="text-sm text-accent-foreground">
                    {"I've forgotten my password"}
                  </span>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent shrink-0">
                  <span className="text-sm font-bold text-accent-foreground">
                    R
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-accent text-sm">Rotar Robot</span>
                  <div className="mt-2 rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      No worries, we&apos;ve all been in a melancholy situation
                      like that. To reset your password, go to the login page
                      and click on Forgot Password? Then, enter the email
                      address and follow it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <h3 className="text-base font-bold text-foreground">
                  Boost conversations 96% with AI
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our AI-powered chatbots and automation tools are here to help.
                </p>
              </div>
            </div>

            {/* Centralize Communication Card */}
            <div className="rounded-2xl bg-primary p-5">
              <h3 className="text-base font-bold text-primary-foreground">
                Centralize Your Communication
              </h3>
              <p className="mt-2 text-xs text-primary-foreground/70 leading-relaxed">
                Easily respond to chats from all of your channels in one
                overview.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {/* WhatsApp */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366]">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                {/* Messenger */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent-foreground">
                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.506 3.68 7.21V22l3.363-1.846c.896.252 1.847.388 2.957.388 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2z"/>
                  </svg>
                </div>
                {/* Instagram */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                {/* Telegram */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0088cc]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                {/* Twitter */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1da1f2]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Chat & Insights */}
          <div className="space-y-6 lg:col-span-4">
            {/* Always Accessible Card */}
            <div className="rounded-2xl bg-accent p-5">
              <h3 className="text-base font-bold text-foreground">
                Always accessible with our live chat.
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Enhance Communication with Real-Time Live Chat.
              </p>

              <div className="mt-4 space-y-2">
                <div className="h-3 w-full rounded-full bg-white" />
                <div className="h-3 w-3/4 rounded-full bg-white" />
                <div className="h-3 w-5/6 rounded-full bg-white" />
              </div>
            </div>

            {/* Insights Card */}
            <div className="rounded-2xl bg-accent p-5">
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-28 w-28">
                  <svg
                    className="h-full w-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="white"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeDasharray="251"
                      strokeDashoffset="220"
                      strokeLinecap="round"
                      className="text-foreground"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-foreground">
                      12,5%
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                      Conversation
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                      Employee
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground">
                Gain valuable insights from your audience
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Statistics provide valuable insights into how customers
                interact with Rotar AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
