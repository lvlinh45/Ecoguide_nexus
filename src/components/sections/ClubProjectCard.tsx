import {
  ArrowUpRight,
  ExternalLink,
  Globe,
} from "lucide-react";
import { ClubProjectIcon } from "@/components/shared/ClubProjectIcon";
import { FeatureChecklist } from "@/components/shared/FeatureChecklist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDisplayDomain } from "@/services/nexusApi";
import type { NexusClubProject } from "@/types/nexus";

interface ClubProjectCardProps {
  project: NexusClubProject;
  onInspect: (project: NexusClubProject) => void;
  onOrderClub: (project: NexusClubProject) => void;
}

export function ClubProjectCard({
  project,
  onInspect,
  onOrderClub,
}: ClubProjectCardProps) {
  const domainLabel = formatDisplayDomain(project.url);

  return (
    <Card className="group relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <ClubProjectIcon project={project} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-[11px]">
                  {project.badge}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <CardTitle className="mt-1 text-xl group-hover:text-primary transition-colors flex items-center gap-1.5">
                {project.name}
                <ArrowUpRight className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CardTitle>
            </div>
          </div>
          <CardDescription className="pt-2 text-sm font-medium text-foreground/85">
            {project.tagline}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <FeatureChecklist items={project.highlights.slice(0, 3)} />

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-muted/60 px-3.5 py-2.5 text-xs">
            <span className="font-mono font-semibold text-foreground flex items-center gap-1.5">
              <Globe className="size-3.5 text-primary" />
              {domainLabel}
            </span>
            <Badge variant="secondary" className="font-semibold">
              {project.priceRange}
            </Badge>
          </div>
        </CardContent>
      </a>

      <Separator />

      <CardFooter className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onInspect(project)}
          >
            Hồ sơ năng lực
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onOrderClub(project)}
          >
            Đặt dịch vụ CLB
          </Button>
        </div>

        <Button size="sm" asChild>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Cổng CLB
            <ExternalLink className="size-3.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
