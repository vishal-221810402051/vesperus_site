import ProjectConnectionMap from "../components/projects/ProjectConnectionMap";
import ProjectMaturityOverview from "../components/projects/ProjectMaturityOverview";
import ProjectPortfolioCards from "../components/projects/ProjectPortfolioCards";
import ProjectSafetyBoundary from "../components/projects/ProjectSafetyBoundary";
import ProjectsContactCta from "../components/projects/ProjectsContactCta";
import ProjectsHero from "../components/projects/ProjectsHero";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectPortfolioCards />
      <ProjectConnectionMap />
      <ProjectMaturityOverview />
      <ProjectSafetyBoundary />
      <ProjectsContactCta />
    </>
  );
}
