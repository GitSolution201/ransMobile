import { View, TextInput, Pressable } from 'react-native';
import { router } from 'expo-router';
import SearchIcon from '@/assets/icons/search.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
}

export const SearchBar = ({ placeholder = "Search for properties, agents, or services...", onSearch }: SearchBarProps) => {
  return (
    <View className="px-4 mt-2 ">
      <View 
        className="flex-row items-center bg-white rounded-[32px] shadow-lg h-[55px]"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        {/* Search Input Section */}
        <View className="flex-row items-center flex-1 px-4 py-3">
          <SearchIcon width={18} height={18} className="text-gray-400" />
          <TextInput
            placeholder={placeholder}
            className="flex-1 ml-2 text-sm"
            placeholderTextColor="#737373"
            onChangeText={onSearch}
          />
        </View>

        {/* Vertical Divider */}
        <View className="w-[2px] h-8 bg-[#737373]" />
        
        {/* Filter Button */}
        <Pressable
          onPress={() => {
            router.push('/screens/FilterScreen')
          }}
          className="px-5 py-3"
        >
          <FilterIcon width={16} height={13} className="text-gray-400" />
        </Pressable>
      </View>
    </View>
  );
}; 