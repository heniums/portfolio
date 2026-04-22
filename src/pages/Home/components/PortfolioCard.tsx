import type { ProjectInfo } from "src/types";
import { speardProps } from "src/utils/component";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";
import A from "src/components/A";
import { clsx } from "src/utils/css";
import Github from "src/components/icons/Github";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

const BASE =
  "group relative overflow-hidden rounded-lg min-h-64 flex flex-col justify-end items-start text-start text-white gap-2 p-6 border-zinc-950/20 border-1";

export default function PortfolioCard({
  name,
  description,
  tags = [],
  thumbnail,
  url,
  sourceUrl,
  className,
  ...rest
}: PortfolioCardProps) {
  return (
    <article
      className={clsx(BASE, className)}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...rest}
    >
      <div className="inset-0 absolute bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      <h3 className="text-xl font-bold z-10">{name}</h3>
      <p className="text-sm text-zinc-300 z-10">{description}</p>
      <div className="flex flex-wrap gap-2 z-10">
        {tags
          .map((text, index) => ({ key: index, text }))
          .map(speardProps(Badge))}
      </div>
      <div className="flex gap-2 z-10">
        {url && url !== "#" && (
          <A
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 rounded-lg mt-2 text-sm font-medium border border-zinc-500 text-zinc-200 hover:border-white hover:text-white transition-colors duration-200"
            variant="outline"
          >
            View Project
          </A>
        )}
        {sourceUrl && sourceUrl !== "#" && (
          <A
            href={sourceUrl }
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 rounded-lg mt-2 text-sm font-medium border border-zinc-500 text-zinc-200 hover:border-white hover:text-white transition-colors duration-200"
            variant="outline"
          >
            <Github className="w-4 h-4" />
            Github
          </A>
        )}
      </div>
    </article>
  );
}
