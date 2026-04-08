import { ButtonHTMLAttributes } from "react";
import { clsx } from "src/utils/css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "danger"
  | "warning";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const BASE = "rounded-sm p-1 px-2 flex justify-center items-center gap-1";

const variantClasses: Partial<Record<ButtonVariant, string>> = {
  primary: "bg-zinc-900 text-white",
  secondary: "bg-zinc-100 text-zinc-900",
  outline: "border border-zinc-900 text-zinc-900",
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button className={clsx(BASE, variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}
