import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageSourcePropType,
  Platform,
  StatusBar,
} from 'react-native';
import { Header } from '../components/Header';
import { AntDesign } from '@expo/vector-icons';

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: ImageSourcePropType;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'John Doe',
    rating: 4.5,
    date: '2 days ago',
    comment: 'Great property! Very clean and well maintained. The location is perfect and the amenities are exactly as described.',
    avatar: require('../../assets/images/review1.jpg'),
  },
  {
    id: '2',
    name: 'Sarah Smith',
    rating: 5,
    date: '1 week ago',
    comment: 'Excellent experience! The property exceeded my expectations. Very spacious and modern.',
    avatar: require('../../assets/images/review2.jpg'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Good location and nice property overall. Could use some minor updates but definitely worth the price.',
    avatar: require('../../assets/images/review1.jpg'),
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <View className="bg-gray-50 p-4 rounded-2xl mb-4 shadow-sm">
    <View className="flex-row items-center mb-3">
      <Image
        source={review.avatar}
        className="w-12 h-12 rounded-full"
      />
      <View className="ml-3 flex-1">
        <Text className="text-base font-semibold text-gray-900">{review.name}</Text>
        <View className="flex-row items-center">
          <View className="flex-row">
            {[...Array(5)].map((_, index) => (
              <AntDesign
                key={index}
                name={index < Math.floor(review.rating) ? "star" : "staro"}
                size={14}
                color={index < Math.floor(review.rating) ? "#FFD700" : "#BEC5D1"}
                style={{ marginRight: 2 }}
              />
            ))}
          </View>
          <Text className="text-sm text-gray-500 ml-2">{review.date}</Text>
        </View>
      </View>
    </View>
    <Text className="text-gray-600 leading-5">{review.comment}</Text>
  </View>
);

export default function ReviewScreen() {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 mt-2 bg-white">
      <Header title="Reviews" />
      <ScrollView className="flex-1 px-4">
        <View className="py-4">
          {/* Overall Rating */}
          <View className="bg-white p-4 rounded-2xl mb-6 items-center">
            <Text className="text-3xl font-bold text-gray-900">4.5</Text>
            <View className="flex-row my-2">
              {[...Array(5)].map((_, index) => (
                <AntDesign
                  key={index}
                  name={index < 4 ? "star" : "staro"}
                  size={20}
                  color="#FFD700"
                  style={{ marginHorizontal: 2 }}
                />
              ))}
            </View>
            <Text className="text-gray-500">Based on 128 reviews</Text>
          </View>

          {/* Review List */}
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 