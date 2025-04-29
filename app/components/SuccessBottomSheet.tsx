import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { router } from 'expo-router';

interface SuccessBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export const SuccessBottomSheet: React.FC<SuccessBottomSheetProps> = ({ 
  isVisible,
  onClose 
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('Bottom sheet index changed:', index);
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    console.log('Bottom sheet visibility changed:', isVisible);
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (isVisible && bottomSheetRef.current) {
      console.log('Attempting to expand bottom sheet');
      bottomSheetRef.current.expand();
    } else if (!isVisible && bottomSheetRef.current) {
      console.log('Attempting to close bottom sheet');
      bottomSheetRef.current.close();
    }
  }, [isVisible, fadeAnim]);

  return (
    <>
      <Animated.View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: fadeAnim,
        }}
        pointerEvents={isVisible ? 'auto' : 'none'}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backgroundStyle={{ 
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
        handleIndicatorStyle={{ backgroundColor: '#D1D5DB', width: 40 }}
        enableOverDrag={true}
        enableDynamicSizing={false}
      >
        <View className="flex-1 items-center p-8">
          <Image
            source={require("@/assets/icons/smile.png")}
            className="w-[120px] h-[120px] mb-4"
            resizeMode="contain"
          />
          <View className="flex-row items-center mb-12">
            <Text className="text-[#0056D3] text-xl">Account set </Text>
            <Text className="text-[#0056D3] text-xl font-bold">
              Successfully
            </Text>
          </View>
          <TouchableOpacity
            className="w-full h-[56px] bg-[#1ABC9C] rounded-xl items-center justify-center"
            onPress={() => router.push("/(tabs)")}
          >
            <Text className="text-white text-base font-medium">Finish</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
}; 