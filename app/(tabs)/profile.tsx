import { View, Text, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <View className="items-center pt-10 pb-6">
        <View className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mb-4">
          <IconSymbol name="person.circle.fill" size={128} color="#6B7280" />
        </View>
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</Text>
        <Text className="text-gray-500 dark:text-gray-400">@johndoe</Text>
      </View>
      
      <View className="px-6">
        <View className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</Text>
          <Text className="text-gray-600 dark:text-gray-300">
            React Native developer passionate about creating beautiful mobile experiences.
          </Text>
        </View>
        
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white">254</Text>
            <Text className="text-gray-500 dark:text-gray-400">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white">12.4k</Text>
            <Text className="text-gray-500 dark:text-gray-400">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white">1,234</Text>
            <Text className="text-gray-500 dark:text-gray-400">Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
} 