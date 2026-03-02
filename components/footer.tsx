import { Mail, Globe } from "lucide-react"
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/fade-in"
import { PartnerLogos } from "./partner-logos"

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="border-t border-border bg-card">
      {/* Partners & Sponsors */}
      <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h3
          className="text-lg font-bold text-foreground text-center mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {dict.partners}
        </h3>
        <PartnerLogos />
      </FadeIn>

      {/* Footer bottom */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {dict.title}
              </span>
              <span className="text-xs text-muted-foreground">
                {dict.organized_by}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:regtech2026@kmitl.ac.th"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                regtech2026@kmitl.ac.th
              </a>
              <a
                href="https://www.unescap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                unescap.org
              </a>
            </div>
          </FadeIn>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {dict.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
