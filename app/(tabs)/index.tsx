import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, SafeAreaView, TextInput } from 'react-native';
import { router } from 'expo-router';
import LocationIcon from '@/assets/icons/location.svg';
import BellIcon from '@/assets/icons/bell.svg';
import SearchIcon from '@/assets/icons/search.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import { CategoryList } from '@/app/components/CategoryList';
import { MainSwiper } from '../components/MainSwiper';
import { TopLocations } from '../components/TopLocations';
import { TopAgents } from '../components/TopAgents';
import { NearBy } from '../components/SmallPropertyCard';
import { NearbyProperties } from '../components/NearbyProperties';

export default function HomeScreen() {
  const handleCategorySelect = (category: { id: string; name: string }) => {
    console.log('Selected category:', category);
    // Handle category selection
  };

  return (
    <ScrollView className="flex-1 py-20 bg-background">
      {/* Header with Location and Notification */}
      <View className="flex-row justify-between items-center px-4 pb-4">
        {/* Location Selector */}
        <Pressable 
          className="flex-row items-center bg-white px-4 py-2 rounded-full border border-[#E5E7EB]"
          onPress={() => {
            // Handle location selection
            console.log('Location selector pressed');
          }}
        >
          <LocationIcon width={20} height={20} className="text-gray-500" />
          <Text className="ml-2 text-sm text-gray-600">Juba, South Sudan</Text>
          <Text className="ml-1">▼</Text>
        </Pressable>

        {/* Notification Bell */}
        <Pressable
          onPress={() => {
            router.push('/screens/notifications')
            // Handle notification press
            console.log('Notification bell pressed');
          }}
          className="relative"
        >
          <BellIcon width={24} height={24} />
          {/* Notification Badge */}
          <View className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View className="px-4 mt-2">
        <View 
          className="flex-row items-center bg-white rounded-[32px] shadow-lg"
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {/* Search Input Section */}
          <View className="flex-row items-center flex-1 px-4 py-3">
            <SearchIcon width={18} height={18} className="text-gray-400" />
            <TextInput
              placeholder="Search for properties, agents, or services..."
              className="flex-1 ml-2 text-sm text-gray-600"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Vertical Divider */}
          <View className="w-[1px] h-6 bg-[#E5E7EB]" />

          {/* Filter Button */}
          <Pressable
            onPress={() => {
            router.push('/screens/FilterScreen')
            }}
            className="px-4 py-3"
          >
            <FilterIcon width={18} height={18} className="text-gray-400" />
          </Pressable>
        </View>
      </View>

      {/* Category List */}
      <CategoryList onSelectCategory={handleCategorySelect} />
      <View className="flex-row justify-between items-center px-4 my-4">
        <Text className="text-base font-semibold text-gray-800">#SpecialForYou</Text>
        <Pressable>
          <Text className="text-xs text-gray-500">View All</Text>
        </Pressable>
      </View>
      <MainSwiper/>
      <NearbyProperties/>
      <TopLocations />
      <TopAgents />
      <NearBy />
    </ScrollView>
  );
}



