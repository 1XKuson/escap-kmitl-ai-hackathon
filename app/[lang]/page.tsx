import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ChallengeSection } from "@/components/challenge-section"
import { TimelineSection } from "@/components/timeline-section"
import { PrizesSection } from "@/components/prizes-section"
import { MentorsSection } from "@/components/mentors-section"
import { TeamsSection } from "@/components/teams-section"
import { ApplySection } from "@/components/apply-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/get-dictionary"
import { i18n, Locale } from "@/i18n.config"

interface PageProps {
    params: Promise<{
        lang: Locale
    }>
}

export function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function Page({ params }: PageProps) {
    const { lang } = await params;
    const dict = await getDictionary(lang)

    return (
        <main lang={lang} className="min-h-screen bg-background font-sans">
            <Navbar dict={dict.navbar} />
            <HeroSection dict={dict.hero} />
            <AboutSection dict={dict.about} />
            <ChallengeSection dict={dict.challenge} />
            <TimelineSection dict={dict.timeline} />
            <PrizesSection dict={dict.prizes} />
            <MentorsSection dict={dict.mentors} />
            <TeamsSection dict={dict.teams} />
            <ApplySection dict={dict.apply} />
            <FaqSection dict={dict.faq} />
            <Footer dict={dict.footer} />
        </main>
    )
}
