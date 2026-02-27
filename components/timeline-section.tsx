import { Rocket, Filter, Users, Award, Trophy } from "lucide-react"
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/fade-in"

export function TimelineSection({ dict }: { dict: any }) {
  const timelineSteps = [
    {
      month: dict.step1_month,
      title: dict.step1_title,
      description: dict.step1_desc,
      icon: Rocket,
      status: "active" as const,
    },
    {
      month: dict.step2_month,
      title: dict.step2_title,
      description: dict.step2_desc,
      icon: Filter,
      status: "upcoming" as const,
    },
    {
      month: dict.step3_month,
      title: dict.step3_title,
      description: dict.step3_desc,
      icon: Users,
      status: "upcoming" as const,
    },
    {
      month: dict.step4_month,
      title: dict.step4_title,
      description: dict.step4_desc,
      icon: Award,
      status: "upcoming" as const,
    },
    {
      month: dict.step5_month,
      title: dict.step5_title,
      description: dict.step5_desc,
      icon: Trophy,
      status: "upcoming" as const,
    },
  ]
  return (
    <section id="timeline" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            {dict.tagline}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {dict.title}
          </h2>
        </FadeIn>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-border" />
          <StaggerContainer className="grid grid-cols-5 gap-4">
            {timelineSteps.map((step, index) => (
              <FadeInStaggerItem key={step.month} className="relative flex flex-col items-center text-center">
                {/* Dot on the line */}
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all ${step.status === "active"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card"
                    }`}
                >
                  <step.icon
                    className={`h-8 w-8 ${step.status === "active" ? "text-primary" : "text-muted-foreground"
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
              </FadeInStaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile timeline */}
        <StaggerContainer className="md:hidden flex flex-col gap-6">
          {timelineSteps.map((step, index) => (
            <FadeInStaggerItem key={step.month} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 shrink-0 ${step.status === "active"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card"
                    }`}
                >
                  <step.icon
                    className={`h-5 w-5 ${step.status === "active" ? "text-primary" : "text-muted-foreground"
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
            </FadeInStaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
