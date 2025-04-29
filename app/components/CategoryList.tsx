import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import HomeIcon from '@/assets/icons/home.svg';
import ApartmentIcon from '@/assets/icons/apartment_icon.svg';
import LandIcon from '@/assets/icons/land_icon.svg';
import OfficeIcon from '@/assets/icons/office_icon.svg';
import WarehouseIcon from '@/assets/icons/warehouse_icon.svg';

const propertyTypes = [
  {
    id: "1",
    label: "All",
    icon: (color: string) => (
      <HomeIcon width={24} height={24} stroke={color} fill={color} />
    ),
  },
  {
    id: "2",
    label: "Apartment",
    icon: (color: string) => (
      <ApartmentIcon width={24} height={24} stroke={color} fill={color} />
    ),
  },
  {
    id: "3",
    label: "Land",
    icon: (color: string) => (
      <LandIcon width={24} height={24} stroke={color} fill={color} />
    ),
  },
  {
    id: "4",
    label: "Office",
    icon: (color: string) => (
      <OfficeIcon width={24} height={24} stroke={color} fill={color} />
    ),
  },
  {
    id: "5",
    label: "Warehouse",
    icon: (color: string) => (
      <WarehouseIcon width={24} height={24} stroke={color} fill={color} />
    ),
  },
];

interface CategoryListProps {
  onSelectCategory?: (category: { id: string; label: string }) => void;
}

export function CategoryList({ onSelectCategory }: CategoryListProps) {
  const [selectedType, setSelectedType] = useState("1"); // Default to 'All'

  const handleSelect = (type: { id: string; label: string }) => {
    setSelectedType(type.id);
    onSelectCategory?.(type);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="max-h-[80px] pt-6"
    >
      <View className="flex-row items-center">
        {propertyTypes.map((type) => {
          const isSelected = selectedType === type.id;
          return (
            <TouchableOpacity
              key={type.id}
              className={`items-center justify-center w-[70px] pb-2 ${
                isSelected ? "border-b-2 border-[#0056D3]" : ""
              }`}
              onPress={() => handleSelect(type)}
            >
              {type.icon(isSelected ? "#0056D3" : "#737373")}
              <Text
                className={`text-sm mt-1 ${
                  isSelected ? "text-[#0056D3] font-medium" : "text-[#737373]"
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
