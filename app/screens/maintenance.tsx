import React from "react";
import { View } from "react-native";
import MessageComponent from "../components/messageComponent";
import { LoginHeader } from "../components/LoginHeader";

export default function Maintenance() {
  const handleRetry = () => {
    // Add your retry logic here
    console.log("Retrying...");
  };

  return (
    <View className="flex-1 bg-white">
      <LoginHeader hideImage={false} />
      <MessageComponent
        onRetry={handleRetry}
        title="Sorry! Page not found"
        message="Unless you have got time machine content is unavailable"
        buttonText="Try Again"
        image={require("@/assets/icons/sad-face.png")}
        imageSize={228}
      />
    </View>
  );
}
