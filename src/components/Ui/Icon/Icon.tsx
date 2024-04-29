import { createElement } from "react";

import logo from "@assets/icons/logo.svg?react";

const icons = {
  logo,
};

type IconProps = {
  id: string;
  style?: React.CSSProperties;
};

export function Icon({ id, style }: IconProps) {
  return createElement(icons[id as keyof typeof icons] || "svg", {
    className: "icon",
    style: style,
  });
}
