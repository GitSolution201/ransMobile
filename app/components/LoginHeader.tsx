// LoginHeader.tsx
import React from "react";
import { View, Image } from "react-native";
import { BackButton } from "@/app/components/BackButton";
import { TabRouter } from "@react-navigation/native";

export const LoginHeader = ({
  showBackButton = true,
  hideImage = true,
}: {
  showBackButton?: boolean;
  hideImage?: boolean;
}) => {
  return (
    <View>
      {showBackButton && (
        <View className="absolute top-12 left-6 z-10">
          <BackButton />
        </View>
      )}
      {hideImage && (
        <View className="relative bg-white">
          <Image
            resizeMode="contain"
            source={require("@/assets/images/login-illustration.png")}
            className="w-full h-[175px] object-contain"
          />
        </View>
      )}
    </View>
  );
};
