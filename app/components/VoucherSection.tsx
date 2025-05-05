import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/app/components/Button";
import { VoucherBottomSheet } from "./VoucherBottomSheet";

export const VoucherSection = () => {
  const [showVoucherSheet, setShowVoucherSheet] = useState(false);

  return (
    <View className="mt-8">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-md font-semibold text-[#000000]">
          Have a voucher ?
        </Text>
        <TouchableOpacity
        //  onPress={() => setShowVoucherSheet(true)}
        >
          <Text className="text-sm text-[#9F9F9F]">Click here</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-[#F3F9EC] rounded-3xl p-4 flex-row items-center">
        <View className="bg-black rounded-2xl p-2">
          <Ionicons name="ticket-outline" size={28} color="white" />
        </View>
        <View className="ml-4">
          <Text className="text-lg font-semibold">GBEBH30</Text>
          <Text className="text-sm text-[#000000]">New Year 40% Off</Text>
        </View>
      </View>

      <Button
        text="Next"
        variant="secondary"
        onPress={() => {
          console.log("object");
        }}
        disabled={false}
        className="mt-8"
      />

      {/* <VoucherBottomSheet
        isVisible={showVoucherSheet}
        onClose={() => setShowVoucherSheet(false)}
      /> */}
      <VoucherBottomSheet
        isVisible={showVoucherSheet}
        onClose={() => setShowVoucherSheet(false)}
      />
    </View>
  );
};
