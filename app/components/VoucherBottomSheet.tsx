import React, { useCallback, useMemo, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/app/components/Button";
import BottomSheet from "@gorhom/bottom-sheet";

import { router } from "expo-router";

interface SuccessBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export const VoucherBottomSheet: React.FC<SuccessBottomSheetProps> = ({
  isVisible,
  onClose,
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");

  // variables
  const snapPoints = useMemo(() => [height * 0.9], []);

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log("Bottom sheet index changed:", index);
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    console.log("Bottom sheet visibility changed:", isVisible);
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (isVisible && bottomSheetRef.current) {
      console.log("Attempting to expand bottom sheet");
      bottomSheetRef.current.expand();
    } else if (!isVisible && bottomSheetRef.current) {
      console.log("Attempting to close bottom sheet");
      bottomSheetRef.current.close();
    }
  }, [isVisible, fadeAnim]);

  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: fadeAnim,
        }}
        pointerEvents={isVisible ? "auto" : "none"}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        style={{
          height: height * 0.9,
        }}
        backgroundStyle={{
          backgroundColor: "white",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
        handleIndicatorStyle={{ backgroundColor: "#D1D5DB", width: 40 }}
        enableOverDrag={true}
        enableDynamicSizing={false}
      >
        <View style={{ height: height * 0.9 }} className="p-8">
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
          <View style={{ flex: 1 }}>
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
          </View>

          <Button
            text="Apply Voucher"
            variant="secondary"
            onPress={() => {
              onClose();
            }}
            disabled={false}
          />
        </View>
      </BottomSheet>
    </>
  );
};
