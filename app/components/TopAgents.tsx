import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';

const agents = [
  {
    id: '1',
    name: 'Samantha',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    isPro: true,
  },
  {
    id: '2',
    name: 'Jane',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    isPro: true,
  },
  {
    id: '3',
    name: 'Jonathan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    isPro: true,
  },
  {
    id: '4',
    name: 'Samuel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    isPro: true,
  },
];

interface AgentCardProps {
  name: string;
  image: string;
  isPro: boolean;
  onPress: () => void;
}

function AgentCard({ name, image, isPro, onPress }: AgentCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="items-center mr-6"
    >
      <View className="relative">
        <Image
          source={{ uri: image }}
          className="w-[72px] h-[72px] border-4 border-gray-200 rounded-full"
          resizeMode="cover"
        />
        {isPro && (
          <View className="absolute top-1 right-[-12px] bg-[#9F7AEA] h-[20px] w-[20px] flex items-center justify-center rounded-full">
            <Text className="text-white text-[8px] font-medium">PRO</Text>
          </View>
        )}
      </View>
      <Text className="text-xs font-medium text-gray-900 mt-2">{name}</Text>
    </Pressable>
  );
}

export function TopAgents() {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center px-4 mb-4">
        <Text className="text-xl font-semibold text-gray-900">Top Agents</Text>
        <Pressable>
          <Text className="text-xs text-[#737373]">View All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            image={agent.image}
            isPro={agent.isPro}
            onPress={() => {
              console.log(`Selected agent: ${agent.name}`);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
} 