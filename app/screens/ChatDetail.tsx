import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Message {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
  reactions?: string[];
}

interface ChatDetailProps {
  route: {
    params: {
      name: string;
      members?: string;
      isOnline?: boolean;
      isGroup?: boolean;
      avatar?: any;
    }
  }
}

const dummyMessages: Message[] = [
  {
    id: '1',
    text: "We're excited to invite you to a community event in the lobby on 5th Jan 2025 in the afternoon.\n\nCome meet your neighbors and enjoy food, drinks, and activities for all ages!\nRSVP by sending a private message.\nWe hope to see you there",
    time: '5:30 pm',
    isMe: false,
    reactions: ['🔥', '👍', '🙌', '😂']
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
    isMe: false
  }
];

const pollOptions = [
  { name: 'Cafeteria', percentage: 15 },
  { name: 'Lobby', percentage: 60, selected: true },
  { name: 'Rooftop', percentage: 25 }
];

export default function ChatDetail({ route }: ChatDetailProps) {
  const router = useRouter();
  const { name, members, isOnline, isGroup, avatar } = route.params;

  const renderMessage = (message: Message) => (
    <View key={message.id} className={`px-4 mb-4 ${message.isMe ? 'items-end' : 'items-start'}`}>
      {!message.isMe && (
        <View className="flex-row items-center mb-1">
          <Image source={avatar} className="w-8 h-8 rounded-full mr-2" />
          <Text className="text-sm text-[#737373]">Nambi Sarah</Text>
          <Text className="text-xs text-[#737373] ml-2">Tenant</Text>
        </View>
      )}
      <View className={`rounded-2xl p-4 max-w-[80%] ${message.isMe ? 'bg-[#2563EB]' : 'bg-[#F5F5F5]'}`}>
        <Text className={`text-sm ${message.isMe ? 'text-white' : 'text-black'}`}>
          {message.text}
        </Text>
        {message.reactions && (
          <View className="flex-row mt-2">
            {message.reactions.map((reaction, index) => (
              <Text key={index} className="mr-1 text-base">{reaction}</Text>
            ))}
          </View>
        )}
      </View>
      <Text className="text-xs text-[#737373] mt-1">{message.time}</Text>
    </View>
  );

  const renderPoll = () => (
    <View className="mx-4 mb-4">
      {pollOptions.map((option, index) => (
        <View key={index} className="flex-row items-center justify-between mb-2 bg-[#F5F5F5] rounded-lg p-3">
          <Text className="text-sm text-[#737373]">{option.name}</Text>
          <View className="flex-row items-center">
            <Text className="text-sm text-[#737373] mr-2">{option.percentage}%</Text>
            {option.selected && (
              <View className="w-6 h-6 rounded-full bg-[#2563EB] items-center justify-center">
                <Ionicons name="checkmark" size={16} color="white" />
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
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

      {/* Messages */}
      <ScrollView className="flex-1">
        <Text className="text-center text-sm text-[#737373] my-4">Today</Text>
        {dummyMessages.map(renderMessage)}
        {renderPoll()}
      </ScrollView>

      {/* Message Input */}
      <View className="flex-row items-center px-4 py-2 border-t border-[#F5F5F5]">
        <TouchableOpacity className="mr-3">
          <Ionicons name="attach" size={24} color="#737373" />
        </TouchableOpacity>
        <TextInput
          placeholder="Message"
          className="flex-1 bg-[#F5F5F5] rounded-full px-4 py-2 mr-3"
          placeholderTextColor="#737373"
        />
        <TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-[#2563EB] items-center justify-center">
            <Ionicons name="mic" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 