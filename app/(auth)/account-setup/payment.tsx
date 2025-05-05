import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '@/app/components/Button';
import React from 'react';
import { AccountSetupHeader } from '@/app/components/AccountSetupHeader';

type PaymentMethod = 'paypal' | 'mastercard' | 'visa';

interface PaymentMethodButtonProps {
  method: PaymentMethod;
  isSelected: boolean;
  onPress: () => void;
}

function PaymentMethodButton({ method, isSelected, onPress }: PaymentMethodButtonProps) {
  const icons = {
    paypal: require('@/assets/icons/paypal.png'),
    mastercard: require('@/assets/icons/mastercard.png'),
    visa: require('@/assets/icons/visa.png'),
  };

  return (
    <TouchableOpacity 
      className={`h-12 px-8 rounded-full flex-row items-center ${isSelected ? 'bg-primary' : 'bg-white'}`}
      onPress={onPress}
    >
      <Image 
        resizeMode='contain'
        source={icons[method]}
        className="w-5 h-5 mr-2"
      />
      <Text className={`text-[12px] font-medium ${isSelected ? 'text-white' : 'text-black'}`}>
        {method.charAt(0).toUpperCase() + method.slice(1)}
      </Text>
    </TouchableOpacity>
  );
}

interface FormData {
  name: string;
  email: string;
  expiry: string;
  cvv: string;
}

export default function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState<'paypal' | 'mastercard' | 'visa' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    expiry: '',
    cvv: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    cvv: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    if (!selectedMethod) return false;
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.expiry.trim() !== '' &&
      formData.cvv.trim() !== '' &&
      formData.cvv.length === 3 &&
      !errors.email &&
      !errors.cvv
    );
  };

  const handleEmailChange = (text: string) => {
    setFormData(prev => ({ ...prev, email: text }));
    if (text.trim() && !validateEmail(text)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleCVVChange = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, '');
    setFormData(prev => ({ ...prev, cvv: numbersOnly }));
    if (numbersOnly.length > 0 && numbersOnly.length !== 3) {
      setErrors(prev => ({ ...prev, cvv: 'CVV must be 3 digits' }));
    } else {
      setErrors(prev => ({ ...prev, cvv: '' }));
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear().toString().slice(-2);
      setFormData(prev => ({ ...prev, expiry: `${month}/${year}` }));
    }
  };

  const renderCardForm = () => {
    if (!selectedMethod) return null;

    return (
      <View className="mb-8">
        <View className="mb-4">
          <TextInput
            placeholder="Nionzima Enock"
            placeholderTextColor="#A0A0A0"
            className="h-[56px] bg-white rounded-2xl px-4 border border-gray-100"
            value={formData.name}
            onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
          />
        </View>
        <View className="mb-4">
          <TextInput
            placeholder="nionzima@gmail.com"
            placeholderTextColor="#A0A0A0"
            className={`h-[56px] bg-white rounded-2xl px-4 border ${errors.email ? 'border-red-500' : 'border-gray-100'}`}
            keyboardType="email-address"
            value={formData.email}
            onChangeText={handleEmailChange}
            autoCapitalize="none"
          />
          {errors.email ? (
            <Text className="text-red-500 text-xs mt-1 ml-2">{errors.email}</Text>
          ) : null}
        </View>
        <View className="flex-row gap-4 mb-4">
          <TouchableOpacity 
            className="flex-1 h-[56px] bg-white rounded-2xl px-4 border border-gray-100 justify-center"
            onPress={() => setShowDatePicker(true)}
          >
            <Text className={formData.expiry ? "text-black" : "text-[#A0A0A0]"}>
              {formData.expiry || "MM/YY"}
            </Text>
          </TouchableOpacity>
          <View>
            <TextInput
              placeholder="CVV"
              placeholderTextColor="#A0A0A0"
              className={`w-[100px] h-[56px] bg-white rounded-2xl px-4 border ${errors.cvv ? 'border-red-500' : 'border-gray-100'}`}
              keyboardType="numeric"
              maxLength={3}
              value={formData.cvv}
              onChangeText={handleCVVChange}
            />
            {errors.cvv ? (
              <Text className="text-red-500 text-xs mt-1 ml-2">{errors.cvv}</Text>
            ) : null}
          </View>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
            minimumDate={new Date()}
          />
        )}
      </View>
    );
  };

  const handleMethodSelect = (method: 'paypal' | 'mastercard' | 'visa') => {
    setSelectedMethod(prev => prev === method ? null : method);
    setFormData({
      name: '',
      email: '',
      expiry: '',
      cvv: ''
    });
    setErrors({
      email: '',
      cvv: ''
    });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="flex-1 bg-background">
      <AccountSetupHeader
        onBackPress={() => {
          router.back();
        }}
        onSkipPress={() => {
          router.push('/(auth)/account-setup/profile-picture');
        }}
      />

        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="px-4 pt-8">
            {/* Title Section */}
            <Text className="text-2xl text-primary font-extrabold mb-2">
              Add Payment Method
            </Text>
            <Text className="text-sm text-gray-500 mb-8">
              This can be edited later in your account settings
            </Text>
            <Image
              resizeMode='contain'
              source={require('@/assets/images/card.jpg')}
              className='w-full h-[200px] rounded-2xl'
            />
            {/* Payment Methods */}
            <View className="flex-row justify-between mb-8 mt-8">
              <PaymentMethodButton
                method="paypal"
                isSelected={selectedMethod === 'paypal'}
                onPress={() => handleMethodSelect('paypal')}
              />
              <PaymentMethodButton
                method="mastercard"
                isSelected={selectedMethod === 'mastercard'}
                onPress={() => handleMethodSelect('mastercard')}
              />
              <PaymentMethodButton
                method="visa"
                isSelected={selectedMethod === 'visa'}
                onPress={() => handleMethodSelect('visa')}
              />
            </View>

            {/* Card Form - Only visible when method is selected */}
            {renderCardForm()}

            {/* Add extra padding at the bottom */}
            <View className="h-32" />
          </View>
        </ScrollView>

        {/* Bottom Section with Progress and Next Button */}
        <View className="px-4 pb-12 pt-4 bg-background absolute bottom-0 left-0 right-0 z-20">
          {/* Progress Bar */}
          <View className="h-1.5 bg-gray-200 rounded-full mb-4 mx-24">
            <View className="w-2/3 h-full bg-primary rounded-full" />
          </View>

          <Button 
            text="Next"
            variant="secondary"
            disabled={!isFormValid()}
            className="shadow-lg"
            onPress={() => router.push('/account-setup/profile-picture')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

   
