import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import { PreferenceOption } from '@/components/PreferenceOption';
import { useState } from 'react';
import { Button } from '@/components/Button';

export default function PreferencesScreen() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionPress = (title: string) => {
    setSelectedOptions(prev => {
      if (prev.includes(title)) {
        return prev.filter(option => option !== title);
      }
      if (prev.length < 2) {
        return [...prev, title];
      }
      return prev;
    });
  };

  const options = [
    {
      title: 'Property Management',
      image: require('@/assets/images/property-management.jpg')
    },
    {
      title: 'Property for rent/lease',
      image: require('@/assets/images/property-rent.jpg')
    },
    {
      title: 'Property Listing',
      image: require('@/assets/images/property-listing.jpg')
    },
    {
      title: 'Selling Properties',
      image: require('@/assets/images/selling-properties.jpg')
    },
    {
      title: 'Real Estate Investment',
      image: require('@/assets/images/property-management.jpg')
    },
    {
      title: 'Property Development',
      image: require('@/assets/images/property-rent.jpg')
    },
    {
      title: 'Commercial Properties',
      image: require('@/assets/images/property-listing.jpg')
    },
    {
      title: 'Residential Properties',
      image: require('@/assets/images/selling-properties.jpg')
    }
  ];

  return (
    <View className="flex-1 bg-background">
      {/* Background Image */}
      <Image 
        source={require('@/assets/images/smile.png')}
        className="absolute top-0 left-0 w-[200px] h-[125px] rounded-br-[40px]"
        resizeMode="cover"
      />

      {/* Header */}
      <View className="flex-row justify-between items-center absolute top-12 left-4 right-4 z-10">
        <BackButton />
        <TouchableOpacity 
          className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center'
          onPress={() => router.push('/(auth)/account-setup/role')}
        >
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1 px-4 pt-36"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Title Section */}
        <Text className="text-[28px] text-primary font-extrabold mb-2">
          What are you looking For ?
        </Text>
        <Text className="text-primary text-xs text-primary-600 mb-6">
          Select one or two options
        </Text>

        {/* Options Grid */}
        <View className="flex-1">
          {/* Row 1 */}
          <View className="flex-row mb-4">
            <PreferenceOption
              image={options[0].image}
              title={options[0].title}
              isSelected={selectedOptions.includes(options[0].title)}
              onPress={() => handleOptionPress(options[0].title)}
            />
            <PreferenceOption
              image={options[1].image}
              title={options[1].title}
              isSelected={selectedOptions.includes(options[1].title)}
              onPress={() => handleOptionPress(options[1].title)}
            />
          </View>

          {/* Row 2 */}
          <View className="flex-row mb-4">
            <PreferenceOption
              image={options[2].image}
              title={options[2].title}
              isSelected={selectedOptions.includes(options[2].title)}
              onPress={() => handleOptionPress(options[2].title)}
            />
            <PreferenceOption
              image={options[3].image}
              title={options[3].title}
              isSelected={selectedOptions.includes(options[3].title)}
              onPress={() => handleOptionPress(options[3].title)}
            />
          </View>

          {/* Row 3 */}
          <View className="flex-row mb-4">
            <PreferenceOption
              image={options[4].image}
              title={options[4].title}
              isSelected={selectedOptions.includes(options[4].title)}
              onPress={() => handleOptionPress(options[4].title)}
            />
            <PreferenceOption
              image={options[5].image}
              title={options[5].title}
              isSelected={selectedOptions.includes(options[5].title)}
              onPress={() => handleOptionPress(options[5].title)}
            />
          </View>

          {/* Row 4 */}
          <View className="flex-row mb-4">
            <PreferenceOption
              image={options[6].image}
              title={options[6].title}
              isSelected={selectedOptions.includes(options[6].title)}
              onPress={() => handleOptionPress(options[6].title)}
            />
            <PreferenceOption
              image={options[7].image}
              title={options[7].title}
              isSelected={selectedOptions.includes(options[7].title)}
              onPress={() => handleOptionPress(options[7].title)}
            />
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <Button 
          text="Next"
          variant="secondary"
          position="absolute"
          disabled={selectedOptions.length === 0 ? true : false}
          onPress={() => router.push('/(auth)/account-setup/role')}
        />
    </View>
  );
} 