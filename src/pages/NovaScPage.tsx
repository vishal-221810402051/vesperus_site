import NovaScAuthorityModel from "../components/nova-sc/NovaScAuthorityModel";
import NovaScContactCta from "../components/nova-sc/NovaScContactCta";
import NovaScCurrentCapabilities from "../components/nova-sc/NovaScCurrentCapabilities";
import NovaScHero from "../components/nova-sc/NovaScHero";
import NovaScIntelligentAdvisoryRoadmap from "../components/nova-sc/NovaScIntelligentAdvisoryRoadmap";
import NovaScOverview from "../components/nova-sc/NovaScOverview";
import NovaScRoadmap from "../components/nova-sc/NovaScRoadmap";
import NovaScSafetyBoundary from "../components/nova-sc/NovaScSafetyBoundary";
import NovaScSoftwareValidationLayer from "../components/nova-sc/NovaScSoftwareValidationLayer";
import NovaScTelemetryPipeline from "../components/nova-sc/NovaScTelemetryPipeline";
import NovaScValidationStatus from "../components/nova-sc/NovaScValidationStatus";

export default function NovaScPage() {
  return (
    <>
      <NovaScHero />
      <NovaScOverview />
      <NovaScCurrentCapabilities />
      <NovaScSoftwareValidationLayer />
      <NovaScTelemetryPipeline />
      <NovaScIntelligentAdvisoryRoadmap />
      <NovaScAuthorityModel />
      <NovaScValidationStatus />
      <NovaScRoadmap />
      <NovaScSafetyBoundary />
      <NovaScContactCta />
    </>
  );
}
