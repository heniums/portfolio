import { HtmlHTMLAttributes, ReactNode } from "react";
import { H2 } from "src/components/headings/H2";
import { clsx } from "src/utils/css";

type SectionProps = HtmlHTMLAttributes<HTMLElement> & {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

const BASE =
  "py-20 flex flex-col text-center gap-6 justify-start items-center px-8 min-h-[400px]";

export default function Section({
  title,
  subTitle,
  children,
  className,
  ...rest
}: SectionProps) {
  return (
    <section className={clsx(BASE, className)} {...rest}>
      <H2 className="text-2xl font-bold uppercase tracking-widest">{title}</H2>
      {subTitle && (
        <p className="text-sm max-w-2xl opacity-70">{subTitle}</p>
      )}
      {children}
    </section>
  );
}
