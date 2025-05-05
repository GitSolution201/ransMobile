import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useState, useMemo } from 'react';
import { router } from 'expo-router';
import { InputField } from '@/app/components/InputField';
import { Button } from '@/app/components/Button';
import LocationIcon from '@/assets/icons/location.svg';
import EmailIcon from '@/assets/icons/email_signin.svg';
import LockIcon from '@/assets/icons/lock.svg';
import UserIcon from '@/assets/icons/user.svg';
import { LoginHeader } from '../components/LoginHeader';
import { countries } from '../utils/constants/countries';
import { DropdownIcon } from '../components/DropdownIcon';
import React from 'react';

interface Country {
  name: string;
  code: string;
}

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    country: ''
  });

  const validateForm = () => {
    const newErrors = {
      fullName: !fullName ? 'Full name is required' : '',
      email: !email ? 'Email is required' : !/\S+@\S+\.\S+/.test(email) ? 'Email is invalid' : '',
      password: !password ? 'Password is required' : password.length < 6 ? 'Password must be at least 6 characters' : '',
      country: !country ? 'Country is required' : ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const isFormValid = useMemo(() => {
    return fullName && email && password && country && !errors.fullName && !errors.email && !errors.password && !errors.country;
  }, [fullName, email, password, country, errors]);

  const handleRegister = () => {
    if (validateForm()) {
      router.push('/(auth)/otp');
      console.log('Register:', { fullName, email, password, country });
    }
  };

  const handleCountrySelect = (selectedCountry: string) => {
    setCountry(selectedCountry);
    setErrors(prev => ({ ...prev, country: '' }));
    setShowCountryDropdown(false);
  };

  return (
    <View className="flex-1 bg-background">
      <LoginHeader />
      {/* Main Content */}
      <ScrollView className="flex-1" bounces={false}>

        {/* Title */}
        <View className="px-6 mt-4">
          <Text className="text-sm ">
            Create your <Text className="text-primary font-bold text-sm">Account</Text>
          </Text>
        </View>

        {/* Form Section */}
        <View className="px-6">
          {/* Full Name Input */}
          <View className="mt-8">
            <InputField
              icon={<UserIcon />}
              placeholder="Enter your Full Name"
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setErrors(prev => ({ ...prev, fullName: '' }));
              }}
              error={errors.fullName}
            />
          </View>

          {/* Email Input */}
          <View className="mt-4">
            <InputField
              icon={<EmailIcon />}
              placeholder="Enter your Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors(prev => ({ ...prev, email: '' }));
              }}
              error={errors.email}
            />
          </View>

          {/* Password Input */}
          <View className="mt-4">
            <InputField
              icon={<LockIcon />}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors(prev => ({ ...prev, password: '' }));
              }}
              secureTextEntry={!showPassword}
              onToggleSecure={() => setShowPassword(!showPassword)}
              error={errors.password}
            />
          </View>

          {/* Country Selection */}
          <View className="mt-4">
            <TouchableOpacity 
              onPress={() => setShowCountryDropdown(true)}
              className={`flex-row items-center bg-white rounded-xl border-[0.3px] border-border h-[56px] px-5 ${errors.country ? 'border-red-500' : ''}`}
            >
              <View className="mr-2">
                <LocationIcon />
              </View>
              <Text className={`flex-1 ml-2 text-sm ${country ? 'text-text' : 'text-gray-400'}`}>
                {country || 'Select Country'}
              </Text>
              <DropdownIcon color={errors.country ? '#EF4444' : '#0056D3'} />
            </TouchableOpacity>
            {errors.country && <Text className="text-red-500 text-xs mt-1">{errors.country}</Text>}
          </View>

          {/* Country Dropdown Modal */}
          <Modal
            visible={showCountryDropdown}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setShowCountryDropdown(false)}
          >
            <View className="flex-1 bg-black/50 justify-end">
              <View className="bg-white rounded-t-3xl p-6">
                <Text className="text-lg font-semibold mb-4">Select Country</Text>
                <ScrollView className="max-h-[300px]">
                  {countries.map((countryItem: Country) => (
                    <TouchableOpacity
                      key={countryItem.code}
                      className="py-3 border-b border-gray-200"
                      onPress={() => handleCountrySelect(countryItem.name)}
                    >
                      <Text className="text-base">{countryItem.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity
                  className="mt-4 py-3"
                  onPress={() => setShowCountryDropdown(false)}
                >
                  <Text className="text-primary text-center">Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Terms and FAQs */}
          <View className="flex-row justify-between my-10">
            <Text
              className="text-primary"
              onPress={() => router.push('/screens/terms-conditions')}
            >
              Terms of service
            </Text>
            <Text
              className="text-primary"
              onPress={() => router.push('/(auth)/faq-support')}
            >
              FAQS
            </Text>
          </View>

          {/* Register Button */}
          <Button
            text="Register"
            variant="secondary"
            onPress={handleRegister}
            disabled={!isFormValid}
          />
        </View>
      </ScrollView>
    </View>
  );
} 