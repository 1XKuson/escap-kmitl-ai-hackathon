import { Code, Scale, Users } from "lucide-react"

export function TeamsSection({ dict }: { dict: any }) {
  return (
    <section id="teams" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            {dict.tagline}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {dict.title}
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-primary/10 mb-4">
              <Code className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.tech_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {dict.tech_desc}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-escap-blue/10 mb-4">
              <Scale className="h-7 w-7 text-escap-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.policy_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {dict.policy_desc}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-cmkl-crimson/10 mb-4">
              <Users className="h-7 w-7 text-cmkl-crimson" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.members_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {dict.members_desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
