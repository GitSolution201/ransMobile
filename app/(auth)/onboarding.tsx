import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import EmailIcon from '@/assets/icons/email.svg';
import { SocialSignInButtons } from '@/components/SocialSignInButtons';
import WelcomeScreen from './account-setup/welcome';
import LocationScreen from './account-setup/location';
import AccountSetupLayout from './account-setup/_layout';
import PreferencesScreen from './account-setup/preferences';
import RoleScreen from './account-setup/role';
import PaymentScreen from './account-setup/payment';

export default function OnboardingScreen() {
  const handleSignIn = () => {
    router.replace('/account-setup/welcome');
    // router.replace('/login');
  };

  const handleRegister = () => {
    router.replace('/signup');
  };

  return (
    <View className="flex-1 bg-background justify-center">
       <View className="flex-1 bg-background px-6 justify-center">
      {/* Logo */}
      <View className="items-center">
        <Image 
          resizeMode='contain'
          source={require('@/assets/images/rans-logo.png')}
          className="w-32 h-20"
        />
      </View>

      {/* Illustration */}
      <View className="items-center mt-[50px] justify-center ">
        <Image 
         resizeMode='contain'
          source={require('@/assets/images/onboarding-illustration.png')}
          className="w-72 h-[200px]"
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
          className="flex-row items-center bg-white border border-placeholder h-[54px] rounded-xl relative"
          onPress={handleSignIn}
        >
          <View className="absolute left-10">
            <EmailIcon width={20} height={20} />
          </View>
          <Text className="text-primary font-medium text-sm flex-1 text-center">
            Sign In with Email
          </Text>
        </TouchableOpacity>

        {/* Or Divider */}
        <View className="flex-row mb-6 items-center">
          <View className="flex-1 h-[1px] bg-placeholder" />
          <Text className="mx-4 text-placeholder">Or</Text>
          <View className="flex-1 h-[1px] bg-placeholder" />
        </View>

        {/* Social Sign In */}
        <SocialSignInButtons />

        {/* Register Link */}
        <View className="flex-row justify-center pt-8 items-center">
          <Text className="text-placeholder">Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text className="text-placeholder font-medium">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
} 

 