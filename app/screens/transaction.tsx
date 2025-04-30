import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { TransactionPropertyCard } from "../components/TransactionPropertyCard";
import { Header } from "../components/Header";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { PaymentMethod } from "../components/PaymentMethod";
import { NoteSection } from "../components/NoteSection";
import { VoucherSection } from "../components/VoucherSection";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function transaction() {
  const [period, setPeriod] = useState({
    checkIn: "16/01/2025",
    checkOut: "16/01/2025",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateType, setDateType] = useState<"checkIn" | "checkOut">("checkIn");
  const [note, setNote] = useState("");

  const handleRentPress = () => {
    console.log("rent");
    // Handle rent button press
  };

  const handleSharePress = () => {
    // Handle share button press
    console.log("share");
  };

  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  const handleDatePress = () => {
    // setDateType(type);
    // setShowDatePicker(true);
  };

  // const handleDateChange = (event: any, selectedDate?: Date) => {
  //   const currentDate =
  //     selectedDate ||
  //     (dateType === "checkIn"
  //       ? parseDate(period.checkIn)
  //       : parseDate(period.checkOut));

  //   if (Platform.OS === "Android") {
  //     setShowDatePicker(false);
  //   }

  //   if (selectedDate) {
  //     const formattedDate = currentDate.toLocaleDateString("en-GB", {
  //       day: "2-digit",
  //       month: "2-digit",
  //       year: "numeric",
  //     });

  //     setPeriod((prev) => ({
  //       ...prev,
  //       [dateType]: formattedDate,
  //     }));
  //   }
  // };
  return (
    <SafeAreaView className="flex-1 bg-[#fff]">
      <Header title="Transaction" />
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Property Card */}
          <TransactionPropertyCard
            onRentPress={handleRentPress}
            onSharePress={handleSharePress}
          />

          {/* Period Section */}
          <View className="mt-8">
            <Text className="text-xl font-semibold text-[#000000]">Period</Text>
            <View className="flex-row justify-between mt-4">
              <View className="flex-1 mr-4">
                <Text className="text-base text-[#A5A5A5] mb-2">Check In:</Text>
                <TouchableOpacity
                  className="bg-white border border-[#9F9F9F] rounded-2xl p-4 flex-row items-center"
                  // onPress={() => handleDatePress()}
                >
                  <Ionicons name="calendar-outline" size={20} color="#9F9F9F" />
                  <Text className="text-gray-900 ml-2 text-sm">
                    {period.checkIn}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex-1">
                <Text className="text-base text-[#A5A5A5] mb-2">
                  Check Out:
                </Text>
                <TouchableOpacity
                  className="bg-white border border-[#9F9F9F] rounded-2xl p-4 flex-row items-center"
                  // onPress={() => handleDatePress()}
                >
                  <Ionicons name="calendar-outline" size={20} color="#9F9F9F" />
                  <Text className="text-gray-900 ml-2 text-sm">
                    {period.checkOut}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Note Section */}
          <NoteSection note={note} onChangeNote={setNote} />

          {/* Payment Method Section */}
          <PaymentMethod />

          {/* Voucher Section */}
          <VoucherSection />
        </View>
      </ScrollView>

      {/* {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={
            dateType === "checkIn"
              ? parseDate(period.checkIn)
              : parseDate(period.checkOut)
          }
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          // onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )} */}
    </SafeAreaView>
  );
}
