"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function LangSwitcher() {
    const pathName = usePathname()

    if (!pathName) return null

    const currentLang = pathName.startsWith('/th') ? 'th' : 'en'

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'th', label: 'TH' }
    ]

    return (
        <div className="flex items-center rounded-full border border-border bg-secondary/50 p-0.5 backdrop-blur-sm" style={{ fontFamily: "var(--font-heading)" }}>
            {languages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                    <Link
                        key={lang.code}
                        href={pathName.replace(/^\/[a-z]{2}/, `/${lang.code}`)}
                        className={`relative flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        title={`Switch to ${lang.code === 'th' ? 'Thai' : 'English'}`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-lang-pill"
                                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                                initial={false}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{lang.label}</span>
                    </Link>
                )
            })}
        </div>
    )
}
