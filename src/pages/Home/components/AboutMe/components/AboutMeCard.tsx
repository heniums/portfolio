import { DetailedHTMLProps, HTMLAttributes } from "react";

export type AboutMeCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  title: string;
  content: string;
};

function AboutMeCard(props: AboutMeCardProps) {
  const { title, content } = props;

  return (
    <article className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6 text-left hover:border-zinc-500 transition-colors duration-300">
      <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{content}</p>
    </article>
  );
}

export default AboutMeCard;
