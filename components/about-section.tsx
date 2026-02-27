import { Target, Handshake, Eye, GraduationCap } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Address the critical \"Governance Gap\" facing developing economies in the Asia-Pacific by promoting AI-assisted regulatory analysis to strengthen how governments monitor and respond to complex digital trade regulations.",
  },
  {
    icon: Handshake,
    title: "The Partnership",
    description:
      "UNESCAP brings policy leadership and international development networks. KMITL provides technical infrastructure, research leadership, and access to the innovation ecosystem needed to translate AI methods into practical solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Shift from analog, reactive regulatory oversight to proactive, AI-assisted monitoring. Democratize governance so developing nations in Asia-Pacific can audit their regulatory status independently.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "A strategic investment in human capacity, bridging the gap between code and law. We equip a new generation of multidisciplinary professionals to tackle real-world regulatory challenges.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            About the Initiative
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AI for Global Impact
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            A strategic initiative by UNESCAP and KMITL to solve real-world challenges
            using sustainable AI and regulatory technology.
          </p>
        </div>

        {/* Minimalist grid without boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group flex flex-col items-start"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110 ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-escap-blue/10 text-escap-blue'}`}>
                <card.icon className="h-8 w-8" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-border pl-5 group-hover:border-primary transition-colors">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
