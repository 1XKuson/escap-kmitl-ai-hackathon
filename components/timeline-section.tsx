import { Rocket, Filter, Users, Award, Trophy } from "lucide-react"

const timelineSteps = [
  {
    month: "March 2026",
    title: "Global Launch",
    description: "Onboard talent and set technical benchmarks. Round 1 open call begins.",
    icon: Rocket,
    status: "active" as const,
  },
  {
    month: "April 2026",
    title: "Round 1 Shortlist",
    description: "Selection of the Top 20 teams based on technical functionality.",
    icon: Filter,
    status: "upcoming" as const,
  },
  {
    month: "May 2026",
    title: "Midpoint Review",
    description: "Virtual mentoring and online workshops with UN/KMITL experts.",
    icon: Users,
    status: "upcoming" as const,
  },
  {
    month: "August 2026",
    title: "Round 2 Shortlist",
    description: "Selection of the Top 5 \"policy-ready\" teams.",
    icon: Award,
    status: "upcoming" as const,
  },
  {
    month: "September 2026",
    title: "Grand Finale",
    description: "Onsite 3-hour 'Live Hack' and pitch demonstration of winning prototypes.",
    icon: Trophy,
    status: "upcoming" as const,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Project Timeline
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Roadmap to the Finale
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-5 gap-4">
            {timelineSteps.map((step, index) => (
              <div key={step.month} className="relative flex flex-col items-center text-center">
                {/* Dot on the line */}
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all ${
                    step.status === "active"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <step.icon
                    className={`h-8 w-8 ${
                      step.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                {/* Step number */}
                <span className="mt-4 text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{step.month}</span>
                <h4
                  className="mt-2 text-sm font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-6">
          {timelineSteps.map((step, index) => (
            <div key={step.month} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 shrink-0 ${
                    step.status === "active"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <step.icon
                    className={`h-5 w-5 ${
                      step.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-xs text-muted-foreground">{step.month}</span>
                <h4 className="text-base font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
