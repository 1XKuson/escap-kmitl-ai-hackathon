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

        {/* Problem area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border mb-24">
          <div className="p-8 lg:p-10 flex flex-col items-center text-center group">
            <div className="mb-6 transform group-hover:-translate-y-2 transition-transform">
              <AlertTriangle className="h-10 w-10 text-cmkl-crimson/70 group-hover:text-cmkl-crimson transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Speed of Trade vs. Speed of Law
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Digital data flows exceed 50 TB/s while national policy adaptation cycles remain trapped
              in a manual, 20th-century update process spanning years or decades.
            </p>
          </div>

          <div className="p-8 lg:p-10 flex flex-col items-center text-center group">
            <div className="mb-6 transform group-hover:-translate-y-2 transition-transform">
              <FileWarning className="h-10 w-10 text-cmkl-crimson/70 group-hover:text-cmkl-crimson transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {"The \"Shredded Map\" Reality"}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Regulatory data is locked in unstructured formats. Standard AI treats it as
              plain text, destroying logical hierarchy and leading to legal hallucinations.
            </p>
          </div>

          <div className="p-8 lg:p-10 flex flex-col items-center text-center group">
            <div className="mb-6 transform group-hover:-translate-y-2 transition-transform">
              <Crosshair className="h-10 w-10 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              The Objective
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {"Build a modular AI tool (Automated Regulatory Engine) that intelligently identifies, classifies, and summarizes digital trade regulatory provisions."}
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-24 relative">
          <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10 hidden md:block"></div>
          <div className="text-center mb-12 relative z-10">
            <h3
              className="text-xl sm:text-2xl font-bold text-foreground inline-block px-6 bg-background rounded-full border border-border py-2 max-w-full break-words"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Focus Areas: <span className="text-escap-blue">High-Impact Policy</span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            <div className="flex-1 max-w-sm mx-auto text-center md:text-right group">
              <span className="inline-block px-4 py-1.5 rounded-full bg-escap-blue/5 text-escap-blue text-xs font-bold uppercase tracking-wider mb-5 transition-colors group-hover:bg-escap-blue/10">Pillar 6</span>
              <h4 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Cross-Border Data Policies</h4>
              <ul className="flex flex-col gap-3 text-muted-foreground text-sm">
                <li className="flex items-center md:justify-end gap-3 justify-center">
                  <span className="md:order-last h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Ban & local processing requirements
                </li>
                <li className="flex items-center md:justify-end gap-3 justify-center">
                  <span className="md:order-last h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Data localization mandates
                </li>
                <li className="flex items-center md:justify-end gap-3 justify-center">
                  <span className="md:order-last h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Conditional flow regimes
                </li>
              </ul>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-px h-full bg-border"></div>
            </div>
            <div className="flex-1 max-w-sm mx-auto text-center md:text-left group">
              <span className="inline-block px-4 py-1.5 rounded-full bg-escap-blue/5 text-escap-blue text-xs font-bold uppercase tracking-wider mb-5 transition-colors group-hover:bg-escap-blue/10">Pillar 7</span>
              <h4 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Domestic Data Protection</h4>
              <ul className="flex flex-col gap-3 text-muted-foreground text-sm">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Legal framework gaps
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Mandatory data retention periods
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-escap-blue/50 shrink-0" />
                  Compliance costs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Pipeline */}
        <div>
          <h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-20 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Solution: <span className="text-primary">HtmlRAG & Structural Intelligence</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 -z-10"></div>

            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="h-24 w-24 rounded-full bg-background shadow-[0_0_30px_rgba(255,107,0,0.15)] border-2 border-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary mb-3 tracking-widest">MODULE A</span>
              <h4 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Extraction</h4>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[300px]">Detect passages with accurate source-grounded citations.</p>
            </div>

            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="h-24 w-24 rounded-full bg-background shadow-[0_0_30px_rgba(255,107,0,0.15)] border-2 border-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                <Tag className="h-10 w-10 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary mb-3 tracking-widest">MODULE B</span>
              <h4 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Classification</h4>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[300px]">Assign provisions to appropriate policy categories.</p>
            </div>

            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="h-24 w-24 rounded-full bg-background shadow-[0_0_30px_rgba(255,107,0,0.15)] border-2 border-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary mb-3 tracking-widest">MODULE C</span>
              <h4 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Summarization</h4>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[300px]">Generate concise summaries for non-technical officials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
