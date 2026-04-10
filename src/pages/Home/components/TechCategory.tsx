import type { TechCategoryData } from "src/types";

type TechCategoryProps = TechCategoryData;

function TechCategory(props: TechCategoryProps) {
  const { title, note, items } = props;

  return (
    <div className="text-left">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">
        {title}
      </h3>
      {note ? (
        <p className="text-xs text-zinc-600 italic mb-3">{note}</p>
      ) : (
        <div className="mb-3" />
      )}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1.5 bg-zinc-900 text-zinc-100 rounded-md font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechCategory;
