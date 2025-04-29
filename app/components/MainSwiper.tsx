import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8; // 80% of screen width

const images = [
  require("@/assets/images/banner1.png"),
  require("@/assets/images/banner2.png"),
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
              marginRight: 12, // space between items
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

      <View className="flex-row justify-center items-center mt-4">
        {images.map((_, index) => (
          <View
            key={index}
            className={`h-1.5 w-1.5 rounded-full mx-1 ${
              activeIndex === index ? "bg-[#0056D3] w-3" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
