import { Target, Handshake, Eye, GraduationCap } from "lucide-react"
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/fade-in"

export function AboutSection({ dict }: { dict: any }) {
  const cards = [
    {
      icon: Target,
      title: dict.mission_title,
      description: dict.mission_desc,
    },
    {
      icon: Handshake,
      title: dict.partnership_title,
      description: dict.partnership_desc,
    },
    {
      icon: Eye,
      title: dict.vision_title,
      description: dict.vision_desc,
    },
    {
      icon: GraduationCap,
      title: dict.capacity_title,
      description: dict.capacity_desc,
    },
  ]
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            {dict.subtitle}
          </p>
        </FadeIn>

        {/* Minimalist grid without boxes */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {cards.map((card, index) => (
            <FadeInStaggerItem
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
            </FadeInStaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
