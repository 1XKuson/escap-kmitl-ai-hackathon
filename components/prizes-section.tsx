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

        {/* Prize podium */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-24 min-h-[300px]">
          {/* 1st Runner Up */}
          <div className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-1 pt-10">
            <h3 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>50,000 THB</h3>
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">1st Runner-Up</p>
            <div className="w-full bg-secondary/80 rounded-t-2xl border-t-4 border-muted-foreground h-32 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Medal className="h-10 w-10 text-muted-foreground drop-shadow-md group-hover:-translate-y-2 transition-transform" />
            </div>
          </div>

          {/* Winner */}
          <div className="w-full md:w-1/3 flex flex-col items-center order-1 md:order-2 z-10">
            <div className="rounded-full bg-primary/10 px-6 py-2 text-xs font-bold text-primary mb-5 backdrop-blur-md border border-primary/20 tracking-widest">
              GRAND CHAMPION
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 drop-shadow-sm" style={{ fontFamily: "var(--font-heading)" }}>75,000 THB</h3>
            <div className="w-full bg-primary/10 rounded-t-2xl border-t-4 border-primary h-48 flex flex-col items-center justify-start pt-8 relative overflow-hidden shadow-[0_-10px_40px_-15px_rgba(255,107,0,0.2)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Trophy className="h-16 w-16 text-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.5)] mb-2 group-hover:-translate-y-2 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* 2nd Runner Up */}
          <div className="w-full md:w-1/3 flex flex-col items-center order-3 md:order-3 pt-16">
            <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>25,000 THB</h3>
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">2nd Runner-Up</p>
            <div className="w-full bg-secondary/60 rounded-t-2xl border-t-4 border-border h-24 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Award className="h-8 w-8 text-muted-foreground/70 drop-shadow-sm group-hover:-translate-y-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* Intangible benefits - No bordered box */}
        <div className="relative pt-16 mt-8">
          {/* Subtle separator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>

          <h3 className="text-lg font-bold text-muted-foreground mb-12 text-center uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)" }}>
            Beyond the Prize Money
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-escap-blue/5 mb-6 rotate-3 group-hover:rotate-6 group-hover:bg-escap-blue/10 transition-all">
                <Sparkles className="h-7 w-7 text-escap-blue" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">UN Expert Mentorship</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct guidance from UN experts and top academic faculty to shape your real-world solution.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 mb-6 -rotate-3 group-hover:-rotate-6 group-hover:bg-primary/10 transition-all">
                <Cloud className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">SDG Contribution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Directly contribute to global Sustainable Development Goals through functional technology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-cmkl-crimson/5 mb-6 rotate-3 group-hover:rotate-6 group-hover:bg-cmkl-crimson/10 transition-all">
                <Briefcase className="h-7 w-7 text-cmkl-crimson" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">RegTech Exposure</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gain immense exposure to the cutting edge of RegTech policies across the Asia-Pacific region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
