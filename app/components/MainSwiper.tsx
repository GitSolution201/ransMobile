import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8; // 80% of screen width

const images = [
  require("@/assets/images/banner1.png"),
  require("@/assets/images/banner2.png"),
  require("@/assets/images/banner1.png"), // Add more images or reuse existing ones
  require("@/assets/images/banner2.png"),
  require("@/assets/images/banner1.png"),
];

export function MainSwiper() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = (event: any) => {
    const slideSize = ITEM_WIDTH;
    const offset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(offset / slideSize);
    setActiveIndex(activeIndex);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        className="h-[200px]"
        contentContainerStyle={{}}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              width: ITEM_WIDTH,
            }}
          >
            <Image
              source={image}
              className="w-full h-[200px] rounded-2xl"
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      {/* 5 Dots Indicator */}
      <View className="flex-row justify-center items-center mt-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              activeIndex === index ? "bg-[#0056D3] w-2" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
