module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font for body text
        heading: ['Poppins', 'sans-serif'], // Use Poppins for headings
        serif: ['Lora', 'serif'], // Optional serif for accents
      },
      colors: {
        nude: {
          100: '#f8e1d4', // Light Nude
          200: '#f1d0b3', // Soft Nude
          300: '#e5b18a', // Medium Nude
          400: '#d59f6f', // Warm Nude
          500: '#c88d53', // Rich Nude
          600: '#b27a3e', // Darker Nude
        },
        orange: {
          100: '#ffedda', // Light Orange
          200: '#ffdd9e', // Soft Orange
          300: '#ffbc66', // Medium Orange
          400: '#ff9e32', // Bright Orange
          500: '#ff7c1d', // Dark Orange
          600: '#e66b18', // Deeper Orange
        },
        purple: {
          100: '#E0D1FF', // Soft Lavender
          200: '#C2A4FF', // Light Lavender
          300: '#9E7BFF', // Pastel Purple
          400: '#7F53FF', // Lilac
          500: '#5F2CD7', // Deep Lavender
          600: '#4A1ABF', // Rich Purple
          700: '#3A1690', // Dark Purple
          800: '#2B0C5F', // Deep Purple
          900: '#1B0036', // Very Dark Purple
        }
      },
    },
  },
  plugins: [],
};
