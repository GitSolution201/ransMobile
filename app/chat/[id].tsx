import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface Message {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
  reactions?: string[];
  sender?: {
    name: string;
    role: string;
    avatar: any;
  };
}

const dummyMessages: Message[] = [
  {
    id: '1',
    text: "We're excited to invite you to a community event in the lobby on 5th Jan 2025 in the afternoon.\n\nCome meet your neighbors and enjoy food, drinks, and activities for all ages!\nRSVP by sending a private message.\nWe hope to see you there",
    time: '5:30 pm',
    isMe: false,
    reactions: ['🔥', '👍', '🙌', '😂'],
    sender: {
      name: 'Nambi Sarah',
      role: 'Tenant',
      avatar: require('@/assets/images/user.png')
    }
  },
  {
    id: '2',
    text: "Thanks Sarah. WE really appreciate your input in this. We will are looking to attending in big numbers. Guys you should confirm your attendance with her.",
    time: '5:30 pm',
    isMe: true
  },
  {
    id: '3',
    text: "We can vote where we want the community can be held",
    time: '5:31 pm',
    isMe: false,
    sender: {
      name: 'Nambi Sarah',
      role: 'Tenant',
      avatar: require('@/assets/images/user.png')
    }
  }
];

const pollOptions = [
  { name: 'Cafeteria', percentage: 15, time: '5:30 pm' },
  { name: 'Lobby', percentage: 60, selected: true, time: '5:30 pm' },
  { name: 'Rooftop', percentage: 25, time: '5:30 pm' }
];

export default function ChatDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { name, members, isOnline, isGroup } = params;

  const renderMessage = (message: Message) => (
    <View key={message.id} className={`px-4 mb-4 ${message.isMe ? 'items-end' : 'items-start'}`}>
      {!message.isMe && message.sender && (
        <View className="flex-row items-center mb-1">
          <Image source={message.sender.avatar} className="w-8 h-8 rounded-full mr-2" />
          <Text className="text-sm text-[#737373]">{message.sender.name}</Text>
          <Text className="text-xs text-[#737373] ml-2">{message.sender.role}</Text>
        </View>
      )}
      <View className={`rounded-3xl p-4 ${message.isMe ? 'bg-[#2563EB]' : 'bg-[#F5F5F5]'} ${message.isMe ? 'max-w-[85%]' : 'max-w-[90%]'}`}>
        <Text className={`text-sm leading-5 ${message.isMe ? 'text-white' : 'text-black'}`}>
          {message.text}
        </Text>
        {message.reactions && (
          <View className="flex-row mt-2">
            {message.reactions.map((reaction, index) => (
              <Text key={index} className="mr-1 text-lg">{reaction}</Text>
            ))}
          </View>
        )}
      </View>
      <Text className="text-xs text-[#737373] mt-1">{message.time}</Text>
    </View>
  );

  const pollWidths = ["w-[28%]", "w-[62%]", "w-[36%]"];
  const renderPoll = () => (
    <View className="mx-4 mb-4">
      <View className="bg-[#F1F1F5] rounded-3xl px-6 py-6 relative">
        {/* Cafeteria */}
        <View className="mb-5 flex-row items-center relative">
          <View className="relative flex-1">
            <View className="absolute left-0 top-0 h-12 rounded-l-full bg-[#D9D9E3] ${pollWidths[0]}" />
            <View className="flex-row items-center rounded-full h-12 bg-white">
              <Text className="text-base flex-1 text-[#222] z-10 pl-5">Cafeteria</Text>
              <Text className="text-base text-[#222] z-10 pr-5">15%</Text>
            </View>
          </View>
          <View className="ml-4 flex-shrink-0">
            <View className="w-7 h-7 rounded-full border-2 border-[#D1D1E0] bg-white" />
          </View>
        </View>
        {/* Lobby (selected) */}
        <View className="mb-5 flex-row items-center relative">
          <View className="relative flex-1">
            <View className="absolute left-0 top-0 h-12 rounded-l-full bg-[#3B82F6] ${pollWidths[1]}" />
            <View className="flex-row items-center rounded-full h-12 bg-[#2563EB]">
              <Text className="text-base flex-1 text-white z-10 pl-5">Lobby</Text>
              <Text className="text-base text-white z-10 pr-5">60%</Text>
            </View>
          </View>
          <View className="ml-4 flex-shrink-0">
            <View className="w-7 h-7 rounded-full border-2 border-[#2563EB] bg-[#2563EB] items-center justify-center flex">
              <Ionicons name="checkmark" size={18} color="white" />
            </View>
          </View>
        </View>
        {/* Rooftop */}
        <View className="flex-row items-center relative">
          <View className="relative flex-1">
            <View className="absolute left-0 top-0 h-12 rounded-l-full bg-[#D9D9E3] ${pollWidths[2]}" />
            <View className="flex-row items-center rounded-full h-12 bg-white">
              <Text className="text-base flex-1 text-[#222] z-10 pl-5">Rooftop</Text>
              <Text className="text-base text-[#222] z-10 pr-5">25%</Text>
            </View>
          </View>
          <View className="ml-4 flex-shrink-0">
            <View className="w-7 h-7 rounded-full border-2 border-[#D1D1E0] bg-white" />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-[#F5F5F5]">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="chevron-back" size={24} color="#737373" />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-lg font-semibold">{name}</Text>
          {members && (
            <Text className="text-sm text-[#737373]">
              {members} • {isOnline ? '42 Online' : 'Offline'}
            </Text>
          )}
        </View>
        <TouchableOpacity className="ml-4">
          <Ionicons name="ellipsis-vertical" size={20} color="#737373" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Messages */}
        <ScrollView className="flex-1">
          <Text className="text-center text-sm text-[#737373] my-4">Today</Text>
          {dummyMessages.map(renderMessage)}
          {renderPoll()}
        </ScrollView>

        {/* Message Input */}
        <View className="flex-row items-center px-4 py-2 border-t border-[#F5F5F5] bg-white">
          <TouchableOpacity className="mr-3">
            <Ionicons name="attach" size={24} color="#737373" />
          </TouchableOpacity>
          <TextInput
            placeholder="Message"
            className="flex-1 bg-[#F5F5F5] rounded-full px-4 py-2.5 mr-3 text-base"
            placeholderTextColor="#737373"
          />
          <TouchableOpacity>
            <View className="w-10 h-10 rounded-full bg-[#2563EB] items-center justify-center">
              <Ionicons name="mic" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 