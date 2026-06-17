import NovaB1Motherboard from "../components/nova/NovaB1Motherboard";
import NovaContactCta from "../components/nova/NovaContactCta";
import NovaHardwareCapabilities from "../components/nova/NovaHardwareCapabilities";
import NovaHero from "../components/nova/NovaHero";
import NovaOverview from "../components/nova/NovaOverview";
import NovaRoadmap from "../components/nova/NovaRoadmap";
import NovaSafetyBoundary from "../components/nova/NovaSafetyBoundary";
import NovaSystemArchitecture from "../components/nova/NovaSystemArchitecture";
import NovaValidationStatus from "../components/nova/NovaValidationStatus";
import NovaWhyExists from "../components/nova/NovaWhyExists";

export default function NovaPage() {
  return (
    <>
      <NovaHero />
      <NovaOverview />
      <NovaWhyExists />
      <NovaB1Motherboard />
      <NovaSystemArchitecture />
      <NovaHardwareCapabilities />
      <NovaValidationStatus />
      <NovaRoadmap />
      <NovaSafetyBoundary />
      <NovaContactCta />
    </>
  );
}
