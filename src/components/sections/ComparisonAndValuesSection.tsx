import { Check, Minus, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPARISON_ROWS, STAKEHOLDER_VALUES } from "@/data/nexusDefaults";

const STAKEHOLDER_KEYS = Object.keys(STAKEHOLDER_VALUES) as Array<
  keyof typeof STAKEHOLDER_VALUES
>;

export function ComparisonAndValuesSection() {
  return (
    <section
      id="compare"
      className="mx-auto max-w-6xl px-4 py-10 sm:py-16 sm:px-6 scroll-mt-16 sm:scroll-mt-20 space-y-10 sm:space-y-14"
    >
      <div>
        <SectionHeading
          className="mb-6"
          badge="So sánh giải pháp"
          title="Vì sao doanh nghiệp chọn NEXUS?"
        />

        {/* Mobile Cards View */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <Card key={row.criterion} className="overflow-hidden">
              <CardHeader className="pb-2.5 bg-muted/35 border-b">
                <CardTitle className="text-sm font-bold text-foreground">
                  {row.criterion}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-3 space-y-2.5 text-xs">
                <div className="flex items-center justify-between gap-2 rounded-lg border border-primary/25 bg-primary/5 px-3 py-2">
                  <Badge className="text-[11px] font-bold">NEXUS</Badge>
                  <span className="inline-flex items-center gap-1 font-bold text-primary text-right">
                    <Check className="size-3.5 shrink-0" />
                    {row.nexus}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-0.5 text-center">
                  <div className="rounded-lg bg-muted/40 p-2">
                    <div className="text-[10px] font-semibold uppercase text-muted-foreground">
                      Agency
                    </div>
                    <div className="mt-0.5 font-medium text-foreground">
                      {row.agency}
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2">
                    <div className="text-[10px] font-semibold uppercase text-muted-foreground">
                      Freelancer
                    </div>
                    <div className="mt-0.5 font-medium text-foreground">
                      {row.freelancer}
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2">
                    <div className="text-[10px] font-semibold uppercase text-muted-foreground">
                      CLB trực tiếp
                    </div>
                    <div className="mt-0.5 font-medium text-foreground">
                      {row.directClub}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Table View */}
        <Card className="hidden md:block overflow-hidden py-0">
          <Table>
            <TableHeader className="bg-muted/50 text-xs uppercase">
              <TableRow>
                <TableHead className="px-4 py-3.5 font-semibold">Tiêu chí</TableHead>
                <TableHead className="px-4 py-3.5 font-bold text-primary">NEXUS</TableHead>
                <TableHead className="px-4 py-3.5 font-semibold">Agency</TableHead>
                <TableHead className="px-4 py-3.5 font-semibold">Freelancer</TableHead>
                <TableHead className="px-4 py-3.5 font-semibold">
                  Liên hệ CLB trực tiếp
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON_ROWS.map((row) => (
                <TableRow key={row.criterion}>
                  <TableCell className="px-4 py-3.5 font-medium text-foreground">
                    {row.criterion}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-semibold text-primary">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="size-4 shrink-0" />
                      {row.nexus}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3.5 text-muted-foreground">
                    {row.agency}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 text-muted-foreground">
                    {row.freelancer}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Minus className="size-3.5 shrink-0 opacity-60" />
                      {row.directClub}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div>
        <SectionHeading
          className="mb-6"
          badge="Giá trị đa chiều"
          title="Lợi ích cho từng nhóm đồng hành cùng NEXUS"
        />

        <Tabs defaultValue="business">
          <TabsList className="flex flex-wrap w-full sm:w-fit h-auto gap-1 p-1">
            {STAKEHOLDER_KEYS.map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex-1 sm:flex-initial min-h-9 px-2.5 sm:px-3.5 text-xs sm:text-sm"
              >
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
