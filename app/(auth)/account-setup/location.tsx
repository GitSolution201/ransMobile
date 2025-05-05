import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import LocationIcon from "@/assets/icons/location.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { Button } from "@/app/components/Button";
import { AccountSetupHeader } from "@/app/components/AccountSetupHeader";
import React from "react";

export default function LocationScreen() {
  return (
    <View className="flex-1 bg-background">
      <AccountSetupHeader
        onBackPress={() => {
          router.back();
        }}
        onSkipPress={() => {
          router.push("/(auth)/account-setup/preferences");
        }}
      />
      <View className="flex-1 px-4 pt-[20px]">
        {/* Title Section */}
        <View className=" z-20">
          <Text className="text-2xl text-primary font-extrabold mb-2">
            Add your Location
          </Text>
          <Text className="text-primary text-xs mb-8">
            This can be edited later in your account settings
          </Text>
        </View>

        {/* Map Container */}
        <View className="w-full h-[366px] rounded-3xl overflow-hidden mb-4 relative">
          <Image
            source={require("../../../assets/images/map.png")}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-0 right-0">
            <View
              className="absolute bottom-0 left-0 right-0 bg-[#FFF8F880] py-3 items-center"

              //  className="bg-[#FFF8F880] w-full py-3"
            >
              <Text className="text-primary text-base text-center">
                Select on Map
              </Text>
            </View>
          </View>
        </View>

        {/* Location Selector */}
        <TouchableOpacity className="flex-row items-center border border-border h-[56px] rounded-xl px-4 mb-6 mx-4 bg-white">
          <LocationIcon
            width={20}
            height={20}
            color="#4B5563"
            className="mr-2 ml-4"
          />
          <Text className="text-sm mr-1 mx-3 text-primary">
            Juba, South Sudan
          </Text>
          <View className="pl-8">
            <ChevronDownIcon width={10} height={10} color="#4B5563" />
          </View>
        </TouchableOpacity>

        {/* Progress Bar */}
        <View className="h-1 bg-gray-200 rounded-full mb-5 mx-24">
          <View className="w-2 h-full bg-primary rounded-full" />
        </View>

        {/* Next Button */}
        <Button
          text="Next"
          variant="secondary"
          className="mx-8"
          onPress={() => router.push("/(auth)/account-setup/preferences")}
        />
      </View>
    </View>
  );
}
