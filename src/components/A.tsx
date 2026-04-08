import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { clsx } from "src/utils/css";

export type AVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "danger"
  | "warning";

export type AProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  variant?: AVariant;
};

const BASE = "rounded-sm p-1 px-2 flex justify-center items-center gap-1";

const variantClasses: Partial<Record<AVariant, string>> = {
  primary: "bg-zinc-900 text-white",
  secondary: "bg-zinc-100 text-zinc-900",
  outline: "border border-zinc-900 text-zinc-900",
};

export default function A({
  children,
  className,
  variant = "primary",
  ...rest
}: AProps) {
  return (
    <a className={clsx(BASE, variantClasses[variant], className)} {...rest}>
      {children}
    </a>
  );
}
