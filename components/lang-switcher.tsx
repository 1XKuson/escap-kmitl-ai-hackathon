"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LangSwitcher() {
    const pathName = usePathname()

    if (!pathName) return null

    const targetLang = pathName.startsWith('/th') ? 'en' : 'th'

    // Replaces the /en or /th at the start of the pathname
    const redirectTarget = pathName.replace(/^\/[a-z]{2}/, `/${targetLang}`)

    return (
        <Link
            href={redirectTarget}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm font-medium transition-all hover:bg-secondary"
            title={`Switch to ${targetLang === 'th' ? 'Thai' : 'English'}`}
        >
            {targetLang === 'th' ? '🇹🇭 TH' : '🇬🇧 EN'}
        </Link>
    )
}
