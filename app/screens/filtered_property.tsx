import React, { useState } from 'react';
import { Image, Platform, SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native';
import { CategoryList } from '../components/CategoryList';
import { NearBy } from '../components/SmallPropertyCard';
import { Header } from '../components/Header';
const FilteredProperty = ({propertyType, transactionType, priceRange, amenities, rooms}: {propertyType: string, transactionType: string, priceRange: number, amenities: string[], rooms: number}) => {
    const [selectedType, setSelectedType] = useState("1");
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="flex-1 mt-2 bg-white">
    <Header title="Filtered Properties" />
          <Image
            source={require("../../assets/images/map.png")}
            className="w-[400px] h-[200px] rounded-2xl"
            resizeMode="cover"
          />
          <ScrollView>
            <CategoryList onSelectCategory={(category) => setSelectedType(category.id)} selectedType={selectedType} />
            <NearBy noHeader={true} />
          </ScrollView>
        </SafeAreaView>
    )
}
export default FilteredProperty