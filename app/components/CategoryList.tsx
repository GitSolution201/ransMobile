import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const propertyTypes = [
  { id: '1', label: 'All', icon: (color: string) => <Ionicons name="home" size={24} color={color} /> },
  { id: '2', label: 'Apartment', icon: (color: string) => <MaterialCommunityIcons name="office-building" size={24} color={color} /> },
  { id: '3', label: 'Land', icon: (color: string) => <MaterialCommunityIcons name="terrain" size={24} color={color} /> },
  { id: '4', label: 'Office', icon: (color: string) => <MaterialCommunityIcons name="desk" size={24} color={color} /> },
  { id: '5', label: 'Warehouse', icon: (color: string) => <MaterialCommunityIcons name="warehouse" size={24} color={color} /> },
];

interface CategoryListProps {
  onSelectCategory?: (category: { id: string; label: string }) => void;
}

export function CategoryList({ onSelectCategory }: CategoryListProps) {
  const [selectedType, setSelectedType] = useState('1'); // Default to 'All'

  const handleSelect = (type: { id: string; label: string }) => {
    setSelectedType(type.id);
    onSelectCategory?.(type);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="max-h-[80px] pt-4"
    >
      <View className="flex-row items-center">
        {propertyTypes.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <TouchableOpacity
              key={type.id}
              className={`items-center justify-center w-[80px] pb-2 ${isSelected ? 'border-b-2 border-[#0056D3]' : ''}`}
              onPress={() => handleSelect(type)}
            >
              {type.icon(isSelected ? '#0056D3' : '#737373')}
              <Text 
                className={`text-xs mt-1 ${
                  isSelected ? 'text-[#0056D3] font-medium' : 'text-[#737373]'
                }`}
              >
                {type.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
} 