import type { ExperienceEntry } from "src/types";
import { siteConfig } from "src/config";
import Section from "src/components/Section";
import ExperienceCard from "./ExperienceCard";
import { speardProps } from "src/utils/component";

type ExperienceProps = {
  entries?: ExperienceEntry[];
};

function Experience(props: ExperienceProps) {
  const { entries = [] } = props;
  const { title, subTitle } = siteConfig.sections.experience;

  return (
    <Section
      className="bg-zinc-950 text-white"
      title={title}
      subTitle={subTitle}
    >
      <div className="w-full max-w-3xl">
        {entries.map(speardProps(ExperienceCard))}
      </div>
    </Section>
  );
}

export default Experience;
