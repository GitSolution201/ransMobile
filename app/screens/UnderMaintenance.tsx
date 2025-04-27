import React from 'react';
import { View } from 'react-native';
import MessageComponent from '../components/messageComponent';

export default function UnderMaintenance() {
  const handleRetry = () => {
    // Add your retry logic here
    console.log('Retrying...');
  };

  return (
    <View className="flex-1 bg-white">
      <MessageComponent 
        onRetry={handleRetry}
        title="Under Maintenance"
        message="Sorry the page you are looking for is\ncurrently under maintenance"
        buttonText="Try Again"
        image={require('@/assets/icons/maintenance-hexagon.png')}
        imageBgColor="#F3F4F6"
        imageSize={228}
      />
    </View>
  );
} 