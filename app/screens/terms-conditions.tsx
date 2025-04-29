import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from '../components/Header';
import { Colors } from '@/utils/constants/Colors';
import { termsAndConditionsData } from '@/utils/helper/DummyData';
import { router } from 'expo-router';

export default function TermsAndConditions() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header 
        title="Terms & Conditions" 
        onBack={() => router.push('/(auth)/signup')}
      />

      <ScrollView className="flex-1 px-5">
        {termsAndConditionsData.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-6">
            <Text className="text-lg font-bold mb-3 mt-4">{section.title}</Text>
            <View className="space-y-2">
              {section.data.map((item, index) => (
                <View key={index} className="flex-row items-baseline space-x-2">
                  <Text style={{ color: Colors.light.textGray }} className="text-lg">•</Text>
                  <Text style={{ color: Colors.light.textGray }} className="text-sm leading-relaxed flex-1">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
