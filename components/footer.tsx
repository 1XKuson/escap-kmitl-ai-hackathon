import { Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Partners & Sponsors */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h3
          className="text-lg font-bold text-foreground text-center mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Partners & Organizers
        </h3>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escap-lU8jZgj9y1U0GzapwErtX9RVNdI4rz.jpg"
            alt="UNESCAP - United Nations Economic and Social Commission for Asia and the Pacific"
            className="h-14 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kmitl-zcqZyusNZZioINx71qHueiMYVoC6MY.png"
            alt="KMITL - King Mongkut's Institute of Technology Ladkrabang, School of Engineering"
            className="h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cmkl-sGqxovtEdtr0ydFu6jkBBZhPB7XQqL.png"
            alt="CMKL University"
            className="h-14 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                RegTech AI Hackathon 2026
              </span>
              <span className="text-xs text-muted-foreground">
                Organized by UNESCAP & KMITL
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:hackathon@unescap.org"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hackathon@unescap.org
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
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} RegTech Structural Intelligence AI Hackathon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
