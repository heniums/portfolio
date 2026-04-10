import type { ProjectInfo } from "src/types";
import { siteConfig } from "src/config";
import Section from "src/components/Section";
import PortfolioCard from "./PortfolioCard";

type PortfolioProps = {
  projectInfoList?: ProjectInfo[];
};

function Portfolio(props: PortfolioProps) {
  const { projectInfoList = [] } = props;
  const { title, subTitle } = siteConfig.sections.portfolio;

  return (
    <Section
      className="bg-zinc-50 text-zinc-900"
      title={title}
      subTitle={subTitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projectInfoList.map((info) => (
          <PortfolioCard key={info.key} {...info} />
        ))}
      </div>
    </Section>
  );
}

export default Portfolio;
