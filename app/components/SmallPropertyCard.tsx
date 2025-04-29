import React from 'react';
import { View, Text, Image, Pressable, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShareIcon from '@/assets/icons/share.svg';
import BedIcon from '@/assets/icons/bed.svg';
import BathIcon from '@/assets/icons/bath.svg';
import { router } from 'expo-router';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 48 = padding (16) * 2 + gap (16)

const properties = [
  {
    id: '1',
    title: 'Busabala Apartment',
    location: 'Kampala, Uganda',
    price: 'UGX 1,500,000',
    rating: 4.6,
    beds: 1,
    baths: 2,
    isNew: true,
    type: 'For Sale',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQee0-kKRcmXn0R6TeX4nU04t9B0EUp3N7escZE0C5bE_bIdseoQzQjZl4ZcBzD0_8OyXY&usqp=CAU',
  },
  {
    id: '2',
    title: 'Busabala Apartment',
    location: 'Kampala, Uganda',
    price: 'UGX 1,500,000',
    rating: 4.6,
    beds: 1,
    baths: 1,
    isNew: true,
    type: 'For Sale',
      image: 'https://www.ziprent.com/assets/pexels-binyamin-mellish-186077-2048x1397.jpg',
  },
  {
    id: '1',
    title: 'Busabala Apartment',
    location: 'Kampala, Uganda',
    price: 'UGX 1,500,000',
    rating: 4.6,
    beds: 1,
    baths: 2,
    isNew: true,
    type: 'For Sale',
    image: 'https://ap.rdcpix.com/b1fa4948bbc80f1887298792bc2ace6bl-b2346956481rd-w480_h360.jpg',
  },
  {
    id: '2',
    title: 'Busabala Apartment',
    location: 'Kampala, Uganda',
    price: 'UGX 1,500,000',
    rating: 4.6,
    beds: 1,
    baths: 1,
    isNew: true,
    type: 'For Sale',
    image: 'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2023-04/media/image/ralph-ravi-kayden-mr1cidduglc-unsplash.jpg?VersionId=okTYWyWvS1CqBAI.l_syVfUcaBsYX07q&itok=L8hAOd9D',
  },
];

interface SmallPropertyCardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  beds: number;
  baths: number;
  isNew: boolean;
  type: string;
  image: string;
  onPress: () => void;
}

function PropertyCard({
  title,
  location,
  price,
  rating,
  beds,
  baths,
  isNew,
  type,
  image,
  onPress,
}: SmallPropertyCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="mb-4"
      style={{ width: CARD_WIDTH }}
    >
      <View className="rounded-2xl bg-gray-100 overflow-hidden">
        {/* Image Section */}
        <View className="relative">
          <Image
            source={{ uri: image }}
            className="w-full h-[140px]"
            resizeMode="cover"
          />
          
          {/* Tags */}
          <View className="absolute top-2 left-2 flex-row gap-2">
            {isNew && (
              <View className="bg-[#4FD1C5] px-2 py-1 rounded-full">
                <Text className="text-white text-xs font-medium">New</Text>
              </View>
            )}
            <View className="bg-[#3B82F6] px-2 py-1 rounded-full">
              <Text className="text-white text-xs font-medium">{type}</Text>
            </View>
          </View>

          {/* Favorite Button */}
          <Pressable className="absolute top-2 right-2 w-8 h-8 items-center justify-center">
            <Ionicons name="heart-outline" size={20} color="white" />
          </Pressable>
        </View>

        {/* Content Section */}
        <View className="p-3">
          {/* Title and Share */}
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-sm font-semibold text-gray-900 flex-1 mr-2" numberOfLines={1}>
              {title}
            </Text>
            <ShareIcon width={16} height={16} />
          </View>

          {/* Location and Rating */}
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center flex-1">
              <Ionicons name="location-outline" size={14} color="#6B7280" />
              <Text className="text-xs text-gray-500 ml-1" numberOfLines={1}>{location}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="star" size={14} color="#F59E0B" />
              <Text className="text-xs font-medium text-gray-900 ml-1">{rating}</Text>
              <Text className="text-xs text-gray-500">/5</Text>
            </View>
          </View>

          {/* Price and Features */}
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-bold text-gray-900">
              {price}
              <Text className="text-xs text-gray-500">{' '}/mon</Text>
            </Text>
          </View>
          <View className="flex-row pt-2 items-center gap-2">
          <View className="flex-row items-center">
                <BathIcon width={14} height={14} />
                <Text className="text-xs text-gray-500 ml-1">{baths}</Text>
              </View>
              <View className="flex-row items-center">
                <BedIcon width={14} height={14} />
                <Text className="text-xs text-gray-500 ml-1">{beds}</Text>
              </View>
              <View className="flex-row items-center">
                <BathIcon width={14} height={14} />
                <Text className="text-xs text-gray-500 ml-1">{baths}</Text>
              </View>
            </View>
        </View>
      </View>
    </Pressable>
  );
}

export function NearBy({noHeader}: {noHeader?: boolean}) {
  return (
    <View className="mt-6">
      {!noHeader && (
        <View className="flex-row justify-between items-center px-4 mb-4">
          <Text className="text-xl font-semibold text-gray-900">Near By</Text>
          <Pressable onPress={() => router.push('/screens/filtered_property')}>
            <Text className="text-xs text-[#737373]">View All</Text>
          </Pressable>
        </View>
      )}
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <PropertyCard
            {...item}
            onPress={() => {
             router.push('/screens/product-details')
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
} 