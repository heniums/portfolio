import type { ExperienceEntry } from "src/types";
import { ExternalLink } from "lucide-react";

type ExperienceCardProps = ExperienceEntry;

function ExperienceCard(props: ExperienceCardProps) {
  const { company, companyUrl, role, period, description } = props;

  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l border-zinc-700">
      <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-white" />
      <div className="mb-2">
        <h3 className="text-lg font-bold text-white">{role}</h3>
        <p className="text-sm text-zinc-400">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-zinc-300 underline underline-offset-2 decoration-zinc-600 hover:text-white hover:decoration-white transition-colors"
            >
              {company}
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          ) : (
            company
          )}
          &nbsp;&middot;&nbsp;{period}
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
