import React from 'react';
import { View } from 'react-native';
import MessageComponent from '../components/messageComponent';
export default function SomethingWentWrong() {
    const handleRetry = () => {
        // Add your retry logic here
        console.log('Retrying...');
    };
    return (
        <View className="flex-1 bg-white">
            <MessageComponent
                onRetry={handleRetry}
                title="Something went wrong"
                message="Sorry we couldn't access the page.Please try it again."
                buttonText="Try Again"
                image={require('@/assets/icons/error.png')}
                imageBgColor="#FEF3F2"
                imageSize={228}
            />

        </View>
    );
} 