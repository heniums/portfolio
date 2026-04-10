import type { TechCategoryData } from "src/types";

type TechCategoryProps = TechCategoryData;

function TechCategory(props: TechCategoryProps) {
  const { title, items } = props;

  return (
    <div className="text-left">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">
        {title}
      </h3>
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
