import { ComponentType, Attributes } from "react";

export function speardProps<Props extends { key?: Attributes["key"] }>(
  Component: ComponentType<Props>,
) {
  return function (props: Props) {
    const { key } = props;
    return <Component {...props} key={key} />;
  };
}
