import {
  aboutMeNarrative,
  projectInfoList,
  experienceEntries,
  techCategories,
  highlightsData,
} from "src/config";

import AnimatedSection from "src/components/AnimatedSection";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";

function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection id="highlights">
        <Highlights items={highlightsData} />
      </AnimatedSection>
      <AnimatedSection id="experience">
        <Experience entries={experienceEntries} />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Portfolio projectInfoList={projectInfoList} />
      </AnimatedSection>
      <AnimatedSection id="tech">
        <TechStack categories={techCategories} />
      </AnimatedSection>
      <AnimatedSection id="about">
        <AboutMe narrative={aboutMeNarrative} />
      </AnimatedSection>
    </main>
  );
}

export default Home;
