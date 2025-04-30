import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShareIcon from '@/assets/icons/share.svg';
import BedIcon from '@/assets/icons/bed.svg';
import BathIcon from '@/assets/icons/bath.svg';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  beds: number;
  baths: number;
  type: 'For Rent' | 'For Sale';
  isFeatured?: boolean;
  images: string[];
}

export function PropertyCard({
  title,
  location,
  price,
  rating,
  beds,
  baths,
  type,
  isFeatured = false,
  images
}: PropertyCardProps) {
  const navigation = useNavigation();

  return (
    <Pressable
      className="w-[300px] bg-gray-100 rounded-2xl mr-4 shadow-sm"
      onPress={() =>router.push('/screens/product-details')}
    >
      <View className="relative">
        <Image
          source={{ uri: images[0] }}
          className="w-full h-[180px] rounded-t-2xl"
          resizeMode="cover"
        />
        
        {/* Tags */}
        <View className="absolute top-4 left-4 flex-row gap-2">
          {isFeatured && (
            <View className="bg-[#9F7AEA] px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-medium">Featured</Text>
            </View>
          )}
          <View className="bg-white px-3 py-1 rounded-full">
            <Text className="text-gray-900 text-xs font-medium">{type}</Text>
          </View>
        </View>

        {/* Favorite Button */}
        <Pressable className="absolute top-4 right-4 w-8 h-8 items-center justify-center">
          <Ionicons name="heart-outline" size={24} color="white" />
        </Pressable>

        {/* Image Pagination Dots */}
        <View className="absolute bottom-4 left-0 right-0 flex-row justify-center gap-1">
          {images.map((_, index) => (
            <View
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index === 0 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </View>
      </View>

      <View className="p-4">
        {/* Title and Rating */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold text-gray-900 flex-1 mr-2" numberOfLines={1}>
            {title}
          </Text>
          <View className="flex-row items-center">
            <View className='flex-row items-center'>  
            <Ionicons name="star" size={16} color="#F59E0B" />
            <Text className="text-sm font-medium text-gray-900 ml-1">{rating}</Text>
            <Text className="text-sm text-gray-500">/5</Text>
            </View>
            <View className='flex-row ml-2 items-center'>  
          <ShareIcon/>
            </View>
          </View>
        </View>

        {/* Location */}
        <View className="flex-row items-center mb-3">
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-500 ml-1" numberOfLines={1}>{location}</Text>
        </View>

        {/* Price and Features */}
        <View className="flex-row items-center justify-between">
          <View >
            <Text className="text-lg font-bold text-gray-900">{price}        
                   <Text className="text-xs text-gray-500">{' '}/mon</Text>
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center">
              <BedIcon/>
              <Text className="text-sm text-gray-500 ml-1">{beds}</Text>
            </View>
            <View className="flex-row items-center">
              <BathIcon/>
              <Text className="text-sm text-gray-500 ml-1">{baths}</Text>
            </View>
            
          </View>
        </View>
      </View>
    </Pressable>
  );
} 