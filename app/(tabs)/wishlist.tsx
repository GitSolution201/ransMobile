import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FilterIcon from '@/assets/icons/filter.svg';
import MessageIcon from '@/assets/icons/message.svg';
import LocationIcon from '@/assets/icons/location.svg'; 
import BedIcon from '@/assets/icons/bed.svg';
import BathIcon from '@/assets/icons/bath.svg';
import WifiIcon from '@/assets/icons/wifi.svg';
import SofaIcon from '@/assets/icons/sofa.svg';
import WashingMachineIcon from '@/assets/icons/washing-machine.svg';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MyWishlists from '../screens/MyWishlists';

const amenities = [
  { id: '1', name: 'Living Room', count: 1, Icon: SofaIcon },
  { id: '2', name: 'Bedrooms', count: 2, Icon: BedIcon },
  { id: '3', name: 'Bathroom', count: 1, Icon: BathIcon },
  { id: '4', name: 'Wifi', count: null, Icon: WifiIcon },
  { id: '5', name: 'Washing Machine', count: null, Icon: WashingMachineIcon },
];

export default function WishlistScreen() {
  return (
<MyWishlists/>
  );
} 