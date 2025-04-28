import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { messages } from '@/utils/helper/DummyData';
import { useRouter } from 'expo-router';

const filters = ['All', 'Support', 'Groups', 'Unread'];

export default function Messages() {
  const [activeFilter, setActiveFilter] = useState('All');
  const router = useRouter();

  const handleMessagePress = (item: any) => {
    router.replace(`/chat/${item.id}?name=${item.name}&members=${item.isGroup ? '60 Members' : ''}&isOnline=${item.isGroup ? '1' : '0'}&isGroup=${item.isGroup ? '1' : '0'}`);
  };

  const renderAvatar = (item: any) => {
    if (item.isGroup) {
      return (
        <View className="w-12 h-12 rounded-full bg-[#2563EB] items-center justify-center">
          <Image 
            source={require('@/assets/icons/three-person.png')}
            className="w-6 h-6"
          />
        </View>
      );
    }
    return (
      <Image 
        source={item.avatar} 
        className="w-12 h-12 rounded-full"
      />
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-10">
      {/* Header Icons */}
      <View className="flex-row justify-end items-center px-5 mb-2">
        <TouchableOpacity className="w-12 h-12 rounded-full bg-[#F7F5F5] items-center justify-center mr-3">
          <Ionicons name="search" size={20} color="#737373" />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center">
          <Ionicons name="ellipsis-vertical" size={20} color="#737373" />
        </TouchableOpacity>
      </View>

      {/* Messages Title */}
      <Text className="text-2xl font-bold text-[#737373] px-5 mb-4 mt-2">Messages</Text>

      {/* Filters */}
      <View className="flex-row px-5 mb-4 space-x-3">
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            className={`px-5 py-3 mr-2 rounded-full ${
              activeFilter === filter ? 'bg-[#2563EB]' : 'bg-[#F7F5F5]'
            }`}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              className={`text-xs ${
                activeFilter === filter ? 'text-white' : 'text-[#737373]'
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Archived Section */}
      <TouchableOpacity className="flex-row items-center justify-between px-5 py-3">
        <View className="flex-row items-center">
          <View className="w-8 h-8 rounded-full items-center justify-center">
            <Ionicons name="archive-outline" size={18} color="#737373" />
          </View>
          <Text className="ml-3 text-[#737373]">Archived</Text>
        </View>
        <View className="w-2 h-2 rounded-full bg-[#2563EB]" />
      </TouchableOpacity>

      {/* Messages List */}
      <ScrollView className="flex-1">
        {messages.map((item) => (
          <TouchableOpacity
            key={item.id}
            className={`flex-row items-center px-5 py-4 ${
              !item.isArchived ? 'border-b border-[#F7F5F5]' : ''
            }`}
            onPress={() => handleMessagePress(item)}
          >
            {renderAvatar(item)}
            <View className="flex-1 ml-3">
              <View className="flex-row items-center justify-between">
                <Text className={`font-medium text-base ${item.unread ? 'text-[#222222]' : 'text-[#737373]'}`}>
                  {item.name}
                </Text>
                <Text className={`text-xs ${item.unread ? 'text-[#000000]' : 'text-[#737373]'}`}>{item.time}</Text>
              </View>
              <View className="flex-row items-center justify-between mt-1">
                <Text className={`text-xs ${item.unread ? 'text-[#000000]' : 'text-[#737373]'}`} numberOfLines={1}>
                  {item.message}
                </Text>
                {item.unread && (
                  <View className="w-2 h-2 rounded-full bg-[#2563EB]" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <Text className="text-lg font-medium text-[#ADADAD] px-5 py-4">
          All Messages
        </Text>

        {messages.slice(0, 2).map((item) => (
          <TouchableOpacity
            key={item.id + '_all'}
            className="flex-row items-center px-5 py-4 border-b border-[#F7F5F5]"
            onPress={() => handleMessagePress(item)}
          >
            {renderAvatar(item)}
            <View className="flex-1 ml-3">
              <View className="flex-row items-center justify-between">
                <Text className={`font-medium text-base ${item.unread ? 'text-[#222222]' : 'text-[#737373]'}`}>
                  {item.name}
                </Text>
                <Text className={`text-xs ${item.unread ? 'text-[#000000]' : 'text-[#737373]'}`}>{item.time}</Text>
              </View>
              <View className="flex-row items-center justify-between mt-1">
                <Text className={`text-xs ${item.unread ? 'text-[#000000]' : 'text-[#737373]'}`} numberOfLines={1}>
                  {item.message}
                </Text>
                {item.unread && (
                  <View className="w-2 h-2 rounded-full bg-[#2563EB]" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
} 