import type { ExperienceEntry } from "src/types";

type ExperienceCardProps = ExperienceEntry;

function ExperienceCard(props: ExperienceCardProps) {
  const { company, role, period, description } = props;

  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l border-zinc-700">
      <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-white" />
      <div className="mb-2">
        <h3 className="text-lg font-bold text-white">{role}</h3>
        <p className="text-sm text-zinc-400">
          {company} &middot; {period}
        </p>
      </div>
      <ul className="space-y-2 text-sm text-zinc-300 text-left">
        {description.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-zinc-500 mt-1 shrink-0">&bull;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
