import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import FilterIcon from "@/assets/icons/filter.svg";
import LocationIcon from "@/assets/icons/location_icon.svg";
import MessageIcon from "@/assets/icons/message.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { router } from "expo-router";
import { NearBy } from "../components/SmallPropertyCard";
import BackIcon from "@/assets/icons/back_black.svg";


// Dummy amenities data for demonstration
const amenities = [
  { 
    id: 1,
    name: "Bedroom",
    count: 2,
    Icon: require("@/assets/icons/bed.svg").default,
  },
  {
    id: 2,
    name: "Bathroom",
    count: 1,
    Icon: require("@/assets/icons/bath.svg").default,
  },
];

const reviews = [
  {
    avatar: require("@/assets/images/review1.jpg"),
    name: "John M.",
    role: "Former Tenant",
    roleColor: "text-blue-500",
    date: "2 Days Ago",
    rating: 4,
    review:
      "I lived in this apartment for two years, and it was fantastic! The location in Westlands is perfect – close to shops and restaurants. The building is well-maintained.........",
  },
  {
    avatar: require("@/assets/images/review2.jpg"),
    name: "Sarah K.",
    role: "Buyer",
    roleColor: "text-blue-400",
    date: "August 20, 2024",
    rating: 4,
    review:
      "The house is beautiful and spacious, with modern finishes. The neighborhood is quiet and ideal for families. However, we experienced a small issue with the plumbing that t......",
  },
  {
    avatar: require("@/assets/images/review1.jpg"),
    name: "Peter L.",
    role: "Current Tenant",
    roleColor: "text-blue-500",
    date: "August 12, 2024",
    rating: 4,
    review:
      "We've been living in this house for six months now, and it's been amazing. The kids love the big backyard, and the proximity to their school is a huge plus. Th......",
  },
  // Add more reviews as needed
];

type Review = {
  avatar: any;
  name: string;
  role: string;
  roleColor: string;
  date: string;
  rating: number;
  review: string;
};

const ReviewCard: React.FC<Review> = ({
  avatar,
  name,
  role,
  roleColor,
  date,
  rating,
  review,
}) => (
  <View className="bg-[#F7F7FA] rounded-2xl p-4 mb-4 flex-row">
    <Image
      source={avatar}
      className="w-14 h-14 rounded-full mr-4"
      resizeMode="cover"
    />
    <View className="flex-1">
      <View className="flex-row justify-between items-center mb-1">
        <View>
          <Text className="font-bold text-base text-black">{name}</Text>
          <Text className={`text-xs mt-1 ${roleColor}`}>{role}</Text>
        </View>
        <View className="flex-row items-center">
          {[...Array(rating)].map((_, i) => (
            <Text key={i} className="text-yellow-400 text-lg">
              ★
            </Text>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <Text key={i} className="text-yellow-400 text-lg">
              ☆
            </Text>
          ))}
        </View>
      </View>
      <Text className="text-gray-700 text-sm mb-2">{review}</Text>
      <Text className="text-xs text-gray-400">{date}</Text>
    </View>
  </View>
);

const ReviewsSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <View className="mb-8">
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-base font-bold text-blue-600">Reviews</Text>
      <View className="flex-row items-center">
        <Text className="text-yellow-400 text-xl mr-1">★</Text>
        <Text className="text-lg font-bold text-gray-900">4.6</Text>
        <Text className="text-gray-500 text-sm">/5</Text>
      </View>
    </View>
    {reviews.map((review, idx) => (
      <ReviewCard key={idx} {...review} />
    ))}
    <TouchableOpacity 
      className="bg-blue-600 h-[40px] rounded-[40px] items-center justify-center mt-2"
      onPress={() => router.push('/screens/review')}
    >
      <Text className="text-white text-base font-semibold">
        View All Reviews
      </Text>
    </TouchableOpacity>
  </View>
);

const LocationFacilitiesSection = () => (
  <View className="mb-10">
    <Text className="text-base font-bold mb-4 text-gray-900">
      Location & Facilities
    </Text>

    {/* Address Row */}
    <View className="flex-row items-start mb-2">
      <View className="mt-1 mr-3">
        <LocationIcon width={22} height={22} />
      </View>
      <View>
        <Text className="text-xs text-black font-medium">
          107 Munuki Road, Opposite Exxom Energy
        </Text>
        <Text className="text-xs text-gray-500">Juba, South Sudan</Text>
      </View>
    </View>

    {/* Distance Dropdown */}
    <TouchableOpacity className="border border-gray-400 rounded-[40px] mt-3 px-4 h-[51px] flex-row items-center justify-between mb-4">
      <View className="flex-row items-center">
        <LocationIcon width={16} height={16} />
        <Text className="text-xs text-gray-700 ml-3">4.5 km from your Location</Text>
      </View>
      <ChevronDownIcon width={16} height={16} />
    </TouchableOpacity>

    {/* Facilities Row */}
    <View className="flex-row justify-between mb-4">
      <View className="flex-1 bg-gray-100 rounded-xl py-4 mx-1 items-center">
        <Text className="text-xs font-semibold">5 schools</Text>
      </View>
      <View className="flex-1 bg-gray-100 rounded-xl py-4 mx-1 items-center">
        <Text className="text-xs font-semibold">2 Hospitals</Text>
      </View>
      <View className="flex-1 bg-gray-100 rounded-xl py-4 mx-1 items-center">
        <Text className="text-xs font-semibold">6 Gas Stations</Text>
      </View>
    </View>

    {/* Map Image with Button */}
    <View className="rounded-2xl overflow-hidden mb-2">
      <Image
        source={require("@/assets/images/mapImage.png")}
        className="w-full h-[200px]"
        resizeMode="cover"
      />
      <TouchableOpacity
        className="absolute bottom-0 left-0 right-0 bg-[#F7F5F5] py-3 items-center"
        onPress={() => {
          /* handle view on map */
        }}
      >
        <Text className="text-black text-xs font-semibold">View On Map</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const imagesArray = [
  require("@/assets/images/property.jpg"),
  require("@/assets/images/kitchen.jpg"),
  require("@/assets/images/house1.jpg"),
  require("@/assets/images/house2.jpg"),
  require("@/assets/images/house3.jpg"),
  // ...more
];

export default function ProductDetails() {
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <View className="absolute top-12 left-4 right-4 z-10 flex-row justify-between">
        <TouchableOpacity
          className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md"
          onPress={() => router.back()}
        >
         <BackIcon width={10} height={10} color="#737373"  />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md"
          onPress={() => {
            router.push("/screens/FilterScreen");
          }}
        >
          <FilterIcon width={15} height={15} className="text-gray-400" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="h-[400px] w-full relative">
          <Image
            source={require("@/assets/images/property.jpg")}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-10 right-4 flex-col gap-2">
            <Image
              source={require("@/assets/images/property.jpg")}
              className="w-[70px] h-[70px] rounded-xl border-[2px] border-white"
            />
            <Image
              source={require("@/assets/images/property.jpg")}
              className="w-[70px] h-[70px] rounded-xl border-[2px] border-white"
            />
            <TouchableOpacity
              className="w-[70px] h-[70px] rounded-xl bg-black/60 items-center justify-center border-[2px] border-white"
              onPress={() =>
                router.push({
                  pathname: "/screens/image-details",
                  params: { images: JSON.stringify(imagesArray) },
                })
              }
            >
              <Text className="text-white text-sm font-semibold">+2</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 pt-6 bg-white -mt-6 rounded-t-3xl">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-lg text-[#737373] font-semibold mb-2">
                Dream Apartment
              </Text>
              <View className="flex-row items-center">
                <LocationIcon
                  width={16}
                  height={16}
                  className="mr-1"
                  fill="#737373"
                  stroke="#737373"
                />
                <Text className="text-xs text-[#737373] pl-2">
                  Juba, South Sudan
                </Text>
              </View>
            </View>
            <View className="items-end">
              <View className="flex-row items-center">
                <Text className="text-base text-black font-extrabold">
                  UGX 1,200,000
                </Text>
                <Text className="text-xs text-gray-500 ml-1">/month</Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3 mb-6">
            <TouchableOpacity
              className="w-[70px] h-[42 px] bg-blue-600 rounded-2xl items-center justify-center"
              onPress={() => {}}
            >
              <Text className="text-white font-semibold text-base">Rent</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[70px] h-[42px] bg-[#F7F5F5] rounded-2xl items-center justify-center"
              onPress={() => {}}
            >
              <Image
                source={require("@/assets/icons/360.png")}
                className="w-8 h-8"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 h-[56px]  bg-[#F7F5F5] rounded-2xl items-center justify-center"
              onPress={() => router.push("/screens/inspection-form")}
            >
              <Text className="text-blue-600 font-semibold text-base">
                Request Inspection
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between bg-[#F7F5F5] p-4 rounded-2xl shadow-sm mb-8 border border-gray-100">
            <View className="flex-row items-center">
              <Image
                source={require("@/assets/images/avatar.png")}
                resizeMode="contain"
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-6">
                <Text className="text-sm font-semibold text-black">
                  Jonathan
                </Text>
                <Text className="text-xs text-primary">Landlord</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="w-12 h-12 rounded-full items-center justify-center"
                onPress={() => {}}
              >
                <MessageIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Amenities Section */}
          <View className="mb-4">
            <Text className="text-[17px] font-semibold mb-4">Amenities</Text>
            <View className="space-y-4">
              {amenities.map((amenity) => {
                const IconComponent = amenity.Icon;
                return (
                  <View key={amenity.id} className="flex-row items-center">
                    <View className="w-8 h-8 mr-4 mb-2 items-center justify-center">
                      <IconComponent
                        width={24}
                        height={24}
                        fill="none"
                      />
                    </View>
                    <Text className="text-xs text-gray-700">
                      {amenity.count
                        ? `${amenity.count} ${amenity.name}`
                        : amenity.name}
                    </Text>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              className="mt-4  h-[51px] rounded-[40px] border border-gray-400 items-center justify-center"
              onPress={() => router.push("/screens/amenities")}

            >
              <Text className="text-xs text-gray-800">
                Show all 11 amenities
              </Text>
            </TouchableOpacity>
          </View>

          {/* Location & Facilities Section */}

          {/* Terms and Conditions Section */}
          <View>
            <Text className="text-base font-bold mb-4">
              Terms and Conditions
            </Text>
            <Text className="text-base mb-2">Rent and Payment Terms:</Text>
            <Text className="text-xs mb-1">
              <Text className="font-bold">Rent Amount:</Text> UGX 1,200,000 per
              month, payable on or before the 5th of each month.
            </Text>
            <Text className="text-xs mb-1">
              <Text className="font-bold">Late Payment Fee:</Text> UGX 50,000
              applies if payment is delayed beyond the due date.
            </Text>
            <Text className="text-xs mb-4">
              <Text className="font-bold">Payment Methods:</Text> Accepted via
              Mobile Money, Bank Transfer, or Cash.
            </Text>
            <TouchableOpacity
              className="border border-gray-400 justify-center items-center rounded-[40px] mt-3 px-4 h-[51px] flex-row items-center justify-between mb-4"
              onPress={() => {
                router.push("/screens/terms-conditions");
              }}
            >
              <Text className="text-xs text-center w-full text-gray-800">
                Show all terms & conditions
              </Text>
            </TouchableOpacity>
          </View>

          {/* Property Description Section */}
          <View className="mb-8">
            <Text className="text-base font-bold mb-3">
              Property Description
            </Text>
            <Text className="text-xs text-gray-600 mb-3">
              This spacious and modern 3-bedroom apartment offers luxurious
              living in one of Nairobi's most sought-after neighborhoods.
              Located in Westlands, it features an open-plan living room with
              large windows for natural light, a fully equipped kitchen, and
              en-suite master bedroom with a private balcony. Enjoy proximity to
              top schools, shopping malls, and restaurants, all within a few
              minutes' walk.
            </Text>
            <Text className="text-xs text-gray-600">
              Ideal for families or professionals looking for comfort and
              convenience.
            </Text>
          </View>
          <LocationFacilitiesSection />
          {/* Reviews Section */}
          <ReviewsSection reviews={reviews} />
        </View>
        <NearBy />
      </ScrollView>
    </View>
  );
}
