import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

interface CreditCardInputProps {
  onChangeText?: (text: string) => void;
  value?: string;
  error?: string;
}

const CreditCardInput = ({ onChangeText, value, error }: CreditCardInputProps) => {
  const [focused, setFocused] = useState(false);

  const formatExpiryDate = (text: string) => {
    // Remove any non-digit characters
    const cleaned = text.replace(/\D/g, '');
    
    // Format as MM/YY
    if (cleaned.length >= 2) {
      const month = cleaned.slice(0, 2);
      const year = cleaned.slice(2, 4);
      
      // Validate month (01-12)
      if (parseInt(month) > 12) {
        return '12/' + year;
      }
      if (parseInt(month) === 0) {
        return '01/' + year;
      }
      
      return month + (cleaned.length > 2 ? '/' + year : '');
    }
    
    return cleaned;
  };

  const handleChangeText = (text: string) => {
    const formatted = formatExpiryDate(text);
    onChangeText?.(formatted);
  };

  return (
    <View className="w-full">
      <View 
        className={`flex-row items-center border rounded-xl px-4 py-3 ${
          error ? 'border-red-500' : focused ? 'border-blue-500' : 'border-gray-300'
        }`}
      >
        <TextInput
          className="flex-1 text-base text-gray-700"
          placeholder="MM/YY"
          value={value}
          onChangeText={handleChangeText}
          keyboardType="numeric"
          maxLength={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {error && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
};

export default CreditCardInput; 