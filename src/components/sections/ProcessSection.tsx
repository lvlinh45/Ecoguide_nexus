import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/data/nexusDefaults";

export function ProcessSection() {
  return (
    <section id="process" className="bg-muted/30 py-10 sm:py-16 scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          className="mb-8"
          badge="Quy trình hợp tác"
          title="4 bước triển khai gọn gàng & minh bạch"
          description="Mọi dự án đều có đầu mối phụ trách, xác nhận phạm vi trước khi thực hiện và bàn giao đúng tiến độ."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <Card key={item.step} className="bg-card">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit font-mono">
                  Bước {item.step}
                </Badge>
                <CardTitle className="text-base pt-1">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
