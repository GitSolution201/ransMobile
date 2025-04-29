import { Ionicons } from "@expo/vector-icons";

export const amenitiesIcons: { [key: string]: any } = {
  'living-room': require('@/assets/icons/living.png'),
  'bedrooms': require('@/assets/icons/bedroom.png'),
  'bathroom': require('@/assets/icons/bathroom.png'),
  'washing-machine': require('@/assets/icons/washingmachine.png'),
  'parking': require('@/assets/icons/parking.png'),
   'cctv': require('@/assets/icons/cctv.png'),
  'fire-extinguisher': require('@/assets/icons/fire.png'),
  'security-dog': require('@/assets/icons/dog.png'),
  'security-guard': require('@/assets/icons/guard.png'),
  'wifi': require('@/assets/icons/wifi.svg'),
  'office': require('@/assets/icons/other.png'),
  'kitchen': require('@/assets/icons/other.png'),
};

export const legalSettings = [
    {
      id: '1',
      icon: 'document-text-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Terms of service',
    },
    {
      id: '2',
      icon: 'shield-checkmark-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Privacy Policy',
    },
    {
      id: '3',
      icon: 'code-slash-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Open source licences',
    },
  ];
  export const settingsData = [
    {
      id: '1',
      icon: 'person-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Personal Information',
    },
    {
      id: '2',
      icon: 'shield-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Login & Security',
    },
    {
      id: '3',
      icon: 'card-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Payment Methods & Pay outs',
    },
    {
      id: '4',
      icon: 'language-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Translations',
    },
    {
      id: '5',
      icon: 'notifications-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Notifications',
    },
  ];
  
  // Privacy Settings Data
 export const privacySettings = [
    {
      id: '2',
      icon: 'person-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Login Activity',
    },
    {
      id: '3',
      icon: 'share-social-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Data Sharing Preferences',
    },
    {
      id: '4',
      icon: 'lock-closed-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Permissions',
    },
  ];
  
  export const supportSettings = [
    {
      id: '1',
      icon: 'paper-plane-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Contact us',
    },
    {
      id: '2',
      icon: 'headset-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Contact Support',
    },
    {
      id: '3',
      icon: 'help-circle-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Help Center',
    },
    {
      id: '4',
      icon: 'create-outline' as keyof typeof Ionicons.glyphMap,
      title: 'Submit Feedback',
    },
  ];
export  const contactOptions = [
    {
      id: 'whatsapp',
      icon: require('@/assets/icons/whatsapp.png'),
      title: 'WhatsApp',
      subtitle: '24/7, Fastest support',
      bgColor: 'bg-[#E7F7EF]'
    },
    {
      id: 'twitter',
      icon: require('@/assets/icons/twitter.png'),
      title: 'Twitter',
      subtitle: '24/7, Write to Us',
      bgColor: 'bg-[#EDF4FF]'
    },
    {
      id: 'facebook',
      icon: require('@/assets/icons/facebook.png'),
      title: 'Facebook',
      subtitle: 'Contact Support',
      bgColor: 'bg-[#F0EEFF]'
    },
    {
      id: 'instagram',
      icon: require('@/assets/icons/instagram.png'),
      title: 'Instagram',
      subtitle: 'Reach out to our Instagram',
      bgColor: 'bg-[#FFEDED]'
    },
    {
      id: 'email',
      icon: require('@/assets/icons/email.png'),
      title: 'Email',
      subtitle: 'Write to Us',
      bgColor: 'bg-gray-100'
    },
    {
      id: 'call',
      icon: require('@/assets/icons/phone.png'),
      title: 'Call',
      subtitle: 'Speak to our agent',
      bgColor: 'bg-gray-100'
    }
  ];

export const termsAndConditionsData = [
  {
    title: "Rent and Payment Terms",
    data: [
      'Rent Amount: UGX 1,200,000 per month, payable on or before the 5th of each month.',
      'Late Payment Fee: UGX 50,000 applies if payment is delayed beyond the due date.',
      'Payment Methods: Accepted via Mobile Money, Bank Transfer, or Cash.',
    ]
  },
  {
    title: "Security Deposit",
    data: [
      "A refundable security deposit equivalent to one month's rent is required before move-in.",
      'The deposit will be returned upon satisfactory inspection of the property at the end of the lease.',
    ]
  },
  {
    title: "Lease Agreement",
    data: [
      'Minimum Lease Term: 6 months.',
      "Early Termination: Tenants must provide 30 days' written notice.",
      'Subletting: Subletting the property is strictly prohibited without prior written consent.',
    ]
  },
  {
    title: "Maintenance and Repairs",
    data: [
      'Tenants are responsible for routine maintenance, such as replacing light bulbs and cleaning.',
      "The landlord will handle major repairs unless damage is caused by the tenant's negligence.",
      'Maintenance Requests: Report issues via phone or email immediately.',
    ]
  },
  {
    title: "Property Use",
    data: [
      'The property is strictly for residential purposes.',
      'Noise Levels: Tenants must respect quiet hours between 10 PM and 6 AM.',
      'Pets: [Indicate policy—e.g., "No pets allowed" or "Small pets allowed with prior approval"].',
    ]
  },
  {
    title: "Visitor Policy",
    data: [
      'Visitors are allowed but must not stay for more than 7 consecutive days without informing the landlord.',
      'Tenants are responsible for the behavior of their guests.',
    ]
  },
  {
    title: "Alterations",
    data: [
      'Tenants may not make structural or cosmetic changes to the property (e.g., painting, drilling) without the landlord\'s permission.',
    ]
  },
  {
    title: "Termination and Move-Out",
    data: [
      'Tenants must ensure the property is clean and undamaged at move-out.',
      'Any damage beyond normal wear and tear will be deducted from the security deposit.',
    ]
  }
];

export const amenitiesData = [
  {
    title: "Amenities",
    data: [
      { id: '1', icon: 'living-room', label: '1 Living Room' },
      { id: '2', icon: 'bedrooms', label: '2 Bedrooms' },
      { id: '3', icon: 'bathroom', label: '1 Bathroom' },
      { id: '4', icon: 'washing-machine', label: 'Washing Machine' },
      { id: '5', icon: 'parking', label: 'Parking' },
    ]
  },
  {
    title: "Home Safety",
    data: [
      { id: '1', icon: 'cctv', label: 'Cctv' },
      { id: '2', icon: 'fire-extinguisher', label: 'Fire extinguisher' },
      { id: '3', icon: 'security-dog', label: 'Security Dog' },
      { id: '4', icon: 'security-guard', label: 'Security Guard' },
    ]
  },
  {
    title: "Internet & Office",
    data: [
      { id: '2', icon: 'office', label: 'Office Space' },
    ]
  },
  {
    title: "Kitchen & Dining",
    data: [
      { id: '1', icon: 'kitchen', label: 'Kitchen' },
    ]
  },
  {
    title: "Others",
    data: [
      { id: '2', icon: 'fire-extinguisher', label: 'Fire extinguisher' },
      { id: '3', icon: 'security-dog', label: 'Security Dog' },
    ]
  }
];

export const notifications = [
  {
    id: 1,
    type: 'payment',
    user: {
      name: 'Kasumali Victor',
      avatar: require('@/assets/images/user1.png'),
    },
    message: 'is paying $600 Rent for Busabala Apartment',
    time: '10:21',
    actions: ['Accept', 'Decline'],
  },
  {
    id: 2,
    type: 'review',
    user: {
      name: 'Nuwampa Priscilla',
      avatar: require('@/assets/images/user2.png'),
    },
    message: 'reviewed on Busabala Apartment',
    time: '10:21',
    review: 'For the time i was a tenant on Busabala Apartment. it has been....',
    actions: ['Accept', 'Decline'],
  },
  {
    id: 3,
    type: 'feature',
    icon: require('@/assets/icons/mail-feature.png'),
    title: 'New Feature Update',
    message: "We're pleased to introduce the latest enhancements in our templating experience.",
    time: '10:21',
    actions: ['Try It Now'],
  },
  {
    id: 4,
    type: 'feature',
    icon: require('@/assets/icons/mail-feature.png'),
    title: 'New Feature Update',
    message: "We're pleased to introduce the latest enhancements in our templating experience.",
    time: '10:21',
    actions: ['Try It Now'],
  },
];

export const messages = [
  {
    id: '1',
    name: 'Nambi Sarah',
    message: "Hi, I'm very interested in the 3-bedroom.....",
    time: '10:21',
    avatar: require('@/assets/images/user1.png'),
    unread: true,
  },
  {
    id: '2',
    name: 'Naalya Apartments Group',
    message: "Hi, I'm very interested in the 3-bedroom.....",
    time: '10:21',
    isGroup: true,
    unread: true,
  },
  {
    id: '3',
    name: 'Kasumaali Victor',
    message: "Hi, I'm very interested in the 3-bedroom.....",
    time: '10:21',
    avatar: require('@/assets/images/user2.png'),
    unread: false,
    isArchived: true,
  },
];