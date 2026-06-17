import Hero from "../components/Hero";
import Problem from "../components/Problem";
import CurrentStatusSnapshot from "../components/home/CurrentStatusSnapshot";
import FounderSnapshot from "../components/home/FounderSnapshot";
import HomeContactCta from "../components/home/HomeContactCta";
import ProjectsSnapshot from "../components/home/ProjectsSnapshot";
import TeamSnapshot from "../components/home/TeamSnapshot";
import WhatIsVesperus from "../components/home/WhatIsVesperus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVesperus />
      <Problem />
      <ProjectsSnapshot />
      <CurrentStatusSnapshot />
      <TeamSnapshot />
      <FounderSnapshot />
      <HomeContactCta />
    </>
  );
}
