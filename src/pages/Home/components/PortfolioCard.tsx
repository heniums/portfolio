import { speardProps } from "src/utils/component";
import { ProjectInfo } from "./Portfolio";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";
import A from "src/components/A";
import { clsx } from "src/utils/css";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

const BASE = `p-2 bg-gray-500 min-w-80 min-h-70 rounded-sm snap-start flex flex-col
   justify-end items-start text-start text-white gap-2 p-4 relative`;

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
      <div className="inset-0 absolute bg-linear-to-t from-black to-black/20 -z-1"></div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2">
        {tags
          .map((text, index) => ({ key: index, text }))
          .map(speardProps(Badge))}
      </div>
      <A href={url} className="w-full font-bold" variant="secondary">
        Explore
      </A>
    </article>
  );
}
