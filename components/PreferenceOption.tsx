import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckIcon from '@/assets/icons/check.svg';

interface PreferenceOptionProps {
  image: any;
  title: string;
  isSelected?: boolean;
  onPress?: () => void;
}

export function PreferenceOption({ image, title, isSelected = false, onPress }: PreferenceOptionProps) {
  return (
    <TouchableOpacity 
      className={`flex-1 bg-gray-100 mx-2  h-[202px]w-full rounded-3xl p-4 border border-gray-100  ${isSelected ? 'border-primary' : ''}`}
      onPress={onPress}
    >
      <View className="relative">
        <Image 
          source={image}
          className="w-full h-[160px] w-full rounded-2xl"
          resizeMode="cover"
        />
        {isSelected && (
          <View className="absolute top-2 left-2 rounded-full p-2 bg-white">
            <CheckIcon width={10} height={10} color="#FFFFFF" />
          </View>
        )}
      </View>
      <Text className={`text-xs font-medium mt-3 ${isSelected ? 'text-primary' : 'text-black'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
} 