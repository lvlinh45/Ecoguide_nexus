import { useState } from "react";
import { ClubCapabilityDialog } from "@/components/sections/ClubCapabilityDialog";
import { ClubProjectCard } from "@/components/sections/ClubProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { NexusClubProject } from "@/types/nexus";

interface ProjectsGridSectionProps {
  projects: NexusClubProject[];
  isLoading: boolean;
  onOrderClub: (project: NexusClubProject) => void;
}

export function ProjectsGridSection({
  projects,
  isLoading,
  onOrderClub,
}: ProjectsGridSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<NexusClubProject | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10 sm:py-12 sm:px-6 sm:pb-18 scroll-mt-16 sm:scroll-mt-20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-6">
        <SectionHeading
          badge="Hệ sinh thái 4 CLB nòng cốt"
          badgeVariant="secondary"
          title="Chọn dự án CLB để truy cập trực tiếp"
          description="Nhấn trực tiếp vào từng thẻ CLB để chuyển sang cổng thông tin & hoạt động chuyên biệt của câu lạc bộ đó."
        />
        <span className="text-xs text-muted-foreground shrink-0">
          URL được đồng bộ từ trang Quản trị
        </span>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Card key={i} className="p-6 space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-7 w-56" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-10 w-full" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ClubProjectCard
              key={project.id}
              project={project}
              onInspect={setSelectedProject}
              onOrderClub={onOrderClub}
            />
          ))}
        </div>
      )}

      <ClubCapabilityDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOrderClub={onOrderClub}
      />
    </section>
  );
}
