import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import BackIcon from '@/assets/icons/back.svg';
import React from 'react';

export function  BackButton() {
  return (
    <TouchableOpacity 
      className="w-[50px] h-[50px] items-center justify-center rounded-full bg-primary "
      onPress={() => router.back()}
    >
      <BackIcon width={18} height={18} />
    </TouchableOpacity>
  );
} 