import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SvgProps } from 'react-native-svg';
import HomeIcon from '@/assets/icons/home.svg';
import ApartmentIcon from '@/assets/icons/apartment.svg';
import LandIcon from '@/assets/icons/land.svg';
import OfficeIcon from '@/assets/icons/office.svg';
import WarehouseIcon from '@/assets/icons/warehouse.svg';

type Category = {
  id: string;
  name: string;
  icon: React.FC<SvgProps>;
};

const categories: Category[] = [
  { id: '1', name: 'All', icon: WarehouseIcon },
  { id: '2', name: 'House', icon: HomeIcon },
  { id: '3', name: 'Apartment', icon: ApartmentIcon },
  { id: '4', name: 'Land', icon: LandIcon },
  { id: '5', name: 'Office', icon: OfficeIcon },
];

interface CategoryListProps {
  onSelectCategory?: (category: Category) => void;
}

export function CategoryList({ onSelectCategory }: CategoryListProps) {
  const [selectedId, setSelectedId] = useState('1'); // Default to 'All'

  const handleSelect = (category: Category) => {
    setSelectedId(category.id);
    onSelectCategory?.(category);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-4 max-h-[100px]"
      contentContainerStyle={{ paddingHorizontal: 16,borderBottomWidth:1,borderColor:'lightgray' ,height:81}}
    >
      {categories.map((category) => {
        const isSelected = selectedId === category.id;
        const Icon = category.icon;
        
        return (
          <Pressable
            key={category.id}
            onPress={() => handleSelect(category)}
            className={`px-4 h-[80px] mr-2 items-center justify-center bg-white ${
              isSelected && 'border-b-[1px] border-[#0056D3]'
            }`}
          >
            <Icon 
              width={16} 
              height={16} 
              color={isSelected ? '#0056D3' : '#9CA3AF'} 
            />
            <Text
              className={`text-sm pt-3 ${
                isSelected ? 'text-[#0056D3] font-medium' : 'text-gray-400'
              }`}
            >
              {category.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
} 