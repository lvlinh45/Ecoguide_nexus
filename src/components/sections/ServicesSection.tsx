import { FeatureChecklist } from "@/components/shared/FeatureChecklist";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SERVICE_GROUPS } from "@/data/nexusDefaults";

const SERVICE_TAB_LABELS: Array<{
  key: keyof typeof SERVICE_GROUPS;
  label: string;
}> = [
  { key: "combo", label: "Gói kết hợp" },
  { key: "single", label: "Dịch vụ đơn lẻ" },
  { key: "custom", label: "Theo yêu cầu" },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20">
      <SectionHeading
        className="mb-8"
        badge="Danh mục dịch vụ & Báo giá tham khảo"
        title="Linh hoạt từ dịch vụ đơn lẻ đến gói phối hợp đa CLB"
        description="Doanh nghiệp chỉ làm việc qua một đầu mối NEXUS thay vì phải tự tìm kiếm và điều phối từng nhóm sinh viên riêng lẻ."
      />

      <Tabs defaultValue="combo" className="w-full">
        <TabsList className="grid w-full max-w-lg grid-cols-3">
          {SERVICE_TAB_LABELS.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {SERVICE_TAB_LABELS.map(({ key }) => (
          <TabsContent key={key} value={key} className="mt-4">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {SERVICE_GROUPS[key].map((pkg) => (
                <Card key={pkg.id} className="flex flex-col justify-between">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary">{pkg.badge}</Badge>
                      <span className="text-sm font-bold text-primary">
                        {pkg.price}
                      </span>
                    </div>
                    <CardTitle className="text-lg pt-1">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <FeatureChecklist items={pkg.deliverables} />
                    <div className="pt-2 text-xs text-muted-foreground border-t">
                      <span className="font-semibold text-foreground">
                        Phù hợp:{" "}
                      </span>
                      {pkg.suitableFor}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
