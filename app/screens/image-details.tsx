import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import BackIcon from "@/assets/icons/back_black.svg";
const { width, height } = Dimensions.get('window');

export default function ImageDetails() {
  const params = useLocalSearchParams();
  const images: any[] = params.images ? JSON.parse(params.images as string) : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const goToIndex = (idx: number) => {
    setCurrentIndex(idx);
    flatListRef.current?.scrollToIndex({ index: idx, animated: true });
  };

  const goLeft = () => {
    if (currentIndex > 0) goToIndex(currentIndex - 1);
  };

  const goRight = () => {
    if (currentIndex < images.length - 1) goToIndex(currentIndex + 1);
  };

  return (
    <View className="flex-1 bg-black">
      {/* Top bar */}
      <View className="absolute top-12 left-4 right-4 z-10 flex-row justify-between">
        <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md" onPress={() => router.back()}>
         <BackIcon width={10} height={10} color="#737373" />
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
          <Ionicons name="ellipsis-vertical" size={15} color="#737373" />
        </TouchableOpacity>
      </View>


      {/* Swiper */}
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => idx.toString()}
        onMomentumScrollEnd={e => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(idx);
        }}
        renderItem={({ item }) => (
          <View style={{ width, height: height }} className="items-center justify-center">
            <Image
              source={typeof item === 'string' ? { uri: item } : item}
              className="w-full h-full"
              resizeMode="cover"
            />
            {/* Optional: Room label */}
        
          </View>
        )}
      />

      {/* Left/Right arrows */}
      {currentIndex > 0 && (
        <TouchableOpacity
          className="absolute top-1/2 -translate-y-1/2 bg-black/50 w-[72px] rounded-tr-xl rounded-br-xl h-[72px] items-center justify-center z-10"
          onPress={goLeft}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
      )}
      {currentIndex < images.length - 1 && (
        <TouchableOpacity
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 w-[72px] rounded-tl-xl rounded-bl-xl h-[72px] items-center justify-center z-10"
        onPress={goRight}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-forward" size={28} color="white" />
        </TouchableOpacity>
      )}

      {/* Thumbnails */}
      <View className="absolute right-4 bottom-5 -translate-y-1/2 space-y-3 z-10">
        {images.slice(0, 3).map((img, idx) => (
          <TouchableOpacity className=" mt-4" key={idx} onPress={() => goToIndex(idx)}>
            <Image
              source={typeof img === 'string' ? { uri: img } : img}
              className={`w-16 h-16 rounded-[10px] border-2 ${currentIndex === idx ? 'border-blue-500' : 'border-white'}`}
              resizeMode="cover"
            />
            {idx === 2 && images.length > 3 && (
              <View className="absolute inset-0 bg-black/60 rounded-xl items-center justify-center">
                <Text className="text-white text-lg font-bold">+{images.length - 3}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}