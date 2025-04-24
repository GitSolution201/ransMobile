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
              // Handle filter press
              console.log('Filter pressed');
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
        <Text className="text-lg font-semibold text-gray-800">Special Offers</Text>
        <Pressable>
          <Text className="text-sm text-gray-500">View All</Text>
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



{/* <View className="flex-1 bg-[#F5F5F5]">
<View className="absolute top-12 left-4 right-4 z-10 flex-row justify-between">
  <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
    <Image 
      source={require('@/assets/icons/back.png')}
      className="w-3 h-3"
    />
  </TouchableOpacity>
  <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
  <FilterIcon width={24} height={24} className="text-gray-400" />

  </TouchableOpacity>
</View>

<ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
  <View className="h-[400px] w-full relative">
    <Image 
      source={require('@/assets/images/property.jpg')}
      className="w-full h-full"
      resizeMode="cover"
    />
    
    <View className="absolute bottom-10 right-4 flex-col gap-2">
      <Image 
        source={require('@/assets/images/property.jpg')}
        className="w-[70px] h-[70px] rounded-xl border-[2px] border-white"
      />
      <Image 
        source={require('@/assets/images/property.jpg')}
        className="w-[70px] h-[70px] rounded-xl border-[2px] border-white"
      />
      <View className="w-[70px] h-[70px] rounded-xl bg-black/60 items-center justify-center border-[2px] border-white">
        <Text className="text-white text-sm font-semibold">+4</Text>
      </View>
    </View>
  </View>

  <View className="px-4 pt-6 bg-white -mt-6 rounded-t-3xl">
    <View className="flex-row justify-between items-start mb-4">
      <View>
        <Text className="text-lg text-[#737373] font-semibold mb-2">
          Dream Apartment
        </Text>
        <View className="flex-row items-center">
          <LocationIcon width={16} height={16} className="mr-1" fill="#737373" stroke="#737373" />
          <Text className="text-xs text-[#737373]">Juba, South Sudan</Text>
        </View>
      </View>
      <View className="items-end">
        <View className="flex-row items-center">
          <Text className="text-base text-black font-extrabold">
            UGX 1,200,000
          </Text>
          <Text className="text-xs text-gray-500 ml-1">/month</Text>
        </View>
      </View>
    </View>

    <View className="flex-row gap-3 mb-6">
      <TouchableOpacity 
        className="w-[80px] h-[56px] bg-blue-600 rounded-2xl items-center justify-center"
        onPress={() => {}}
      >
        <Text className="text-white font-semibold text-base">Rent</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="w-[56px] h-[56px] bg-[#F7F5F5] rounded-2xl items-center justify-center"
        onPress={() => {}}
      >
        <Image 
          source={require('@/assets/icons/360.png')}
          className="w-6 h-6"
        />
      </TouchableOpacity>

      <TouchableOpacity 
        className="flex-1 h-[56px] bg-[#F7F5F5] rounded-2xl items-center justify-center"
        onPress={() => {}}
      >
        <Text className="text-blue-600 font-semibold text-sm">Request Inspection</Text>
      </TouchableOpacity>
    </View>

    <View className="flex-row items-center justify-between bg-[#F7F5F5] p-4 rounded-2xl shadow-sm mb-8 border border-gray-100">
      <View className="flex-row items-center">
        <Image 
          source={require('@/assets/images/avatar.png')}
          resizeMode="contain"
          className="w-12 h-12 rounded-full"
        />
        <View className="ml-6">
          <Text className="text-base font-semibold text-black">Jonathan</Text>
          <Text className="text-xs text-primary">Landlord</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity 
          className="w-12 h-12  rounded-full items-center justify-center"
          onPress={() => {}}
        >
          <MessageIcon width={24} height={24} />

        </TouchableOpacity>
      </View>
    </View>
  </View>
</ScrollView>
</View> */}
