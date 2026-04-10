import { HtmlHTMLAttributes } from "react";
import { clsx } from "src/utils/css";

export function H2({ className, ...rest }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx("text-xl font-bold", className)} {...rest} />;
}
