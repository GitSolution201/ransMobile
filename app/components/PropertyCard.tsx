import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface PropertyCardProps {
  onRentPress?: () => void;
  onSharePress?: () => void;
}

export const PropertyCard = ({
  onRentPress,
  onSharePress,
}: PropertyCardProps) => {
  return (
    <View className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <View className="relative">
        <Image
          source={require("@/assets/images/property.jpg")}
          className="w-full h-[200px] rounded-t-2xl"
          resizeMode="cover"
        />
        <View className="absolute top-2 left-2">
          <View className="bg-blue-500 px-3 py-1 rounded-full">
            <Text className="text-white text-xs">Featured</Text>
          </View>
        </View>
        <TouchableOpacity className="absolute top-2 right-2">
          <Image
            source={require("@/assets/icons/heart.svg")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-lg font-semibold mb-2">Busabala Apartment</Text>
        <View className="flex-row items-center mb-2">
          <Image
            source={require("@/assets/icons/location.svg")}
            className="w-4 h-4 mr-1"
          />
          <Text className="text-sm text-gray-600">Kampala, Uganda</Text>
          <View className="flex-row items-center ml-2">
            <Text className="text-sm text-gray-600">4.6</Text>
            <Text className="text-xs text-gray-400">/5</Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold">UGX 1,500,000</Text>
          <Text className="text-sm text-gray-500">/mon</Text>
        </View>

        <View className="flex-row items-center space-x-4">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/icons/bed.svg")}
              className="w-4 h-4 mr-1"
            />
            <Text className="text-sm">1</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/icons/bath.svg")}
              className="w-4 h-4 mr-1"
            />
            <Text className="text-sm">2</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/icons/bathroom.png")}
              className="w-4 h-4 mr-1"
            />
            <Text className="text-sm">1</Text>
          </View>
        </View>
      </View>

      {/* Rent Button */}
      <View className="flex-row mx-4 mb-4">
        <TouchableOpacity
          className="bg-blue-600 py-4 px-8 rounded-xl"
          onPress={onRentPress}
        >
          <Text className="text-white font-medium">Rent</Text>
        </TouchableOpacity>
        <View className="ml-auto">
          <TouchableOpacity onPress={onSharePress}>
            <Image
              source={require("@/assets/icons/share.svg")}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
