import MedisContactCta from "../components/medis/MedisContactCta";
import MedisHero from "../components/medis/MedisHero";
import MedisLongTermVision from "../components/medis/MedisLongTermVision";
import MedisNovaRelationship from "../components/medis/MedisNovaRelationship";
import MedisOverview from "../components/medis/MedisOverview";
import MedisResearchPrinciples from "../components/medis/MedisResearchPrinciples";
import MedisResearchStatus from "../components/medis/MedisResearchStatus";
import MedisRoadmap from "../components/medis/MedisRoadmap";
import MedisSafetyBoundary from "../components/medis/MedisSafetyBoundary";
import MedisWhyExists from "../components/medis/MedisWhyExists";

export default function MedisPage() {
  return (
    <>
      <MedisHero />
      <MedisOverview />
      <MedisWhyExists />
      <MedisNovaRelationship />
      <MedisResearchPrinciples />
      <MedisLongTermVision />
      <MedisResearchStatus />
      <MedisRoadmap />
      <MedisSafetyBoundary />
      <MedisContactCta />
    </>
  );
}
