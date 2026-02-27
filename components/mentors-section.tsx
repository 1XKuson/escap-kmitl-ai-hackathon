export function MentorsSection() {
    const mentors = [
        {
            img: "/placeholder-user.jpg",
            name: "Dr. Somchai Prasert",
            role: "AI Research Director",
            org: "KMITL",
            borderColor: "border-primary"
        },
        {
            img: "/placeholder-user.jpg",
            name: "Prof. Amara Tanaka",
            role: "Digital Trade Policy Lead",
            org: "UNESCAP",
            borderColor: "border-accent"
        },
        {
            img: "/placeholder-user.jpg",
            name: "Dr. Marcus Weber",
            role: "NLP & RegTech Specialist",
            org: "CMKL University",
            borderColor: "border-[#1A1A1A] dark:border-secondary" // Replaced border-secondary with something visible in light
        },
        {
            img: "/placeholder-user.jpg",
            name: "Dr. Priya Chakrabarti",
            role: "Data Governance Expert",
            org: "UNESCAP",
            borderColor: "border-accent"
        },
    ]

    return (
        <section id="mentors" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        Expert Panel
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Mentors & <span className="text-primary">Judges</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mentors.map((m) => (
                        <div
                            key={m.name}
                            className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <img
                                src={m.img}
                                alt={m.name}
                                className={`w-24 h-24 rounded-full mx-auto mb-5 object-cover border-[3px] ${m.borderColor} group-hover:scale-105 transition-transform duration-300`}
                            />
                            <h3
                                className="text-lg font-bold text-foreground mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {m.name}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-1">{m.role}</p>
                            <p className="text-xs text-muted-foreground">{m.org}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
