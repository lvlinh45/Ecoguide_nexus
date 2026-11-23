import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXUS_STATS } from "@/data/nexusDefaults";
import type { NexusPortalConfig } from "@/types/nexus";

interface HeroSectionProps {
  config: NexusPortalConfig;
  onOpenOrder: () => void;
}

export function HeroSection({ config, onOpenOrder }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden nexus-grid-bg">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-8 sm:px-6 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-5">
          <Badge
            variant="outline"
            className="max-w-full whitespace-normal text-center leading-snug px-3 py-1 text-[11px] sm:text-xs font-semibold gap-1.5 bg-background"
          >
            <Sparkles className="size-3.5 shrink-0 text-primary" />
            <span>{config.ecosystemBadge}</span>
          </Badge>

          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.2] sm:leading-[1.15]">
            {config.heroTitle}
          </h1>

          <p className="text-sm text-muted-foreground sm:text-lg leading-relaxed">
            {config.heroSubtitle}
          </p>

          <p className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">
            “{config.slogan}”
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <Button size="lg" asChild className="w-full sm:w-auto min-h-11">
              <a href="#services">
                Chọn gói dịch vụ
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              type="button"
              onClick={onOpenOrder}
              className="w-full sm:w-auto min-h-11"
            >
              Gửi yêu cầu ngay
            </Button>
          </div>
        </div>

        <div className="mt-7 sm:mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
          {NEXUS_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card/90 px-3 py-3 sm:px-4 sm:py-3.5 text-center shadow-xs"
            >
              <div className="text-base font-extrabold text-foreground sm:text-xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
