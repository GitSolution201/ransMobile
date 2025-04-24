import { View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GoogleIcon from '@/assets/icons/google.svg';
import AppleIcon from '@/assets/icons/apple.svg';

export function SocialSignInButtons() {
  const handleGoogleSignIn = () => {
    // Implementation for Google sign-in
    console.log('Google sign-in');
    router.replace('/login');
  };

  const handleAppleSignIn = () => {
    // Implementation for Apple sign-in
    console.log('Apple sign-in');
    router.replace('/login');
  };

  return (
    <View className="flex-row justify-between  w-full">
      <TouchableOpacity 
        className="flex-1 mr-6 flex-row items-center justify-center bg-white border border-border h-[56px] rounded-xl"
        onPress={handleGoogleSignIn}
      >
        <GoogleIcon width={35} height={35} />
      </TouchableOpacity>
      <TouchableOpacity 
        className="flex-1 ml-6 flex-row items-center justify-center bg-white border border-border h-[56px] rounded-xl"
        onPress={handleAppleSignIn}
      >
        <AppleIcon width={35} height={35} />
      </TouchableOpacity>
    </View>
  );
} 