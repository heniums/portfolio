import type { TechCategoryData } from "src/types";

type TechCategoryProps = TechCategoryData;

const PILL_BASE =
  "text-sm px-3 py-1.5 rounded-md font-medium transition-colors duration-200";

function TechCategory(props: TechCategoryProps) {
  const { title, note, items } = props;

  return (
    <div className="relative text-left rounded-xl border border-zinc-300 bg-white p-6 pt-8 transition-all duration-200 hover:border-zinc-400">
      <h3 className="absolute -top-2.5 left-4 bg-zinc-50 px-2 text-[11px] uppercase tracking-widest font-semibold text-zinc-600">
        {title}
      </h3>
      {note ? (
        <p className="text-xs text-zinc-500 mb-4 leading-relaxed">{note}</p>
      ) : (
        <div className="mb-4" />
      )}
      <div className="flex flex-wrap gap-2 items-center">
        {items.map((item, index) => {
          if (typeof item === "string") {
            return (
              <span
                key={index}
                className={`${PILL_BASE} bg-zinc-100 text-zinc-800 hover:bg-zinc-200`}
              >
                {item}
              </span>
            );
          }
          return (
            <div
              key={index}
              className="flex flex-wrap gap-2 items-center w-full pt-1 first:pt-0"
            >
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                {item.label}
              </span>
              <div className="flex flex-wrap gap-2 items-center">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`${PILL_BASE} bg-zinc-900 text-zinc-100 hover:bg-zinc-700`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechCategory;