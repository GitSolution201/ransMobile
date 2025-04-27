import React from 'react';
import { View } from 'react-native';
import MessageComponent from '../components/messageComponent';

export default function FiltersNotFound() {
  const handleRetry = () => {
    // Add your retry logic here
    console.log('Retrying...');
  };

  return (
    <View className="flex-1 bg-white">
      <MessageComponent 
        onRetry={handleRetry}
        title="Filters Not Found"
        message={"We couldn't couldn't filters matching\nyour query. Please try another query"}
        buttonText="Try Again"
        image={require('@/assets/icons/filters-not-found.png')}
        imageBgColor="#F3F4F6"
        imageSize={228}
      />
    </View>
  );
} 