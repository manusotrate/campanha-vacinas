/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#3B82F6',
          'blue-dark': '#2563EB',
          green: '#10B981',
          'green-dark': '#059669',
          gray: '#F3F4F6',
          white: '#FFFFFF'
        }
      },
    },
  },
  plugins: [],
}
