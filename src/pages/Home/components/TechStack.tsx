import type { TechCategoryData, HighlightItem } from "src/types";
import { siteConfig } from "src/config";
import Section from "src/components/Section";
import TechCategory from "./TechCategory";
import { speardProps } from "src/utils/component";

type TechStackProps = {
  categories?: TechCategoryData[];
  highlights?: HighlightItem[];
};

function TechStack(props: TechStackProps) {
  const { categories = [], highlights = [] } = props;
  const { title, subTitle } = siteConfig.sections.techStack;

  return (
    <Section
      className="bg-zinc-50 text-zinc-900"
      title={title}
      subTitle={subTitle}
    >
      {highlights.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mb-12">
          {highlights.map((item) => (
            <div key={item.key} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-1">
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {categories.map(speardProps(TechCategory))}
      </div>
    </Section>
  );
}

export default TechStack;
