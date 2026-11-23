import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ClubProjectIcon } from "@/components/shared/ClubProjectIcon";
import { FeatureChecklist } from "@/components/shared/FeatureChecklist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { NEXUS_SERVICE_CATALOG } from "@/data/nexusServices";
import { submitNexusServiceRequest } from "@/services/nexusApi";
import type { NexusServiceItem, NexusTrackedRequest } from "@/types/nexus";

interface ServiceOrderDialogProps {
  service: NexusServiceItem | null;
  onClose: () => void;
}

/** Form label displaying an inline red required asterisk for mandatory fields. */
function RequiredLabel({
  htmlFor,
  className,
  children,
}: {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Label htmlFor={htmlFor} className={className}>
      <span>
        {children}{" "}
        <span className="text-destructive font-semibold" aria-hidden="true">
          *
        </span>
      </span>
    </Label>
  );
}

export function ServiceOrderDialog({
  service,
  onClose,
}: ServiceOrderDialogProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    service?.id || NEXUS_SERVICE_CATALOG[0].id,
  );
  const [specValues, setSpecValues] = useState<Record<string, string>>({});
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [quantityOrScale, setQuantityOrScale] = useState("");
  const [expectedTimeline, setExpectedTimeline] = useState("");
  const [expectedBudget, setExpectedBudget] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [createdRequest, setCreatedRequest] =
    useState<NexusTrackedRequest | null>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) {
      setSelectedServiceId(service.id);
      setSpecValues({});
      setErrorMsg("");
      setCreatedRequest(null);
      if (dialogContentRef.current) {
        dialogContentRef.current.scrollTop = 0;
      }
    }
  }, [service]);

  useEffect(() => {
    if (createdRequest) {
      dialogContentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [createdRequest]);

  const activeService =
    NEXUS_SERVICE_CATALOG.find((s) => s.id === selectedServiceId) ||
    service ||
    NEXUS_SERVICE_CATALOG[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !companyName.trim() ||
      !contactName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !workDescription.trim() ||
      !expectedTimeline.trim() ||
      !expectedBudget.trim()
    ) {
      setErrorMsg(
        "Vui lòng điền đầy đủ thông tin liên hệ, mô tả công việc, thời gian thực hiện và ngân sách dự kiến.",
      );
      return;
    }

    const customSpecs = activeService.specFields
      .map((f) => ({
        key: f.key,
        label: f.label,
        value: (specValues[f.key] || "").trim(),
      }))
      .filter((item) => Boolean(item.value));

    const selectedClubs = ["guide", "ytc", "music", "english"].includes(
      activeService.clubModule,
    )
      ? [activeService.clubModule]
      : [];

    try {
      setSubmitting(true);
      const created = await submitNexusServiceRequest({
        clubModule: activeService.clubModule,
        selectedClubs,
        serviceId: activeService.id,
        serviceCategory: activeService.category,
        serviceName: `${activeService.title} (${activeService.clubLabel})`,
        companyName: companyName.trim(),
        contactName: contactName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        workDescription: workDescription.trim(),
        quantityOrScale: quantityOrScale.trim(),
        expectedTimeline: expectedTimeline.trim(),
        expectedBudget: expectedBudget.trim(),
        customSpecs,
      });

      setCreatedRequest(created);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Không thể gửi yêu cầu lúc này. Vui lòng thử lại.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog
      open={Boolean(service)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {service && (
        <DialogContent
          ref={dialogContentRef}
          className="sm:max-w-4xl max-h-[92dvh] overflow-y-auto p-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Cột trái: Thông tin chi tiết dịch vụ & CLB phụ trách */}
            <div className="lg:col-span-5 min-w-0 bg-muted/40 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 pr-8 lg:pr-0">
                <ClubProjectIcon
                  project={{
                    id: activeService.clubModule,
                    name: activeService.clubLabel,
                    accentColor: activeService.accentColor,
                    logoUrl: activeService.logoUrl,
                  }}
                  size="lg"
                />
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge variant="outline">{activeService.badge}</Badge>
                    <Badge variant="secondary">
                      {activeService.categoryLabel}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold leading-snug text-foreground">
                    {activeService.title}
                  </h3>
                  <p className="text-xs font-medium text-primary">
                    {activeService.clubLabel}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activeService.detailDescription}
              </p>

              <div className="grid grid-cols-1 gap-2 rounded-xl border bg-background p-3 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Chi phí tham khảo:</span>
                  <span className="font-bold text-primary text-right">
                    {activeService.priceRange}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground inline-flex items-center gap-1 shrink-0">
                    <Clock className="size-3.5" /> Thời gian triển khai:
                  </span>
                  <span className="font-semibold text-foreground text-right">
                    {activeService.typicalDuration}
                  </span>
                </div>
              </div>

              {/* Thu gọn mặc định phần chi tiết phụ trên mobile để thấy form ngay, mở sẵn trên desktop */}
              <details className="group lg:hidden rounded-xl border bg-background/80 px-3 py-2 text-xs">
                <summary className="cursor-pointer font-bold text-foreground list-none flex items-center justify-between gap-2 py-1">
                  <span>Xem hạng mục bàn giao & quy trình NEXUS</span>
                  <span className="text-primary text-[11px] shrink-0 whitespace-nowrap group-open:hidden">Mở rộng</span>
                  <span className="text-primary text-[11px] shrink-0 whitespace-nowrap hidden group-open:inline">Thu gọn</span>
                </summary>
                <div className="pt-2 space-y-3 border-t mt-2">
                  <FeatureChecklist items={activeService.deliverables} />
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 space-y-1">
                    <div className="font-bold text-primary flex items-center gap-1.5">
                      <ShieldCheck className="size-4" /> Quy trình tiếp nhận tại NEXUS
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Sau khi bạn gửi yêu cầu, NEXUS sẽ trao đổi làm rõ nhu cầu trong
                      24h, kết nối đúng CLB phụ trách để thống nhất phương án, chi
                      phí & thời gian trước khi triển khai.
                    </p>
                  </div>
                </div>
              </details>

              <div className="hidden lg:block space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Hạng mục bàn giao cam kết
                </div>
                <FeatureChecklist items={activeService.deliverables} />
              </div>

              <div className="hidden lg:block rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs space-y-1.5">
                <div className="font-bold text-primary flex items-center gap-1.5">
                  <ShieldCheck className="size-4" /> Quy trình tiếp nhận tại NEXUS
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Sau khi bạn gửi yêu cầu, NEXUS sẽ trao đổi làm rõ nhu cầu trong
                  24h, kết nối đúng CLB phụ trách để thống nhất phương án, chi
                  phí & thời gian trước khi triển khai.
                </p>
              </div>
            </div>

            {/* Cột phải: Biểu mẫu điền yêu cầu chi tiết */}
            <div className="lg:col-span-7 min-w-0 p-4 sm:p-6">
              <DialogHeader className="mb-4 lg:pr-8">
                <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Sparkles className="size-4 shrink-0 text-primary" />
                  Biểu mẫu Yêu cầu Dịch vụ Doanh nghiệp
                </DialogTitle>
                <DialogDescription>
                  Điền nhu cầu cụ thể để NEXUS tư vấn và kết nối câu lạc bộ triển
                  khai phù hợp nhất.
                </DialogDescription>
              </DialogHeader>

              {createdRequest ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-emerald-950 text-base">
                        Đã tiếp nhận yêu cầu thành công!
                      </h4>
                      <p className="text-emerald-800 text-xs mt-1 leading-relaxed">
                        NEXUS đã nhận thông tin yêu cầu cho dịch vụ{" "}
                        <strong>{createdRequest.serviceName}</strong> và sẽ liên
                        hệ lại với bạn trong thời gian sớm nhất.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                    <Button type="button" onClick={onClose}>
                      Đóng cửa sổ
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Chọn dịch vụ bằng shadcn Select */}
                  <div className="space-y-1.5">
                    <Label htmlFor="nexus-service-select" className="font-semibold">
                      Nhóm dịch vụ & CLB thực hiện
                    </Label>
                    <Select
                      value={selectedServiceId}
                      onValueChange={(val) => {
                        setSelectedServiceId(val);
                        setSpecValues({});
                      }}
                    >
                      <SelectTrigger id="nexus-service-select">
                        <SelectValue placeholder="Chọn dịch vụ CLB..." />
                      </SelectTrigger>
                      <SelectContent>
                        {NEXUS_SERVICE_CATALOG.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            [{item.clubLabel}] {item.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Câu hỏi chi tiết theo từng dịch vụ */}
                  <div className="rounded-xl border bg-muted/25 p-3.5 space-y-3">
                    <div className="text-xs font-bold text-foreground">
                      Chi tiết yêu cầu cho dịch vụ "{activeService.categoryLabel}"
                    </div>
                    {activeService.specFields.map((field) => (
                      <div key={field.key} className="space-y-1.5">
                        <Label htmlFor={`spec-${field.key}`}>
                          {field.label}
                        </Label>
                        {field.type === "textarea" ? (
                          <Textarea
                            id={`spec-${field.key}`}
                            rows={2}
                            value={specValues[field.key] || ""}
                            onChange={(e) =>
                              setSpecValues((prev) => ({
                                ...prev,
                                [field.key]: e.target.value,
                              }))
                            }
                            placeholder={field.placeholder}
                          />
                        ) : (
                          <Input
                            id={`spec-${field.key}`}
                            type="text"
                            value={specValues[field.key] || ""}
                            onChange={(e) =>
                              setSpecValues((prev) => ({
                                ...prev,
                                [field.key]: e.target.value,
                              }))
                            }
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mô tả chung, số lượng, thời gian & ngân sách */}
                  <div className="space-y-1.5">
                    <RequiredLabel htmlFor="nexus-work-desc" className="font-semibold">
                      Mô tả tổng quan công việc & yêu cầu bổ sung
                    </RequiredLabel>
                    <Textarea
                      id="nexus-work-desc"
                      required
                      rows={3}
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                      placeholder="Mô tả bối cảnh sự kiện/dự án, địa điểm triển khai, yêu cầu cụ thể cần CLB lưu ý..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="nexus-quantity" className="font-semibold">
                        Số lượng / Quy mô
                      </Label>
                      <Input
                        id="nexus-quantity"
                        type="text"
                        value={quantityOrScale}
                        onChange={(e) => setQuantityOrScale(e.target.value)}
                        placeholder="VD: 2 video / 80 khách"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-timeline" className="font-semibold">
                        Thời gian thực hiện
                      </RequiredLabel>
                      <Input
                        id="nexus-timeline"
                        required
                        type="text"
                        value={expectedTimeline}
                        onChange={(e) => setExpectedTimeline(e.target.value)}
                        placeholder="VD: 15/12/2026"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-budget" className="font-semibold">
                        Ngân sách dự kiến
                      </RequiredLabel>
                      <Input
                        id="nexus-budget"
                        required
                        type="text"
                        value={expectedBudget}
                        onChange={(e) => setExpectedBudget(e.target.value)}
                        placeholder="VD: 3 – 5 triệu"
                      />
                    </div>
                  </div>

                  {/* Thông tin liên hệ doanh nghiệp */}
                  <Separator />
                  <div className="text-xs font-bold text-foreground">
                    Thông tin liên hệ Doanh nghiệp / Đối tác
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-company">
                        Tên Doanh nghiệp / Đơn vị
                      </RequiredLabel>
                      <Input
                        id="nexus-company"
                        required
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="VD: Công ty TNHH Du lịch Biển Xanh"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-contact-name">
                        Họ tên người liên hệ
                      </RequiredLabel>
                      <Input
                        id="nexus-contact-name"
                        required
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="VD: Nguyễn Văn A"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-phone">
                        Số điện thoại / Zalo
                      </RequiredLabel>
                      <Input
                        id="nexus-phone"
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="VD: 0905 123 456"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <RequiredLabel htmlFor="nexus-email">
                        Email liên hệ
                      </RequiredLabel>
                      <Input
                        id="nexus-email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="VD: lienhe@doanhnghiep.vn"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2.5 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="w-full sm:w-auto min-h-11 sm:min-h-10"
                    >
                      Hủy
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto min-h-11 sm:min-h-10"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Đang gửi yêu cầu...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Gửi yêu cầu cho NEXUS
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
