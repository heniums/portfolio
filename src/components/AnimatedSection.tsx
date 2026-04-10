import { ReactNode } from "react";
import useInView from "src/hooks/useInView";
import { clsx } from "src/utils/css";

type AnimatedSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      id={id}
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
