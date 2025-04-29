import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import HomeIcon from '@/assets/icons/home.svg';
import ApartmentIcon from '@/assets/icons/apartment_icon.svg';
import LandIcon from '@/assets/icons/land_icon.svg';
import OfficeIcon from '@/assets/icons/office_icon.svg';
import WarehouseIcon from '@/assets/icons/warehouse_icon.svg';
import { Colors } from '../../utils/constants/Colors';

const propertyTypes = [
  {
    id: "1",
    label: "All",
    image: require('../../assets/images/home.png')
  },
  {
    id: "2",
    label: "Apartment",
    image: require('../../assets/images/apartment.png')
  },
  {
    id: "3",
    label: "Land",
    image: require('../../assets/images/land.png')
  },
  {
    id: "4",
    label: "Office",
    image: require('../../assets/images/office.png')
  },
  {
    id: "5",
    label: "Warehouse",
    image: require('../../assets/images/warehouse.png')
  },
];

interface CategoryListProps {
  onSelectCategory: (category: { id: string; label: string }) => void;
  selectedType: string;
}

export function CategoryList({ onSelectCategory, selectedType }: CategoryListProps) {
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
              className={`items-center justify-center w-[80px] mr-4 pb-2 ${
                isSelected ? "border-b-2 border-[#0056D3]" : ""
              }`}
              onPress={() => onSelectCategory(type)}
            >
              <Image 
                source={type.image}
                className="w-6 h-6"
                style={{ tintColor: isSelected ? Colors.light.primary : Colors.light.textGray }}
              />
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
