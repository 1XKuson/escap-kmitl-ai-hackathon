import { ArrowRight, FileText, Video } from "lucide-react"
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/fade-in"

export function ApplySection({ dict }: { dict: any }) {
  return (
    <section id="apply" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            {dict.subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FadeInStaggerItem className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.pitch_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dict.pitch_desc}
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {dict.pitch_format}
            </span>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.video_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dict.video_desc}
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {dict.video_format}
            </span>
          </FadeInStaggerItem>
        </StaggerContainer>

        <FadeIn className="text-center">
          <a
            href="mailto:hackathon@unescap.org"
            className="glow-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {dict.btn}
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            {dict.contact}{" "}
            <a href="mailto:hackathon@unescap.org" className="text-escap-blue hover:underline">
              hackathon@unescap.org
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
