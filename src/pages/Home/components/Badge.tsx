import { DetailedHTMLProps, HTMLAttributes } from "react";

type BadgeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  text?: string;
};

export function Badge(props: BadgeProps) {
  const { text = "" } = props;
  return (
    <span className="text-xs bg-zinc-900/80 text-zinc-100 px-3 p-1 rounded-lg font-bold border border-white/10 backdrop-blur-sm">
      {text}
    </span>
  );
}
