import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between px-4 pt-14 pb-4 relative">
      <TouchableOpacity 
        onPress={() => router.back()}
        className="w-8 h-8 rounded-full bg-[#2563EB] items-center justify-center"
      >
        <Ionicons name="chevron-back" size={20} color="white" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold">{title}</Text>
      <Text className="text-transparent">trans</Text>
    </View>
  );
}; 