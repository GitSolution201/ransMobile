import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const PaymentMethod = () => {
  return (
    <View className="mt-8">
      <Text className="text-xl font-semibold text-[#000000] mb-4">
        Payment method
      </Text>

      {/* Credit Card */}
      <View className="bg-black rounded-[20px] p-5 mb-6 w-[85%]">
        <View className="flex-row items-center justify-between mb-8">
          <Image
            source={require("@/assets/icons/chip.png")}
            className="w-12 h-9"
            resizeMode="contain"
          />
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/icons/nfc.png")}
              className="w-12 h-7"
              resizeMode="contain"
            />
            <Image
              source={require("@/assets/icons/contactless.png")}
              className="w-12 h-7 -ml-2"
              resizeMode="contain"
            />
            <Image
              source={require("@/assets/icons/apple-pay.png")}
              className="w-14 h-7"
              resizeMode="contain"
            />
            <Image
              source={require("@/assets/icons/google-pay.png")}
              className="w-14 h-7"
              resizeMode="contain"
            />
          </View>
        </View>

        <Text className="text-white text-xl tracking-[4px] font-medium mb-6 pr-4">
          **** **** **** 1234
        </Text>

        <View className="pr-4">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <View>
                <Text className="text-[#fff] text-[10px] uppercase">Valid</Text>
                <Text className="text-[#fff] text-[10px] uppercase">Thru</Text>
              </View>
              <Text className="text-white text-lg ml-2">01/22</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white text-lg font-normal">
              Nionzima Enock
            </Text>
            <View className="w-8 h-8">
              <Image
                source={require("@/assets/icons/mastercard.png")}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Payment Options */}
      <View className="flex-row">
        <TouchableOpacity className="bg-[#F5F4F8] rounded-full py-4 px-4 flex-row items-center justify-center flex-1 mx-[2px]">
          <Image
            source={require("@/assets/icons/paypal.png")}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
          />
          <Text className="text-[#000] text-xs font-normal">Paypal</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#F5F4F8] rounded-full py-4 px-4 flex-row items-center justify-center flex-1 mx-[2px]">
          <Image
            source={require("@/assets/icons/mastercard.png")}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
          />
          <Text className="text-[#000] text-xs font-normal">Mastercard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#F5F4F8] rounded-full py-4 px-4 flex-row items-center justify-center flex-1 mx-[2px]">
          <Image
            source={require("@/assets/icons/visa.png")}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
          />
          <Text className="text-[#000] text-xs font-normal">Visa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
