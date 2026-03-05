import { ArrowRight, Calendar, Globe } from "lucide-react"

export function HeroSection({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-32 pb-16 sm:pt-40 sm:pb-24" style={{
      backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    }}>
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />

      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-escap-blue/5 blur-3xl animate-float hidden md:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] md:h-[600px] w-[300px] md:w-[600px] rounded-full bg-cmkl-crimson/3 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-0">
        {/* UN logo */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/UN.png`}
          alt="UN"
          className="mx-auto block mb-8 h-16 sm:h-20 md:h-24 w-auto object-contain transition-all hover:scale-105"
        />
        {/* Tagline */}
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">
          {dict.tagline}
        </p>

        {/* Main headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 break-words"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {dict.title_1}
          <br className="hidden sm:block" />
          <span className="text-primary">{dict.title_2}</span>{" "}
          <br className="sm:hidden" />
          {dict.title_3}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed text-pretty">
          {dict.subtitle}
        </p>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">{dict.date}</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="glow-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {dict.btn_register}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-secondary"
          >
            {dict.btn_learn}
          </a>
        </div>

        {/* Contact */}
        <p className="mt-8 text-xs text-muted-foreground">
          Contact us:{" "}
          <a href="mailto:regtech2026@kmitl.ac.th" className="text-escap-blue hover:underline">
            regtech2026@kmitl.ac.th
          </a>
        </p>

        {/* Partner logos */}
        <div className="mt-4 mb-4 flex flex-col items-center justify-center gap-6 sm:gap-10 w-full max-w-6xl mx-auto px-4 overflow-hidden">
          {/* Row 1: International Organizations */}
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-6 md:gap-10 w-full">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AW_ESCAP_LOGO_OFFICIAL.png`}
              alt="ESCAP"
              className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ECLAC.png`}
              alt="ECLAC"
              className="h-6 sm:h-10 md:h-14 lg:h-16 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/UNECA.png`}
              alt="UNECA"
              className="h-7 sm:h-10 md:h-14 lg:h-16 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/UNCTAD_Master_Logo_Blue.png`}
              alt="UNCTAD"
              className="h-6 sm:h-9 md:h-12 lg:h-16 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/World_Trade_Organization_(logo_and_wordmark).svg.png`}
              alt="World Trade Organization"
              className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/WORLD_BANK.webp`}
              alt="The World Bank"
              className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
          </div>

          {/* Row 2: Universities and Institutes */}
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/kmitl.png`}
              alt="KMITL School of Engineering"
              className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cmkl.png`}
              alt="CMKL University"
              className="h-4 sm:h-7 md:h-10 lg:h-12 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/smu.jpg`}
              alt="SMU"
              className="h-6 sm:h-10 md:h-14 lg:h-16 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/university-of-birmingham-logo.jpg`}
              alt="University of Birmingham"
              className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Uni_Glasgow_1.jpg`}
              alt="University of Glasgow"
              className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/LOGO-EUI.png`}
              alt="EUI"
              className="h-4 sm:h-7 md:h-10 lg:h-12 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/UQ.png`}
              alt="The University of Queensland"
              className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/APRU.jpg`}
              alt="APRU"
              className="h-4 sm:h-7 md:h-10 lg:h-12 w-auto min-w-0 flex-1 object-contain transition-all hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
