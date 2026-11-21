import { Check, Minus, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPARISON_ROWS, STAKEHOLDER_VALUES } from "@/data/nexusDefaults";

const STAKEHOLDER_KEYS = Object.keys(STAKEHOLDER_VALUES) as Array<
  keyof typeof STAKEHOLDER_VALUES
>;

export function ComparisonAndValuesSection() {
  return (
    <section
      id="compare"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20 space-y-14"
    >
      <div>
        <SectionHeading
          className="mb-6"
          badge="So sánh giải pháp"
          title="Vì sao doanh nghiệp chọn NEXUS?"
        />

        <Card className="overflow-hidden py-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3.5 font-semibold">Tiêu chí</th>
                  <th className="px-4 py-3.5 font-bold text-primary">NEXUS</th>
                  <th className="px-4 py-3.5 font-semibold">Agency</th>
                  <th className="px-4 py-3.5 font-semibold">Freelancer</th>
                  <th className="px-4 py-3.5 font-semibold">
                    Liên hệ CLB trực tiếp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="hover:bg-muted/20">
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.criterion}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-primary">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="size-4 shrink-0" />
                        {row.nexus}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">
                      {row.agency}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">
                      {row.freelancer}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Minus className="size-3.5 shrink-0 opacity-60" />
                        {row.directClub}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div>
        <SectionHeading
          className="mb-6"
          badge="Giá trị đa chiều"
          title="Lợi ích cho từng nhóm đồng hành cùng NEXUS"
        />

        <Tabs defaultValue="business">
          <TabsList>
            {STAKEHOLDER_KEYS.map((key) => (
              <TabsTrigger key={key} value={key}>
                {STAKEHOLDER_VALUES[key].label}
              </TabsTrigger>
            ))}
          </TabsList>

          {STAKEHOLDER_KEYS.map((key) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Giá trị dành cho {STAKEHOLDER_VALUES[key].label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {STAKEHOLDER_VALUES[key].points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 rounded-xl border bg-muted/30 p-3.5 text-sm"
                    >
                      <ShieldCheck className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
