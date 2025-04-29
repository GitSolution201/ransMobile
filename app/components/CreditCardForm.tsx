import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CreditCardInput from './CreditCardInput';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!expiryDate || expiryDate.length < 5) {
      newErrors.expiryDate = 'Please enter a valid expiry date';
    } else {
      const [month, year] = expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (parseInt(year) < currentYear || 
         (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        newErrors.expiryDate = 'Card has expired';
      }
    }

    if (!cvv || cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    if (!cardName) {
      newErrors.cardName = 'Please enter the cardholder name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle successful validation
      console.log('Form is valid');
    }
  };

  return (
    <View className="p-4 bg-white rounded-2xl shadow-sm">
      <Text className="text-xl font-semibold text-gray-800 mb-6">Payment Details</Text>
      
      {/* Card Number */}
      <View className="mb-4">
        <Text className="text-sm text-gray-600 mb-2">Card Number</Text>
        <View className={`border rounded-xl px-4 py-3 ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}>
          <TextInput
            className="text-base text-gray-700"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            keyboardType="numeric"
            maxLength={19}
          />
        </View>
        {errors.cardNumber && (
          <Text className="text-red-500 text-sm mt-1">{errors.cardNumber}</Text>
        )}
      </View>

      {/* Card Name */}
      <View className="mb-4">
        <Text className="text-sm text-gray-600 mb-2">Cardholder Name</Text>
        <View className={`border rounded-xl px-4 py-3 ${errors.cardName ? 'border-red-500' : 'border-gray-300'}`}>
          <TextInput
            className="text-base text-gray-700"
            placeholder="John Doe"
            value={cardName}
            onChangeText={setCardName}
            autoCapitalize="words"
          />
        </View>
        {errors.cardName && (
          <Text className="text-red-500 text-sm mt-1">{errors.cardName}</Text>
        )}
      </View>

      {/* Expiry and CVV */}
      <View className="flex-row mb-6">
        <View className="flex-1 mr-2">
          <Text className="text-sm text-gray-600 mb-2">Expiry Date</Text>
          <CreditCardInput
            value={expiryDate}
            onChangeText={setExpiryDate}
            error={errors.expiryDate}
          />
        </View>
        
        <View className="w-24">
          <Text className="text-sm text-gray-600 mb-2">CVV</Text>
          <View className={`border rounded-xl px-4 py-3 ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}>
            <TextInput
              className="text-base text-gray-700"
              placeholder="123"
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              maxLength={4}
              secureTextEntry
            />
          </View>
          {errors.cvv && (
            <Text className="text-red-500 text-sm mt-1">{errors.cvv}</Text>
          )}
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 rounded-xl py-4 items-center"
      >
        <Text className="text-white font-semibold text-base">Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreditCardForm; 