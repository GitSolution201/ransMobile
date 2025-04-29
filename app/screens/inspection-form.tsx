import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/utils/constants/Colors';
import { CustomInput } from '../components/CustomInput';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { Header } from '../components/Header';
import { RequestButton } from '../components/RequestButton';
import { Button } from '@/components/Button';

export default function InspectionForm() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [selectedAccess, setSelectedAccess] = useState<string>('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className={`flex-1 ${Platform.OS === 'android' ? 'pt-4' : ''}`}>
        <Header title="Inspection Form" />

        {/* Form Content */}
        <ScrollView 
          className="flex-1 px-4" 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Date Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Date of Request:</Text>
            <View className="w-4/5 mt-3">
              <CustomInput
                placeholder=""
                type="date"
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Inspection Date (Preferred):</Text>
            <View className="w-4/5 mt-3">
              <CustomInput 
                placeholder=""
                type="date"
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Inspection Time (Preferred):</Text>
            <View className="w-4/5 mt-3">
              <CustomInput 
                placeholder=""
                type="time"
              />
            </View>
          </View>

          {/* Tenant Information Section */}
          <View className="mt-8">
            <Text className="text-sm text-black font-semibold">Tenant/Requester Information:</Text>
            
            <View className="space-y-6">
              <View className="mt-3">
                <Text className="text-sm text-black font-semibold">Full Name:</Text>
                <View className="w-4/5 mt-3">
                  <CustomInput 
                    placeholder=""
                    type="text"
                  />
                </View>
              </View>

              <View className="mt-3">
                <Text className="text-sm text-black font-semibold">Phone Number:</Text>
                <View className="w-4/5 mt-3">
                  <CustomInput 
                    placeholder=""
                    type="tel"
                  />
                </View>
              </View>

              <View className="mt-3">
                <Text className="text-sm text-black font-semibold">Email Address:</Text>
                <View className="w-4/5 mt-3">
                  <CustomInput 
                    placeholder=""
                    type="email"
                  />
                </View>
              </View>

              <View className="mt-3">
                <Text className="text-sm text-black font-semibold">Current Address (if applicable):</Text>
                <View className="w-4/5 mt-3">
                  <CustomInput 
                    placeholder=""
                    type="text"
                    multiline={false}
                    numberOfLines={2}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Inspection Type Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Type of Inspection:</Text>
            
            <View className="space-y-6 mt-3 pl-4">
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
              <View className="flex-row justify-between mt-3">
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
              <View className="mt-3">
                <CustomCheckbox 
                  label="Other (Specify):"
                  checked={selectedType === 'other'}
                  onPress={() => setSelectedType('other')}
                />
                {selectedType === 'other' && (
                  <View className="w-4/5 mt-3 border border-[#A5A5A5] rounded-lg">
                    <CustomInput 
                      placeholder=""
                      type="text"
                      multiline={true}
                      numberOfLines={2}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Reason for Inspection Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Reason for Inspection:</Text>
            
            <View className="space-y-6 mt-3 pl-4">
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
              <View className="flex-row justify-between space-x-2 mt-3">
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
              <View className="mt-3">
                <CustomCheckbox 
                  label="Other (Specify):"
                  checked={selectedReason === 'other'}
                  onPress={() => setSelectedReason('other')}
                  fullWidth
                />
                {selectedReason === 'other' && (
                  <View className="w-4/5 mt-3 border border-[#A5A5A5] rounded-lg">
                    <CustomInput 
                      placeholder=""
                      type="text"
                      multiline={true}
                      numberOfLines={2}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Maintenance Issues Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Maintenance Issues (If Applicable):</Text>
            <Text className="text-sm text-gray-500 mt-2">Please list any known issues or areas of concern</Text>
            <View className="w-4/5 mt-3 border-[#A5A5A5] rounded-lg">
              <CustomInput 
                placeholder=""
                type="text"
                multiline={false}
                numberOfLines={1}
              />
            </View>
          </View>

          {/* Access to Property Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Access to Property</Text>
            
            <View className="space-y-6 mt-3 pl-4">
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
              <View className="mt-3">
                <CustomCheckbox 
                  label="Key/Access Location (if applicable):"
                  checked={selectedAccess === 'key'}
                  onPress={() => setSelectedAccess('key')}
                  fullWidth
                />
                {selectedAccess === 'key' && (
                  <View className="w-4/5 mt-3 border border-[#A5A5A5] rounded-lg">
                    <CustomInput 
                      placeholder=""
                      type="text"
                      multiline={true}
                      numberOfLines={2}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Additional Comments Section */}
          <View className="mt-6">
            <Text className="text-sm text-black font-semibold">Additional Comments or Requests</Text>
            <View className="w-4/5 mt-3 border-[#A5A5A5] rounded-lg">
              <CustomInput 
                placeholder=""
                type="text"
                multiline={false}
                numberOfLines={1}
              />
            </View>
          </View>

          {/* Submit Button */}
          <View className="mb-10">
          <Button 
            
            text="Request"
            variant="secondary"
            onPress={() => console.log('Form submitted')}
            disabled={false}
            className="mt-8"
          />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
} 