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
  onOrderClub: (project: NexusClubProject) => void;
}

export function ClubCapabilityDialog({
  project,
  onClose,
  onOrderClub,
}: ClubCapabilityDialogProps) {
  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {project && (
        <DialogContent className="max-h-[90dvh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="pr-8">
            <div className="flex items-start sm:items-center gap-3">
              <ClubProjectIcon project={project} size="lg" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <Badge variant="outline">{project.badge}</Badge>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <DialogTitle className="leading-snug">{project.name}</DialogTitle>
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
              <div className="min-w-0">
                <span className="text-muted-foreground">Cổng truy cập: </span>
                <span className="font-mono font-semibold text-foreground break-all">
                  {formatDisplayDomain(project.url)}
                </span>
              </div>
              <Badge>{project.priceRange}</Badge>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose} className="min-h-10 sm:min-h-9">
              Đóng
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="min-h-10 sm:min-h-9"
              onClick={() => {
                onClose();
                onOrderClub(project);
              }}
            >
              Đặt dịch vụ CLB này
            </Button>
            <Button asChild className="min-h-10 sm:min-h-9">
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
