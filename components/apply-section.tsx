"use client"

import { ArrowRight, FileText, Video } from "lucide-react"
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/fade-in"
import { useState, useEffect } from "react"

export function ApplySection({ dict }: { dict: any }) {
  const [isMounted, setIsMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    setIsMounted(true)
    const targetDate = new Date(process.env.NEXT_PUBLIC_END_DATE || "2026-02-01").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
    }

    setTimeLeft(calculateTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section id="apply" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            {dict.tagline}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {dict.title}
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed mb-10">
            {dict.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
            <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl min-w-[80px] sm:min-w-[100px] shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {isMounted ? timeLeft.days.toString().padStart(2, '0') : '00'}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl min-w-[80px] sm:min-w-[100px] shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {isMounted ? timeLeft.hours.toString().padStart(2, '0') : '00'}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl min-w-[80px] sm:min-w-[100px] shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {isMounted ? timeLeft.minutes.toString().padStart(2, '0') : '00'}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">Mins</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl min-w-[80px] sm:min-w-[100px] shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {isMounted ? timeLeft.seconds.toString().padStart(2, '0') : '00'}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">Secs</span>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FadeInStaggerItem className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.pitch_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dict.pitch_desc}
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {dict.pitch_format}
            </span>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="rounded-xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.video_title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dict.video_desc}
            </p>
            <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {dict.video_format}
            </span>
          </FadeInStaggerItem>
        </StaggerContainer>

        <FadeIn className="text-center">
          <a
            href="https://www.jotform.com/form/260591342899065"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {dict.btn}
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            {dict.contact}{" "}
            <a href="mailto:regtech2026@kmitl.ac.th" className="text-escap-blue hover:underline">
              regtech2026@kmitl.ac.th
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
