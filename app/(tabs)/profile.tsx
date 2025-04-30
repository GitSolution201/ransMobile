import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { legalSettings, privacySettings, settingsData, supportSettings } from '@/utils/helper/DummyData';
import { router } from 'expo-router';
import BellIcon from '@/assets/icons/bell.svg';
import React from 'react';


// Setting Item Component
type SettingItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress: () => void;
};

function SettingItem({ icon, title, onPress }: SettingItemProps) {
  return (
    <TouchableOpacity 
      className="flex-row items-center py-4 border-b border-[#73737333]"
      onPress={onPress}
    >
      <View className="w-8 h-8 rounded-full items-center justify-center">
        <Ionicons name={icon} size={24} color="black" />
      </View>
      <Text className="flex-1 ml-4 text-[#737373]">{title}</Text>
      <Ionicons name="chevron-forward" size={26} color="#ccc" />
    </TouchableOpacity>
  );
}

const handleSettingPress = (title: string) => {
  if (title === 'Notifications') {
    router.push('/screens/notifications');
  } else if (title === 'Contact us') {
    router.push('/screens/contact-us');
  } else if(title === 'Terms of service' ) {
    router.push('/screens/terms-conditions');
  } else if(title === 'Personal Information') {
    router.push('/screens/personal_information');
  } else {
    console.log('Setting pressed:', title);
  }
}


export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 pt-14 pb-4">
        <Text className="text-2xl font-bold">Profile</Text>
        <TouchableOpacity 
          onPress={() => {
            router.push({
              pathname: '/screens/notifications',
              params: { returnTo: '/(tabs)/profile' }
            });
          }} 
          className="relative"
        >
          <BellIcon width={24} height={24} />
          <View className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <TouchableOpacity 
        className="flex-row items-center px-4 py-4 border-b border-[#73737333]"
        onPress={() => router.push('/screens/personal_information')}
      >
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }}
          className="w-16 h-16 rounded-full"
        />
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold">Kasomali Victor</Text>
          <Text className="text-[#737373]">Show Profile</Text>
        </View>
        <Ionicons name="chevron-forward" size={26} color="#ccc" />
      </TouchableOpacity>

      {/* Property Listing Card */}
      <View className="mx-4 my-6 bg-[#1ABC9C] rounded-3xl p-6">
        <View className="relative">
          <View>
            <Text className="text-white text-xl mb-1 w-48">Start Listing Your</Text>
            <Text className="text-white text-xl mb-2">Own</Text>
            <Text className="text-white text-2xl font-semibold">Properties Now</Text>
          </View>
          <View className="absolute right-0 top-0">
            <Image 
              source={require('@/assets/icons/hut.png')}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity className="bg-white rounded-full px-6 py-3 self-start mt-4">
            <Text className="font-semibold">Start Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Section */}
      <View className="px-4 mb-6">
        <Text className="text-xl font-semibold mb-4">Settings</Text>
        {settingsData.map(setting => (
          <SettingItem
            key={setting.id}
            icon={setting.icon}
            title={setting.title}
            onPress={() => {
              handleSettingPress(setting.title)
            }}
          />
        ))}
      </View>

      {/* Privacy Settings */}
      <View className="px-4 mb-6">
        <Text className="text-xl font-semibold mb-4">Privacy Settings</Text>
        {privacySettings.map(setting => (
          <SettingItem
            key={setting.id}
            icon={setting.icon}
            title={setting.title}
            onPress={() => {
              handleSettingPress(setting.title)
            }}
          />
        ))}
      </View>

      {/* Support & Feedback */}
      <View className="px-4 mb-6">
        <Text className="text-xl font-semibold mb-4">Support & Feedback</Text>
        {supportSettings.map(setting => (
          <SettingItem
            key={setting.id}
            icon={setting.icon}
            title={setting.title}
            onPress={() => {
              if (setting.title === 'Contact us') {
                router.push('/screens/contact-us');
              } else if (setting.title === 'Contact us') {
                router.push('/screens/contact-us');
              } else {
                console.log('Support setting pressed:', setting.title);
              }
            }}
          />
        ))}
      </View>

      {/* Legal */}
      <View className="px-4 mb-6">
        <Text className="text-xl font-semibold mb-4">Legal</Text>
        {legalSettings.map(setting => (
          <SettingItem
            key={setting.id}
            icon={setting.icon}
            title={setting.title}
            onPress={() => handleSettingPress(setting.title)}
          />
        ))}
      </View>

      {/* Version */}
      <View className="px-4 py-4 items-center">
        <Text className="text-[#737373]">Version 0.01 (265377)</Text>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity onPress={() => router.push('/(auth)/login')} className="mx-12 mb-8 bg-[#2563EB] py-4 px-8 rounded-xl">
        <Text className="text-white text-center font-semibold">Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
} 