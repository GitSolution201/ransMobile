import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

interface InputFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  onToggleSecure?: () => void;
  error?: string;
  editable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onToggleSecure,
  error,
  editable = true
}) => {
  return (
    <View>
      <View className="flex-row items-center bg-white rounded-xl border-[0.3px] border-border h-[56px] px-4">
        <View className="mr-2">
          {icon}
        </View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          className="flex-1 text-sm text-text"
          placeholderTextColor="#9CA3AF"
          editable={editable}
        />
        {onToggleSecure && (
          <TouchableOpacity onPress={onToggleSecure}>
            <Text className="text-primary text-sm">
              {secureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
}; 