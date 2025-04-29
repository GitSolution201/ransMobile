import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import BackIcon from '@/assets/icons/back.svg';

interface AccountSetupHeaderProps {
  onBackPress: () => void;
  onSkipPress: () => void;
}

export const AccountSetupHeader: React.FC<AccountSetupHeaderProps> = ({ 
  onBackPress, 
  onSkipPress 
}) => {
  const handleBackPress = () => {
    onBackPress();
  };

  const handleSkipPress = () => {
    onSkipPress();
  };

  return (
   <View className="h-[150px]">
      <Image
        source={require("@/assets/images/smile.png")}
        className="absolute top-0 left-0 w-[220px] h-[150px] rounded-br-[40px]"
        resizeMode="cover"
      />

      {/* Header */}
      <View className="flex-row justify-between items-center absolute top-[50px] left-4 right-4 z-10">
        <TouchableOpacity 
          className="w-[50px] h-[50px] items-center justify-center rounded-full bg-primary"
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <BackIcon width={18} height={18} />
        </TouchableOpacity>
        <TouchableOpacity 
          className="h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center"
          onPress={handleSkipPress}
          activeOpacity={0.7}
        >
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
};
