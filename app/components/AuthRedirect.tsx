import { Redirect } from 'expo-router';
import { useAppSelector } from '@/redux/hooks';

export default function AuthRedirect() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  
  console.log('isAuthenticated', isAuthenticated);
  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  // For demo purposes, we'll always show onboarding first
  return <Redirect href="/(auth)/onboarding" />;
} 