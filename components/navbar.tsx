"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"

import { LangSwitcher } from "./lang-switcher"

export function Navbar({ dict }: { dict?: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const lang = pathname?.startsWith('/th') ? 'th' : 'en'

  const navLinks = [
    { label: dict?.about || "About", href: `/${lang}/about` },
    { label: dict?.challenge || "Challenge", href: `/${lang}/#challenge` },
    { label: dict?.timeline || "Timeline", href: `/${lang}/#timeline` },
    { label: dict?.prizes || "Prizes", href: `/${lang}/#prizes` },
    { label: dict?.teams || "Teams", href: `/${lang}/#teams` },
    { label: dict?.faq || "FAQ", href: `/${lang}/#faq` },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href={`/${lang}`} className="flex items-center gap-1 sm:gap-2 md:gap-4 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-3 border-r border-border pr-2 md:pr-4 min-w-0">
              <img
                src="/AW_ESCAP_LOGO_OFFICIAL.png"
                alt="UNESCAP"
                className="h-4 sm:h-5 md:h-7 w-auto object-contain transition-all"
              />
              <img
                src="/kmitl.png"
                alt="KMITL"
                className="h-5 sm:h-6 md:h-8 w-auto object-contain transition-all"
              />
              <img
                src="/cmkl.png"
                alt="CMKL"
                className="h-4 sm:h-5 md:h-7 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-sm md:text-base font-bold text-primary leading-tight truncate" style={{ fontFamily: "var(--font-heading)" }}>
                RegTech AI
              </span>
              <span className="text-[9px] md:text-xs text-muted-foreground leading-tight hidden lg:block">
                Hackathon 2026
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <LangSwitcher />
              <ThemeToggle />
              <a
                href={`/${lang}/#apply`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                {dict?.register || "Register Now"}
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LangSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground py-2 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${lang}/#apply`}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 mt-2"
            >
              {dict?.register || "Register Now"}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
