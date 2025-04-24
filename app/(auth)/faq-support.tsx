import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import WebIcon from '@/assets/icons/web.svg';
import EmailIcon from '@/assets/icons/email.svg';
import DocumentIcon from '@/assets/icons/document.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import { colors } from '@/utils/theme';
import { useState } from 'react';

export default function FAQSupportScreen() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  return (
    <View className="flex-1 bg-background">
      {/* Back Button */}
      <View className="absolute top-12 left-6 z-10">
        <BackButton />
      </View>

      <ScrollView className="flex-1 pt-32 px-6">
        {/* Title */}
        <Text className="text-xl text-primary font-bold mb-4">
          FAQS & SUPPORT
        </Text>

        {/* Subtitle */}
        <Text className="text-place text-sm mb-8">
          Need help with sign in ?
        </Text>

        {/* Quick Links */}
        <View className="space-y-6">
          {/* Visit Website */}
          <TouchableOpacity className="flex-row items-center border-b-[0.3px] pb-[20px] border-border  space-x-4">
            <View className="bg-primary h-[30px] w-[30px] flex items-center justify-center rounded-full">
              <WebIcon width={15} height={15} color="white" />
            </View>
            <Text className="text-primary text-xs">Visit Our Website</Text>
          </TouchableOpacity>

          {/* Email Complaint */}
          <TouchableOpacity className="flex-row items-center border-b-[0.3px] pb-[20px] border-border space-x-4">
            <View className="bg-primary h-[30px] w-[30px] flex items-center justify-center rounded-full">
              <EmailIcon width={15} height={15} color="white" />
            </View>
            <Text className="text-primary text-xs">Email a Complaint</Text>
          </TouchableOpacity>

          {/* Terms of Use */}
          <TouchableOpacity className="flex-row items-center border-b-[0.3px] pb-[20px] border-border space-x-4">
            <View className="bg-primary h-[30px] w-[30px] flex items-center justify-center rounded-full">
              <DocumentIcon width={15} height={15} color="white" />
            </View>
            <Text className="text-primary text-xs">Terms Of Use</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mt-8 mb-8">
          <View className="flex-row items-center bg-white rounded-xl border-[0.3px] border-border h-[56px] px-4">
            <View className="mr-2">
              <WebIcon width={20} height={20} color="#9CA3AF" />
            </View>
            <TextInput
              placeholder="Search 'How to....'"
              className="flex-1 text-sm text-text"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row bg-gray-100 rounded-xl p-1 mb-8">
          <TouchableOpacity 
            className={`flex-1 py-3 rounded-lg ${activeTab === 'buyer' ? 'bg-white' : ''}`}
            onPress={() => setActiveTab('buyer')}
          >
            <Text className={`text-center font-medium ${activeTab === 'buyer' ? 'text-primary' : 'text-placeholder'}`}>
              Buyer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`flex-1 py-3 rounded-lg ${activeTab === 'seller' ? 'bg-white' : ''}`}
            onPress={() => setActiveTab('seller')}
          >
              <Text className={`text-center font-medium ${activeTab === 'seller' ? 'text-primary' : 'text-placeholder'}`}>
              Seller
            </Text>
          </TouchableOpacity>
        </View>

        {/* FAQ Items */}
        <View className="space-y-4">
          <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-xl">
            <Text className="text-placeholder text-sm flex-1">How to join Rans Using Email ?</Text>
            <PlusIcon width={15} height={15} color="#4B5563" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 