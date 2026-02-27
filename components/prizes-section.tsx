import { Trophy, Medal, Award, Sparkles, Cloud, Briefcase } from "lucide-react"

export function PrizesSection() {
  return (
    <section id="prizes" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Prizes & Incentives
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {"What's at Stake"}
          </h2>
          <p className="text-lg text-muted-foreground">
            Total Prize Pool:{" "}
            <span className="text-primary font-bold text-2xl">150,000 THB</span>
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Winner */}
          <div className="relative rounded-xl border-2 border-primary bg-card p-8 text-center md:order-2 md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
              WINNER
            </div>
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10 mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              75,000 THB
            </h3>
            <p className="text-sm text-muted-foreground">Grand Champion</p>
          </div>

          {/* 1st Runner Up */}
          <div className="rounded-xl border border-border bg-card p-8 text-center md:order-1">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-secondary mb-4">
              <Medal className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              50,000 THB
            </h3>
            <p className="text-sm text-muted-foreground">1st Runner-Up</p>
          </div>

          {/* 2nd Runner Up */}
          <div className="rounded-xl border border-border bg-card p-8 text-center md:order-3">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-secondary mb-4">
              <Award className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              25,000 THB
            </h3>
            <p className="text-sm text-muted-foreground">2nd Runner-Up</p>
          </div>
        </div>

        {/* Intangible benefits */}
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Beyond the Prize Money
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-escap-blue/10 mb-3">
                <Sparkles className="h-6 w-6 text-escap-blue" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">UN Expert Mentorship</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct guidance from UN experts and top academic faculty.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">SDG Contribution</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct contribution to Sustainable Development Goals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cmkl-crimson/10 mb-3">
                <Briefcase className="h-6 w-6 text-cmkl-crimson" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">RegTech Exposure</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Exposure to the cutting edge of RegTech in the Asia-Pacific.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
