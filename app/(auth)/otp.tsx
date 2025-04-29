import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import TimerIcon from '@/assets/icons/timer.svg';
import { login } from '@/redux/authSlice';
import { LoginHeader } from '../components/LoginHeader';
import React from 'react';

export default function OTPScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>([...Array(5)].map(() => useRef<TextInput>(null)));
  const dispatch = useDispatch();

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
      dispatch(login({ email: 'ddembe02@gmail.com', id: '1' }));
      router.replace('/(auth)/account-setup/welcome');
    }
  };

  const handleResend = () => {
    setTimeLeft(15);
    setOtp(['', '', '', '', '']);
    inputRefs.current[0].current?.focus();
  };

  return (
    <View className="flex-1 bg-white">
      <LoginHeader />

      {/* Title */}
      <View className="px-6">
        <Text className="text-sm text-primary">
          Enter 5 digit verification code sent to
        </Text>
      </View>
      <View className="px-6 pt-6">
        <Text className="text-primary font-bold mb-12 text-sm">
          ddembe02@gmail.com
        </Text>

        {/* OTP Input Fields */}
        <View className="flex-row justify-between mb-12">
          {[0, 1, 2, 3, 4].map((index) => (
            <View 
              key={index}
              className={`w-[48px] h-[48px] border ${otp[index] ? 'border-primary' : 'border-border'} rounded-xl items-center justify-center`}
            >
              <TextInput
                ref={inputRefs.current[index]}
                className="w-full h-full text-center text-xl text-primary"
                maxLength={1}
                keyboardType="number-pad"
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(text, index)}
                selectTextOnFocus
              />
            </View>
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          className={`py-4 rounded-2xl mb-8 mx-6 ${otp.join('').length === 5 ? 'bg-primary' : 'bg-gray-300'}`}
          onPress={handleVerify}
          disabled={otp.join('').length !== 5}
        >
          <Text className="text-white text-center text-sm font-semibold">
            Verify Code
          </Text>
        </TouchableOpacity>
      </View>

      {/* Timer and Resend */}
      <View className="absolute bottom-20 left-0 right-0">
        <View className="flex-1 justify-center items-center">
          <View className="flex-row items-center justify-center w-[128px] h-[46px] space-x-2 rounded-full bg-[#F9F9F9]">
            <TimerIcon width={20} height={20} />
            <View className="flex-row items-center ml-2">
              <Text className="text-primary text-base mr-1">
                {formatTime(timeLeft)}
              </Text>
            </View>
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