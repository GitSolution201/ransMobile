/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056D3',    // From Colors.ts light.primary
        secondary: '#1ABC9C',  // From Colors.ts light.secondary
        text: '#11181C',       // From Colors.ts light.text
        background: '#fff',    // From Colors.ts light.background
        tint: '#0a7ea4',       // From Colors.ts tintColorLight
        icon: '#687076',       // From Colors.ts light.icon
        placeholder: '#A5A5A5', // From Colors.ts light.placeholder
        border: '#A5A5A5'
      },
    },
  },
  plugins: [],
}

