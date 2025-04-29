import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import BackIcon from '@/assets/icons/back.svg';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };  
  return (
    <View className="flex-row items-center justify-between px-4 pb-4 relative">
        <TouchableOpacity 
      className="w-[50px] h-[50px] items-center justify-center rounded-full bg-primary "
      onPress={handleBack}
    >
      <BackIcon width={18} height={18} />
    </TouchableOpacity>
      <Text className="text-xl font-semibold">{title}</Text>
      <Text className="text-transparent">trans</Text>
    </View>
  );
}; 