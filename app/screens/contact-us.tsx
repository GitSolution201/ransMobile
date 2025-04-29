import React from 'react';
import { View, Text, TouchableOpacity, Image , SafeAreaView} from 'react-native';
import { contactOptions } from '@/utils/helper/DummyData';
import { Colors } from '@/utils/constants/Colors';
import { Header } from '../components/Header';

export default function ContactUs() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Contact Us" />

      {/* Contact Options */}
      <View className="px-4 pt-2">
        {contactOptions.map((option) => {
          const getBgColor = () => {
            switch(option.id) {
              case 'whatsapp': return Colors.light.whatsappBg;
              case 'twitter': return Colors.light.twitterBg;
              case 'facebook': return Colors.light.facebookBg;
              case 'instagram': return Colors.light.instagramBg;
              default: return Colors.light.lightGray;
            }
          };

          const getTextColor = () => {
            switch(option.id) {
              case 'whatsapp': return Colors.light.whatsapp;
              case 'twitter': return Colors.light.twitter;
              case 'facebook': return Colors.light.facebook;
              case 'instagram': return Colors.light.instagram;
              default: return Colors.light.text;
            }
          };

          return (
            <TouchableOpacity 
              key={option.id}
              style={{ backgroundColor: getBgColor() }}
              className="flex-row items-center p-3 rounded-xl mb-3"
              onPress={() => {
                // Handle contact option press
                console.log('Contact option pressed:', option.title);
              }}
            >
              <Image 
                source={option.icon}
                className="w-8 h-8"
                resizeMode="contain"
              />
              <View className="ml-3">
                <Text style={{ color: getTextColor() }} className="text-base font-semibold">
                  {option.title}
                </Text>
                <Text style={{ color: Colors.light.textGray }} className="text-sm">
                  {option.subtitle}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
} 