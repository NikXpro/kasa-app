import { createElement } from "react";

import arrow from "@assets/icons/arrow.svg?react";
import arrow_big from "@assets/icons/arrow_big.svg?react";
import logo from "@assets/icons/logo.svg?react";
import star from "@assets/icons/star.svg?react";

const icons = {
  arrow,
  arrow_big,
  logo,
  star,
};

type IconProps = {
  id: string;
  style?: React.CSSProperties;
  className?: string;
};

export function Icon({ id, style, className }: IconProps) {
  return createElement(icons[id as keyof typeof icons] || "svg", {
    className: `icon ${className}`,
    style: style,
  });
}
