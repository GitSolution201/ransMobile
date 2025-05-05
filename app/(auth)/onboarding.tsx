import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import EmailIcon from '@/assets/icons/email_login.svg';
import { SocialSignInButtons } from '@/app/components/SocialSignInButtons';
import React from 'react';
export default function OnboardingScreen() {
  const handleSignIn = () => {
    router.push('/(auth)/login');
  };

  const handleRegister = () => {
    router.push('/signup');
  };

  return (
    <View className="flex-1 bg-background justify-center">
       <View className="flex-1 bg-background px-6 justify-center">
      {/* Logo */}
      <View className="items-center">
        <Image 
          resizeMode='contain'
          source={require('@/assets/images/rans-logo.png')}
          className="w-[155px] h-[50px]"
        />
      </View>

      {/* Illustration */}
      <View className="items-center mt-[50px] justify-center ">
        <Image 
         resizeMode='contain'
          source={require('@/assets/images/onboarding-illustration.png')}
          className="w-[206px] h-[202px]"
        />
        
        {/* Heading */}
        <Text className="text-sm text-placeholder text-center my-6 px-8">
          Sale, Buy, Manage Properties{'\n'}now. All In one place.
        </Text>
      </View>

      {/* Buttons Section */}
      <View className=" mx-6 space-y-6">
        {/* Email Sign In */}
        <TouchableOpacity 
          className="flex-row items-center bg-white border border-placeholder h-[56px] rounded-xl relative"
          onPress={handleSignIn}
        >
          <View className="absolute left-10">
            <EmailIcon width={19} height={19} color="#0056D3" />
          </View>
          <Text className="text-primary font-medium text-sm flex-1 text-center">
            Sign In with Email
          </Text>
        </TouchableOpacity>

        {/* Or Divider */}
        <View className="flex-row m-6 items-center">
          <View className="flex-1 h-[1px] bg-placeholder" />
          <Text className="mx-4 text-placeholder text-sm">Or</Text>
          <View className="flex-1 h-[1px] bg-placeholder" />
        </View>

        {/* Social Sign In */}
        <SocialSignInButtons />

        {/* Register Link */}
        <View className="flex-row justify-center pt-8 items-center">
          <Text className="text-placeholder text-sm" >Dont have an account ? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text className="text-placeholder font-medium text-sm text-[#A5A5A5]">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
} 

 