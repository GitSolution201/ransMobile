import { View, Text, ScrollView } from "react-native";
import { useState, useMemo } from "react";
import { router } from "expo-router";
import { InputField } from "@/app/components/InputField";
import { Button } from "@/app/components/Button";
import { SocialSignInButtons } from "@/app/components/SocialSignInButtons";
import EmailIcon from "@/assets/icons/email_signin.svg";
import LockIcon from "@/assets/icons/lock.svg";
import { login } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { LoginHeader } from "../components/LoginHeader";
import React from "react";
export default function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is invalid";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const isFormValid = useMemo(() => {
    return email && password && !errors.email && !errors.password;
  }, [email, password, errors]);

  const handleLogin = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      // Proceed with login
      dispatch(login({ email, id: "1" }));
      router.replace("/(tabs)");
      console.log("Login with:", { email, password });
    }
  };

  return (
    <View className="flex-1 bg-background">
      <LoginHeader showBackButton={false} />

      {/* Main Content */}
      <ScrollView className="flex-1" bounces={false}>
        <View className="px-6">
          <Text className="text-sm py-10 ">
            Let's{" "}
            <Text className="text-primary font-bold text-sm">Sign in</Text>
          </Text>
        </View>
        {/* Form Section */}
        <View className="px-6 h=[56px]">
          {/* Input Fields */}
          <InputField
            centered={true}
            icon={<EmailIcon width={20} height={20} />}
            placeholder="Enter your email or username"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            error={errors.email}
          />

          <View className="mt-4 h-[56px]">
            <InputField
              centered={true}
              icon={<LockIcon width={20} height={20} />}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              error={errors.password}
              secureTextEntry={!showPassword}
            />
          </View>

          <View className="flex-row justify-between items-center mt-4">
            <Text
              className="text-primary text-sm"
              onPress={() => router.push("/forgot-password")}
            >
              Forgot Password ?
            </Text>
            <Text
              className="text-primary text-sm"
              onPress={() => setShowPassword(!showPassword)}
            >
              Show Password
            </Text>
          </View>

          {/* Divider */}
          <View className="flex-row items-center mt-12">
            <View className="flex-1 h-[1px] bg-placeholder" />
            <Text className="mx-4 text-placeholder text-sm">Or</Text>
            <View className="flex-1 h-[1px] bg-placeholder" />
          </View>

          {/* Social Login */}
          <View className="mt-4">
            <SocialSignInButtons />
          </View>

          {/* Login Button */}
          <Button
            text="Login"
            variant="secondary"
            onPress={handleLogin}
            disabled={!isFormValid}
            className="mt-8"
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-20 left-0 right-0">
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-400 text-sm">Dont have an account ? </Text>
          <Text
            className="text-primary font-medium text-sm"
            onPress={() => router.push("/signup")}
          >
            Register
          </Text>
        </View>
      </View>
    </View>
  );
}
