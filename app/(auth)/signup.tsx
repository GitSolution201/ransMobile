import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import { InputField } from '@/components/InputField';
import UserIcon from '@/assets/icons/user.svg';
import EmailIcon from '@/assets/icons/email.svg';
import LockIcon from '@/assets/icons/lock.svg';
import LocationIcon from '@/assets/icons/location.svg';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const handleRegister = () => {
    if (validateForm()) {
      router.push('/(auth)/otp');
      console.log('Register:', { fullName, email, password, country });
    }
  };

  return (
    <View className="flex-1 bg-background">
      {/* Back Button - Fixed at top */}
      <View className="absolute top-12 left-6 z-10">
        <BackButton />
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1" bounces={false}>
        {/* Illustration Container */}
        <View className="relative bg-white">
          <Image 
          resizeMode='contain'
            source={require('@/assets/images/login-illustration.png')}
            className="w-full h-[200px] object-contain"
          />
        </View>

        {/* Title */}
        <View className="px-6">
          <Text className="text-sm ">
            Create your <Text className="text-primary font-bold">Account</Text>
          </Text>
        </View>

        {/* Form Section */}
        <View className="px-6">
          {/* Full Name Input */}
          <View className="mt-8">
            <InputField
              icon={<UserIcon width={20} height={20} />}
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
              icon={<EmailIcon width={20} height={20} />}
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
              icon={<LockIcon width={20} height={20} />}
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
            <InputField
              icon={<LocationIcon width={20} height={20} />}
              placeholder="Select Country"
              value={country}
              onChangeText={(text) => {
                setCountry(text);
                setErrors(prev => ({ ...prev, country: '' }));
              }}
              error={errors.country}
            />
          </View>

          {/* Terms and FAQs */}
          <View className="flex-row justify-between my-10">
            <Text 
              className="text-primary"
              onPress={() => router.push('/(auth)/terms-of-service')}
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
            <TouchableOpacity
            className="mt-8 bg-secondary py-4 mx-6 rounded-xl"
            onPress={handleRegister}
          >
            <Text className="text-white text-center font-semibold text-sm">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 