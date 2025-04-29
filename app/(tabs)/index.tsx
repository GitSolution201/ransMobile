import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, SafeAreaView, TextInput } from 'react-native';
import { router } from 'expo-router';
import LocationIcon from '@/assets/icons/location.svg';
import LocationDropdownIcon from '@/assets/icons/location_dropdown.svg';
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
          className="flex-row items-center bg-white px-4 h-[39px] rounded-full border border-[#E5E7EB]"
          onPress={() => {
            // Handle location selection
            console.log('Location selector pressed');
          }}
        >
          <LocationIcon width={17} height={17} className="text-gray-500" />
          <Text className="ml-2 text-sm  text-gray-600 pr-1">Juba, South Sudan</Text>
          <LocationDropdownIcon width={13} height={13} className="text-gray-500" />
        </Pressable>

        {/* Notification Bell */}
        <Pressable
          onPress={() => {
            router.push('/screens/notifications')
            // Handle notification press
            console.log('Notification bell pressed');
          }}
          className="relative bottom-2"
        >
          <BellIcon width={23} height={23} />
          {/* Notification Badge */}
          <View className="absolute top-0 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View className="px-4 mt-2">
        <View 
          className="flex-row items-center bg-white rounded-[32px] shadow-lg h-[50px]"
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
              className="flex-1 ml-2 text-sm "
              placeholderTextColor="#9CA3AF text-[#737373]"
            />
          </View>

          {/* Vertical Divider */}
          <View className="w-[2px] h-6 bg-[#737373]" />

          {/* Filter Button */}
          <Pressable
            onPress={() => {
            router.push('/screens/FilterScreen')
            }}
            className="px-5 py-3"
          >
            <FilterIcon width={16} height={13} className="text-gray-400" />
          </Pressable>
        </View>
      </View>

      {/* Category List */}
      <CategoryList onSelectCategory={handleCategorySelect} />
      <View className="flex-row justify-between items-center px-4 my-4">
        <Text className="text-xl font-semibold text-gray-800 text-base">#SpecialForYou</Text>
        <Pressable>
          <Text className="text-xs text-[#737373]">View All</Text>
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



