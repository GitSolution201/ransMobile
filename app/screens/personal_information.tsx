import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image , SafeAreaView} from 'react-native';
import { Header } from '../components/Header';
import { router } from 'expo-router';
import EditIcon from '@/assets/icons/edit.svg';

export default function PersonalInformationScreen() {
  const userInfo = {
    name: 'Kasomali Victor',
    email: 'kasomali.victor@example.com',
    phone: '+256 789 123 456',
    location: 'Juba, South Sudan',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <View className="mb-6">
      <Text className="text-sm text-gray-500 mb-2">{label}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-base text-gray-900">{value}</Text>
        <TouchableOpacity>
          <EditIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View className="h-[1px] bg-gray-200 mt-2" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header 
        title="Personal Information" 
        onBack={() => router.replace('/(tabs)/profile')}
      />
      <ScrollView className="flex-1 px-4">
        {/* Profile Image Section */}
        <View className="items-center my-6">
          <View className="relative">
            <Image
              source={{ uri: userInfo.profileImage }}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity 
              className="absolute bottom-0 right-0 bg-blue-600 w-8 h-8 rounded-full items-center justify-center"
              onPress={() => console.log('Change profile picture')}
            >
              <EditIcon width={16} height={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal Information Fields */}
        <View className="bg-white rounded-2xl p-4">
          <InfoItem label="Full Name" value={userInfo.name} />
          <InfoItem label="Email" value={userInfo.email} />
          <InfoItem label="Phone Number" value={userInfo.phone} />
          <InfoItem label="Location" value={userInfo.location} />
        </View>

        {/* Delete Account Button */}
        <TouchableOpacity 
          className="mt-8 mb-6 py-4 px-6 border border-red-500 rounded-xl"
          onPress={() => console.log('Delete account')}
        >
          <Text className="text-red-500 text-center font-semibold">Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
} 