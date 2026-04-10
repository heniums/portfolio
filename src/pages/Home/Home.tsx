import {
  aboutMeInfoBlocks,
  projectInfoList,
  experienceEntries,
  techCategories,
  contactLinks,
} from "src/config";

import AnimatedSection from "src/components/AnimatedSection";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection id="about">
        <AboutMe infoBlocks={aboutMeInfoBlocks} />
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
      <AnimatedSection id="contact">
        <Contact links={contactLinks} />
      </AnimatedSection>
    </main>
  );
}

export default Home;
