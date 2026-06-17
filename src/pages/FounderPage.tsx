import FounderBuilderProfile from "../components/founder/FounderBuilderProfile";
import FounderContactCta from "../components/founder/FounderContactCta";
import FounderHero from "../components/founder/FounderHero";
import FounderProfile from "../components/founder/FounderProfile";
import FounderProjects from "../components/founder/FounderProjects";
import FounderRecognition from "../components/founder/FounderRecognition";
import FounderTeamContext from "../components/founder/FounderTeamContext";
import FounderTechnicalFocus from "../components/founder/FounderTechnicalFocus";
import FounderWhyVesperus from "../components/founder/FounderWhyVesperus";

export default function FounderPage() {
  return (
    <>
      <FounderHero />
      <FounderProfile />
      <FounderWhyVesperus />
      <FounderBuilderProfile />
      <FounderProjects />
      <FounderRecognition />
      <FounderTechnicalFocus />
      <FounderTeamContext />
      <FounderContactCta />
    </>
  );
}
