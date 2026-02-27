import { ArrowRight, FileText, Video } from "lucide-react"

export function ApplySection() {
  return (
    <section id="apply" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            How to Apply
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Round 1: Global Open Call
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            In Round 1, prototype development is not required. To accept the challenge, your team must submit:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              5-Slide Pitch Deck
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Clearly present the problem, your proposed RegTech solution, use of AI/LLMs, and expected impact.
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              PDF Format - In English
            </span>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              7-Minute Video
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Explain the problem context and your solution concept. Showcase your team and their expertise.
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              Video Presentation - In English
            </span>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:hackathon@unescap.org"
            className="glow-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Register Team & Download Datasets
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Contact us at{" "}
            <a href="mailto:hackathon@unescap.org" className="text-escap-blue hover:underline">
              hackathon@unescap.org
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
