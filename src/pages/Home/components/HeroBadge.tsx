import type { HeroBadge as HeroBadgeType } from "src/types";
import { clsx } from "src/utils/css";

type HeroBadgeProps = HeroBadgeType & {
  className?: string;
};

function HeroBadge({ label, value, className }: HeroBadgeProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-xs text-zinc-400",
        className,
      )}
    >
      <span className="uppercase tracking-wider text-zinc-500">{label}</span>
      <span className="text-zinc-300">{value}</span>
    </div>
  );
}

export default HeroBadge;
