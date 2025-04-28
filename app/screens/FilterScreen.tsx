import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import RangeSlider from 'rn-range-slider';

const propertyTypes = [
  { label: 'All', icon: (color: string) => <Ionicons name="home" size={24} color={color} /> },
  { label: 'Apartment', icon: (color: string) => <MaterialCommunityIcons name="office-building" size={24} color={color} /> },
  { label: 'Land', icon: (color: string) => <MaterialCommunityIcons name="terrain" size={24} color={color} /> },
  { label: 'Office', icon: (color: string) => <MaterialCommunityIcons name="desk" size={24} color={color} /> },
  { label: 'Warehouse', icon: (color: string) => <MaterialCommunityIcons name="warehouse" size={24} color={color} /> },
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
  const [priceRange, setPriceRange] = useState({ min: 300, max: 1000 });

  const toggleAmenity = (label: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        {/* Property Type */}
        <Text className="text-xl font-semibold text-black mb-4">Property Type</Text>
        <View className="flex-row items-center justify-between mb-6">
          {propertyTypes.map((type) => {
            const isSelected = selectedType === type.label;
            return (
              <TouchableOpacity
                key={type.label}
                className={`items-center w-[70px] pb-2 ${isSelected ? 'border-b-2 border-[#0056D3]' : ''}`}
                onPress={() => setSelectedType(type.label)}
              >
                {type.icon(isSelected ? '#0056D3' : '#737373')}
                <Text className={`text-xs mt-1 ${isSelected ? 'text-[#0056D3] font-medium' : 'text-[#737373]'}`}>
                  {type.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Price Range */}
        <Text className="text-xl font-semibold text-black mb-4">Price Range</Text>
        <View className="relative h-[140px] mb-4">
          <Image 
            source={require('@/assets/images/price_range.png')}
            className="w-full h-[80px]"
            resizeMode="contain"
          />
          <View className="absolute w-full bottom-0">
            <RangeSlider
              style={{ width: '100%', height: 40 }}
              min={300}
              max={1000}
              step={10}
              floatingLabel
              renderThumb={() => (
                <View className="w-6 h-6 rounded-full bg-white border-2 border-[#0056D3] shadow-lg" />
              )}
              renderRail={() => (
                <View className="flex-1 h-1 rounded bg-[#E5E5EA]" />
              )}
              renderRailSelected={() => (
                <View className="flex-1 h-1 rounded bg-[#0056D3]" />
              )}
              onValueChanged={(low, high) => setPriceRange({ min: low, max: high })}
            />
            <View className="flex-row justify-between items-center mt-4">
              <View className="items-start">
                <Text className="text-sm text-[#737373] mb-2">Minimum</Text>
                <View className="border border-gray-300 rounded-full px-4 py-2">
                  <Text className="text-sm">${Math.round(priceRange.min)}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm text-[#737373] mb-2">Maximum</Text>
                <View className="border border-gray-300 rounded-full px-4 py-2">
                  <Text className="text-sm">${Math.round(priceRange.max)}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Rest of the filters */}
        <View className="h-px bg-[#E5E5EA] my-4" />

        {/* Amenities */}
        <Text className="text-xl font-semibold text-black mb-4">Amenities</Text>
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

        {/* Transaction Type */}
        <Text className="text-xl font-semibold text-black mb-4">Transaction Type</Text>
        <View className="flex-row justify-between items-center mb-4">
          {transactionTypes.map((type) => (
            <TouchableOpacity
              key={type}
              className={`border rounded-full px-8 py-3 ${
                selectedTransaction === type ? 'bg-[#0056D3] border-[#0056D3]' : 'border-[#737373]'
              }`}
              onPress={() => setSelectedTransaction(type)}
            >
              <Text className={`text-sm ${
                selectedTransaction === type ? 'text-white font-medium' : 'text-[#737373]'
              }`}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

