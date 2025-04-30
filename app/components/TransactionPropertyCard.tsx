import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TransactionPropertyCardProps {
  onRentPress?: () => void;
  onSharePress?: () => void;
}

export const TransactionPropertyCard = ({
  onRentPress,
  onSharePress,
}: TransactionPropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const { width } = Dimensions.get("window");
  const imageWidth = width * 0.5; // 50% of screen width

  const images = [
    require("@/assets/images/hotel1.jpg"),
    require("@/assets/images/hotel2.jpg"),
    require("@/assets/images/hotel3.jpg"),
    require("@/assets/images/hotel4.jpg"),
    require("@/assets/images/hotel5.jpg"),
  ];

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / imageWidth);
    setCurrentImageIndex(currentIndex);
  };

  const handleDotPress = (index: number) => {
    setCurrentImageIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * imageWidth,
      animated: true,
    });
  };

  return (
    <View className="bg-white rounded-3xl p-2">
      <View className="flex-row">
        {/* Left: Image with overlays */}
        <View className="relative w-[50%]">
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                className="w-full h-[180px] rounded-2xl"
                style={{ width: imageWidth }}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Featured Tag */}
          <View className="absolute top-2 left-2">
            <View className="bg-white px-3 py-1 rounded-full">
              <Text className="text-blue-600 text-xs font-medium">
                Featured
              </Text>
            </View>
          </View>

          {/* Heart */}
          <View className="absolute top-2 right-2">
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Dots */}
          <View className="absolute bottom-2 left-0 right-0 flex-row justify-center space-x-1.5">
            {images.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDotPress(index)}
                className="p-1"
              >
                <View
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Right: Details */}
        <View className="flex-1 ml-2 mt-3">
          <Text className="text-md font-semibold text-[#000000]">
            Busabala Apartment
          </Text>

          <View className="flex-row items-center mt-1">
            <Ionicons name="location-outline" size={16} color="#6B7280" />
            <Text className="text-xs text-gray-500 ml-1">Kampala, Uganda</Text>
            <View className="flex-row items-center ml-1">
              <Ionicons name="star" size={14} color="#F59E0B" />
              <Text className="text-sm text-[#000000] font-medium ml-0.5">
                4.6
              </Text>
              <Text className="text-xs text-gray-500"> /5</Text>
            </View>
          </View>

          <View className="mt-3">
            <View className="flex-row items-baseline">
              <Text className="text-lg font-bold text-gray-900">
                UGX 1,500,000
              </Text>
              <Text className="text-sm text-gray-500 ml-1">/mon</Text>
            </View>
          </View>

          <View className="flex-row items-center mt-3 justify-between mr-8">
            <View className="flex-row items-center">
              <Ionicons name="bed-outline" size={16} color="#6B7280" />
              <Text className="text-gray-600 ml-1 text-sm">1</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="water-outline" size={16} color="#6B7280" />
              <Text className="text-gray-600 ml-1 text-sm">2</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="home-outline" size={16} color="#6B7280" />
              <Text className="text-gray-600 ml-1 text-sm">1</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between mt-4">
            <TouchableOpacity
              onPress={onRentPress}
              className="border border-blue-600 rounded-full px-8 py-2"
            >
              <Text className="text-blue-600 font-medium">Rent</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSharePress} className="p-2">
              <Ionicons name="share-social-outline" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
