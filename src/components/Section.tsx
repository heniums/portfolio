import { HtmlHTMLAttributes, ReactNode } from "react";
import { H2 } from "src/components/headings/H2";
import { clsx } from "src/utils/css";

type SectionProps = HtmlHTMLAttributes<HTMLElement> & {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

const BASE =
  "bg-zinc-900 py-20 flex flex-col text-center gap-4 justify-start items-center px-8 min-h-[400px] text-white";

export default function Section({
  title,
  subTitle,
  children,
  className,
  ...rest
}: SectionProps) {
  return (
    <section className={clsx(BASE, className)} {...rest}>
      <H2>{title}</H2>
      <p>{subTitle}</p>
      {children}
    </section>
  );
}
