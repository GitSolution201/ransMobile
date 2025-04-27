import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const propertyTypes = [
  { label: 'All', icon: (color: string) => <Ionicons name="home-outline" size={24} color={color} /> },
  { label: 'Apartment', icon: (color: string) => <MaterialCommunityIcons name="office-building-outline" size={22} color={color} /> },
  { label: 'Land', icon: (color: string) => <Ionicons name="business-outline" size={22} color={color} /> },
  { label: 'Office', icon: (color: string) => <Ionicons name="desktop-outline" size={22} color={color} /> },
  { label: 'Warehouse', icon: (color: string) => <Ionicons name="home" size={22} color={color} /> },  
];

const amenities = [
  { label: 'Cctv', icon: (color: string) => <MaterialCommunityIcons name="cctv" size={18} color={color} /> },
  { label: '24/7 Wifi', icon: (color: string) => <Ionicons name="wifi-outline" size={18} color={color} /> },
  { label: 'Home Office', icon: (color: string) => <MaterialCommunityIcons name="home-outline" size={18} color={color} /> },
  { label: 'Security Dog', icon: (color: string) => <FontAwesome5 name="dog" size={16} color={color} /> },
  { label: 'Dining', icon: (color: string) => <MaterialCommunityIcons name="silverware-fork-knife" size={18} color={color} /> },
  { label: 'Kitchen', icon: (color: string) => <MaterialCommunityIcons name="fridge-outline" size={18} color={color} /> },
];

const transactionTypes = ['Buy', 'Rent', 'Lease'];

export default function FilterScreen() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState('Buy');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedPrice, setSelectedPrice] = useState(500);

  const toggleAmenity = (label: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        {/* Property Type */}
        <Text className="text-lg font-bold text-black mb-3">Property Type</Text>
        <View className="flex-row items-center justify-between mb-4">
          {propertyTypes.map((type) => {
            const isSelected = selectedType === type.label;
            return (
              <TouchableOpacity
                key={type.label}
                className="items-center"
                onPress={() => setSelectedType(type.label)}
              >
                <View className={`rounded-full p-2 mb-1 ${isSelected ? 'bg-[#E8F0FE]' : ''}`}>{type.icon(isSelected ? '#2563EB' : '#737373')}</View>
                <Text className={`text-xs ${isSelected ? 'text-[#2563EB] font-bold' : 'text-[#737373]'}`}>{type.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="h-px bg-[#E5E5EA] mb-4" />

        {/* Price Range Slider */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2">Price Range</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-sm text-[#737373]">${priceRange.min}</Text>
            <Text className="text-sm text-[#737373]">${priceRange.max}</Text>
          </View>
         
          <Text className="text-center text-sm text-[#737373] mt-2">
            Selected: ${selectedPrice}
          </Text>
        </View>

        {/* Amenities */}
        <Text className="text-lg font-bold text-black mb-3">Amenities</Text>
        <View className="flex-row flex-wrap gap-2 mb-2">
          {amenities.map((a) => {
            const isSelected = selectedAmenities.includes(a.label);
            return (
              <TouchableOpacity
                key={a.label}
                className={`flex-row items-center border rounded-full px-4 py-2 mb-2 ${isSelected ? 'border-[#2563EB]' : 'border-[#737373]'}`}
                onPress={() => toggleAmenity(a.label)}
              >
                {a.icon(isSelected ? '#2563EB' : '#737373')}
                <Text className={`ml-2 text-xs ${isSelected ? 'text-[#2563EB] font-bold' : 'text-[#737373]'}`}>{a.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity>
          <Text className="text-xs text-[#000000] underline">Show More</Text>
        </TouchableOpacity>
        <View className="h-px bg-[#E5E5EA] my-4" />

        {/* Transaction Type */}
        <Text className="text-lg font-bold text-black mb-3">Transaction Type</Text>
        <View className="flex-row justify-between items-center mb-4">
          {transactionTypes.map((type) => (
            <TouchableOpacity
              key={type}
              className="border border-[#737373] rounded-full px-8 py-3 my-2"
              onPress={() => setSelectedTransaction(type)}
            >
              <Text className="text-md text-[#737373]">{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

