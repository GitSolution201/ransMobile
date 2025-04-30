import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';


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
      <SearchBar 
        placeholder="Search for properties, agents, or services..." 
        onSearch={(text) => {
          // Handle search
        }} 
      />
      {/* Wishlist Card */}
      <View className="px-5 mb-6 mt-6">
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
