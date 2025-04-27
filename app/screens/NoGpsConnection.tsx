import React from 'react';
import { View } from 'react-native';
import MessageComponent from '../components/messageComponent';

export default function NoGpsConnection() {
  const handleRetry = () => {
    // Add your retry logic here
    console.log('Retrying...');
  };

  return (
    <View className="flex-1 bg-white">
      <MessageComponent 
        onRetry={handleRetry}
        title="No GPS Connection"
        message="Please Check Permissions"
        buttonText="Try Again"
        image={require('@/assets/icons/gps-location.png')}
        imageBgColor="#F3F4F6"
        imageSize={228}
      />
    </View>
  );
} 