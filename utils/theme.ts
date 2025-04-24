type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type ColorPalette = {
  [key in ColorShade]: string;
};

type ColorTheme = {
  primary: ColorPalette;
  secondary: ColorPalette;
};

// Theme colors
export const colors: ColorTheme = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
};

// Helper function to get a color from the theme
export const getColor = (colorName: keyof ColorTheme, shade: ColorShade = 500): string => {
  return colors[colorName][shade];
};

// Common color usage
export const theme = {
  primary: colors.primary[500],
  primaryLight: colors.primary[300],
  primaryDark: colors.primary[700],
  secondary: colors.secondary[500],
  secondaryLight: colors.secondary[300],
  secondaryDark: colors.secondary[700],
}; 