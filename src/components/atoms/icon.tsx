import React from "react";
import { icons } from "lucide-react-native";

type IconNames = keyof typeof icons;

type IconProps = {
  name: IconNames;
  color: string;
  size?: number;
  strokeWidth?: number;
};

const Icon = ({ name, color, size, strokeWidth }: IconProps) => {
  // eslint-disable-next-line import/namespace
  const IconComponent = icons[name];
  return (
    <IconComponent size={size || 18} color={color} strokeWidth={strokeWidth} />
  );
};

export default Icon;
