import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface RequestButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const RequestButton: React.FC<RequestButtonProps> = ({ 
  title,
  onPress,
  ...props 
}) => {
  return (
    <TouchableOpacity 
      className="bg-[#4DB299] py-4 rounded-xl mb-8 mx-8 mt-6"
      onPress={onPress}
      {...props}
    >
      <Text className="text-white text-center text-lg">{title}</Text>
    </TouchableOpacity>
  );
}; 