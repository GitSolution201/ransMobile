import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/utils/constants/Colors';

interface CustomCheckboxProps {
  label: string;
  checked?: boolean;
  onPress?: () => void;
  fullWidth?: boolean;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ 
  label,
  checked = false,
  onPress,
  fullWidth = false
}) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-start ${fullWidth ? 'w-full' : 'flex-1 pr-1'}`}
      onPress={onPress}
    >
      <View className={`w-4 h-4 border border-[#737373] rounded mr-1.5 items-center justify-center mt-0.5 flex-shrink-0`}>
        {checked && (
          <View className="w-2 h-2 bg-white rounded-sm" />
        )}
      </View>
      <Text 
        style={{ color: Colors.light.textGray }} 
        className="text-xs flex-1 flex-wrap"
        numberOfLines={2}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}; 