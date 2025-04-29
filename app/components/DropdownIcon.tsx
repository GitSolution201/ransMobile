import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const DropdownIcon: React.FC<{ color?: string }> = ({ color = '#0056D3' }) => {
  return (
    <View>
      <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <Path
          d="M1 1.5L6 6.5L11 1.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}; 