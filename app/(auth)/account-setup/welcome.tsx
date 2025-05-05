import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/app/components/BackButton';
import { Button } from '@/app/components/Button';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row justify-between items-center absolute top-[50px] left-4 right-4 z-10">
        <BackButton />
        <TouchableOpacity className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center' onPress={() => router.push('/(auth)/account-setup/location')}>
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Background Image Section */}
      <View className="h-[397px] w-full">
        <ImageBackground
          source={require('@/assets/images/smile.png')}
          className="flex-1"
          resizeMode="cover"
        />
      </View>

      {/* Welcome Text - Centered */}
      <View className="items-center mt-8">
        <Text className="text-primary font-extrabold mb-2 text-2xl" >
          Welcome to Rans
        </Text>
        <Text className="text-primary text-xs text-center">
          Let's get you started by setting up your{'\n'}account and preferences.
        </Text>
      </View>

      {/* Get Started Button */}
      <Button
        text="Get Started"
        variant="secondary"
        position="absolute"
        bottom={50}
        onPress={() => router.push('/account-setup/location')}
      />
    </View>
  );
} 