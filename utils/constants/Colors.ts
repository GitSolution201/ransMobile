/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#0056D3',
    secondary: '#1ABC9C',
    placeholder: '#A5A5A5',
    textGray: '#737373',
    lightGray: '#F7F5F5',
    // Social Media Colors
    whatsapp: '#25D366',
    whatsappBg: '#E7F7EF',
    twitter: '#1DA1F2',
    twitterBg: '#EDF4FF',
    facebook: '#1877F2',
    facebookBg: '#F0EEFF',
    instagram: '#C837AB',
    instagramBg: '#FFEDED',
    // Error Screen Colors
    errorIconBg: '#FEF3F2',
    errorIconColor: '#DC2626',
    errorTitle: '#111827',
    errorMessage: '#6B7280',
    errorButton: '#2563EB',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    secondary: '#007AFF'
  },
};
