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
      <div className="flex flex-wrap gap-2 items-center">
        {items.map((item, index) => {
          if (typeof item === "string") {
            return (
              <span
                key={index}
                className="text-sm px-3 py-1.5 bg-zinc-900 text-zinc-100 rounded-md font-medium"
              >
                {item}
              </span>
            );
          } else {
            return (
              <div key={index} className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-zinc-700 mr-1">
                  {item.label}:
                </span>
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-sm px-3 py-1.5 bg-zinc-900 text-zinc-100 rounded-md font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TechCategory;
