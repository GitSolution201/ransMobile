import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { PropertyCard } from './PropertyCard';
import { router } from 'expo-router';

const properties = [
  {
    id: '1',
    title: 'Busabala Apartment',
    location: 'Kampala, Uganda',
    price: 'UGX 1,500,000',
    rating: 4.6,
    beds: 1,
    baths: 2,
    type: 'For Rent' as const,
    isFeatured: true,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQee0-kKRcmXn0R6TeX4nU04t9B0EUp3N7escZE0C5bE_bIdseoQzQjZl4ZcBzD0_8OyXY&usqp=CAU',
      'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2023-04/media/image/ralph-ravi-kayden-mr1cidduglc-unsplash.jpg?VersionId=okTYWyWvS1CqBAI.l_syVfUcaBsYX07q&itok=L8hAOd9D',
      'https://zaitoon.com.pk/wp-content/uploads/2024/10/Real-Estate-Property-1024x576.jpg',
    ],
  },
  {
    id: '2',
    title: 'Busabala Villa',
    location: 'Kampala, Uganda',
    price: 'UGX 2,500,000',
    rating: 4.8,
    beds: 3,
    baths: 2,
    type: 'For Rent' as const,
    isFeatured: true,
    images: [
      'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2023-04/media/image/ralph-ravi-kayden-mr1cidduglc-unsplash.jpg?VersionId=okTYWyWvS1CqBAI.l_syVfUcaBsYX07q&itok=L8hAOd9D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV235FHWeChu4q8YVErDrvoElWhseAOsHP0TYB3DaFOpcuO8_S8jc5TqmnPlxvzQpxBAs&usqp=CAU',
    ],
  },
];

export function NearbyProperties() {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4  my-4 mt-8">
        <Text className="text-xl   font-semibold text-gray-900">Featured Properties</Text>
        <Pressable onPress={() => router.push('/screens/filtered_property')}>
          <Text className="text-xs text-[#737373]">View All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            rating={property.rating}
            beds={property.beds}
            baths={property.baths}
            type={property.type}
            isFeatured={property.isFeatured}
            images={property.images}
          />
        ))}
      </ScrollView>
    </View>
  );
} 