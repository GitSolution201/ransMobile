import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { CategoryList } from '../components/CategoryList';
import { NearBy } from '../components/SmallPropertyCard';
import { Header } from '../components/Header';
const FilteredProperty = ({propertyType, transactionType, priceRange, amenities, rooms}: {propertyType: string, transactionType: string, priceRange: number, amenities: string[], rooms: number}) => {
    const [selectedType, setSelectedType] = useState("1");
    return (
        <SafeAreaView>
    <Header title="Filtered Properties" />
          <Image
            source={require("../../assets/images/map.png")}
            className="w-[400px] h-[200px] rounded-2xl"
            resizeMode="cover"
          />
            <CategoryList onSelectCategory={(category) => setSelectedType(category.id)} selectedType={selectedType} />
            <NearBy noHeader={true} />
        </SafeAreaView>
    )
}
export default FilteredProperty