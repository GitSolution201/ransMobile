import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface MessageComponentProps {
  onRetry?: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  image: ImageSourcePropType;
  imageBgColor?: string;
  imageSize: number;
}

export default function MessageComponent({ 
  onRetry,
  title = "Sorry! Page not found",
  message = "Unless you have got time machine,\ncontent is unavailable",
  buttonText = "Try Again",
  image,
  imageBgColor = '#F3F4F6',
  imageSize
}: MessageComponentProps) {
  return (
    <View className="flex-1 bg-white">
      
      {/* Centered Content */}
      <View className="flex-1 justify-center items-center px-6">
        
        {/* Image with Background Circle */}
        <View 
          className="rounded-full items-center justify-center mb-8"
          style={{ backgroundColor: imageBgColor, padding: 24 }}
        >
          <Image
            source={image}
            style={{ width: imageSize, height: imageSize }}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-lg font-bold text-[#000000] text-center mb-2 pt-12">
          {title}
        </Text>

        {/* Message */}
        <Text className="text-sm text-[#737373] te-center">
          {message}
        </Text>

      </View>

      {/* Try Again Button - Bottom */}
      <View className="px-6 pb-8">
        <TouchableOpacity 
          onPress={onRetry}
          className="bg-[#2563EB] py-4 rounded-xl items-center"
        >
          <Text className="text-white font-medium text-base">
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
