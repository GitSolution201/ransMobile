import { Redirect } from 'expo-router';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function AuthRedirect() {
  const { isAuthenticated } = useAppSelector((state) => {
    console.log('Current Redux state:', state);
    return state.auth;
  });
  
  useEffect(() => {
    console.log('AuthRedirect mounted');
    console.log('isAuthenticated:', isAuthenticated);
  }, []);

  try {
    if (isAuthenticated) {
      console.log('Redirecting to tabs');
      return <Redirect href="/(tabs)" />;
    }

    console.log('Redirecting to onboarding');
    return <Redirect href="/(auth)/onboarding" />;
  } catch (error: any) {
    console.error('Error in AuthRedirect:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error?.message || 'Unknown error'}</Text>
      </View>
    );
  }
} 