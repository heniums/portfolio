import type { HeroBadge as HeroBadgeType } from "src/types";
import { clsx } from "src/utils/css";

type HeroBadgeProps = HeroBadgeType & {
  className?: string;
};

function HeroBadge({ label, value, className }: HeroBadgeProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 min-w-[160px]",
        className,
      )}
    >
      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
        {label}
      </span>
      <span className="text-sm font-semibold text-white text-center leading-snug">
        {value}
      </span>
    </div>
  );
}

export default HeroBadge;
