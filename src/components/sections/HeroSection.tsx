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
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs font-semibold gap-1.5 bg-background"
          >
            <Sparkles className="size-3.5 text-primary" />
            {config.ecosystemBadge}
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.15]">
            {config.heroTitle}
          </h1>

          <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
            {config.heroSubtitle}
          </p>

          <p className="text-sm font-semibold text-primary tracking-wide uppercase">
            “{config.slogan}”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#services">
                Chọn nhóm dịch vụ CLB
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" type="button" onClick={onOpenOrder}>
              Điền biểu mẫu yêu cầu ngay
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {NEXUS_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card/90 px-4 py-3.5 text-center shadow-xs"
            >
              <div className="text-lg font-extrabold text-foreground sm:text-xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
