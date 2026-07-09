import { DetailedHTMLProps, HTMLAttributes } from "react";

import type { InfoBlockGroup } from "src/types";
import { siteConfig } from "src/config";
import AboutMeCard from "./components/AboutMeCard";
import Section from "src/components/Section";
import { speardProps } from "src/utils/component";

type AboutMeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  groups?: InfoBlockGroup[];
};

function AboutMe(props: AboutMeProps) {
  const { groups = [], ...rest } = props;
  const { title, subTitle } = siteConfig.sections.about;

  return (
    <Section
      {...rest}
      title={title}
      subTitle={subTitle}
      className="bg-zinc-900 text-white"
    >
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {groups.map((group, index) => (
          <div key={group.key} className="flex flex-col gap-4">
            {index > 0 && <div className="border-t border-zinc-700" />}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.blocks.map(speardProps(AboutMeCard))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AboutMe;
