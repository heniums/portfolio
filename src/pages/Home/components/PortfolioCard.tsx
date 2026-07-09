import type { ProjectInfo } from "src/types";
import { speardProps } from "src/utils/component";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";
import A from "src/components/A";
import { clsx } from "src/utils/css";
import Github from "src/components/icons/Github";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

const BASE =
  "group relative overflow-hidden rounded-lg min-h-64 flex flex-col justify-end items-start text-start text-white gap-2 p-6";

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
    <article className={clsx(BASE, className)} {...rest}>
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px) brightness(0.75)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/45" />
      <h3 className="text-xl font-bold z-10 [text-shadow:0_1px_4px_rgb(0_0_0_/_70%)]">
        {name}
      </h3>
      <p className="text-sm text-zinc-100 z-10 [text-shadow:0_1px_3px_rgb(0_0_0_/_60%)]">
        {description}
      </p>
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
            className="z-10 rounded-lg mt-2 text-sm font-medium bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            variant="ghost"
          >
            View Project
          </A>
        )}
        {sourceUrl && sourceUrl !== "#" && (
          <A
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 rounded-lg mt-2 text-sm font-medium bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            variant="ghost"
          >
            <Github className="w-4 h-4" />
            Github
          </A>
        )}
      </div>
    </article>
  );
}
