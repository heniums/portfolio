import type { TechCategoryData } from "src/types";
import { siteConfig } from "src/config";
import Section from "src/components/Section";
import TechCategory from "./TechCategory";
import { speardProps } from "src/utils/component";

type TechStackProps = {
  categories?: TechCategoryData[];
};

function TechStack(props: TechStackProps) {
  const { categories = [] } = props;
  const { title, subTitle } = siteConfig.sections.techStack;

  return (
    <Section
      className="bg-zinc-50 text-zinc-900"
      title={title}
      subTitle={subTitle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {categories.map(speardProps(TechCategory))}
      </div>
    </Section>
  );
}

export default TechStack;
