import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NEXUS_FAQS } from "@/data/nexusDefaults";
import type { NexusPortalConfig } from "@/types/nexus";

interface FaqAndFooterSectionProps {
  config: NexusPortalConfig;
  onOpenOrder: () => void;
}

export function FaqAndFooterSection({
  config,
  onOpenOrder,
}: FaqAndFooterSectionProps) {
  return (
    <>
      <section id="faq" className="mx-auto max-w-4xl px-4 py-10 sm:py-16 sm:px-6 scroll-mt-16 sm:scroll-mt-20">
        <SectionHeading
          className="mb-6 sm:mb-8"
          align="center"
          badge="Giải đáp nhanh"
          title="Câu hỏi thường gặp về dự án NEXUS"
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
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:py-12 sm:px-6">
          <Card className="bg-primary text-primary-foreground border-none mb-8 sm:mb-10">
            <CardContent className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider opacity-85">
                  {config.ecosystemBadge}
                </div>
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  Sẵn sàng kết nối cùng mạng lưới CLB sinh viên?
                </h3>
                <p className="text-sm opacity-90 max-w-xl">
                  Gửi yêu cầu dự án cho NEXUS để nhận đề xuất phương án từ 4 CLB
                  nòng cốt trong vòng 24 giờ làm việc.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={onOpenOrder}
                className="w-full sm:w-auto min-h-11 shrink-0"
              >
                Gửi yêu cầu hợp tác ngay
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
            <div className="space-y-1">
              <div className="text-sm font-bold text-foreground">
                {config.brandName} — Đại học Nha Trang & Doanh nghiệp Khánh Hòa
              </div>
              <p>{config.slogan}</p>
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
