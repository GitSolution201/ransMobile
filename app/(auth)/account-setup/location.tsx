import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import LocationIcon from '@/assets/icons/location.svg';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Button } from '@/components/Button';

export default function LocationScreen() {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 4.8594,
    longitude: 31.5713,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationName, setLocationName] = useState('Juba, South Sudan');
  const [isLoading, setIsLoading] = useState(false);
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  const getLocationName = async (latitude: number, longitude: number) => {
    try {
      setIsLoading(true);
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (response.length > 0) {
        const location = response[0];
        const name = `${location.city || location.region || location.country}, ${location.country}`;
        setLocationName(name);
        setIsLocationSelected(true);
      }
    } catch (error) {
      console.error('Error getting location name:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMapPress = async (e: any) => {
    const { coordinate } = e.nativeEvent;
    const newLocation = {
      ...selectedLocation,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    };
    setSelectedLocation(newLocation);
    await getLocationName(coordinate.latitude, coordinate.longitude);
  };

  useEffect(() => {
    getLocationName(selectedLocation.latitude, selectedLocation.longitude);
  }, []);

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
        <TouchableOpacity className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center'>
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-4">
        {/* Title Section */}
        <View className="pt-36 z-20">
          <Text className="text-2xl text-primary font-extrabold mb-2">
            Add your Location
          </Text>
          <Text className="text-primary text-xs mb-8">
            This can be edited later in your account settings
          </Text>
        </View>

        {/* Map Container */}
        <View className="w-full h-[400px] rounded-3xl overflow-hidden mb-4 relative">
          <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={selectedLocation}
            onPress={handleMapPress}
          >
            <Marker
              coordinate={{
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
              }}
            />
          </MapView>
          <View className="absolute bottom-0 left-0 right-0">
            <View className="bg-[#FFF8F880] w-full py-3 rounded-xl">
              <Text className="text-primary text-base text-center">
                Select on Map
              </Text>
            </View>
          </View>
        </View>

        {/* Location Selector */}
        <TouchableOpacity 
          className={`flex-row items-center border border-border h-[56px] rounded-xl px-4 mb-6 mx-4 ${isLocationSelected ? 'bg-primary' : 'bg-white'}`}
        >
          <View className="flex-row items-center">
            <LocationIcon width={20} height={20} color={isLocationSelected ? "#FFFFFF" : "#4B5563"} className='mr-2 ml-4' />
            <Text className={`text-sm ${isLocationSelected ? 'text-white' : 'text-primary'}`}>
              {isLoading ? 'Loading...' : locationName}
            </Text>
          </View>
          <ChevronDownIcon width={10} height={10} color={isLocationSelected ? "#FFFFFF" : "#4B5563"} className="ml-4" />
        </TouchableOpacity>

        {/* Progress Bar */}
        <View className="h-1 bg-gray-200 rounded-full mb-5 mx-24">
          <View className="w-2 h-full bg-primary rounded-full" />
        </View>

        {/* Next Button */}
        <Button 
          text="Next"
          variant="secondary"
          className="mx-8"
          disabled={!isLocationSelected}
          onPress={() => router.push('/(auth)/account-setup/preferences')}
        />
      </View>
    </View>
  );
} 