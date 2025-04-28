import { View, Text, TouchableOpacity, TextInput, Image, Modal, Platform } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import UserIcon from '@/assets/icons/user.svg';
import EditIcon from '@/assets/icons/edit.svg';
import EmailIcon from '@/assets/icons/email.svg';
import Iconemail from '@/assets/icons/emailicon.svg';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button } from '@/components/Button';

export default function ProfilePictureScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cameraStatus !== 'granted' || libraryStatus !== 'granted') {
        alert('Sorry, we need camera and gallery permissions to make this work!');
        return false;
      }
      return true;
    }
    return true;
  };

  const pickImage = async (useCamera: boolean) => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await (useCamera
      ? ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.7,
        })
      : ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.7,
        }));

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setShowModal(false);
  };

  // 1. Reusable component
  const TextWithIcon = ({
    text,
    Icon,
    backgroundColor,
  }: {
    text: string;
    Icon: React.ReactNode;
    backgroundColor: string;
  }) => {
    // Normalize the background color to lowercase for comparison
    const bg = backgroundColor.toLowerCase();
    const isWhite = bg === '#fff' || bg === '#ffffff' || bg === 'white';
    const textColor = isWhite ? 'text-black' : 'text-white';

    return (
      <View
        className="h-[56px] rounded-2xl px-4 border border-gray-100 flex-row items-center justify-between mb-4"
        style={{ backgroundColor }}
      >
        <Text className={`text-base ${textColor}`}>{text}</Text>
        {Icon}
      </View>
    );
  };

  // 2. Array of items
  const items = [
    {
      text: 'nionzima@gmail.com',
      Icon: <UserIcon width={24} height={24} />,
      backgroundColor: '#fff',
    },
    {
      text: 'Nionzima Enock',
      Icon: <EmailIcon width={24} height={24} />,
      backgroundColor: '#fff',
    },
    {
      text: 'Nionzima Enock',
      Icon: <Iconemail width={24} height={24} />,
      backgroundColor: '#0056D3',
    },
    // Add more items as needed
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
      <View className="flex-row justify-between items-center px-4 pt-12 pb-8">
        <BackButton />
        <TouchableOpacity className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center'>
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="px-4 flex-1 mt-8">
        {/* Title Section */}
        <Text className="text-[28px] text-primary font-bold mb-2">
          Set up profile picture
        </Text>
        <Text className="text-xs text-primary">
          This can be edited later in your account settings
        </Text>

        {/* Profile Picture Section */}
        <View className="items-center mt-20">
          <View className="relative">
            <View className="w-[100px] h-[100px] bg-gray-100 rounded-full items-center justify-center overflow-hidden">
              {image ? (
                <Image
                  source={{ uri: image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              ) : (
                <Image  
                  source={require('@/assets/images/user.png')}
                  className="w-[60px] h-[60px]"
                  resizeMode="contain"
                />
              )}
            </View>
            <TouchableOpacity 
              className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-primary rounded-full items-center justify-center"
              onPress={() => setShowModal(true)}
            >
              <EditIcon width={12} height={12} fill="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <View className="mt-20">
          {items.map((item, idx) => (
            <TextWithIcon
              key={idx}
              text={item.text}
              Icon={item.Icon}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </View>

        {/* Email Verification Button */}
      </View>

      {/* Bottom Section with Progress and Next Button */}
      <View className="px-4 pb-12 pt-4">
        {/* Progress Bar */}
        <View className="h-1.5 bg-gray-200 rounded-full mb-4 mx-24">
          <View className={`h-full bg-primary rounded-full ${image ? 'w-full' : 'w-2/3'}`} />
        </View>
        <Button  
          text="Next"
          variant="secondary"
          disabled={image === null ? true : false}
          onPress={() => router.push('/(tabs)')}
        />

      </View>

      {/* Image Picker Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <TouchableOpacity 
          className="flex-1 justify-end bg-black/50"
          activeOpacity={1}
          onPress={() => setShowModal(false)}
        >
          <View className="bg-white rounded-t-3xl p-4">
            <Text className="text-lg font-semibold text-center mb-6">
              Choose Profile Picture
            </Text>
            <Button
              text="Take Photo"
              className="mb-3"
              onPress={() => pickImage(true)}
            />
            <Button
              text="Choose from Gallery"
              className="mb-3"
              onPress={() => pickImage(false)}
            />
            <Button
              text="Cancel"
              variant="secondary"
              className="bg-gray-100"
              onPress={() => setShowModal(false)}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
} 