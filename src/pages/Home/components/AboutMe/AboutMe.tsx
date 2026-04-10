import { DetailedHTMLProps, HTMLAttributes } from "react";

import type { InfoBlock } from "src/types";
import { siteConfig } from "src/config";
import AboutMeCard from "./components/AboutMeCard";
import Section from "src/components/Section";
import { speardProps } from "src/utils/component";

type AboutMeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  infoBlocks?: InfoBlock[];
};

function AboutMe(props: AboutMeProps) {
  const { infoBlocks = [], ...rest } = props;
  const { title, subTitle } = siteConfig.sections.about;

  return (
    <Section
      {...rest}
      title={title}
      subTitle={subTitle}
      className="bg-zinc-900 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {infoBlocks.map(speardProps(AboutMeCard))}
      </div>
    </Section>
  );
}

export default AboutMe;
