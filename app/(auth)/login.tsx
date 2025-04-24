import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import { InputField } from '@/components/InputField';
import { SocialSignInButtons } from '@/components/SocialSignInButtons';
import EmailIcon from '@/assets/icons/email.svg';
import LockIcon from '@/assets/icons/lock.svg';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleLogin = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (!emailError && !passwordError) {
      // Proceed with login
      console.log('Login with:', { email, password });
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
        <View className='px-6'>
            <Text className="text-sm py-10 ">
              Let's <Text className="text-primary font-bold">Sign in</Text>
            </Text>
          </View>
        {/* Form Section */}
        <View className="px-6">
          {/* Input Fields */}
            <InputField
              centered={true}
              icon={<EmailIcon width={20} height={20} />}
              placeholder="Enter your email or username"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors(prev => ({ ...prev, email: '' }));
              }}
              error={errors.email}
            />

          <View className="mt-4">
            <InputField
            centered={true}
              icon={<LockIcon width={22} height={22} />}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors(prev => ({ ...prev, password: '' }));
              }}
              error={errors.password}
            />
          </View>

          <View className="flex-row justify-between items-center mt-4">
            <Text 
              className="text-primary text-sm"
              onPress={() => router.push('/forgot-password')}
            >
              Forgot Password ?
            </Text> 
            <Text 
              className="text-primary text-sm"
              onPress={() => setShowPassword(!showPassword)}
            >
              Show Password
            </Text>
          </View>

          {/* Divider */}
          <View className="flex-row items-center mt-12">
            <View className="flex-1 h-[1px] bg-placeholder" />
            <Text className="mx-4 text-placeholder">Or</Text>
            <View className="flex-1 h-[1px] bg-placeholder" />
          </View>

          {/* Social Login */}
          <View className="mt-4">
            <SocialSignInButtons />
          </View>
  
          {/* Login Button */}
          <TouchableOpacity
            className="bg-primary h-[56px] rounded-xl items-center justify-center mt-8"
            onPress={handleLogin}
          >
            <Text className="text-white font-semibold text-base">
              Login
            </Text>
          </TouchableOpacity>

          {/* Register Link - Moved to bottom */}
        
        </View>
        
      </ScrollView>
      <View className="absolute bottom-20 left-0 right-0">
            <View className="flex-row justify-center items-center">
              <Text className="text-gray-400">Don't have an account? </Text>
              <Text 
                className="text-primary font-medium"
                onPress={() => router.push('/signup')}
              >
                Register
              </Text>
            </View>
          </View>
    </View>
  );
} 