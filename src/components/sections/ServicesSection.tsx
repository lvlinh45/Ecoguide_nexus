import { useMemo, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { ClubProjectIcon } from "@/components/shared/ClubProjectIcon";
import { FeatureChecklist } from "@/components/shared/FeatureChecklist";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NEXUS_SERVICE_CATALOG } from "@/data/nexusServices";
import type { NexusServiceItem } from "@/types/nexus";

const FILTER_GROUPS = [
  { id: "all", label: "Tất cả nhóm dịch vụ" },
  { id: "ytc", label: "Truyền thông YTC (Video & Thiết kế)" },
  { id: "music", label: "Âm nhạc (Music Club)" },
  { id: "guide", label: "Hướng dẫn du lịch (HDV)" },
  { id: "english", label: "Tiếng Anh & Quốc tế" },
  { id: "combo_other", label: "Gói kết hợp & Khác" },
] as const;

interface ServicesSectionProps {
  onSelectService: (service: NexusServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices = useMemo(() => {
    if (activeFilter === "all") return NEXUS_SERVICE_CATALOG;
    if (activeFilter === "combo_other") {
      return NEXUS_SERVICE_CATALOG.filter(
        (s) => s.clubModule === "multi" || s.clubModule === "other",
      );
    }
    return NEXUS_SERVICE_CATALOG.filter((s) => s.clubModule === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20"
    >
      <SectionHeading
        className="mb-6"
        badge="Danh mục Dịch vụ của 4 CLB"
        title="Chọn đúng nhóm dịch vụ doanh nghiệp đang cần"
        description="Bấm vào từng dịch vụ (như Quay dựng video, Thiết kế của YTC, Biểu diễn Âm nhạc, Hướng dẫn du lịch...) để xem thông tin chi tiết và điền biểu mẫu gửi yêu cầu tới NEXUS."
      />

      {/* Bộ lọc nhanh theo CLB / Nhóm dịch vụ */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTER_GROUPS.map((grp) => {
          const isActive = activeFilter === grp.id;
          return (
            <Button
              key={grp.id}
              type="button"
              size="sm"
              variant={isActive ? "default" : "outline"}
              onClick={() => setActiveFilter(grp.id)}
              className="rounded-full"
            >
              {grp.label}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            onClick={() => onSelectService(service)}
            className="group flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/50"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ClubProjectIcon
                    project={{
                      id: service.clubModule,
                      name: service.clubLabel,
                      accentColor: service.accentColor,
                      logoUrl: service.logoUrl,
                    }}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline" className="text-[11px]">
                        {service.badge}
                      </Badge>
                      <span className="text-xs font-medium text-muted-foreground">
                        {service.clubLabel}
                      </span>
                    </div>
                    <CardTitle className="text-base sm:text-lg pt-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </div>
              <CardDescription className="pt-2 leading-relaxed">
                {service.shortDesc}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <FeatureChecklist items={service.deliverables.slice(0, 3)} />
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-muted/50 px-3 py-2 text-xs">
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="size-3.5 text-primary" />
                  {service.typicalDuration}
                </span>
                <span className="font-bold text-primary">
                  {service.priceRange}
                </span>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-2 border-t pt-3">
              <span className="text-xs text-muted-foreground truncate">
                Phù hợp: {service.suitableFor}
              </span>
              <Button
                type="button"
                size="sm"
                className="shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService(service);
                }}
              >
                Xem chi tiết & Đặt dịch vụ
                <ArrowRight className="size-3.5" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
