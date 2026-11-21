import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ComparisonAndValuesSection } from "@/components/sections/ComparisonAndValuesSection";
import { FaqAndFooterSection } from "@/components/sections/FaqAndFooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Separator } from "@/components/ui/separator";
import { DEFAULT_NEXUS_CONFIG } from "@/data/nexusDefaults";
import { fetchNexusPortalConfig } from "@/services/nexusApi";
import type { NexusPortalConfig } from "@/types/nexus";

export function App() {
  const [config, setConfig] = useState<NexusPortalConfig>(DEFAULT_NEXUS_CONFIG);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar brandName={config.brandName} ctaLink={config.ctaLink} />
      <main className="flex-1">
        <HeroSection config={config} />
        <ProjectsGridSection projects={config.projects} isLoading={isLoading} />
        <Separator />
        <ServicesSection />
        <Separator />
        <ProcessSection />
        <Separator />
        <ComparisonAndValuesSection />
        <Separator />
        <FaqAndFooterSection config={config} />
      </main>
    </div>
  );
}

export default App;
