import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Loader2,
  MessageSquareQuote,
  Search,
  Send,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  fetchPublicNexusReviews,
  submitNexusReview,
  trackNexusServiceRequest,
} from "@/services/nexusApi";
import type {
  NexusRequestStatus,
  NexusReviewsResponse,
  NexusTrackedRequest,
} from "@/types/nexus";
import { sanitizeSafeUrl } from "@/utils/safeUrl";

const CLUB_LABELS: Record<string, string> = {
  guide: "CLB Hướng Dẫn Viên",
  ytc: "CLB Truyền Thông YTC",
  music: "CLB Âm Nhạc",
  english: "CLB Tiếng Anh",
  multi: "Phối hợp Đa CLB",
  other: "Tư vấn NEXUS",
};

const STATUS_META: Record<
  NexusRequestStatus,
  { label: string; badgeVariant: "default" | "secondary" | "outline" | "destructive" }
> = {
  new: { label: "Mới tiếp nhận", badgeVariant: "secondary" },
  consulting: { label: "NEXUS đang tư vấn", badgeVariant: "secondary" },
  connected: { label: "Đã kết nối CLB", badgeVariant: "outline" },
  agreed: { label: "Đã thống nhất phương án", badgeVariant: "outline" },
  in_progress: { label: "CLB đang triển khai", badgeVariant: "default" },
  delivered: { label: "Đã bàn giao · Chờ đánh giá", badgeVariant: "default" },
  completed: { label: "Hoàn tất & Đã đánh giá", badgeVariant: "default" },
  cancelled: { label: "Đã hủy", badgeVariant: "destructive" },
};

const REVIEW_HIGHLIGHT_OPTIONS = [
  "Đúng tiến độ",
  "Sản phẩm chất lượng",
  "Nhân sự nhiệt tình",
  "Giao tiếp chuyên nghiệp",
  "Chi phí hợp lý",
];

interface RequestTrackingAndReviewsSectionProps {
  prefillCode?: string;
  prefillContact?: string;
}

export function RequestTrackingAndReviewsSection({
  prefillCode = "",
  prefillContact = "",
}: RequestTrackingAndReviewsSectionProps) {
  const [code, setCode] = useState(prefillCode);
  const [contact, setContact] = useState(prefillContact);
  const [tracked, setTracked] = useState<NexusTrackedRequest | null>(null);
  const [trackLoading, setTrackLoading] = useState(false);
  const [trackError, setTrackError] = useState("");

  // Review submission state
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([
    "Đúng tiến độ",
    "Nhân sự nhiệt tình",
  ]);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewError, setReviewError] = useState("");

  // Public club reviews state
  const [clubFilter, setClubFilter] = useState<string>("all");
  const [reviewsData, setReviewsData] = useState<NexusReviewsResponse>({
    reviews: [],
    statsByClub: {},
  });

  useEffect(() => {
    if (prefillCode) setCode(prefillCode);
    if (prefillContact) setContact(prefillContact);
  }, [prefillCode, prefillContact]);

  const loadPublicReviews = async (selectedClub = clubFilter) => {
    const res = await fetchPublicNexusReviews(selectedClub);
    setReviewsData(res);
  };

  useEffect(() => {
    loadPublicReviews(clubFilter);
  }, [clubFilter]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError("");
    setReviewMessage("");
    setReviewError("");
    try {
      setTrackLoading(true);
      const data = await trackNexusServiceRequest(code, contact);
      setTracked(data);
    } catch (err: unknown) {
      setTracked(null);
      setTrackError(
        err instanceof Error ? err.message : "Không thể tra cứu yêu cầu.",
      );
    } finally {
      setTrackLoading(false);
    }
  };

  const handleToggleHighlight = (tag: string) => {
    setSelectedHighlights((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tracked) return;
    setReviewError("");
    setReviewMessage("");
    try {
      setReviewSubmitting(true);
      const updated = await submitNexusReview({
        code: tracked.requestCode,
        contact,
        rating,
        comment,
        clubModule:
          tracked.assignedClubModules?.[0] || tracked.clubModule || "guide",
        highlights: selectedHighlights,
      });
      setTracked(updated);
      setComment("");
      setReviewMessage("Đã gửi đánh giá chất lượng hợp tác về CLB thành công!");
      await loadPublicReviews(clubFilter);
    } catch (err: unknown) {
      setReviewError(
        err instanceof Error ? err.message : "Không thể gửi đánh giá.",
      );
    } finally {
      setReviewSubmitting(false);
    }
  };

  const canReview =
    Boolean(tracked) &&
    ["delivered", "completed"].includes(tracked!.status) &&
    !tracked!.review?.isSubmitted;

  const safeHandoverHref = tracked?.handoverUrl
    ? sanitizeSafeUrl(tracked.handoverUrl, "")
    : "";

  return (
    <section
      id="tracking-reviews"
      className="mx-auto max-w-6xl px-4 py-10 sm:py-16 sm:px-6 scroll-mt-16 sm:scroll-mt-20"
    >
      <SectionHeading
        className="mb-6 sm:mb-8"
        badge="Theo dõi, Nghiệm thu & Đánh giá CLB"
        title="Tra cứu tiến độ xử lý & Phản hồi chất lượng hợp tác"
        description="Doanh nghiệp dùng mã yêu cầu (NX-...) để theo dõi trạng thái kết nối CLB, xem biên bản bàn giao và gửi đánh giá công khai về CLB thực hiện."
      />

      <Tabs defaultValue="track" className="w-full">
        <TabsList className="grid w-full sm:max-w-md grid-cols-2 h-auto min-h-11">
          <TabsTrigger value="track" className="min-h-9 text-xs sm:text-sm px-2 sm:px-3.5">
            Tra cứu & Gửi đánh giá
          </TabsTrigger>
          <TabsTrigger value="reviews" className="min-h-9 text-xs sm:text-sm px-2 sm:px-3.5">
            Đánh giá về 4 CLB
          </TabsTrigger>
        </TabsList>

        <TabsContent value="track" className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 h-fit">
              <CardHeader>
                <CardTitle className="text-base">
                  Tra cứu yêu cầu dịch vụ
                </CardTitle>
                <CardDescription>
                  Nhập mã yêu cầu và email hoặc SĐT đã điền ở biểu mẫu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-3.5">
                  <div className="space-y-1.5">
                    <Label htmlFor="track-code" className="font-semibold">
                      Mã yêu cầu
                    </Label>
                    <Input
                      id="track-code"
                      type="text"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="VD: NX-261121-A1B2C3D4"
                      className="font-mono uppercase"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="track-contact" className="font-semibold">
                      Email hoặc Số điện thoại đăng ký
                    </Label>
                    <Input
                      id="track-contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="VD: lienhe@doanhnghiep.vn hoặc 0905123456"
                    />
                  </div>

                  {trackError && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive font-medium">
                      {trackError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={trackLoading}
                  >
                    {trackLoading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Đang tra cứu...
                      </>
                    ) : (
                      <>
                        <Search className="size-4" />
                        Kiểm tra tiến độ
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="lg:col-span-7">
              {!tracked ? (
                <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-2 text-muted-foreground">
                  <MessageSquareQuote className="size-9 opacity-45" />
                  <p className="text-sm font-medium text-foreground">
                    Chưa có yêu cầu nào được chọn
                  </p>
                  <p className="text-xs max-w-md">
                    Sau khi gửi biểu mẫu dịch vụ hoặc khi CLB bàn giao kết quả,
                    nhập mã yêu cầu để xem phương án thống nhất và gửi đánh giá
                    cho CLB phụ trách.
                  </p>
                </CardContent>
              ) : (
                <CardContent className="pt-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {tracked.requestCode} · {tracked.companyName}
                      </div>
                      <h4 className="text-base font-bold text-foreground mt-0.5">
                        {tracked.serviceName}
                      </h4>
                    </div>
                    <Badge
                      variant={
                        STATUS_META[tracked.status]?.badgeVariant || "secondary"
                      }
                    >
                      {STATUS_META[tracked.status]?.label || tracked.status}
                    </Badge>
                  </div>

                  {tracked.assignedClubModules?.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-muted-foreground">
                        CLB kết nối thực hiện:
                      </span>
                      {tracked.assignedClubModules.map((mod) => (
                        <Badge key={mod} variant="outline">
                          {CLUB_LABELS[mod] || mod}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {(tracked.agreedScope ||
                    tracked.agreedCost ||
                    tracked.agreedTimeline) && (
                    <div className="rounded-xl border bg-muted/40 p-3.5 text-xs space-y-1.5">
                      <div className="font-bold text-foreground">
                        Thỏa thuận triển khai đã thống nhất
                      </div>
                      {tracked.agreedScope && (
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Phương án: </strong>
                          {tracked.agreedScope}
                        </p>
                      )}
                      {tracked.agreedCost && (
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Chi phí: </strong>
                          {tracked.agreedCost}
                        </p>
                      )}
                      {tracked.agreedTimeline && (
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Thời gian: </strong>
                          {tracked.agreedTimeline}
                        </p>
                      )}
                    </div>
                  )}

                  {(tracked.handoverNote || safeHandoverHref) && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 text-xs space-y-1.5">
                      <div className="font-bold text-emerald-950">
                        Kết quả bàn giao từ CLB
                      </div>
                      {tracked.handoverNote && (
                        <p className="text-emerald-900">{tracked.handoverNote}</p>
                      )}
                      {safeHandoverHref && (
                        <a
                          href={safeHandoverHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-primary underline"
                        >
                          Mở liên kết sản phẩm bàn giao
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  {tracked.statusHistory?.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-foreground">
                        Nhật ký xử lý
                      </div>
                      <div className="space-y-1.5 border-l-2 border-muted pl-3">
                        {tracked.statusHistory.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <span className="font-semibold text-foreground">
                              {STATUS_META[item.status]?.label || item.status}
                            </span>
                            <span className="text-muted-foreground">
                              {" "}
                              — {item.note}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Separator />

                  {tracked.review?.isSubmitted ? (
                    <div className="rounded-xl border bg-muted/30 p-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground inline-flex items-center gap-1.5">
                          <CheckCircle2 className="size-4 text-emerald-600" />
                          Doanh nghiệp đã đánh giá CLB
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-amber-500 font-bold">
                          {tracked.review.rating}/5
                          <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {tracked.review.comment}
                      </p>
                    </div>
                  ) : canReview ? (
                    <form onSubmit={handleSubmitReview} className="space-y-3">
                      <div className="text-xs font-bold text-foreground">
                        Phản hồi & Đánh giá chất lượng hợp tác về CLB
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="min-w-10 min-h-10 flex items-center justify-center rounded-lg hover:bg-amber-50 cursor-pointer"
                            aria-label={`${star} sao`}
                          >
                            <Star
                              className={`size-6 sm:size-5 ${
                                star <= rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/40"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-semibold ml-1.5">
                          {rating}/5 sao
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {REVIEW_HIGHLIGHT_OPTIONS.map((tag) => {
                          const active = selectedHighlights.includes(tag);
                          return (
                            <Button
                              key={tag}
                              type="button"
                              size="sm"
                              variant={active ? "default" : "outline"}
                              onClick={() => handleToggleHighlight(tag)}
                              className="min-h-9 sm:min-h-7 sm:h-7 rounded-full px-3 text-xs sm:text-[11px]"
                            >
                              {tag}
                            </Button>
                          );
                        })}
                      </div>

                      <Textarea
                        required
                        rows={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Chia sẻ trải nghiệm hợp tác, chất lượng sản phẩm/dịch vụ của CLB..."
                      />

                      {reviewError && (
                        <div className="text-xs text-destructive font-medium">
                          {reviewError}
                        </div>
                      )}
                      {reviewMessage && (
                        <div className="text-xs text-emerald-700 font-medium">
                          {reviewMessage}
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="sm"
                        disabled={reviewSubmitting}
                        className="w-full sm:w-auto min-h-11 sm:min-h-9"
                      >
                        {reviewSubmitting ? (
                          <Loader2 className="size-3.5 animate-spin" />
                        ) : (
                          <Send className="size-3.5" />
                        )}
                        Gửi đánh giá chất lượng CLB
                      </Button>
                    </form>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Biểu mẫu đánh giá sẽ tự động mở khi CLB chuyển trạng thái
                      sang <strong>Đã bàn giao</strong>.
                    </p>
                  )}
                </CardContent>
              )}
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-5 space-y-5">
          {/* Thống kê sao theo từng CLB */}
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {(["guide", "ytc", "music", "english"] as const).map((mod) => {
              const stat = reviewsData.statsByClub?.[mod] || {
                count: 0,
                avgRating: 0,
              };
              const active = clubFilter === mod;
              return (
                <button
                  key={mod}
                  type="button"
                  onClick={() =>
                    setClubFilter((prev) => (prev === mod ? "all" : mod))
                  }
                  className={`rounded-xl border p-3 sm:p-3.5 text-left transition-all cursor-pointer ${
                    active
                      ? "border-primary bg-primary/5 shadow-xs"
                      : "bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="text-xs font-bold text-foreground">
                    {CLUB_LABELS[mod]}
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1 text-sm font-extrabold">
                    <Star className="size-4 shrink-0 fill-amber-400 text-amber-400" />
                    <span>
                      {stat.count > 0 ? `${stat.avgRating}/5` : "Chưa có"}
                    </span>
                    <span className="text-[11px] font-normal text-muted-foreground">
                      ({stat.count} đánh giá)
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {reviewsData.reviews.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center text-sm text-muted-foreground">
                Chưa có đánh giá công khai nào cho bộ lọc hiện tại. Doanh nghiệp
                sau khi nghiệm thu dịch vụ có thể gửi đánh giá trực tiếp tại tab{" "}
                <strong>Tra cứu & Gửi đánh giá</strong>.
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviewsData.reviews.map((rev) => (
                <Card key={rev.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline">
                        {CLUB_LABELS[rev.clubModule] || rev.clubModule}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        {rev.rating}/5
                      </span>
                    </div>
                    <CardTitle className="text-sm pt-1">
                      {rev.companyName}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {rev.serviceName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2.5">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      “{rev.comment}”
                    </p>
                    {rev.highlights?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {rev.highlights.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[11px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
