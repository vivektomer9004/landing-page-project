import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "E- Commerce",
  "Education",
  "Health Care",
  "Financial",
  "HR",
  "Tourism",
];

const templates = [
  {
    title: "Chatbot for Marketing",
    description: "Provide recommendations and process transactions in a chat.",
    messages: [
      { type: "bot", text: "Great Happy yo help find the right plan for you 👋" },
      { type: "user", text: "What are you lookin to do with Rotar AI" },
      { type: "userAction", text: "Get more customer on my website page" },
    ],
  },
  {
    title: "Chatbot for HR",
    description:
      "Find talent and interact with candidates in an innovative way",
    messages: [
      {
        type: "bot",
        text: "You have qualified for the next round of interview, Alvarez! Please let me know your availability 👋",
      },
      { type: "userAction", text: "Any time between 2 to 5 PM tomorrow" },
    ],
  },
  {
    title: "Chatbot for Sales",
    description: "Optimize your sales pipeline and give your team more time",
    messages: [
      { type: "bot", text: "Great Happy yo help find the right plan for you 👋" },
      { type: "user", text: "What are you lookin to do with Rotar AI" },
      { type: "userAction", text: "Get more customer on my website page" },
    ],
  },
];

export function TemplatesSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Use{" "}
              <span className="bg-[#00ff6a] px-2 py-1 text-foreground">
                templates
              </span>
              <br />
              to get started
              <br />
              your project
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Template Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 lg:col-span-2">
            {templates.map((template, index) => (
              <div
                key={index}
                className="min-w-[280px] flex-shrink-0 rounded-2xl border border-border bg-card p-5"
              >
                {/* Chat Messages */}
                <div className="space-y-3 min-h-[120px]">
                  {template.messages.map((message, msgIndex) => (
                    <div
                      key={msgIndex}
                      className={`rounded-xl px-4 py-3 ${
                        message.type === "bot"
                          ? "bg-muted text-foreground text-sm"
                          : message.type === "userAction"
                          ? "bg-[#00ff6a] text-foreground text-sm font-medium"
                          : "bg-muted/50 text-muted-foreground text-sm"
                      }`}
                    >
                      <span>{message.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <h3 className="font-bold text-foreground">{template.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="mt-4 w-full rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Try template for free
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof - What top-tier companies tell */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2 items-start">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            What top-tier companies
            <br />
            tell about our product
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-md">
            Join the growing number of businesses and companies that have
            experienced the transformative impact of our chatbot services.
          </p>
        </div>
      </div>
    </section>
  );
}
