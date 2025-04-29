import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { LoginHeader } from '../components/LoginHeader';
export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your password reset logic here
    console.log('Reset password for:', email);
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <LoginHeader />
      <View className="flex-1 px-6 mt-10">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Reset Password
        </Text>
        
        <Text className="text-gray-600 dark:text-gray-400 mb-8">
          Enter your email address and we'll send you instructions to reset your password.
        </Text>

        <View className="space-y-4 mb-6">
          <View>
            <Text className="text-gray-700 dark:text-gray-300 mb-2">Email</Text>
            <TextInput
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-900 dark:text-white"
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-lg mb-4"
          onPress={handleResetPassword}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Send Reset Instructions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text className="text-blue-500 text-center">
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 