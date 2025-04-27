import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const images = [
  require('@/assets/images/house1.jpg'),
  require('@/assets/images/house2.jpg'),
  require('@/assets/images/house3.jpg'),
  require('@/assets/images/house4.jpg'),
];

export default function MyWishlists() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-16 pb-6">
        <Text className="text-2xl font-bold text-[#737373]">Wishlists</Text>
        <TouchableOpacity>
          <Text className="text-sm text-[#737373]">Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="mx-4 mb-8">
        <View className="flex-row items-center bg-white rounded-full px-5 py-4 shadow-sm border-[0.5px] border-[#73737373]" style={{ shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 4 }}>
          <Ionicons name="search" size={18} color="#737373" />
          <TextInput
            placeholder="Search for properties, agents, or services..."
            className="flex-1 ml-3 text-xs"
            placeholderTextColor="#737373"
          />
          <View className="h-6 w-px bg-[#737373] mx-3" />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={24} color="#737373" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Wishlist Card */}
      <View className="px-5 mb-8">
        <View
          className="bg-white rounded-3xl overflow-hidden"
          style={{
            borderWidth: 4,
            borderColor: '#fff',
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 8 },
            elevation: 10,
          }}
        >
          <View className="flex-row flex-wrap">
            {images.map((img, i) => (
              <Image
                key={i}
                source={img}
                className="w-1/2 h-36 border-[2.5px] border-white"
                resizeMode="cover"
              />
            ))}
          </View>
        </View>
      </View>

      {/* Recently Viewed Section */}
      <View className="px-6">
        <Text className="text-lg font-semibold text-black mb-1">Recently Viewed</Text>
        <Text className="text-base text-[#B0B0B0]">Today</Text>
      </View>
    </ScrollView>
  );
}
