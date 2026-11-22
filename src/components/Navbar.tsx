import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";

interface NavbarProps {
  brandName: string;
  onOpenOrder: () => void;
}

const NAV_LINKS = [
  { href: "#projects", label: "4 Dự án CLB" },
  { href: "#services", label: "Dịch vụ & Giá" },
  { href: "#process", label: "Quy trình" },
  { href: "#compare", label: "So sánh & Giá trị" },
  { href: "#tracking-reviews", label: "Tra cứu & Đánh giá" },
  { href: "#faq", label: "Hỏi đáp" },
];

export function Navbar({ brandName, onOpenOrder }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-2 px-3.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
            <Sparkles className="size-4 sm:size-4.5" />
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground truncate">
              {brandName}
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex text-[11px] shrink-0">
              NTU Ecosystem
            </Badge>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.filter((item) => item.href !== "#compare").map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#services">Chọn dịch vụ</a>
          </Button>
          <Button
            size="sm"
            type="button"
            onClick={onOpenOrder}
            className="h-9 px-3 sm:px-3.5 text-xs sm:text-sm"
          >
            <span className="sm:hidden">Gửi yêu cầu</span>
            <span className="hidden sm:inline">Gửi yêu cầu dịch vụ</span>
            <ArrowUpRight className="size-3.5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden size-9"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/98 px-4 py-3 space-y-1 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-xl border bg-card px-3 text-xs font-semibold text-foreground active:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
