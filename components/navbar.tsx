"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { LangSwitcher } from "./lang-switcher"

export function Navbar({ dict }: { dict?: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const lang = pathname?.startsWith('/th') ? 'th' : 'en'

  const navLinks = [
    { label: dict?.about || "About", href: `/${lang}/about` },
    { label: dict?.announcement || "Announcements", href: `/${lang}/announcement` },
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
          <Link href={`/${lang}`} className="flex items-center gap-1 sm:gap-2 md:gap-4 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-3 border-r border-border pr-2 md:pr-4 min-w-0">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AW_ESCAP_LOGO_OFFICIAL.png`}
                alt="UNESCAP"
                className="h-4 sm:h-5 md:h-7 w-auto object-contain transition-all"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/kmitl.png`}
                alt="KMITL"
                className="h-5 sm:h-6 md:h-8 w-auto object-contain transition-all"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cmkl.png`}
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
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href={`/${lang}/about`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {dict?.about || "About"}
            </Link>
            <Link href={`/${lang}/announcement`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {dict?.announcement || "Announcements"}
            </Link>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-hidden">
                {lang === 'th' ? "ดูเพิ่มเติม" : "Explore"} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/#challenge`} className="w-full cursor-pointer">
                    {dict?.challenge || "Challenge"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/#timeline`} className="w-full cursor-pointer">
                    {dict?.timeline || "Timeline"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/#prizes`} className="w-full cursor-pointer">
                    {dict?.prizes || "Prizes"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/#teams`} className="w-full cursor-pointer">
                    {dict?.teams || "Teams"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/#faq`} className="w-full cursor-pointer">
                    {dict?.faq || "FAQ"}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-3 xl:gap-4">
              <LangSwitcher />
              <ThemeToggle />
              <Link
                href={`/${lang}/#apply`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                {dict?.register || "Register Now"}
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground py-2 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/#apply`}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 mt-2"
            >
              {dict?.register || "Register Now"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
