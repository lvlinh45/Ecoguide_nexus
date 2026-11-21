import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureChecklistProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

/** Reusable checkmarked bullet list for club capabilities and service deliverables. */
export function FeatureChecklist({
  items,
  className,
  itemClassName,
}: FeatureChecklistProps) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("space-y-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-2 text-xs text-foreground/90",
            itemClassName,
          )}
        >
          <CheckCircle2 className="size-3.5 shrink-0 text-primary mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
