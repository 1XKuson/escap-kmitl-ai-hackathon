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

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <TimelineSection />
      <PrizesSection />
      <MentorsSection />
      <TeamsSection />
      <ApplySection />
      <FaqSection />
      <Footer />
    </main>
  )
}
