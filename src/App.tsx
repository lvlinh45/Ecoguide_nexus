import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ComparisonAndValuesSection } from "@/components/sections/ComparisonAndValuesSection";
import { FaqAndFooterSection } from "@/components/sections/FaqAndFooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { ServiceOrderDialog } from "@/components/sections/ServiceOrderDialog";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Separator } from "@/components/ui/separator";
import { DEFAULT_NEXUS_CONFIG } from "@/data/nexusDefaults";
import { NEXUS_SERVICE_CATALOG } from "@/data/nexusServices";
import { fetchNexusPortalConfig } from "@/services/nexusApi";
import { syncDocumentSeo } from "@/utils/seo";
import type {
  NexusClubProject,
  NexusPortalConfig,
  NexusServiceItem,
} from "@/types/nexus";

export function App() {
  const [config, setConfig] = useState<NexusPortalConfig>(DEFAULT_NEXUS_CONFIG);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] =
    useState<NexusServiceItem | null>(null);

  useEffect(() => {
    let active = true;
    fetchNexusPortalConfig()
      .then((res) => {
        if (active) {
          setConfig(res.config);
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    syncDocumentSeo({
      title: `${config.brandName} — ${config.heroTitle}`,
      description: config.heroSubtitle,
    });
  }, [config.brandName, config.heroTitle, config.heroSubtitle]);

  const handleOpenDefaultOrder = () => {
    setSelectedService(NEXUS_SERVICE_CATALOG[0]);
  };

  const handleOrderForClub = (project: NexusClubProject) => {
    const matched =
      NEXUS_SERVICE_CATALOG.find((s) => s.clubModule === project.id) ||
      NEXUS_SERVICE_CATALOG[0];
    setSelectedService(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar
        brandName={config.brandName}
        onOpenOrder={handleOpenDefaultOrder}
      />
      <main className="flex-1">
        <HeroSection config={config} onOpenOrder={handleOpenDefaultOrder} />
        <ServicesSection onSelectService={setSelectedService} />
        <Separator />
        <ProjectsGridSection
          projects={config.projects}
          isLoading={isLoading}
          onOrderClub={handleOrderForClub}
        />
        <Separator />
        <ProcessSection />
        <Separator />
        <ComparisonAndValuesSection />
        <Separator />
        <FaqAndFooterSection config={config} />
      </main>

      <ServiceOrderDialog
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

export default App;
