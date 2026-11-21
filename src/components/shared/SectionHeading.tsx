import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  badgeVariant?: "default" | "secondary" | "outline";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Shared section heading ensuring consistent badge, title, and subtitle hierarchy. */
export function SectionHeading({
  badge,
  badgeVariant = "outline",
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <Badge variant={badgeVariant} className="mb-2">
        {badge}
      </Badge>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
