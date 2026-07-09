import type { HighlightItem } from "src/types";
import Section from "src/components/Section";

type HighlightsProps = {
  items?: HighlightItem[];
};

function Highlights({ items = [] }: HighlightsProps) {
  return (
    <Section
      className="bg-white text-zinc-900"
      title="HIGHLIGHTS"
      subTitle="At a glance."
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl">
        {items.map((item) => (
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
    </Section>
  );
}

export default Highlights;
