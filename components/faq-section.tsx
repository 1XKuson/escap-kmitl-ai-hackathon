"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What should I bring?",
    answer:
      "For Round 1 (Global Open Call), you only need to submit a 5-slide pitch deck (PDF) and a 7-minute video presentation. No working prototype is required at this stage. For later rounds, you will need your development setup and any tools needed for your AI pipeline.",
  },
  {
    question: "Is it free to participate?",
    answer:
      "Yes, participation in the RegTech Structural Intelligence AI Hackathon is completely free. There are no registration fees or hidden costs.",
  },
  {
    question: "Is food provided during the onsite event?",
    answer:
      "Yes, for the Grand Finale onsite event in September 2026, full catering will be provided for all participants throughout the event.",
  },
  {
    question: "What is HtmlRAG?",
    answer:
      "HtmlRAG is an approach that preserves the structural integrity of HTML documents during AI processing. Instead of stripping HTML to plain text (which destroys logical hierarchy, nested clauses, and table logic), HtmlRAG maintains the document structure to produce more accurate and reliable AI outputs.",
  },
  {
    question: "Who can participate?",
    answer:
      "The hackathon is open to students, developers, policy researchers, and professionals worldwide. Teams must be multidisciplinary with at least 3 members, combining technical expertise (AI/ML, Python) and policy expertise (trade law, economics).",
  },
  {
    question: "What are Pillars 6 and 7 of the RDTII?",
    answer:
      "The Regional Digital Trade Integration Index (RDTII) measures digital trade readiness. Pillar 6 covers Cross-Border Data Policies (data localization, ban & local processing, conditional flow regimes) and Pillar 7 covers Domestic Data Protection & Privacy (legal frameworks, data retention, compliance costs).",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
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
