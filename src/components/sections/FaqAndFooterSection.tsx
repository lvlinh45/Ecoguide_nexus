import { useState } from "react";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { NEXUS_FAQS } from "@/data/nexusDefaults";
import type { NexusPortalConfig } from "@/types/nexus";

interface FaqAndFooterSectionProps {
  config: NexusPortalConfig;
}

export function FaqAndFooterSection({ config }: FaqAndFooterSectionProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <>
      <section id="faq" className="mx-auto max-w-4xl px-4 py-10 sm:py-14 sm:px-6 scroll-mt-16 sm:scroll-mt-20">
        <SectionHeading
          className="mb-6"
          align="center"
          badge="Giải đáp nhanh"
          title="Câu hỏi thường gặp"
        />

        <Card>
          <CardContent className="pt-2">
            <Accordion type="single" collapsible className="w-full">
              {NEXUS_FAQS.map((faq, idx) => (
                <AccordionItem key={faq.question} value={`faq-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:py-10 sm:px-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              {!logoFailed ? (
                <img
                  src="/logo_nexus.png"
                  alt={`${config.brandName} logo`}
                  onError={() => setLogoFailed(true)}
                  className="size-9 rounded-xl object-cover border border-border/60 bg-white shadow-xs shrink-0"
                />
              ) : (
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                  <Sparkles className="size-4" />
                </div>
              )}
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-foreground">
                  {config.brandName} — Đại học Nha Trang & Doanh nghiệp Khánh Hòa
                </div>
                <p>{config.slogan}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 sm:gap-4">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5 shrink-0 text-primary" />
                {config.contactEmail}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5 shrink-0 text-primary" />
                {config.contactPhone}
              </span>
              <span className="inline-flex items-start sm:items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0 mt-0.5 sm:mt-0 text-primary" />
                <span>{config.contactAddress}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
