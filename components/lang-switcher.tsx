"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LangSwitcher() {
    const pathName = usePathname()

    if (!pathName) return null

    const currentLang = pathName.startsWith('/th') ? 'th' : 'en'

    return (
        <div className="flex items-center gap-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
            <Link
                href={pathName.replace(/^\/[a-z]{2}/, '/en')}
                className={`transition-colors hover:text-primary ${currentLang === 'en' ? 'text-primary' : 'text-muted-foreground'}`}
                title="Switch to English"
            >
                EN
            </Link>
            <span className="text-muted-foreground/30 font-light">|</span>
            <Link
                href={pathName.replace(/^\/[a-z]{2}/, '/th')}
                className={`transition-colors hover:text-primary ${currentLang === 'th' ? 'text-primary' : 'text-muted-foreground'}`}
                title="Switch to Thai"
            >
                TH
            </Link>
        </div>
    )
}
