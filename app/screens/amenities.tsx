import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Header } from '../components/Header';
import { Colors } from '@/utils/constants/Colors';
import { amenitiesData, amenitiesIcons } from '@/utils/helper/DummyData';

export default function Amenities() {
  return (
    <View className="flex-1 bg-white">
      <Header title="Amenities" />

      <ScrollView className="flex-1 px-5 pt-6">
        {amenitiesData.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-8">
            <Text className="text-lg font-bold mb-4">{section.title}</Text>
            <View className="space-y-4">
              {section.data.map((item) => (
                <View key={item.id} className="flex-row items-center border-b-[0.5px] border-b-[#73737340] pb-4">
                  <View className="w-8 h-8 mr-4 justify-center items-center">
                    <Image 
                      source={amenitiesIcons[item.icon]}
                      style={{ 
                        width: 24, 
                        height: 24,
                        tintColor: Colors.light.textGray
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-[#737373] text-base">{item.label}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
} 