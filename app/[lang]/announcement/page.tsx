import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Bell, CalendarCheck } from "lucide-react"
import { getDictionary } from "@/get-dictionary"
import { Locale, i18n } from "@/i18n.config"

export const metadata = {
    title: "Announcements | Using AI for Digital Trade Regulatory Analysis",
    description: "Stay up-to-date with the latest news, events, and updates for the RegTech Structural Intelligence AI Hackathon.",
}

export function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function AnnouncementPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang || 'en')

    return (
        <main className="min-h-screen bg-background">
            <Navbar dict={dict.navbar} />

            {/* Hero Header for Announcement Page */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
            }}>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-background/90" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                        Latest News & Updates
                    </p>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Announcements
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Stay informed about upcoming milestones, deadlines, and key event details.
                    </p>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                        {/* Example Announcement 1 */}
                        <div className="bg-card border border-border rounded-xl p-6 md:p-8 transition-all hover:border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary tracking-wide uppercase">
                                    <Bell className="h-3 w-3 mr-1" /> General
                                </span>
                                <span className="text-sm text-muted-foreground flex items-center">
                                    <CalendarCheck className="h-4 w-4 mr-1.5" />
                                    March 2026
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mt-0 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                                Registration is Now Open
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We are thrilled to officially launch the RegTech Structural Intelligence AI Hackathon.
                                Teams of 3 or more members with a blend of technical (AI/ML) and policy (trade law, economics)
                                expertise are invited to apply. In the first round, no prototype is required—simply submit
                                a 5-slide pitch deck and a 7-minute presentation video.
                            </p>
                        </div>

                        {/* Placeholder for future announcements */}
                        <div className="bg-secondary/30 border border-border border-dashed rounded-xl p-8 md:p-12 text-center text-muted-foreground">
                            <Bell className="h-8 w-8 mx-auto mb-4 opacity-50" />
                            <p className="text-lg m-0">More updates coming soon. Stay tuned!</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer dict={dict.footer} />
        </main>
    )
}
