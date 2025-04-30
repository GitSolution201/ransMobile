import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, SafeAreaView, Platform, StatusBar } from 'react-native';
import { router } from 'expo-router';
import LocationIcon from '@/assets/icons/location.svg';
import LocationDropdownIcon from '@/assets/icons/location_dropdown.svg';
import BellIcon from '@/assets/icons/bell.svg';
import { CategoryList } from '@/app/components/CategoryList';
import { MainSwiper } from '../components/MainSwiper';
import { TopLocations } from '../components/TopLocations';
import { TopAgents } from '../components/TopAgents';
import { NearBy } from '../components/SmallPropertyCard';
import { NearbyProperties } from '../components/NearbyProperties';
import { SearchBar } from '../components/SearchBar';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [selectedType, setSelectedType] = useState('1');
  const handleCategorySelect = (category: { id: string; label: string }) => {
    setSelectedType(category.id);
  };

  const handleSearch = (text: string) => {
    // Handle search functionality
    console.log('Searching for:', text);
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 mt-5 bg-background">
    <ScrollView className="flex-1 bg-background">
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
          className="relative"
        >
          <BellIcon width={23} height={23} />
          {/* Notification Badge */}
          <View className="absolute top-0 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </Pressable>
      </View>

      {/* Search Bar */}
      <SearchBar 
        placeholder="Search for properties, agents, or services..." 
        onSearch={(text) => {
          // Handle search
        }} 
      />

      {/* Category List */}
      <CategoryList selectedType={selectedType} onSelectCategory={handleCategorySelect} />
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
      <View className= {`${Platform.OS === 'android' ? 'h-[100px]' : 'h-[20px]'}`}></View>
    </ScrollView>
    </SafeAreaView>
  );
}



