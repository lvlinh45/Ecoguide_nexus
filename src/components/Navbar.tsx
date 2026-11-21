import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  brandName: string;
  ctaLink: string;
}

export function Navbar({ brandName, ctaLink }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
            <Sparkles className="size-4.5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              {brandName}
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex text-[11px]">
              NTU Ecosystem
            </Badge>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition-colors">
            4 Dự án CLB
          </a>
          <a href="#services" className="hover:text-foreground transition-colors">
            Dịch vụ & Giá
          </a>
          <a href="#process" className="hover:text-foreground transition-colors">
            Quy trình
          </a>
          <a href="#compare" className="hover:text-foreground transition-colors">
            Lợi thế NEXUS
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            Hỏi đáp
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#projects">Khám phá CLB</a>
          </Button>
          <Button size="sm" asChild>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              Đặt dịch vụ
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
