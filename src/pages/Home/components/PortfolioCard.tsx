import type { ProjectInfo } from "src/types";
import { speardProps } from "src/utils/component";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";
import A from "src/components/A";
import { clsx } from "src/utils/css";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

const BASE =
  "group relative overflow-hidden rounded-lg min-h-64 flex flex-col justify-end items-start text-start text-white gap-2 p-6";

export default function PortfolioCard({
  name,
  description,
  tags = [],
  thumbnail,
  url,
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
      <div className="inset-0 absolute bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent -z-1" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-zinc-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags
          .map((text, index) => ({ key: index, text }))
          .map(speardProps(Badge))}
      </div>
      {url && url !== "#" && (
        <A
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium border border-zinc-500 text-zinc-200 hover:border-white hover:text-white transition-colors duration-200"
          variant="outline"
        >
          View Project
        </A>
      )}
    </article>
  );
}
