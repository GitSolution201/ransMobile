import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '@/utils/constants/Colors';
import { CustomInput } from '../components/CustomInput';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { Header } from '../components/Header';
import { RequestButton } from '../components/RequestButton';

export default function InspectionForm() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [selectedAccess, setSelectedAccess] = useState<string>('');

  return (
    <View className="flex-1 bg-white">
      <Header title="Inspection Form" />

      {/* Form Content */}
      <ScrollView className="flex-1 px-4">
        {/* Date Section */}
        <View className="mb-4">
          <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Date of Request:</Text>
          <CustomInput
            placeholder=""
            type="date"
          />
        </View>

        <View className="mb-4">
          <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Inspection Date (Preferred):</Text>
          <CustomInput 
            placeholder=""
            type="date"
          />
        </View>

        <View className="mb-4">
          <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Inspection Time (Preferred):</Text>
          <CustomInput 
            placeholder=""
            type="time"
          />
        </View>

        {/* Tenant Information Section */}
        <View className="mb-4">
          <Text className="text-md font-bold mb-3">Tenant/Requester Information:</Text>
          
          <View className="space-y-3">
            <View>
              <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Full Name:</Text>
              <CustomInput 
                placeholder=""
                type="text"
              />
            </View>

            <View>
              <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Phone Number:</Text>
              <CustomInput 
                placeholder=""
                type="tel"
              />
            </View>

            <View>
              <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Email Address:</Text>
              <CustomInput 
                placeholder=""
                type="email"
              />
            </View>

            <View>
              <Text style={{ color: Colors.light.textGray }} className="text-sm font-medium mb-2">Current Address (if applicable):</Text>
              <CustomInput 
                placeholder=""
                type="text"
                multiline={false}
                numberOfLines={2}
              />
            </View>
          </View>
        </View>

        {/* Inspection Type Section */}
        <View className="mb-4">
          <Text className="text-md font-bold mb-3">Type of Inspection:</Text>
          
          <View className="space-y-3">
            {/* First Row */}
            <View className="flex-row justify-between">
              <CustomCheckbox 
                label="Pre-Move-In"
                checked={selectedType === 'pre-move-in'}
                onPress={() => setSelectedType('pre-move-in')}
              />
              <CustomCheckbox 
                label="Routine"
                checked={selectedType === 'routine'}
                onPress={() => setSelectedType('routine')}
              />
            </View>

            {/* Second Row */}
            <View className="flex-row justify-between">
              <CustomCheckbox 
                label="Maintenance"
                checked={selectedType === 'maintenance'}
                onPress={() => setSelectedType('maintenance')}
              />
              <CustomCheckbox 
                label="Move-Out"
                checked={selectedType === 'move-out'}
                onPress={() => setSelectedType('move-out')}
              />
            </View>

            {/* Other Option */}
            <View>
              <CustomCheckbox 
                label="Other (Specify):"
                checked={selectedType === 'other'}
                onPress={() => setSelectedType('other')}
              />
              {selectedType === 'other' && (
                <CustomInput 
                  placeholder=""
                  type="text"
                  multiline={true}
                  numberOfLines={2}
                  className="mt-2"
                />
              )}
            </View>
          </View>
        </View>

        {/* Reason for Inspection Section */}
        <View className="mb-4 mt-6">
          <Text className="text-md font-bold mb-3">Reason for Inspection:</Text>
          
          <View className="space-y-3">
            {/* First Row */}
            <View className="flex-row justify-between space-x-2">
              <CustomCheckbox 
                label="General Condition Check"
                checked={selectedReason === 'general'}
                onPress={() => setSelectedReason('general')}
              />
              <CustomCheckbox 
                label="Reported Maintenance Issue"
                checked={selectedReason === 'maintenance'}
                onPress={() => setSelectedReason('maintenance')}
              />
            </View>

            {/* Second Row */}
            <View className="flex-row justify-between space-x-2">
              <CustomCheckbox 
                label="Damage Assessment"
                checked={selectedReason === 'damage'}
                onPress={() => setSelectedReason('damage')}
              />
              <CustomCheckbox 
                label="Lease Agreement Requirement"
                checked={selectedReason === 'lease'}
                onPress={() => setSelectedReason('lease')}
              />
            </View>

            {/* Other Option */}
            <View>
              <CustomCheckbox 
                label="Other (Specify):"
                checked={selectedReason === 'other'}
                onPress={() => setSelectedReason('other')}
                fullWidth
              />
              {selectedReason === 'other' && (
                <CustomInput 
                  placeholder=""
                  type="text"
                  multiline={true}
                  numberOfLines={2}
                  className="mt-2"
                />
              )}
            </View>
          </View>
        </View>

        {/* Maintenance Issues Section */}
        <View className="mb-4 mt-6">
          <Text className="text-md font-bold mb-3">Maintenance Issues (If Applicable):</Text>
          <Text style={{ color: Colors.light.textGray }} className="text-sm mb-2">Please list any known issues or areas of concern</Text>
          <CustomInput 
            placeholder=""
            type="text"
            multiline={false}
            numberOfLines={1}
          />
        </View>

        {/* Access to Property Section */}
        <View className="mb-4 mt-6">
          <Text className="text-md font-bold mb-3">Access to Property</Text>
          
          <View className="space-y-3">
            {/* First Row */}
            <View className="flex-row justify-between space-x-2">
              <CustomCheckbox 
                label="I will be present during the inspection."
                checked={selectedAccess === 'present'}
                onPress={() => setSelectedAccess('present')}
              />
              <CustomCheckbox 
                label="The landlord/agent has permission to enter without me."
                checked={selectedAccess === 'permission'}
                onPress={() => setSelectedAccess('permission')}
              />
            </View>

            {/* Key Access Row */}
            <View>
              <CustomCheckbox 
                label="Key/Access Location (if applicable):"
                checked={selectedAccess === 'key'}
                onPress={() => setSelectedAccess('key')}
                fullWidth
              />
              {selectedAccess === 'key' && (
                <CustomInput 
                  placeholder=""
                  type="text"
                  multiline={true}
                  numberOfLines={2}
                  className="mt-2"
                />
              )}
            </View>
          </View>
        </View>

        {/* Additional Comments Section */}
        <View className="mb-4">
          <Text className="text-md font-bold mb-3">Additional Comments or Requests</Text>
          <CustomInput 
            placeholder=""
            type="text"
            multiline={false}
            numberOfLines={1}
          />
        </View>

        {/* Submit Button */}
        <RequestButton 
          title="Request"
          onPress={() => console.log('Form submitted')}
        />
      </ScrollView>
    </View>
  );
} 