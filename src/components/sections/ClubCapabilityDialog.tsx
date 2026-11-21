import { ExternalLink } from "lucide-react";
import { ClubProjectIcon } from "@/components/shared/ClubProjectIcon";
import { FeatureChecklist } from "@/components/shared/FeatureChecklist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDisplayDomain } from "@/services/nexusApi";
import type { NexusClubProject } from "@/types/nexus";

interface ClubCapabilityDialogProps {
  project: NexusClubProject | null;
  onClose: () => void;
}

export function ClubCapabilityDialog({
  project,
  onClose,
}: ClubCapabilityDialogProps) {
  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {project && (
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-3">
              <ClubProjectIcon project={project} size="lg" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">{project.badge}</Badge>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <DialogTitle>{project.name}</DialogTitle>
              </div>
            </div>
            <DialogDescription>{project.tagline}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="rounded-xl border bg-muted/40 p-3.5 space-y-2">
              <div className="font-semibold text-foreground">
                Hạng mục dịch vụ cung ứng:
              </div>
              <FeatureChecklist items={project.highlights} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs">
              <div>
                <span className="text-muted-foreground">Cổng truy cập: </span>
                <span className="font-mono font-semibold text-foreground">
                  {formatDisplayDomain(project.url)}
                </span>
              </div>
              <Badge>{project.priceRange}</Badge>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Đóng
            </Button>
            <Button asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Đi tới {project.shortName}
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
