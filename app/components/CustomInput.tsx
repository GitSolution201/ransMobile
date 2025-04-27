import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import { Colors } from '@/utils/constants/Colors';

interface CustomInputProps extends TextInputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'date' | 'time';
}

export const CustomInput: React.FC<CustomInputProps> = ({ 
  type = 'text',
  placeholder,
  multiline = false,
  numberOfLines = 1,
  ...props 
}) => {
  return (
    <View className="w-full">
      <TextInput
        className={`w-full px-4 py-3 bg-white border border-[#737373] rounded-xl text-base ${
          multiline ? 'min-h-[100]' : 'h-[45]'
        }`}
        placeholder={placeholder}
        placeholderTextColor={Colors.light.placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...props}
      />
    </View>
  );
}; 