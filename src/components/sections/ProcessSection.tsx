import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/data/nexusDefaults";

export function ProcessSection() {
  return (
    <section id="process" className="bg-muted/30 py-10 sm:py-16 scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          className="mb-10"
          badge="Quy trình triển khai chuẩn hóa"
          title="Minh bạch qua hợp đồng ba bên & giảng viên cố vấn"
          description="Từ lúc tiếp nhận đề bài tới khi nghiệm thu, mọi bước đều có người phụ trách, biên bản xác nhận và cam kết chỉnh sửa."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
