import { useState } from "react";
import {
  Compass,
  Globe,
  Languages,
  Megaphone,
  Music2,
} from "lucide-react";
import type { NexusClubProject } from "@/types/nexus";

const PROJECT_ICONS: Record<string, typeof Compass> = {
  guide: Compass,
  ytc: Megaphone,
  music: Music2,
  english: Languages,
};

interface ClubProjectIconProps {
  project: Pick<NexusClubProject, "id" | "name" | "accentColor" | "logoUrl">;
  size?: "md" | "lg";
}

export function ClubProjectIcon({ project, size = "md" }: ClubProjectIconProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = PROJECT_ICONS[project.id] || Globe;
  const boxSize = size === "lg" ? "size-12" : "size-11";
  const iconSize = size === "lg" ? "size-5.5" : "size-5";

  if (project.logoUrl && !imgFailed) {
    return (
      <div
        className={`${boxSize} shrink-0 overflow-hidden rounded-xl border bg-white shadow-xs`}
      >
        <img
          src={project.logoUrl}
          alt={`${project.name} logo`}
          className="size-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${boxSize} shrink-0 items-center justify-center rounded-xl border bg-background shadow-xs`}
      style={{ color: project.accentColor }}
    >
      <Icon className={iconSize} />
    </div>
  );
}
