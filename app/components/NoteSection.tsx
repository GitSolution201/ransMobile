import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface NoteSectionProps {
  note: string;
  onChangeNote: (text: string) => void;
}

export const NoteSection = ({ note, onChangeNote }: NoteSectionProps) => {
  return (
    <View className="mt-8">
      <Text className="text-xl font-semibold text-[#000000] mb-4">
        Note For Owner
      </Text>
      <View className="bg-white border border-[#9F9F9F] rounded-2xl">
        <View className="flex-row items-center px-4 py-0.5">
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={20}
            color="#9F9F9F"
          />
          <TextInput
            placeholder="Please Is the place Clean Before I check in ?"
            value={note}
            onChangeText={onChangeNote}
            className="flex-1 ml-3 text-sm text-gray-900"
            placeholderTextColor="#000000"
          />
        </View>
      </View>
    </View>
  );
};
