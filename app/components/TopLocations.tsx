import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const locations = [
  {
    id: '1',
    name: 'Juba',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Kampala',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Nairobi',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1000&auto=format&fit=crop',
  },
];

interface LocationCardProps {
  name: string;
  image: string;
  onPress: () => void;
}

function LocationCard({ name, image, onPress }: LocationCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="flex-row items-center bg-gray-200 rounded-full mr-3 pr-4 overflow-hidden"
    >
      <Image
        source={{ uri: image }}
        className="w-12 h-12 rounded-full"
        resizeMode="cover"
      />
      <View className="flex-row items-center ml-3">
        <Text className="text-sm font-medium text-gray-900 pr-1">{name}</Text>
        <Ionicons name="chevron-forward" size={16} color="#6B7280" />
      </View>
    </Pressable>
  );
}

export function TopLocations() {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center px-4 mb-4">
        <Text className="text-xl font-semibold text-gray-900">Top Locations</Text>
        <Pressable>
          <Text className="text-xs text-[#737373]">View All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            name={location.name}
            image={location.image}
            onPress={() => {
              console.log(`Selected location: ${location.name}`);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
} 