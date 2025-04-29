import React from 'react';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  icon: React.FC<SvgProps>;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ icon: IconComponent, color, ...props }) => {
  return <IconComponent {...props} stroke={color} fill={color} />;
}; 