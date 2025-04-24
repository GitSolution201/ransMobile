import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';

export default function OTPScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds timer
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>([...Array(5)].map(() => useRef<TextInput>(null)));

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (text: string, index: number) => {
    if (text.length > 1) text = text[0];
    
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus next input
    if (text.length === 1 && index < 4) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 5) {
      // Handle verification
      router.push('/(auth)/faq-support');
    }
  };

  const handleResend = () => {
    setTimeLeft(15);
    setOtp(['', '', '', '', '']);
    inputRefs.current[0].current?.focus();
  };

  return (
    <View className="flex-1 bg-white">
      {/* Back Button */}
      <View className="absolute top-12 left-6 z-10">
        <BackButton />
      </View>

      <View className="relative bg-white">
          <Image
          resizeMode='contain'
            source={require('@/assets/images/login-illustration.png')}
            className="w-full h-[200px] object-contain"
          />
        </View>

        {/* Title */}
        <View className="px-6">
          <Text className="text-sm text-primary ">
          Enter 5 digit verification code sent to  
          </Text>
        </View>
      <View className="px-6 pt-6">
   
        <Text className="text-primary font-bold mb-12">
          ddembe02@gmail.com
        </Text>

        {/* OTP Input Fields */}
        <View className="flex-row justify-between mb-12">
          {[0, 1, 2, 3, 4].map((index) => (
            <TextInput
              key={index}
              ref={inputRefs.current[index]}
              className="w-[56px] h-[56px] border border-border rounded-2xl text-center text-xl"
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          className="bg-secondary py-4 rounded-2xl mb-8 mx-6"
          onPress={handleVerify}
        >
          <Text className="text-white text-center text-sm font-semibold">
            Verify Code
          </Text>
        </TouchableOpacity>

        {/* Timer and Resend - Moved to bottom */}
     
      </View>
      <View className="absolute bottom-20 left-0 right-0">
          <View className="flex-row items-center justify-center space-x-2">
            <View className="flex-row items-center">
              <Text className="text-primary text-base mr-1">
                {formatTime(timeLeft)}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-primary">
              Didn't receive OTP?{' '}
            </Text>
            <TouchableOpacity 
              onPress={handleResend}
              disabled={timeLeft > 0}
            >
              <Text className={`${timeLeft > 0 ? 'text-gray-400' : 'text-primary'} font-semibold`}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
} 