import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import ExploreIcon from '@/assets/icons/search.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import ChatIcon from '@/assets/icons/chat.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0056D3',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
          ...(Platform.OS === 'ios' ? {
            paddingBottom: 30,
          } :{}),
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
              width={20} 
              height={20} 
              fill="none"
              strokeWidth={1}
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
              width={20} 
              height={20} 
              fill="none"
              strokeWidth={1.5}
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
              width={20} 
              height={20} 
              fill="none"
              strokeWidth={1.5}
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
              width={20} 
              height={20} 
              stroke={color}
              fill="none"
              strokeWidth={1.5}
            />
          ),
        }}
      />
    </Tabs>
  );
}
