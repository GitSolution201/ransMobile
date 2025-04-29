/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        primary: '#0056D3',
        secondary: '#1ABC9C',
        text: '#11181C',
        tint: '#0a7ea4',
        icon: '#687076',
        placeholder: '#A5A5A5',
        border: '#A5A5A5'
      },
    },
  },
  plugins: [],
}

