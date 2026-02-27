import { AlertTriangle, FileWarning, Crosshair, Database, Tag, FileText } from "lucide-react"

export function ChallengeSection() {
  return (
    <section id="challenge" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cmkl-crimson font-semibold mb-3">
            The Challenge
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Governance Gap
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cmkl-crimson/10 mb-5">
              <AlertTriangle className="h-6 w-6 text-cmkl-crimson" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Speed of Trade vs. Speed of Law
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Digital data flows exceed 50 TB/s while national policy adaptation cycles remain trapped
              in a manual, 20th-century update process spanning years or decades. This creates
              invisible trade barriers.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cmkl-crimson/10 mb-5">
              <FileWarning className="h-6 w-6 text-cmkl-crimson" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {"The \"Shredded Map\" Reality"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Regulatory data locked in unstructured PDF or HTML formats. Standard AI treats it as
              plain text, destroying logical hierarchy, nested clauses, and table logic -- leading
              to dangerous hallucinations and broken legal logic.
            </p>
          </div>

          <div className="rounded-xl border border-primary/30 bg-card p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <Crosshair className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              The Objective
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Move from a \"shredded map\" to a \"whole map\" solution. Build a working, modular AI tool (Automated Regulatory Engine) that identifies, classifies, and summarizes digital trade regulatory provisions."}
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Focus Areas: <span className="text-escap-blue">High-Impact Policy Pillars</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-escap-blue/20 bg-card p-6 sm:p-8">
              <span className="inline-block rounded-md bg-escap-blue/10 px-3 py-1 text-xs font-semibold text-escap-blue mb-4">
                Pillar 6
              </span>
              <h4 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Cross-Border Data Policies
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Ban & local processing requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Data localization mandates
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Conditional flow regimes
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-escap-blue/20 bg-card p-6 sm:p-8">
              <span className="inline-block rounded-md bg-escap-blue/10 px-3 py-1 text-xs font-semibold text-escap-blue mb-4">
                Pillar 7
              </span>
              <h4 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Domestic Data Protection & Privacy
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Legal framework gaps
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Mandatory data retention periods
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-escap-blue shrink-0" />
                  Compliance costs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Pipeline */}
        <div>
          <h3
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Solution: <span className="text-primary">HtmlRAG & Structural Intelligence</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Module A</span>
              <h4 className="text-lg font-bold text-foreground mt-2 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Identification & Extraction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Detect relevant passages and output exact spans with accurate source-grounded citations.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Tag className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Module B</span>
              <h4 className="text-lg font-bold text-foreground mt-2 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Policy Classification
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Assign provisions to predefined policy categories with an AI rationale.
              </p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Module C</span>
              <h4 className="text-lg font-bold text-foreground mt-2 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Policy Summarization
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generate concise, plain-language summaries highlighting regulatory intent for non-technical officials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
