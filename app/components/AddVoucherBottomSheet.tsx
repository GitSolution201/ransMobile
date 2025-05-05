import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/app/components/Button";

interface AddVoucherBottomSheetProps {
  onClose: () => void;
}

export const AddVoucherBottomSheet = ({
  onClose,
}: AddVoucherBottomSheetProps) => {
  return (
    <View className="bg-white p-4 rounded-t-3xl">
      <View className="items-center mb-6">
        <View className="w-12 h-1 bg-[#E8E8E8] rounded-full" />
      </View>

      <Text className="text-2xl font-semibold mb-6">Add Voucher</Text>

      {/* Voucher Input */}
      <View className="border border-[#E8E8E8] rounded-2xl p-4 flex-row items-center mb-6">
        <Ionicons name="ticket-outline" size={24} color="#9F9F9F" />
        <TextInput
          placeholder="Type your Voucher"
          className="flex-1 ml-3 text-base"
          placeholderTextColor="#9F9F9F"
        />
      </View>

      {/* Available Vouchers */}
      <Text className="text-xl font-semibold mb-4">Available Vouchers</Text>

      {/* Voucher Items */}
      <TouchableOpacity className="bg-[#F3F9EC] rounded-2xl p-4 flex-row items-center mb-3">
        <View className="bg-black rounded-2xl p-2">
          <Ionicons name="ticket-outline" size={24} color="white" />
        </View>
        <View className="ml-4">
          <Text className="text-lg font-semibold">GBEBH30</Text>
          <Text className="text-sm text-[#9F9F9F]">
            Click to use this Voucher
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#F3F9EC] rounded-2xl p-4 flex-row items-center mb-6">
        <View className="bg-black rounded-2xl p-2">
          <Ionicons name="ticket-outline" size={24} color="white" />
        </View>
        <View className="ml-4">
          <Text className="text-lg font-semibold">GBEBH30</Text>
          <Text className="text-sm text-[#9F9F9F]">
            Click to use this Voucher
          </Text>
        </View>
      </TouchableOpacity>

      <Button
        text="Apply Voucher"
        variant="secondary"
        onPress={() => {}}
        disabled={false}
      />
    </View>
  );
};
