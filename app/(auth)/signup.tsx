import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useMemo } from 'react';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import { InputField } from '@/components/InputField';
import { Button } from '@/components/Button';
import Svg, { Path } from 'react-native-svg';

const UserIcon = () => (
  <Svg width={20} height={18} viewBox="0 0 18 20" fill="none">
    <Path d="M17 19C17 16.2386 13.4183 14 9 14C4.58172 14 1 16.2386 1 19M9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11Z" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const EmailIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path d="M1 4L8.89 9.26C9.2184 9.47928 9.60444 9.5963 10 9.5963C10.3956 9.5963 10.7816 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const LockIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path d="M15 9H5C3.89543 9 3 9.89543 3 11V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V11C17 9.89543 16.1046 9 15 9Z" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M6 9V6C6 4.34315 7.34315 3 9 3H11C12.6569 3 14 4.34315 14 6V9" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const LocationIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M10 18C12.1217 16.1716 14 14.1217 14 11.5C14 8.18629 12.2091 6 10 6C7.79086 6 6 8.18629 6 11.5C6 14.1217 7.87827 16.1716 10 18Z" stroke="#0056D3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

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

  const isFormValid = useMemo(() => {
    return fullName && email && password && country && !errors.fullName && !errors.email && !errors.password && !errors.country;
  }, [fullName, email, password, country, errors]);

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
            className="w-full h-[175px] object-contain"
          />
        </View>

        {/* Title */}
        <View className="px-6">
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
            <InputField
              icon={<LocationIcon />}
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