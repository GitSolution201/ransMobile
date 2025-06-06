import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import ExploreIcon from '@/assets/icons/explore.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import ChatIcon from '@/assets/icons/chat.svg';
import ProfileIcon from '@/assets/icons/profile.svg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0056D3',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          ...(Platform.OS === 'ios' ? {
            height: 85,
            paddingBottom: 30,
          } : {}),
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <ExploreIcon 
              width={24} 
              height={24} 
              stroke={color}
              fill="none"
              strokeWidth={2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon 
              width={24} 
              height={24} 
              stroke={color}
              fill="none"
              strokeWidth={2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <ChatIcon 
              width={24} 
              height={24} 
              stroke={color}
              fill="none"
              strokeWidth={2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon 
              width={24} 
              height={24} 
              stroke={color}
              fill="none"
              strokeWidth={2}
            />
          ),
        }}
      />
    </Tabs>
  );
}
