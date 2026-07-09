import { DetailedHTMLProps, HTMLAttributes } from "react";

import { siteConfig } from "src/config";
import Section from "src/components/Section";

type AboutMeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  narrative?: string;
};

function AboutMe(props: AboutMeProps) {
  const { narrative = "", ...rest } = props;
  const { title, subTitle } = siteConfig.sections.about;

  return (
    <Section
      {...rest}
      title={title}
      subTitle={subTitle}
      className="bg-zinc-900 text-white"
    >
      <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
        {narrative}
      </p>
    </Section>
  );
}

export default AboutMe;
