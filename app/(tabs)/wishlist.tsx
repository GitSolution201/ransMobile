import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FilterIcon from '@/assets/icons/filter.svg';
import MessageIcon from '@/assets/icons/message.svg';
import LocationIcon from '@/assets/icons/location.svg'; 
import BedIcon from '@/assets/icons/bed.svg';
import BathIcon from '@/assets/icons/bath.svg';
import WifiIcon from '@/assets/icons/wifi.svg';
import SofaIcon from '@/assets/icons/sofa.svg';
import WashingMachineIcon from '@/assets/icons/washing-machine.svg';
import { IconSymbol } from '@/components/ui/IconSymbol';

const amenities = [
  { id: '1', name: 'Living Room', count: 1, Icon: SofaIcon },
  { id: '2', name: 'Bedrooms', count: 2, Icon: BedIcon },
  { id: '3', name: 'Bathroom', count: 1, Icon: BathIcon },
  { id: '4', name: 'Wifi', count: null, Icon: WifiIcon },
  { id: '5', name: 'Washing Machine', count: null, Icon: WashingMachineIcon },
];

export default function WishlistScreen() {
  return (
    <View className="flex-1 bg-[#F5F5F5]">
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
                className="w-12 h-12 rounded-full items-center justify-center"
                onPress={() => {}}
              >
                <MessageIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Amenities Section */}
          <View className="mb-8">
            <Text className="text-xl font-semibold mb-4">Amenities</Text>
            <View className="space-y-4">
              {amenities.map((amenity) => {
                const IconComponent = amenity.Icon;
                return (
                  <View key={amenity.id} className="flex-row items-center">
                    <View className="w-8 h-8 mr-4 items-center justify-center">
                      <IconComponent 
                        width={24} 
                        height={24}
                        stroke="#6B7280"
                        strokeWidth={1.5}
                        fill="none"
                      />
                    </View>
                    <Text className="text-base text-gray-700">
                      {amenity.count ? `${amenity.count} ${amenity.name}` : amenity.name}
                    </Text>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity 
              className="mt-4 py-4 rounded-full border border-gray-200 items-center"
              onPress={() => {}}
            >
              <Text className="text-gray-700 font-medium">Show all 11 amenities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View> 
  );
} 