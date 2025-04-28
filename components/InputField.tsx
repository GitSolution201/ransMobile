import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

interface InputFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  onToggleSecure?: () => void;
  centered?: boolean;
}

export function InputField({ 
  icon, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  error,
  onToggleSecure,
  centered = false
}: InputFieldProps) {
  return (
    <View className="space-y-1">
      <View className="flex-row items-center bg-white border border-gray-200 rounded-xl h-[56px] px-4">
        <View className="pr-3">
          {icon}
        </View>
        <TextInput
          className={`flex-1 h-[56px] text-sm text-text ${centered ? 'text-center' : 'text-left'}`}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {onToggleSecure && (
          <TouchableOpacity 
            className="pl-3" 
            onPress={onToggleSecure}
          >
            <Text className="text-primary">
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-red-500 text-sm px-1">
          {error}
        </Text>
      )}
    </View>
  );
} 