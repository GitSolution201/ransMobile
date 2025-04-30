import React from "react";
import { View } from "react-native";
import FilterScreen from "../screens/FilterScreen";
import Messages from "../screens/Messages";

export default function Chat() {
  return (
    <View className="flex-1 bg-white">
      <Messages />
      {/* <FilterScreen /> */}
    </View>
  );
}
