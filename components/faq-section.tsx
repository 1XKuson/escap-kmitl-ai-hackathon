"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection({ dict }: { dict: any }) {
  const faqs = [
    {
      question: dict.q1,
      answer: dict.a1,
    },
    {
      question: dict.q2,
      answer: dict.a2,
    },
    {
      question: dict.q3,
      answer: dict.a3,
    },
    {
      question: dict.q4,
      answer: dict.a4,
    },
    {
      question: dict.q5,
      answer: dict.a5,
    },
    {
      question: dict.q6,
      answer: dict.a6,
    },
  ]
  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            {dict.tagline}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {dict.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
