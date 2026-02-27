"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LangSwitcher() {
    const pathName = usePathname()

    if (!pathName) return null

    const currentLang = pathName.startsWith('/th') ? 'th' : 'en'
    const targetLang = currentLang === 'th' ? 'en' : 'th'

    return (
        <Link
            href={pathName.replace(/^\/[a-z]{2}/, `/${targetLang}`)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-transparent text-xs font-bold transition-colors hover:bg-secondary hover:text-primary"
            title={`Switch to ${targetLang === 'th' ? 'Thai' : 'English'}`}
            style={{ fontFamily: "var(--font-heading)" }}
        >
            <span className="uppercase">{currentLang}</span>
        </Link>
    )
}
