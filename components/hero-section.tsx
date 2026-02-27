import { ArrowRight, Calendar, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16" style={{
      backgroundImage: `url('/hero-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    }}>
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />

      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-escap-blue/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cmkl-crimson/3 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Organizer badges */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <Globe className="h-4 w-4 text-escap-blue" />
            <span className="text-xs text-muted-foreground">UNESCAP</span>
          </div>
          <span className="text-muted-foreground text-xs">x</span>
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="text-xs text-primary font-semibold">KMITL</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">
          AI Hackathon 2026
        </p>

        {/* Main headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Pioneering the
          <br />
          <span className="text-primary">AI Frontier</span>{" "}
          in RegTech
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed text-pretty">
          Bridging the Governance Gap in Digital Trade & Sustainable Development.
          Build AI tools that transform how governments monitor complex regulations.
        </p>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">March - September 2026</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="glow-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Register Team & Download Datasets
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-secondary"
          >
            Learn More
          </a>
        </div>

        {/* Contact */}
        <p className="mt-8 text-xs text-muted-foreground">
          Contact us:{" "}
          <a href="mailto:hackathon@unescap.org" className="text-escap-blue hover:underline">
            hackathon@unescap.org
          </a>
        </p>

        {/* Partner logos */}
        <div className="mt-16 flex items-center justify-center gap-10 md:gap-16 flex-wrap opacity-70">
          <img
            src="/kmitl.png"
            alt="KMITL School of Engineering"
            className="h-20 md:h-24 w-auto object-contain dark:brightness-0 dark:invert transition-all"
          />
          <img
            src="/AW_ESCAP_LOGO_OFFICIAL.png"
            alt="UNESCAP"
            className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all"
          />
          <img
            src="/cmkl.png"
            alt="CMKL University"
            className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all"
          />
        </div>
      </div>
    </section>
  )
}
