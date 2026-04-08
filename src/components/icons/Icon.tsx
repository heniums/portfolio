import { ComponentType, SVGAttributes } from "react";
import { clsx } from "src/utils/css";

type IconProps = SVGAttributes<SVGElement> & {
  icon: ComponentType<SVGAttributes<SVGElement>>;
};

export default function Icon({ icon: PassedIcon, className, ...rest }: IconProps) {
  return <PassedIcon className={clsx("w-6 h-6", className)} {...rest} />;
}
