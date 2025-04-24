import { View, Text, Switch, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</Text>
        
        {/* Notifications Section */}
        <View className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <IconSymbol name="bell.fill" size={24} color="#6B7280" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={notifications ? '#3b82f6' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Appearance Section */}
        <View className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <IconSymbol name="moon.fill" size={24} color="#6B7280" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Dark Mode</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={darkMode ? '#3b82f6' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Privacy Section */}
        <View className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <IconSymbol name="location.fill" size={24} color="#6B7280" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Location Services</Text>
            </View>
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={location ? '#3b82f6' : '#f4f3f4'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 