import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView ,SafeAreaView, Platform, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { notifications } from '@/utils/helper/DummyData';
import { Header } from '../components/Header';

const filters = ['All', 'Mentions', 'Unread'];

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 mt-2 bg-white">
      {/* Header Icons */}

      <Header title="Notifications" />
      <View className="flex-row justify-end items-center px-5 mb-2">
        <TouchableOpacity className="w-12 h-12 rounded-full bg-[#F7F5F5] items-center justify-center mr-3">
          <Ionicons name="search" size={20} color="#737373" />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 rounded-full  items-center justify-center">
          <Ionicons name="ellipsis-vertical" size={20} color="#737373" />
        </TouchableOpacity>
      </View>

      {/* Notifications Title */}
      <Text className="text-2xl font-bold text-[#737373] px-5 mb-4 mt-2">Notifications</Text>

      {/* Filters */}
      <View className="flex-row px-5 mb-4 space-x-3">
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            className={`px-5 py-3 rounded-full ${activeFilter === filter ? 'bg-[#2563EB]' : 'bg-[#F7F5F5]'}`}
            onPress={() => setActiveFilter(filter)}
          >
            <Text className={`text-xs ${activeFilter === filter ? 'text-[#ffffff]' : 'text-[#737373]'}`}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notifications List */}
      <ScrollView className="flex-1 px-3">
        {notifications.map((item) => (
          <View
            key={item.id}
            className={`mb-4 rounded-2xl ${item.type === 'payment' ? 'bg-[#F0F4F9]' : 'bg-white'} p-4`}
            style={{ shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }}
          >
            {/* Payment Notification */}
            {item.type === 'payment' && (
              <View>
                <View className="flex-row items-center">
                  <Image source={item.user?.avatar} className="w-12 h-12 rounded-full mr-3 -mt-2" />
                  <View className="flex-1">
                    <Text className="font-medium text-[#222]">
                      {item.user?.name} <Text className="font-normal text-[#222]">{item.message}</Text>
                    </Text>
                  </View>
                  <View className="items-center ml-2 mt-2">
                    <Text className="text-xs text-[#000000] mb-1">{item.time}</Text>
                    <TouchableOpacity>
                      <Ionicons name="ellipsis-horizontal" size={28} color="#2563EB" />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Accept/Decline Buttons */}
                {item.actions && (
                  <View className="flex-row mt-4 space-x-3 ml-16">
                    {item.actions.map((action) => (
                      <TouchableOpacity
                        key={action}
                        className={`px-6 py-3 mr-2 rounded-full ${action === 'Accept' ? 'bg-[#2563EB]' : 'border border-[#737373] bg-white'}`}
                      >
                        <Text className={`text-xs ${action === 'Accept' ? 'text-white' : 'text-[#222]'}`}>{action}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            )}
            {/* Review Notification */}
            {item.type === 'review' && (
              <View>
                <View className="flex-row items-start justify-between">
                  <View className="flex-row flex-1">
                    <Image source={item.user?.avatar} className="w-12 h-12 rounded-full mr-3" />
                    <View className="flex-1">
                      <Text className="text-base">
                        <Text className="text-[#000000]">{item.user?.name}</Text>
                        <Text className="text-[#000000]"> {item.message}</Text>
                      </Text>
                      <View className="flex-row mt-2">
                        <View className="w-1 bg-[#E5E7EB] rounded-l-lg" />
                        <View className="flex-1 bg-[#F5F5F5] rounded-r-xl py-2.5 px-3">
                          <Text className="text-xs text-[#737373]" numberOfLines={2}>{item.review}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="items-center">
                    <Text className="text-xs text-[#000000]">{item.time}</Text>
                    <TouchableOpacity className="mt-1">
                      <Ionicons name="ellipsis-horizontal" size={28} color="#2563EB" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            {/* Feature Notification */}
            {item.type === 'feature' && (
              <View className="flex-row items-start">
                {/* Blue circular background for icon */}
                <View className="w-12 h-12 rounded-full bg-[#2563EB] items-center justify-center mr-3 -mt-2">
                  <Image source={item.icon} className="w-7 h-7" />
                </View>
                <View className="flex-1">
                  {/* Title row with star */}
                  <View className="flex-row items-center">
                    <Text className="font-bold text-[#222] text-lg -mt-2"> {item.title} </Text>
                    <View className="w-5 h-5 rounded-full bg-[#2563EB] items-center justify-center ml-2 -mt-2">
                      <Ionicons name="star" size={14} color="#fff" />
                    </View>
                  </View>
                  {/* Message */}
                  <Text className="text-xs text-[#374151] mt-1">{item.message}</Text>
                  {/* Action Button */}
                  {item.actions && (
                    <View className="mt-4">
                      {item.actions.map((action) => (
                        <TouchableOpacity
                          key={action}
                          className="bg-[#2563EB] rounded-full px-6 py-3 self-start"
                        >
                          <Text className="text-white text-xs">{action}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
                {/* Time and three-dot icon */}
                <View className="items-center ml-2">
                  <Text className="text-xs text-[#000000] mb-1">{item.time}</Text>
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={28} color="#2563EB" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
} 