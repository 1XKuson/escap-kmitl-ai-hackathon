import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Handshake, Eye, GraduationCap } from "lucide-react"

export const metadata = {
    title: "About Us | RegTech AI Hackathon 2026",
    description: "Learn more about the RegTech Structural Intelligence AI Hackathon initiative by UNESCAP and KMITL.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Header for About Page */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{
                backgroundImage: `url('/hero-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
            }}>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-background/90" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                        Our Story
                    </p>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        About the <span className="text-primary">Initiative</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Bridging the gap between "code and law" to tackle real-world regulatory challenges.
                    </p>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* The Initiative */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                                    <Target className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground m-0" style={{ fontFamily: "var(--font-heading)" }}>
                                    The Initiative
                                </h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">
                                The <strong>RegTech Structural Intelligence AI Hackathon</strong> is a strategic initiative launched by the United Nations Economic and Social Commission for Asia and the Pacific (<strong>UNESCAP</strong>) in partnership with King Mongkut's Institute of Technology Ladkrabang (<strong>KMITL</strong>). Our core mission is to address the critical <em>"Governance Gap"</em> facing developing economies in the Asia-Pacific region by promoting AI-assisted regulatory analysis to strengthen how governments monitor and respond to complex digital trade regulations.
                            </p>
                        </div>

                        {/* The Partnership */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                                    <Handshake className="h-6 w-6 text-accent" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground m-0" style={{ fontFamily: "var(--font-heading)" }}>
                                    The Partnership
                                </h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                This hackathon represents a powerful synergy between global policy leadership and advanced technical innovation:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-card border border-border rounded-xl p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                                    <img src="/AW_ESCAP_LOGO_OFFICIAL.png" alt="UNESCAP" className="h-12 mb-4 dark:brightness-0 dark:invert" />
                                    <h3 className="text-xl font-bold mb-3 text-foreground">UNESCAP</h3>
                                    <p className="text-muted-foreground text-base">
                                        Provides the policy leadership, regional mandate, and international development networks essential for this initiative. They bring deep expertise in digital trade policy frameworks, specifically the Regional Digital Trade Integration Index (RDTII), to form the project's policy architecture.
                                    </p>
                                </div>
                                <div className="bg-card border border-border rounded-xl p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                                    <img src="/kmitl.png" alt="KMITL" className="h-12 mb-4 dark:brightness-0 dark:invert" />
                                    <h3 className="text-xl font-bold mb-3 text-foreground">KMITL</h3>
                                    <p className="text-muted-foreground text-base">
                                        Recognized as one of Thailand's leading institutions in engineering, artificial intelligence, and data science. They provide the technical infrastructure, research leadership, and access to the innovation ecosystem needed to translate cutting-edge AI methods into practical solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                                    <Eye className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground m-0" style={{ fontFamily: "var(--font-heading)" }}>
                                    Our Vision
                                </h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                                As the digital economy rapidly expands, traditional, manual regulatory oversight has become increasingly insufficient and resource-constrained. We aim to facilitate a definitive shift from "analog" and reactive regulatory oversight to proactive, AI-assisted monitoring.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                By developing tools that can preserve the logical hierarchy and structural integrity of legal documents (moving from "shredded map" to "whole map" solutions), we seek to democratize governance. Our ultimate goal is to empower developing nations in the Asia-Pacific to audit their own regulatory status independently, thereby reducing reliance on expensive external consultants and fostering a more inclusive global digital trade environment.
                            </p>
                        </div>

                        {/* Capacity Building */}
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                                    <GraduationCap className="h-6 w-6 text-accent" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground m-0" style={{ fontFamily: "var(--font-heading)" }}>
                                    Capacity Building: Bridging "Code and Law"
                                </h2>
                            </div>
                            <div className="bg-secondary/30 border-l-4 border-primary p-6 rounded-r-xl">
                                <p className="text-foreground leading-relaxed text-lg italic">
                                    "Beyond building software, this initiative is a strategic investment in human capacity. We are dedicated to bridging the professional gap between code and law."
                                </p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
                                By uniting AI architects with policy experts, we aim to equip a new generation of multidisciplinary professionals with the skills needed to tackle real-world regulatory challenges. Together, we are establishing a replicable framework for AI-assisted governance that can be adapted across different countries and complex regulatory contexts.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
