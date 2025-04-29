import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Slider from 'react-native-range-slider-expo';
import { Header } from "../components/Header";
import { CategoryList } from "../components/CategoryList";
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const propertyTypes = [
  {
    label: "All",
    icon: (color: string) => <Ionicons name="home" size={24} color={color} />,
  },
  {
    label: "Apartment",
    icon: (color: string) => (
      <MaterialCommunityIcons name="office-building" size={24} color={color} />
    ),
  },
  {
    label: "Land",
    icon: (color: string) => (
      <MaterialCommunityIcons name="terrain" size={24} color={color} />
    ),
  },
  {
    label: "Office",
    icon: (color: string) => (
      <MaterialCommunityIcons name="desk" size={24} color={color} />
    ),
  },
  {
    label: "Warehouse",
    icon: (color: string) => (
      <MaterialCommunityIcons name="warehouse" size={24} color={color} />
    ),
  },
];

const amenities = [
  {
    label: "Cctv",
    icon: (color: string) => (
      <MaterialCommunityIcons name="cctv" size={18} color={color} />
    ),
  },
  {
    label: "24/7 Wifi",
    icon: (color: string) => (
      <Ionicons name="wifi-outline" size={18} color={color} />
    ),
  },
  {
    label: "Home Office",
    icon: (color: string) => (
      <MaterialCommunityIcons name="home-outline" size={18} color={color} />
    ),
  },
  {
    label: "Security Dog",
    icon: (color: string) => (
      <FontAwesome5 name="dog" size={16} color={color} />
    ),
  },
  {
    label: "Dining",
    icon: (color: string) => (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={18}
        color={color}
      />
    ),
  },
  {
    label: "Kitchen",
    icon: (color: string) => (
      <MaterialCommunityIcons name="fridge-outline" size={18} color={color} />
    ),
  },
];

const transactionTypes = ["Buy", "Rent", "Lease"];

interface CounterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ label, value, onIncrement, onDecrement }: CounterProps) => (
  <View className="flex-row mb-4 items-center justify-between">
    <Text className="text-base text-gray-600">{label}</Text>
    <View className="flex-row items-center space-x-4">
      <TouchableOpacity
        onPress={onDecrement}
        className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
      >
        <Text className="text-base">-</Text>
      </TouchableOpacity>
      <Text className="text-sm min-w-[40px] text-center">
        {value || 'Any'}
      </Text>
      <TouchableOpacity
        onPress={onIncrement}
        className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
      >
        <Text className="text-sm">+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function FilterScreen() {
  const [selectedType, setSelectedType] = useState("1");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState("Buy");
  const [priceRange, setPriceRange] = useState({ min: 300, max: 1000 });
  const [rooms, setRooms] = useState({
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  });

  const navigation = useNavigation();

  const toggleAmenity = (label: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  const handleCategorySelect = (category: { id: string; label: string }) => {
    setSelectedType(category.id);
  };

  const handleIncrement = (type: 'bedrooms' | 'beds' | 'bathrooms') => {
    setRooms(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type: 'bedrooms' | 'beds' | 'bathrooms') => {
    setRooms(prev => ({ ...prev, [type]: Math.max(0, prev[type] - 1) }));
  };

  const handleClearAll = () => {
    setSelectedType("1");
    setSelectedAmenities([]);
    setSelectedTransaction("Buy");
    setPriceRange({ min: 300, max: 1000 });
    setRooms({
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    });
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 mt-2 bg-white">
      <Header title="Filters" />
      <ScrollView className="flex-1 px-4">

        {/* Property Type */}
        <Text className="text-xl font-semibold text-black mb-4">
          Property Type
        </Text>
        <View className="flex-row items-center justify-between mb-6">
          <CategoryList 
            onSelectCategory={handleCategorySelect}
            selectedType={selectedType}
          />
        </View>

        {/* Price Range */}
        <Text className="text-xl font-semibold text-black mb-4">
          Price Range
        </Text>
        <View className="mb-4">
          <Image
            source={require("../../assets/images/price_range.png")}
            className="w-full h-[80px]"
            resizeMode="contain"
          />
          <View className="w-full">
            <Slider
              min={300}
              max={1000}
              fromValueOnChange={value => setPriceRange(prev => ({ ...prev, min: value }))}
              toValueOnChange={value => setPriceRange(prev => ({ ...prev, max: value }))}
              initialFromValue={priceRange.min}
              initialToValue={priceRange.max}
              step={10}
              fromKnobColor="#0056D3"
              toKnobColor="#0056D3"
              inRangeBarColor="#0056D3"
              outOfRangeBarColor="#E5E5EA"
              knobSize={12}
              barHeight={2}
            />
            <View className="flex-row justify-between items-center">
              <View className="items-start">
                <Text className="text-sm text-[#737373] mb-2">Minimum</Text>
                <View className="border border-[#737373] rounded-full px-4 h-[42px] items-center justify-center">
                  <Text className="text-sm">${Math.round(priceRange.min)}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm text-[#737373] mb-2">Maximum</Text>
                <View className="border border-[#737373] h-[42px] items-center justify-center rounded-full px-4">
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
                className={`flex-row items-center border rounded-full px-4  h-[42px] items-center justify-center mb-2 ${
                  isSelected ? "border-[#2563EB]" : "border-[#737373]"
                }`}
                onPress={() => toggleAmenity(a.label)}
              >
                {a.icon(isSelected ? "#2563EB" : "#737373")}
                <Text
                  className={`ml-2 text-xs ${
                    isSelected ? "text-[#2563EB] font-bold" : "text-[#737373]"
                  }`}
                >
                  {a.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View className="h-px bg-[#E5E5EA] my-4" />


        {/* Transaction Type */}
        <Text className="text-xl font-semibold text-black mb-4">
          Transaction Type
        </Text>
        <View className="flex-row items-center mb-4">
          {transactionTypes.map((type) => (
            <TouchableOpacity
              key={type}
              className={`border rounded-full mr-2 px-8 h-[42px] items-center justify-center ${
                selectedTransaction === type
                  ? "bg-[#0056D3] border-[#0056D3]"
                  : "border-[#737373]"
              }`}
              onPress={() => 
                setSelectedTransaction(type)}
            >
              <Text
                className={`text-sm ${
                  selectedTransaction === type
                    ? "text-white font-medium"
                    : "text-[#737373]"
                }`}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="h-px bg-[#E5E5EA] my-4" />

          {/* Rooms & Beds */}
          <Text className="text-xl font-semibold text-black mb-4">
          Rooms & Beds
        </Text>
        <View className="space-y-4 mb-6">
          <Counter
            label="Bedrooms"
            value={rooms.bedrooms}
            onIncrement={() => handleIncrement('bedrooms')}
            onDecrement={() => handleDecrement('bedrooms')}
          />
          <Counter
            label="Beds"
            value={rooms.beds}
            onIncrement={() => handleIncrement('beds')}
            onDecrement={() => handleDecrement('beds')}
          />
          <Counter
            label="Bathrooms"
            value={rooms.bathrooms}
            onIncrement={() => handleIncrement('bathrooms')}
            onDecrement={() => handleDecrement('bathrooms')}
          />
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View className="px-4 py-4 border-t border-gray-200 bg-white">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={handleClearAll}
            className="px-6 py-3"
          >
            <Text className="text-[#0056D3] font-medium">Clear All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => router.push('/screens/filtered_property', {
              propertyType: selectedType,
              transactionType: selectedTransaction,  
              priceRange,
              amenities: selectedAmenities,
              rooms,
            })}
            className="bg-[#0056D3] px-6 py-3 rounded-full flex-row items-center"
          >
            <Text className="text-white font-medium">Show 1000+ Properties</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}
